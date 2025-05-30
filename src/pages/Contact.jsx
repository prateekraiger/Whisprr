import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-100 rounded-xl p-8 border border-dark-200"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full bg-primary-500 hover:bg-primary-600">
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
            <div className="bg-dark-100 rounded-xl p-8 border border-dark-200">
              <h3 className="text-xl font-semibold mb-4 text-primary-500">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Innovation Street
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@whisprr.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-8 border border-dark-200">
              <h3 className="text-xl font-semibold mb-4 text-primary-500">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-200 hover:bg-primary-500/20 transition-colors"
                >
                  <span className="text-2xl">🐦</span>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-200 hover:bg-primary-500/20 transition-colors"
                >
                  <span className="text-2xl">📘</span>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-200 hover:bg-primary-500/20 transition-colors"
                >
                  <span className="text-2xl">📸</span>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-200 hover:bg-primary-500/20 transition-colors"
                >
                  <span className="text-2xl">💼</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
