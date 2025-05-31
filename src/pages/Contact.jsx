import { useState } from "react";
import { motion } from "framer-motion";
import {
  BugAntIcon,
  ExclamationTriangleIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import GridBackground from "../components/ui/grid-background";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    errorType: "",
    platform: "",
    browser: "",
    description: "",
    steps: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <GridBackground>
      <div className="min-h-screen pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#61AFEF]/10 text-[#61AFEF] px-4 py-2 rounded-full text-sm font-medium mb-4 flex items-center gap-2"
              >
                <BugAntIcon className="w-5 h-5" />
                Report an Issue
              </motion.div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Technical Support
            </h1>
            <p className="text-[#ABB2BF] text-lg max-w-2xl mx-auto">
              Found a bug or experiencing issues? Help us improve by reporting
              the problem. Your feedback is valuable to us.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#21252B]/80 backdrop-blur-sm rounded-2xl border border-[#3E4451] p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#ABB2BF] mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#2C313A] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 focus:border-[#61AFEF]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#ABB2BF] mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#2C313A] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 focus:border-[#61AFEF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="errorType"
                    className="block text-sm font-medium text-[#ABB2BF] mb-2"
                  >
                    Type of Issue
                  </label>
                  <select
                    id="errorType"
                    name="errorType"
                    value={formData.errorType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2C313A] border-[#3E4451] text-white rounded-lg px-4 py-2 focus:border-[#61AFEF] transition-colors"
                  >
                    <option value="">Select issue type</option>
                    <option value="bug">Bug/Error</option>
                    <option value="performance">Performance Issue</option>
                    <option value="ui">UI/UX Problem</option>
                    <option value="security">Security Concern</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-[#ABB2BF] mb-2"
                  >
                    Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2C313A] border-[#3E4451] text-white rounded-lg px-4 py-2 focus:border-[#61AFEF] transition-colors"
                  >
                    <option value="">Select platform</option>
                    <option value="web">Web Browser</option>
                    <option value="mobile">Mobile Browser</option>
                    <option value="android">Android App</option>
                    <option value="ios">iOS App</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="browser"
                  className="block text-sm font-medium text-[#ABB2BF] mb-2"
                >
                  Browser & Version (if applicable)
                </label>
                <Input
                  type="text"
                  id="browser"
                  name="browser"
                  value={formData.browser}
                  onChange={handleChange}
                  placeholder="e.g., Chrome 120.0.6099.130"
                  className="w-full bg-[#2C313A] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 focus:border-[#61AFEF]"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-[#ABB2BF] mb-2"
                >
                  Issue Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe the issue you're experiencing..."
                  required
                  className="w-full h-32 bg-[#2C313A] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 focus:border-[#61AFEF] resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="steps"
                  className="block text-sm font-medium text-[#ABB2BF] mb-2"
                >
                  Steps to Reproduce
                </label>
                <Textarea
                  id="steps"
                  name="steps"
                  value={formData.steps}
                  onChange={handleChange}
                  placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe..."
                  required
                  className="w-full h-32 bg-[#2C313A] border-[#3E4451] text-white placeholder-[#ABB2BF]/50 focus:border-[#61AFEF] resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] text-white font-medium hover:from-[#4D8BCF] hover:to-[#61AFEF] transition-all duration-200 flex items-center gap-2"
                >
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  Submit Report
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </GridBackground>
  );
};

export default Contact;
