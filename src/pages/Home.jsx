import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300">
                Secure Messaging
              </span>
              <br />
              for Everyone
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience the next level of secure communication with end-to-end
              encryption, real-time messaging, and seamless cross-platform
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
                Get Started
              </Button>
              <Link to="/features">
                <Button size="lg" variant="outline">
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
            <div className="bg-dark-100 rounded-2xl border border-dark-200 p-4 shadow-xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-dark-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-dark-200 transition-colors">
                    📞
                  </button>
                  <button className="p-2 rounded-lg hover:bg-dark-200 transition-colors">
                    📹
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-4">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <div className="bg-dark-200 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hey! How's the project going?</p>
                    <span className="text-xs text-muted-foreground">
                      10:30 AM
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2 justify-end">
                  <div className="bg-primary-500 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">
                      Going great! Just finished the new features.
                    </p>
                    <span className="text-xs text-muted-foreground">
                      10:32 AM
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <div className="bg-dark-200 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">
                      That's awesome! Can you share the details?
                    </p>
                    <span className="text-xs text-muted-foreground">
                      10:33 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
                <button className="p-2 rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Whisprr?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              className="bg-dark-100 rounded-xl p-6 border border-dark-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/features">
            <Button size="lg" variant="outline">
              View All Features
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
