import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import GridBackground from "../components/ui/grid-background";

const ButtonGradient = ({ children, className = "" }) => {
  return (
    <button
      className={`inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 hover:from-[#c7d2fe] hover:to-[#8678f9] ${className}`}
    >
      {children}
    </button>
  );
};

const MessageBubble = ({ message, isOwn = false }) => (
  <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isOwn
          ? "bg-gradient-to-r from-[#8678f9] to-[#c7d2fe] text-gray-950"
          : "bg-[#2C313A] text-[#ABB2BF]"
      }`}
    >
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <GridBackground>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#61AFEF]/10 text-[#61AFEF] px-4 py-2 rounded-full text-sm font-medium mb-4 flex items-center gap-2"
              >
                <ShieldCheckIcon className="w-5 h-5" />
                The Future of Secure Messaging
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#61AFEF] via-[#C678DD] to-[#E06C75]">
                Secure Messaging
              </span>
              <br />
              <span className="text-white">for Everyone</span>
            </h1>
            <p className="text-xl text-[#ABB2BF] leading-relaxed">
              Experience the next level of secure communication with end-to-end
              encryption, real-time messaging, and seamless cross-platform
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link to="/dashboard" className="w-full sm:w-auto">
                <ButtonGradient className="w-full sm:w-auto group">
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </ButtonGradient>
              </Link>
              <Link to="/features" className="w-full sm:w-auto">
                <ButtonGradient className="w-full sm:w-auto bg-gradient-to-t from-[#2C313A] to-[#3E4451] text-white border-[#3E4451] hover:from-[#3E4451] hover:to-[#2C313A] group">
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </ButtonGradient>
              </Link>
            </div>
          </motion.div>

          {/* Right column - Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#61AFEF]/20 to-[#C678DD]/20 p-8">
              <div className="w-full h-full rounded-xl bg-[#21252B]/80 backdrop-blur-sm border border-[#3E4451] shadow-lg flex flex-col relative overflow-hidden group">
                {/* Chat Header */}
                <div className="p-4 border-b border-[#3E4451] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#61AFEF] to-[#4D8BCF] flex items-center justify-center">
                      <span className="text-white font-medium">JD</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">John Doe</h4>
                      <p className="text-[#ABB2BF] text-sm">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#61AFEF]">
                    <LockClosedIcon className="w-5 h-5" />
                    <span className="text-sm">End-to-End Encrypted</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <MessageBubble message="Hey! How's the project going?" />
                  <MessageBubble
                    message="It's going great! Just finished implementing the encryption layer."
                    isOwn
                  />
                  <MessageBubble message="That's awesome! Can you tell me more about the security features?" />
                  <MessageBubble
                    message="Sure! We're using state-of-the-art end-to-end encryption. Your messages are encrypted on your device and can only be read by the intended recipient."
                    isOwn
                  />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-[#3E4451]">
                  <div className="flex items-center gap-2 bg-[#2C313A] rounded-full px-4 py-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent border-none outline-none text-[#ABB2BF] placeholder-[#ABB2BF]/50"
                    />
                    <button className="p-2 rounded-full bg-gradient-to-r from-[#8678f9] to-[#c7d2fe] text-gray-950">
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Encryption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#61AFEF]/10 to-[#C678DD]/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#61AFEF] to-[#4D8BCF] flex items-center justify-center shadow-lg">
                      <LockClosedIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      End-to-End Encrypted
                    </h3>
                    <p className="text-[#ABB2BF] max-w-xs">
                      Your messages are protected with state-of-the-art
                      encryption
                    </p>
                  </div>
                </div>
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
          <div className="inline-block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#61AFEF]/10 text-[#61AFEF] px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Features
            </motion.div>
          </div>
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
              icon: <ShieldCheckIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "End-to-End Encryption",
              description:
                "Your messages are encrypted from end to end, ensuring maximum security and privacy for your conversations.",
            },
            {
              icon: <BoltIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "Real-Time Messaging",
              description:
                "Experience instant message delivery with typing indicators and read receipts for seamless communication.",
            },
            {
              icon: (
                <DevicePhoneMobileIcon className="w-8 h-8 text-[#61AFEF]" />
              ),
              title: "Cross-Platform",
              description:
                "Access your chats from any device, anywhere in the world with our seamless cross-platform support.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#21252B] rounded-xl p-6 border border-[#3E4451] hover:border-[#61AFEF]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#61AFEF]/5"
            >
              <div className="mb-4 p-3 bg-[#61AFEF]/10 rounded-lg w-fit group-hover:bg-[#61AFEF]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#61AFEF] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#ABB2BF] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </GridBackground>
  );
}
