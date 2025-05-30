import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { clerkAppearance } from "./config/clerk";
import App from "./App";
import "./styles/index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={clerkAppearance}
      afterSignOutUrl="/"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      navigate={(to) => (window.location.href = to)}
      localization={{
        formFieldLabel__emailAddress: "Email",
        formFieldLabel__password: "Password",
        formFieldLabel__username: "Username",
        formButtonPrimary: "Continue",
        signIn: {
          start: {
            title: "Sign in to Whisprr",
            subtitle: "Welcome back! Please enter your details.",
          },
        },
        signUp: {
          start: {
            title: "Create your account",
            subtitle: "Get started with Whisprr",
          },
        },
      }}
      options={{
        allowedRedirectOrigins: ["http://localhost:3001"],
        signInUrl: "/sign-in",
        signUpUrl: "/sign-up",
        afterSignInUrl: "/dashboard",
        afterSignUpUrl: "/dashboard",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
