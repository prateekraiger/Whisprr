import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useUserProfile } from "../context/UserContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperAirplaneIcon,
  UserGroupIcon,
  ArrowLeftIcon,
  FaceSmileIcon as EmojiHappyIcon,
  PaperClipIcon,
  EllipsisHorizontalIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { io } from "socket.io-client";
import MessageBox from "../components/ui/message-box";

const socket = io("http://localhost:3001", {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  timeout: 10000,
});

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { profile } = useUserProfile();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showParticipants, setShowParticipants] = useState(true);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(null);

  useEffect(() => {
    socket.emit("join_chat", {
      chatCode: roomId,
      isHost: true,
      user: {
        id: user?.id,
        name: profile.displayName,
        avatar: user?.imageUrl,
      },
    });

    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on("load_messages", (existingMessages) => {
      setMessages(existingMessages);
    });

    socket.on("participants_update", (updatedParticipants) => {
      setParticipants(updatedParticipants);
    });

    socket.on("typing", ({ userId, isTyping }) => {
      if (userId !== user?.id) {
        setIsTyping(isTyping);
      }
    });

    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
      setConnectionError(null);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
      setConnectionError(
        "Failed to connect to chat server. Please try again later."
      );
      setIsConnected(false);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });

    return () => {
      socket.off("receive_message");
      socket.off("load_messages");
      socket.off("participants_update");
      socket.off("typing");
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
      socket.emit("leave_chat", { chatCode: roomId });
    };
  }, [roomId, user?.id, profile.displayName, user?.imageUrl]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    const newMessage = {
      id: Date.now(),
      text: message.trim(),
      sender: profile.displayName,
      avatar: user.imageUrl,
      timestamp: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", { chatCode: roomId, message: newMessage });
    setMessage("");
    setIsTyping(false);
    socket.emit("typing", {
      chatCode: roomId,
      userId: user.id,
      isTyping: false,
    });
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    if (!isTyping) {
      setIsTyping(true);
      socket.emit("typing", {
        chatCode: roomId,
        userId: user?.id,
        isTyping: true,
      });
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      socket.emit("typing", {
        chatCode: roomId,
        userId: user?.id,
        isTyping: false,
      });
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-[#1E1E1E]">
      {/* Connection Status */}
      {connectionError && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 text-center">
          {connectionError}
        </div>
      )}

      {/* Header */}
      <div className="flex-none bg-[#21252B]/80 backdrop-blur-sm p-4 border-b border-[#3E4451] shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 rounded-lg hover:bg-[#2C313A] text-[#ABB2BF] hover:text-white transition-all duration-200 active:scale-95"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Room: {roomId}
              </h1>
              <div className="flex items-center gap-2 text-[#ABB2BF] text-sm mt-1">
                <UserGroupIcon className="w-4 h-4" />
                <span>
                  {participants.length} participant
                  {participants.length !== 1 ? "s" : ""} online
                </span>
                <span className="mx-2">•</span>
                <div className="flex items-center gap-1 text-[#61AFEF]">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>End-to-End Encrypted</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowParticipants(!showParticipants)}
            className="p-2 rounded-lg hover:bg-[#2C313A] text-[#ABB2BF] hover:text-white transition-all duration-200 active:scale-95"
          >
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col sm:flex-row min-h-0 bg-[#1E1E1E]">
        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto custom-scrollbar bg-[#1E1E1E]"
        >
          <div className="max-w-5xl mx-auto p-4 bg-[#1E1E1E]">
            <div className="w-full h-[calc(100vh-12rem)] rounded-xl bg-[#21252B]/80 backdrop-blur-sm border border-[#3E4451] p-6 shadow-lg flex flex-col">
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#21252B]/80">
                <div className="flex flex-col gap-4">
                  <AnimatePresence>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${
                          msg.sender === profile.displayName
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[70%]">
                          {msg.sender !== profile.displayName && (
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={msg.avatar}
                                alt={msg.sender}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="w-full sm:w-[300px] rounded-xl bg-gradient-to-br from-[#2C313A] to-[#1E1E1E] border border-[#3E4451] p-4 shadow-lg hover:border-[#61AFEF]/50 transition-colors duration-200">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-[#61AFEF]">
                                {msg.sender}
                              </span>
                              <span className="text-xs text-[#ABB2BF]">
                                {msg.timestamp}
                              </span>
                            </div>
                            <p className="text-[#ABB2BF] text-sm leading-relaxed break-words">
                              {msg.text}
                            </p>
                          </div>
                          {msg.sender === profile.displayName && (
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={msg.avatar}
                                alt={msg.sender}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[#ABB2BF] text-sm italic ml-4 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#61AFEF] animate-bounce"></span>
                      Someone is typing...
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Message Input */}
              <div className="mt-6 pt-6 border-t border-[#3E4451]">
                <MessageBox
                  value={message}
                  onChange={(e) => handleTyping(e)}
                  onSubmit={handleSendMessage}
                  placeholder="Type your message..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Participants Section */}
        <AnimatePresence>
          {showParticipants && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full sm:w-72 bg-[#21252B]/80 backdrop-blur-sm border-t sm:border-t-0 sm:border-l border-[#3E4451] shadow-lg"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-5 h-5 text-[#61AFEF]" />
                    <h2 className="font-semibold text-white">Participants</h2>
                  </div>
                  <button
                    onClick={() => setShowParticipants(false)}
                    className="p-2 rounded-lg hover:bg-[#2C313A] text-[#ABB2BF] hover:text-white transition-all duration-200 sm:hidden"
                  >
                    <ArrowLeftIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#2C313A] hover:bg-[#3E4451] transition-all duration-200 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={participant.avatar}
                          alt={participant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-[#ABB2BF] group-hover:text-white transition-colors">
                        {participant.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatRoom;
