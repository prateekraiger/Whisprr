import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#282C34]">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Features
          </h1>
          <p className="text-xl text-[#ABB2BF] max-w-2xl mx-auto">
            Discover the powerful features that make Whisprr the best messaging
            platform.
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
            {
              icon: "🔍",
              title: "Advanced Search",
              description:
                "Quickly find messages, files, and media with our powerful search feature.",
            },
            {
              icon: "📎",
              title: "File Sharing",
              description:
                "Share files, images, and documents securely with your contacts.",
            },
            {
              icon: "🔔",
              title: "Customizable Notifications",
              description:
                "Set up notifications to stay updated with important messages.",
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
