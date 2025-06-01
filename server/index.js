const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

// Allowed origins including IP addresses
const allowedOrigins = [
  "http://localhost:5173",
  "https://firebrick-turtle-743776.hostingersite.com",
  "http://100.20.92.101",
  "http://44.225.181.72",
  "http://44.227.217.144",
];

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// IP whitelist middleware
const whitelistedIPs = ["100.20.92.101", "44.225.181.72", "44.227.217.144"];

app.use((req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  if (whitelistedIPs.includes(clientIP)) {
    next();
  } else {
    console.log("Blocked request from IP:", clientIP);
    res.status(403).send("Access denied");
  }
});

// Basic health check endpoint
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Store active chats and their messages
const activeChats = new Map();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_chat", ({ chatCode, isHost }) => {
    // Join the socket to the chat room
    socket.join(chatCode);

    // Initialize chat if it doesn't exist
    if (!activeChats.has(chatCode)) {
      activeChats.set(chatCode, {
        messages: [],
        participants: [],
      });
    }

    // Add participant
    const chat = activeChats.get(chatCode);
    const participant = {
      id: socket.id,
      name: isHost ? "Host" : "Guest",
      avatar: isHost ? "👑" : "👤",
    };

    chat.participants.push(participant);

    // Send existing messages to the new participant
    socket.emit("load_messages", chat.messages);

    // Notify all participants about the update
    io.to(chatCode).emit("participants_update", chat.participants);
  });

  socket.on("send_message", ({ chatCode, message }) => {
    const chat = activeChats.get(chatCode);
    if (chat) {
      chat.messages.push(message);
      io.to(chatCode).emit("receive_message", message);
    }
  });

  socket.on("typing", ({ chatCode, userId, isTyping }) => {
    socket.to(chatCode).emit("typing", { userId, isTyping });
  });

  socket.on("leave_chat", ({ chatCode }) => {
    const chat = activeChats.get(chatCode);
    if (chat) {
      // Remove participant
      chat.participants = chat.participants.filter((p) => p.id !== socket.id);

      // If no participants left, remove the chat
      if (chat.participants.length === 0) {
        activeChats.delete(chatCode);
      } else {
        // Notify remaining participants
        io.to(chatCode).emit("participants_update", chat.participants);
      }
    }
    socket.leave(chatCode);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
