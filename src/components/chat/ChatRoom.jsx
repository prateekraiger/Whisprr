import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { io } from "socket.io-client";

// Create socket connection using environment variable
const createSocket = () => {
  const serverUrl = "https://whisprr-bcna.onrender.com";
  console.log("Connecting to server:", serverUrl);

  return io(serverUrl, {
    transports: ["websocket", "polling"],
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    path: "/socket.io",
    withCredentials: true,
    forceNew: true,
    autoConnect: true,
    timeout: 10000,
    extraHeaders: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const socket = createSocket();

export default function ChatRoom({ chatCode, isHost, onLeave }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Handle connection status
    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
      setError(null);
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
      setError("Failed to connect to server. Please try again later.");
      setIsConnected(false);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });

    // Join the chat room when component mounts
    if (isConnected) {
      socket.emit("join_chat", { chatCode, isHost });
    }

    // Listen for incoming messages
    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Load existing messages
    socket.on("load_messages", (existingMessages) => {
      setMessages(existingMessages);
    });

    // Cleanup on unmount
    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
      socket.off("receive_message");
      socket.off("load_messages");
      socket.disconnect();
    };
  }, [chatCode, isHost, isConnected]);

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
      socket.emit("send_message", { chatCode, message });
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
              {isHost ? "Hosting Chat" : "Joined Chat"}
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
            onClick={onLeave}
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
}
