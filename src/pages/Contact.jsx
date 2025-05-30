import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Contact() {
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
            Contact Us
          </h1>
          <p className="text-xl text-[#ABB2BF] max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#ABB2BF] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-[#282C34] border border-[#3E4451] text-[#ABB2BF] placeholder-[#ABB2BF]/50 focus:outline-none focus:ring-2 focus:ring-[#61AFEF]/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#ABB2BF] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#282C34] border border-[#3E4451] text-[#ABB2BF] placeholder-[#ABB2BF]/50 focus:outline-none focus:ring-2 focus:ring-[#61AFEF]/20"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#ABB2BF] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[#282C34] border border-[#3E4451] text-[#ABB2BF] placeholder-[#ABB2BF]/50 focus:outline-none focus:ring-2 focus:ring-[#61AFEF]/20"
                  placeholder="Your message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-[#ABB2BF]">support@whisprr.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-[#ABB2BF]">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Address</h3>
                    <p className="text-[#ABB2BF]">
                      123 Chat Street, Digital City, 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#21252B] rounded-xl p-8 border border-[#3E4451]">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center text-[#ABB2BF] hover:text-white hover:bg-[#61AFEF]/30 transition-colors"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center text-[#ABB2BF] hover:text-white hover:bg-[#61AFEF]/30 transition-colors"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#61AFEF]/20 flex items-center justify-center text-[#ABB2BF] hover:text-white hover:bg-[#61AFEF]/30 transition-colors"
                >
                  📸
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
