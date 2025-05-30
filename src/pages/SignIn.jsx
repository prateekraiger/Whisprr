import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-dark-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <ClerkSignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-dark-200 border border-dark-300",
              headerTitle: "text-gray-100",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton:
                "bg-dark-300 text-gray-100 hover:bg-dark-400",
              formButtonPrimary: "bg-primary-600 hover:bg-primary-700",
              footerActionLink: "text-primary-500 hover:text-primary-400",
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default SignIn;
