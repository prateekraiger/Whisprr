import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useUserProfile } from "../context/UserContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperAirplaneIcon,
  UserGroupIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { profile } = useUserProfile();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Join the chat room
    socket.emit("join_chat", { chatCode: roomId, isHost: true });

    // Listen for messages
    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listen for existing messages
    socket.on("load_messages", (existingMessages) => {
      setMessages(existingMessages);
    });

    // Listen for participant updates
    socket.on("participants_update", (updatedParticipants) => {
      setParticipants(updatedParticipants);
    });

    return () => {
      socket.off("receive_message");
      socket.off("load_messages");
      socket.off("participants_update");
      socket.emit("leave_chat", { chatCode: roomId });
    };
  }, [roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    const newMessage = {
      id: Date.now(),
      text: message.trim(),
      sender: profile.displayName,
      avatar: profile.avatar,
      timestamp: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", { chatCode: roomId, message: newMessage });
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#282C34] flex flex-col">
      {/* Header */}
      <div className="bg-[#21252B] p-4 border-b border-[#3E4451]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 rounded-lg hover:bg-[#2C313A] text-[#ABB2BF] hover:text-white"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-white">
                Room: {roomId}
              </h1>
              <p className="text-[#ABB2BF] text-sm">
                {participants.length} participant
                {participants.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex">
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-4 ${
                  msg.sender === profile.displayName
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <div className="flex items-end gap-2 max-w-[70%] mx-auto">
                  {msg.sender !== profile.displayName && (
                    <div className="w-8 h-8 rounded-full bg-[#61AFEF]/20 flex items-center justify-center text-lg">
                      {msg.avatar}
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      msg.sender === profile.displayName
                        ? "bg-[#61AFEF] text-white rounded-tr-none"
                        : "bg-[#2C313A] text-[#ABB2BF] rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm mb-1">{msg.sender}</p>
                    <p>{msg.text}</p>
                    <span className="text-xs opacity-70">{msg.timestamp}</span>
                  </div>
                  {msg.sender === profile.displayName && (
                    <div className="w-8 h-8 rounded-full bg-[#61AFEF]/20 flex items-center justify-center text-lg">
                      {msg.avatar}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Participants Sidebar */}
        <div className="w-64 bg-[#21252B] p-4 border-l border-[#3E4451]">
          <div className="flex items-center gap-2 mb-4">
            <UserGroupIcon className="w-5 h-5 text-[#ABB2BF]" />
            <h2 className="font-semibold text-white">Participants</h2>
          </div>
          <div className="space-y-2">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center gap-2 p-2 rounded-lg bg-[#2C313A]"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#ABB2BF]">
                  {participant.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-[#21252B] p-4 border-t border-[#3E4451]">
        <form
          onSubmit={handleSendMessage}
          className="max-w-6xl mx-auto flex gap-4"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg bg-[#282C34] border border-[#3E4451] text-white placeholder-[#ABB2BF]/50 focus:outline-none focus:ring-2 focus:ring-[#61AFEF]/20"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white flex items-center gap-2"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
