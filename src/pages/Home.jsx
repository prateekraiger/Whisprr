import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import GridBackground from "../components/ui/grid-background";
import SkewHoverButton from "../components/ui/skew-hover-button";

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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="w-full sm:w-auto">
                <SkewHoverButton className="h-12 text-lg">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </SkewHoverButton>
              </Link>
              <Link to="/features" className="w-full sm:w-auto">
                <SkewHoverButton className="h-12 text-lg bg-[#2C313A] hover:bg-[#3E4451]">
                  Learn More
                  <ArrowRightIcon className="w-5 h-5" />
                </SkewHoverButton>
              </Link>
            </div>
          </motion.div>

          {/* Right column - Image or Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#61AFEF]/20 to-[#C678DD]/20 p-8">
              <div className="w-full h-full rounded-xl bg-[#21252B]/80 backdrop-blur-sm border border-[#3E4451] shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#61AFEF] to-[#4D8BCF] flex items-center justify-center shadow-lg">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    End-to-End Encrypted
                  </h3>
                  <p className="text-[#ABB2BF]">
                    Your messages are secure and private
                  </p>
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
