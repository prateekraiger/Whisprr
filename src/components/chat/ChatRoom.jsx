import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaCrown } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SERVER_URL = "https://whisprr-bcna.onrender.com";

const ChatRoom = () => {
  const { chatCode } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [participants, setParticipants] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState({});
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io(SERVER_URL, {
      withCredentials: true,
      forceNew: true,
      path: "/socket.io",
      transports: ["websocket", "polling"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    // Connection event handlers
    socketRef.current.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
      setError(null);
    });

    socketRef.current.on("connect_error", (err) => {
      console.error("Connection error:", err);
      setError("Failed to connect to server. Please try again later.");
      setIsConnected(false);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });

    // Join chat room
    socketRef.current.emit("join_chat", {
      chatCode,
      isHost: user?.isHost || false,
    });

    // Message handlers
    socketRef.current.on("load_messages", (loadedMessages) => {
      setMessages(loadedMessages);
    });

    socketRef.current.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socketRef.current.on("participants_update", (updatedParticipants) => {
      setParticipants(updatedParticipants);
    });

    socketRef.current.on("typing", ({ userId, isTyping }) => {
      setTypingUsers((prev) => ({
        ...prev,
        [userId]: isTyping,
      }));
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.emit("leave_chat", { chatCode });
        socketRef.current.disconnect();
      }
    };
  }, [chatCode, user]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && isConnected) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: "You",
        timestamp: new Date().toLocaleTimeString(),
      };

      // Send message to server
      socketRef.current.emit("send_message", { chatCode, message });
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-[#21252B] border-b border-[#3E4451]">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
            <span className="text-xl">💬</span>
          </div>
          <div>
            <h2 className="text-white font-semibold">
              {user?.isHost ? "Hosting Chat" : "Joined Chat"}
            </h2>
            <p className="text-[#ABB2BF] text-sm">Code: {chatCode}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <Button
            variant="ghost"
            className="text-[#ABB2BF] hover:text-white hover:bg-[#2C313A]"
            onClick={() => navigate("/")}
          >
            Leave Chat
          </Button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500">
          {error}
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#282C34]">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#ABB2BF] mb-2">No messages yet</p>
              <p className="text-[#ABB2BF]/70 text-sm">
                Start the conversation by sending a message
              </p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-2xl p-3 ${
                  message.sender === "You"
                    ? "bg-[#61AFEF] text-white rounded-tr-none"
                    : "bg-[#2C313A] text-[#ABB2BF] rounded-tl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "You"
                      ? "text-white/70"
                      : "text-[#ABB2BF]/70"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-[#21252B] border-t border-[#3E4451]">
        <form onSubmit={sendMessage} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-[#282C34] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 rounded-full"
            disabled={!isConnected}
          />
          <Button
            type="submit"
            className="bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white rounded-full px-6"
            disabled={!isConnected}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
