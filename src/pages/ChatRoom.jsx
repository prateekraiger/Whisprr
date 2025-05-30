import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useChat } from "../context/ChatContext";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  const {
    joinRoom,
    leaveRoom,
    sendMessage,
    getRoomMessages,
    getRoomParticipants,
  } = useChat();

  const messages = getRoomMessages(roomId);
  const participants = getRoomParticipants(roomId);

  useEffect(() => {
    joinRoom(roomId);
    return () => leaveRoom(roomId);
  }, [roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    sendMessage(roomId, message.trim());
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-dark-100 flex flex-col">
      {/* Header */}
      <div className="bg-dark-200 p-4 border-b border-dark-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Room: {roomId}</h1>
            <p className="text-gray-400 text-sm">
              {participants.length} participant
              {participants.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-secondary"
          >
            Leave Room
          </button>
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
                  msg.userId === user?.id ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[70%] ${
                    msg.userId === user?.id
                      ? "bg-primary-600 ml-auto"
                      : "bg-dark-200"
                  }`}
                >
                  <p className="text-sm text-gray-300 mb-1">{msg.userName}</p>
                  <p className="text-gray-100">{msg.content}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Participants Sidebar */}
        <div className="w-64 bg-dark-200 p-4 border-l border-dark-300">
          <div className="flex items-center gap-2 mb-4">
            <UserGroupIcon className="w-5 h-5" />
            <h2 className="font-semibold">Participants</h2>
          </div>
          <div className="space-y-2">
            {participants.map((participant) => (
              <div
                key={participant.userId}
                className="flex items-center gap-2 p-2 rounded-lg bg-dark-300"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm">{participant.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-dark-200 p-4 border-t border-dark-300">
        <form
          onSubmit={handleSendMessage}
          className="max-w-6xl mx-auto flex gap-4"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="input flex-1"
          />
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-2"
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
