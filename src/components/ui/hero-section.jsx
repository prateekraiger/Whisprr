import { Button } from "./button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300">
                Chat Without Limits
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Experience seamless messaging with end-to-end encryption,
                real-time updates, and unlimited possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg bg-primary-500 hover:bg-primary-600"
                >
                  Start Chatting
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Right column - Chat App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-500/20 bg-dark-100">
                {/* App Header */}
                <div className="p-4 bg-dark-200 border-b border-dark-300 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-sm font-medium">Whisprr Chat</div>
                  <div className="w-16" /> {/* Spacer for balance */}
                </div>

                {/* Chat Interface */}
                <div className="h-[500px] flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-dark-300 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">
                        Online
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {/* Date Divider */}
                    <div className="text-center text-xs text-muted-foreground my-4">
                      Today
                    </div>

                    {/* Messages */}
                    <div className="space-y-4">
                      {/* Received Message */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                          <span className="text-sm">👤</span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-dark-300 rounded-lg p-3 text-sm">
                            Hey! How's the new project coming along?
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            2:30 PM
                          </p>
                        </div>
                      </div>

                      {/* Sent Message */}
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="flex-1 text-right">
                          <div className="bg-primary-500 rounded-lg p-3 text-sm inline-block">
                            Going great! Just finished the chat interface
                            design.
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            2:31 PM
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                          <span className="text-sm text-white">👤</span>
                        </div>
                      </div>

                      {/* Received Message */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                          <span className="text-sm">👤</span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-dark-300 rounded-lg p-3 text-sm">
                            That's awesome! Can't wait to see it in action. The
                            design looks really clean.
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            2:32 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-dark-300">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-muted-foreground hover:text-primary-500">
                        😊
                      </button>
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-dark-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                      <button className="p-2 text-primary-500 hover:text-primary-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "End-to-End Encryption",
                description: "Your messages are secure and private",
                icon: "🔒",
              },
              {
                title: "Real-Time Updates",
                description: "Instant message delivery and typing indicators",
                icon: "⚡",
              },
              {
                title: "Cross-Platform",
                description: "Chat seamlessly across all your devices",
                icon: "📱",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-dark-100 border border-dark-200 hover:border-primary-500/20 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-500">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
