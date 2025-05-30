import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { generateRoomCode } from "../utils/roomUtils";

const Dashboard = () => {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useUser();

  const handleCreateRoom = () => {
    const newRoomCode = generateRoomCode();
    navigate(`/chat/${newRoomCode}`);
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (!roomCode.trim()) {
      setError("Please enter a room code");
      return;
    }
    navigate(`/chat/${roomCode.trim()}`);
  };

  return (
    <div className="min-h-screen bg-dark-100 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card mb-8"
        >
          <h1 className="text-2xl font-bold mb-2">
            Welcome, {user?.firstName || "User"}!
          </h1>
          <p className="text-gray-400">
            Create a new chat room or join an existing one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h2 className="text-xl font-semibold mb-4">Create New Room</h2>
            <p className="text-gray-400 mb-6">
              Start a new secure chat room and invite others to join.
            </p>
            <button
              onClick={handleCreateRoom}
              className="btn btn-primary w-full"
            >
              Create Room
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <h2 className="text-xl font-semibold mb-4">Join Room</h2>
            <p className="text-gray-400 mb-6">
              Enter a room code to join an existing chat.
            </p>
            <form onSubmit={handleJoinRoom}>
              <input
                type="text"
                value={roomCode}
                onChange={(e) => {
                  setRoomCode(e.target.value);
                  setError("");
                }}
                placeholder="Enter room code"
                className="input w-full mb-4"
              />
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button type="submit" className="btn btn-secondary w-full">
                Join Room
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
