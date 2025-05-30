import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Store active chat rooms and their participants
const chatRooms = new Map();
const participants = new Map();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Join a chat room
  socket.on("join_chat", ({ chatCode, isHost }) => {
    socket.join(chatCode);

    // Initialize chat room if it doesn't exist
    if (!chatRooms.has(chatCode)) {
      chatRooms.set(chatCode, []);
      participants.set(chatCode, new Set());
    }

    // Add participant
    const participantId = socket.id;
    participants.get(chatCode).add(participantId);

    // Send existing messages to the new user
    socket.emit("load_messages", chatRooms.get(chatCode));

    // Broadcast updated participants list
    const participantList = Array.from(participants.get(chatCode)).map(id => ({
      id,
      name: id === socket.id ? "You" : "Anonymous"
    }));
    io.to(chatCode).emit("participants_update", participantList);
  });

  // Handle new messages
  socket.on("send_message", ({ chatCode, message }) => {
    const messages = chatRooms.get(chatCode) || [];
    messages.push(message);
    chatRooms.set(chatCode, messages);
    io.to(chatCode).emit("receive_message", message);
  });

  // Handle leaving chat
  socket.on("leave_chat", ({ chatCode }) => {
    socket.leave(chatCode);
    if (participants.has(chatCode)) {
      participants.get(chatCode).delete(socket.id);

      // If no participants left, clean up the room
      if (participants.get(chatCode).size === 0) {
        chatRooms.delete(chatCode);
        participants.delete(chatCode);
      } else {
        // Broadcast updated participants list
        const participantList = Array.from(participants.get(chatCode)).map(id => ({
          id,
          name: id === socket.id ? "You" : "Anonymous"
        }));
        io.to(chatCode).emit("participants_update", participantList);
      }
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    // Clean up any rooms the user was in
    for (const [chatCode, roomParticipants] of participants.entries()) {
      if (roomParticipants.has(socket.id)) {
        roomParticipants.delete(socket.id);
        if (roomParticipants.size === 0) {
          chatRooms.delete(chatCode);
          participants.delete(chatCode);
        } else {
          const participantList = Array.from(roomParticipants).map(id => ({
            id,
            name: id === socket.id ? "You" : "Anonymous"
          }));
          io.to(chatCode).emit("participants_update", participantList);
        }
      }
    }
  });
});

// Function to find an available port
const findAvailablePort = async (startPort) => {
  const net = await import('net');

  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
      }
    });

    server.listen(startPort, () => {
      server.close(() => {
        resolve(startPort);
      });
    });
  });
};

// Start server with dynamic port
const startServer = async () => {
  try {
    const port = await findAvailablePort(3001);
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`Update your client socket connection to use port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
