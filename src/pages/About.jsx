import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      title: "Privacy First",
      description:
        "We believe in protecting user privacy and data security above all else.",
      icon: "🔒",
    },
    {
      title: "User-Centric",
      description:
        "Every feature and decision is made with our users' needs in mind.",
      icon: "👥",
    },
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions.",
      icon: "💡",
    },
    {
      title: "Transparency",
      description:
        "We maintain open communication and clear policies with our users.",
      icon: "✨",
    },
  ];

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
            About Us
          </h1>
          <p className="text-xl text-[#ABB2BF] max-w-2xl mx-auto">
            Learn more about our mission and the team behind Whisprr.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Our Mission
            </h2>
            <p className="text-[#ABB2BF] mb-4">
              At Whisprr, we believe in providing a secure and seamless
              messaging experience for everyone. Our mission is to make
              communication more accessible, private, and enjoyable.
            </p>
            <p className="text-[#ABB2BF]">
              We're committed to building a platform that prioritizes user
              privacy while delivering a feature-rich experience that keeps
              people connected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Our Vision
            </h2>
            <p className="text-[#ABB2BF] mb-4">
              We envision a world where secure communication is accessible to
              everyone, where privacy is a fundamental right, not a premium
              feature.
            </p>
            <p className="text-[#ABB2BF]">
              Our goal is to become the most trusted messaging platform, known
              for its commitment to security, user experience, and innovation.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]"
        >
          <h2 className="text-2xl font-semibold mb-8 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#282C34] rounded-xl p-6 border border-[#3E4451] hover:border-[#61AFEF]/50 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#61AFEF]">
                  {value.title}
                </h3>
                <p className="text-[#ABB2BF]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
