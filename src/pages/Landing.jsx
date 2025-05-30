import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-screen bg-dark-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
          <h1 className="relative text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 bg-clip-text text-transparent drop-shadow-lg">
            Whisprr
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          Chat in the moment, like a whisper in the wind.
        </p>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
          Experience secure, ephemeral conversations that disappear when you're
          done. Generate code, chat privately, and enjoy peace of mind—your
          messages vanish as soon as you exit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/sign-up"
            className="btn btn-primary text-lg px-10 py-4 shadow-xl hover:scale-105 transition-transform duration-200 hover:shadow-2xl"
          >
            Get Started
          </Link>
          <Link
            to="/sign-in"
            className="btn btn-secondary text-lg px-10 py-4 shadow-xl hover:scale-105 transition-transform duration-200 hover:shadow-2xl"
          >
            Sign In
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
      >
        <div className="card border-t-4 border-primary-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-dark-200 to-dark-300">
          <h3 className="text-2xl font-bold mb-3 text-primary-400 flex items-center justify-center gap-2">
            <span>🔒</span> Secure
          </h3>
          <p className="text-gray-300 text-base">
            End-to-end encryption and automatic message deletion keep your chats
            private.
          </p>
        </div>
        <div className="card border-t-4 border-primary-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-dark-200 to-dark-300">
          <h3 className="text-2xl font-bold mb-3 text-primary-400 flex items-center justify-center gap-2">
            <span>⏳</span> Ephemeral
          </h3>
          <p className="text-gray-300 text-base">
            Messages disappear instantly after you exit, leaving no trace
            behind.
          </p>
        </div>
        <div className="card border-t-4 border-primary-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-dark-200 to-dark-300">
          <h3 className="text-2xl font-bold mb-3 text-primary-400 flex items-center justify-center gap-2">
            <span>⚡</span> Simple
          </h3>
          <p className="text-gray-300 text-base">
            Effortless code generation and private chat—no setup, just start
            chatting.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
