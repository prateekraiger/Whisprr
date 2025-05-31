const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Set proper MIME types
app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    res.type("application/javascript");
  }
  next();
});

// Serve static files
app.use(
  express.static(path.join(__dirname, "../dist"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

// Handle SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
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
