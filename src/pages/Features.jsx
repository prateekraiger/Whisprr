import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import GridBackground from "../components/ui/grid-background";
import {
  ShieldCheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <GridBackground>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Powerful Features
          </h1>
          <p className="text-xl text-[#ABB2BF] max-w-2xl mx-auto">
            Discover the powerful features that make Whisprr the best messaging
            platform.
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
            {
              icon: <MagnifyingGlassIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "Advanced Search",
              description:
                "Quickly find messages, files, and media with our powerful search feature and smart filters.",
            },
            {
              icon: <PaperClipIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "File Sharing",
              description:
                "Share files, images, and documents securely with your contacts with end-to-end encryption.",
            },
            {
              icon: <BellIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "Customizable Notifications",
              description:
                "Set up smart notifications to stay updated with important messages and never miss a thing.",
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-[#61AFEF]/10 text-[#61AFEF] px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Ready to Get Started?
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Join Whisprr Today
          </h2>
          <p className="text-xl text-[#ABB2BF] mb-8 max-w-2xl mx-auto">
            Experience the future of secure messaging with all these features
            and more.
          </p>
          <Link to="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] hover:from-[#4D8BCF] hover:to-[#61AFEF] text-white shadow-lg hover:shadow-[#61AFEF]/20 transition-all duration-200"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </section>
    </GridBackground>
  );
}
