import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import GridBackground from "../components/ui/grid-background";
import {
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function About() {
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
              About Us
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Privacy First
          </h1>
          <p className="text-xl text-[#ABB2BF] max-w-2xl mx-auto">
            We believe in protecting user privacy and data security above all
            else. Our mission is to provide a secure messaging platform that
            puts your privacy first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <ShieldCheckIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "End-to-End Encryption",
              description:
                "Every message is encrypted from end to end, ensuring that only you and your intended recipient can read your conversations.",
            },
            {
              icon: <GlobeAltIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "Open Source",
              description:
                "Our code is open source and independently audited, allowing anyone to verify our security claims and contribute to our mission.",
            },
            {
              icon: <UserGroupIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "No Data Collection",
              description:
                "We don't collect or store any personal data. Your messages, contacts, and metadata remain private and secure.",
            },
            {
              icon: <HeartIcon className="w-8 h-8 text-[#61AFEF]" />,
              title: "User-Focused",
              description:
                "Built by privacy advocates for privacy advocates. Every feature is designed with your security and privacy in mind.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#21252B] rounded-xl p-6 border border-[#3E4451] hover:border-[#61AFEF]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#61AFEF]/5"
            >
              <div className="mb-4 p-3 bg-[#61AFEF]/10 rounded-lg w-fit group-hover:bg-[#61AFEF]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#61AFEF] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#ABB2BF] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-[#61AFEF]/10 text-[#61AFEF] px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Join Our Mission
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Experience Secure Messaging
          </h2>
          <p className="text-xl text-[#ABB2BF] mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Whisprr for their private
            communications.
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
