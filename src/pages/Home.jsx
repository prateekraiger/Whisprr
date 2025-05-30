import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#282C34]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#61AFEF] via-[#C678DD] to-[#E06C75]">
                Secure Messaging
              </span>
              <br />
              <span className="text-white">for Everyone</span>
            </h1>
            <p className="text-xl text-[#ABB2BF]">
              Experience the next level of secure communication with end-to-end
              encryption, real-time messaging, and seamless cross-platform
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3E4451] text-[#ABB2BF] hover:bg-[#2C313A] hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-[#21252B] rounded-2xl border border-[#3E4451] p-4 shadow-xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#3E4451]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sarah Johnson</h3>
                    <p className="text-sm text-[#ABB2BF]">Online</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-[#2C313A] transition-colors text-[#ABB2BF] hover:text-white">
                    📞
                  </button>
                  <button className="p-2 rounded-lg hover:bg-[#2C313A] transition-colors text-[#ABB2BF] hover:text-white">
                    📹
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-4">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <div className="bg-[#2C313A] rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-[#ABB2BF]">
                      Hey! How's the project going?
                    </p>
                    <span className="text-xs text-[#ABB2BF]/70">10:30 AM</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2 justify-end">
                  <div className="bg-[#61AFEF] rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-white">
                      Going great! Just finished the new features.
                    </p>
                    <span className="text-xs text-white/70">10:32 AM</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <div className="bg-[#2C313A] rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-[#ABB2BF]">
                      That's awesome! Can you share the details?
                    </p>
                    <span className="text-xs text-[#ABB2BF]/70">10:33 AM</span>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-[#282C34] border border-[#3E4451] text-[#ABB2BF] placeholder-[#ABB2BF]/50 focus:outline-none focus:ring-2 focus:ring-[#61AFEF]/20"
                />
                <button className="p-2 rounded-lg bg-[#61AFEF] hover:bg-[#61AFEF]/90 transition-colors text-white">
                  📤
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose Whisprr?
          </h2>
          <p className="text-xl text-[#ABB2BF] max-w-2xl mx-auto">
            Experience the most secure and user-friendly messaging platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔒",
              title: "End-to-End Encryption",
              description:
                "Your messages are encrypted from end to end, ensuring maximum security.",
            },
            {
              icon: "⚡",
              title: "Real-Time Messaging",
              description:
                "Experience instant message delivery with typing indicators and read receipts.",
            },
            {
              icon: "📱",
              title: "Cross-Platform",
              description:
                "Access your chats from any device, anywhere in the world.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#21252B] rounded-xl p-6 border border-[#3E4451] hover:border-[#61AFEF]/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#61AFEF]">
                {feature.title}
              </h3>
              <p className="text-[#ABB2BF]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
