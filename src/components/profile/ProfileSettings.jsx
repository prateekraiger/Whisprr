import { useState } from "react";
import { useUserProfile } from "../../context/UserContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "framer-motion";

const AVATAR_OPTIONS = [
  "👤",
  "👨",
  "👩",
  "🧑",
  "👧",
  "👦",
  "🦊",
  "🐱",
  "🐶",
  "🐼",
];
const STATUS_OPTIONS = ["Online", "Busy", "Away", "Offline"];

export default function ProfileSettings({ onClose }) {
  const { profile, updateProfile } = useUserProfile();
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatar);
  const [selectedStatus, setSelectedStatus] = useState(profile.status);

  const handleSave = () => {
    updateProfile({
      displayName,
      avatar: selectedAvatar,
      status: selectedStatus,
    });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-[#21252B] rounded-xl p-6 w-full max-w-md border border-[#3E4451]">
        <h2 className="text-xl font-semibold text-white mb-4">
          Profile Settings
        </h2>

        {/* Display Name */}
        <div className="mb-4">
          <label className="block text-sm text-[#ABB2BF] mb-2">
            Display Name
          </label>
          <Input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="bg-[#282C34] border-[#3E4451] text-white"
            placeholder="Enter your display name"
          />
        </div>

        {/* Avatar Selection */}
        <div className="mb-4">
          <label className="block text-sm text-[#ABB2BF] mb-2">Avatar</label>
          <div className="grid grid-cols-5 gap-2">
            {AVATAR_OPTIONS.map((avatar) => (
              <button
                key={avatar}
                onClick={() => setSelectedAvatar(avatar)}
                className={`p-2 rounded-lg text-2xl ${
                  selectedAvatar === avatar
                    ? "bg-[#61AFEF] text-white"
                    : "bg-[#282C34] hover:bg-[#2C313A]"
                }`}
              >
                {avatar}
              </button>
            ))}
          </div>
        </div>

        {/* Status Selection */}
        <div className="mb-6">
          <label className="block text-sm text-[#ABB2BF] mb-2">Status</label>
          <div className="grid grid-cols-2 gap-2">
            {STATUS_OPTIONS.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`p-2 rounded-lg text-sm ${
                  selectedStatus === status
                    ? "bg-[#61AFEF] text-white"
                    : "bg-[#282C34] text-[#ABB2BF] hover:bg-[#2C313A]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-[#3E4451] text-[#ABB2BF] hover:bg-[#2C313A]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
