import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "../components/ui/button";

export default function Dashboard() {
  const { user } = useUser();
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  // Mock data for chats - replace with real data later
  const chats = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Hey! How's the project going?",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Mike Wilson",
      lastMessage: "Can we schedule a meeting?",
      time: "9:45 AM",
      unread: 0,
    },
    {
      id: 3,
      name: "Team Chat",
      lastMessage: "New features deployed!",
      time: "Yesterday",
      unread: 5,
    },
  ];

  // Mock data for messages - replace with real data later
  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hey! How's the project going?",
      time: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Going great! Just finished the new features.",
      time: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content: "That's awesome! Can you share the details?",
      time: "10:33 AM",
      isOwn: false,
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add message sending logic here
    setMessage("");
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex bg-[#282c34]">
      {/* Sidebar */}
      <div className="w-80 border-r border-[#3e4451] bg-[#21252b] flex flex-col">
        {/* User Profile */}
        <div className="p-4 border-b border-[#3e4451]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#61afef]/20 flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {user?.fullName || "User"}
              </h3>
              <p className="text-sm text-[#abb2bf]">Online</p>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-[#2c313a] transition-colors ${
                selectedChat?.id === chat.id ? "bg-[#2c313a]" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#61afef]/20 flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-white">{chat.name}</h3>
                  <span className="text-sm text-[#abb2bf]">{chat.time}</span>
                </div>
                <p className="text-sm text-[#abb2bf] truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-[#61afef] text-white text-xs flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#282c34]">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="h-16 border-b border-[#3e4451] flex items-center justify-between px-6 bg-[#21252b]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#61afef]/20 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {selectedChat.name}
                  </h3>
                  <p className="text-sm text-[#abb2bf]">Online</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#abb2bf] hover:text-white hover:bg-[#2c313a]"
                >
                  📞
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#abb2bf] hover:text-white hover:bg-[#2c313a]"
                >
                  📹
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isOwn ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.isOwn
                        ? "bg-[#61afef] text-white"
                        : "bg-[#2c313a] text-[#abb2bf]"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <span className="text-xs text-[#abb2bf] mt-1 block">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-[#3e4451] bg-[#21252b]"
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-[#282c34] border border-[#3e4451] text-white placeholder-[#abb2bf] focus:outline-none focus:ring-2 focus:ring-[#61afef]/20"
                />
                <Button
                  type="submit"
                  className="bg-[#61afef] hover:bg-[#61afef]/90 text-white"
                >
                  Send
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-[#abb2bf]">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
