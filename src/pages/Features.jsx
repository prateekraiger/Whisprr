import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "End-to-End Encryption",
      description:
        "Your messages are encrypted from end to end, ensuring that only you and your recipient can read them.",
      icon: "🔒",
      details: [
        "Military-grade encryption",
        "No message storage on servers",
        "Self-destructing messages",
        "Secure file sharing",
      ],
    },
    {
      title: "Real-Time Communication",
      description:
        "Experience instant message delivery with typing indicators and read receipts.",
      icon: "⚡",
      details: [
        "Instant message delivery",
        "Typing indicators",
        "Read receipts",
        "Online status",
      ],
    },
    {
      title: "Cross-Platform Support",
      description: "Access your chats from any device, anywhere in the world.",
      icon: "📱",
      details: [
        "Web application",
        "Mobile apps (iOS & Android)",
        "Desktop clients",
        "Browser extensions",
      ],
    },
    {
      title: "Rich Media Support",
      description:
        "Share more than just text with our comprehensive media support.",
      icon: "🎨",
      details: [
        "Image sharing",
        "Video messages",
        "Voice notes",
        "File transfers",
      ],
    },
    {
      title: "Group Chats",
      description: "Create and manage group conversations with ease.",
      icon: "👥",
      details: [
        "Create unlimited groups",
        "Admin controls",
        "Group polls",
        "File sharing",
      ],
    },
    {
      title: "Customization",
      description:
        "Make the app your own with extensive customization options.",
      icon: "🎨",
      details: [
        "Theme customization",
        "Chat backgrounds",
        "Notification settings",
        "Language preferences",
      ],
    },
  ];

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
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover everything you can do with Whisprr
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-100 rounded-xl p-6 border border-dark-200 hover:border-primary-500/20 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
