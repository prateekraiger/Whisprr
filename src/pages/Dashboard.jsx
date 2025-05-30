import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useUserProfile } from "../context/UserContext";
import ProfileSettings from "../components/profile/ProfileSettings";
import { motion } from "framer-motion";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [chatCode, setChatCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  // Generate a random 6-character alphanumeric code
  const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedCode(code);
    setShowCodePopup(true);
  };

  // Join a chat with a code
  const joinChat = () => {
    if (chatCode.length === 6) {
      navigate(`/chat/${chatCode}`);
    }
  };

  const handleStartChat = () => {
    setShowCodePopup(false);
    navigate(`/chat/${generatedCode}`);
  };

  return (
    <div className="min-h-screen bg-[#282C34] pt-16">
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-80 border-r border-[#3E4451] bg-[#21252B] flex flex-col">
          {/* User Profile */}
          <div className="p-4 border-b border-[#3E4451]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#61AFEF]/20 flex items-center justify-center text-2xl">
                  {profile.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {profile.displayName}
                  </h3>
                  <p className="text-sm text-[#ABB2BF]">{profile.status}</p>
                </div>
              </div>
              <button
                onClick={() => setShowProfileSettings(true)}
                className="p-2 rounded-lg hover:bg-[#2C313A] text-[#ABB2BF] hover:text-white"
              >
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md mx-auto p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Welcome to Whisprr
              </h2>
              <p className="text-[#ABB2BF] mb-8 text-lg">
                Create a new chat or join an existing one to start messaging
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  onClick={generateCode}
                  className="bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white h-12 text-lg"
                >
                  Create Chat
                </Button>
                <Button
                  onClick={() => setShowCodeInput(true)}
                  variant="outline"
                  className="border-[#3E4451] text-[#ABB2BF] hover:text-white hover:bg-[#2C313A] h-12 text-lg"
                >
                  Join Chat
                </Button>
              </div>

              {/* Join Chat Input */}
              {showCodeInput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <Input
                    type="text"
                    placeholder="Enter 6-character code"
                    value={chatCode}
                    onChange={(e) => setChatCode(e.target.value.toUpperCase())}
                    className="bg-[#282C34] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 mb-2"
                    maxLength={6}
                  />
                  <Button
                    onClick={joinChat}
                    className="w-full bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white"
                  >
                    Join
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Profile Settings Modal */}
      {showProfileSettings && (
        <ProfileSettings onClose={() => setShowProfileSettings(false)} />
      )}

      {/* Chat Code Popup */}
      {showCodePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#21252B] rounded-lg p-6 max-w-md w-full mx-4 relative"
          >
            <button
              onClick={() => setShowCodePopup(false)}
              className="absolute top-4 right-4 text-[#ABB2BF] hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-semibold text-white mb-4">
              Chat Code Generated
            </h3>
            <div className="bg-[#282C34] rounded-lg p-4 mb-6">
              <p className="text-2xl font-mono text-[#61AFEF] tracking-wider">
                {generatedCode}
              </p>
            </div>
            <p className="text-[#ABB2BF] mb-6">
              Share this code with others to join your chat room. The code will
              be valid for this session.
            </p>
            <Button
              onClick={handleStartChat}
              className="w-full bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white h-12 text-lg"
            >
              Start Chat
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
