import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-20">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300">
            About Whisprr
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make secure communication accessible to
            everyone. Our platform combines cutting-edge technology with
            user-friendly design to create the most secure and enjoyable
            messaging experience.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Security First",
              description:
                "We believe that privacy is a fundamental right. Every feature we build is designed with security in mind.",
              icon: "🛡️",
            },
            {
              title: "User Experience",
              description:
                "Complex security shouldn't mean complex interfaces. We make secure communication simple and enjoyable.",
              icon: "✨",
            },
            {
              title: "Innovation",
              description:
                "We're constantly pushing the boundaries of what's possible in secure communication.",
              icon: "🚀",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-100 rounded-xl p-6 border border-dark-200"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals behind Whisprr, dedicated to making
            secure communication accessible to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-100 rounded-xl p-6 border border-dark-200 text-center"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold mb-1 text-primary-500">
                {member.name}
              </h3>
              <p className="text-muted-foreground mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
