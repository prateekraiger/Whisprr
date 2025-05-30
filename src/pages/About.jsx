import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Passionate about creating secure and user-friendly communication tools.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      bio: "Expert in encryption and real-time communication systems.",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Focused on creating beautiful and intuitive user experiences.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "👨‍💻",
      bio: "Specializes in building scalable and secure applications.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Our Mission
            </h2>
            <p className="text-[#ABB2BF]">
              At Whisprr, we believe in providing a secure and seamless
              messaging experience for everyone. Our mission is to make
              communication more accessible, private, and enjoyable.
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Team</h2>
            <p className="text-[#ABB2BF]">
              Our team is composed of passionate individuals dedicated to
              creating the best messaging platform. We are committed to
              innovation and user satisfaction.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-[#3E4451] text-[#ABB2BF] hover:bg-[#2C313A] hover:text-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
