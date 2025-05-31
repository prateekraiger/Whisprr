import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useUserProfile } from "../context/UserContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusIcon,
  ArrowRightIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CheckIcon,
  DocumentDuplicateIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Input } from "../components/ui/input";
import GridBackground from "../components/ui/grid-background";
import SkewHoverButton from "../components/ui/skew-hover-button";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { profile } = useUserProfile();
  const [chatCode, setChatCode] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [showCodePopup, setShowCodePopup] = useState(false);

  const handleCreateChat = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setChatCode(code);
    setShowCodePopup(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(chatCode);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleJoinChat = (e) => {
    e.preventDefault();
    if (joinCode.trim()) {
      navigate(`/chat/${joinCode.trim()}`);
    }
  };

  const handleEnterChat = () => {
    setShowCodePopup(false);
    navigate(`/chat/${chatCode}`);
  };

  return (
    <GridBackground>
      <div className="min-h-screen pt-20 pb-8">
        {/* Code Popup */}
        <AnimatePresence>
          {showCodePopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#21252B] rounded-xl border border-[#3E4451] p-6 max-w-md w-full shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Chat Room Created!
                  </h3>
                  <button
                    onClick={() => setShowCodePopup(false)}
                    className="p-2 rounded-lg hover:bg-[#3E4451] text-[#ABB2BF] hover:text-white transition-all duration-200"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[#ABB2BF] mb-4">
                  Share this code with others to let them join your chat room:
                </p>
                <div className="p-4 rounded-lg bg-[#2C313A] border border-[#3E4451] mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#61AFEF] font-mono text-lg">
                      {chatCode}
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="p-2 rounded-lg hover:bg-[#3E4451] text-[#ABB2BF] hover:text-white transition-all duration-200"
                    >
                      {showCopied ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <DocumentDuplicateIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCodePopup(false)}
                    className="flex-1 py-3 px-4 rounded-lg bg-[#2C313A] border border-[#3E4451] text-[#ABB2BF] hover:bg-[#3E4451] hover:text-white transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEnterChat}
                    className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] text-white font-medium hover:from-[#4D8BCF] hover:to-[#61AFEF] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Enter Chat Room
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="flex items-center gap-4 p-6 rounded-xl bg-[#21252B]/80 backdrop-blur-sm border border-[#3E4451] shadow-lg">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={user.imageUrl}
                alt={profile.displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Welcome, {profile.displayName}
              </h1>
              <p className="text-[#ABB2BF] mt-1">
                {profile.status || "Ready to chat"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Create Chat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#21252B]/80 backdrop-blur-sm rounded-2xl border border-[#3E4451] p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#61AFEF]/10">
                  <PlusIcon className="w-5 h-5 text-[#61AFEF]" />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Create New Chat
                </h2>
              </div>
              <p className="text-[#ABB2BF] text-sm mb-6">
                Start a new secure chat room and invite others to join.
              </p>
              <button
                onClick={handleCreateChat}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] text-white font-medium hover:from-[#4D8BCF] hover:to-[#61AFEF] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <PlusIcon className="w-5 h-5" />
                Create Chat Room
              </button>
            </motion.div>

            {/* Join Chat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#21252B]/80 backdrop-blur-sm rounded-2xl border border-[#3E4451] p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#61AFEF]/10">
                  <ShieldCheckIcon className="w-5 h-5 text-[#61AFEF]" />
                </div>
                <h2 className="text-lg font-semibold text-white">Join Chat</h2>
              </div>
              <p className="text-[#ABB2BF] text-sm mb-6">
                Enter a chat code to join an existing chat room.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  placeholder="Enter chat code"
                  className="flex-1 py-3 px-4 rounded-lg bg-[#2C313A] border border-[#3E4451] text-white placeholder-[#ABB2BF] focus:outline-none focus:border-[#61AFEF] transition-colors duration-200"
                />
                <button
                  onClick={handleJoinChat}
                  className="py-3 px-4 rounded-lg bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] text-white font-medium hover:from-[#4D8BCF] hover:to-[#61AFEF] transition-all duration-200 flex items-center gap-2"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                  Join
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </GridBackground>
  );
};

export default Dashboard;
