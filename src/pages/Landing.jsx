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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
          Whisprr
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Chat in the moment, like a whisper in the wind.
        </p>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Experience secure, ephemeral conversations that disappear when you're
          done. Perfect for sharing sensitive information or having private
          discussions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sign-up" className="btn btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
          <Link to="/sign-in" className="btn btn-secondary text-lg px-8 py-3">
            Sign In
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Secure</h3>
          <p className="text-gray-400">
            End-to-end encryption and automatic message deletion
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Ephemeral</h3>
          <p className="text-gray-400">
            Messages disappear when you're done chatting
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Simple</h3>
          <p className="text-gray-400">
            Easy to use with no complicated setup required
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
