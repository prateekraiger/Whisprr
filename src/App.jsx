import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  useAuth,
} from "@clerk/clerk-react";
import { ChatProvider } from "./context/ChatContext";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ChatRoom from "./pages/ChatRoom";

export default function App() {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-100/50 via-dark-200/50 to-dark-300/50 opacity-50" />

      {/* Content */}
      <div className="relative">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SignedOut>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                  Welcome to Whisprr
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Secure, ephemeral chat for private conversations. Your
                  messages disappear when you leave.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <SignInButton mode="modal" redirectUrl="/dashboard">
                  <button className="btn btn-primary btn-lg bg-primary-600/90 hover:bg-primary-600 backdrop-blur-sm px-8 py-3">
                    Get Started
                  </button>
                </SignInButton>
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/sign-in/*"
                element={
                  <SignedOut>
                    <SignIn />
                  </SignedOut>
                }
              />
              <Route
                path="/sign-up/*"
                element={
                  <SignedOut>
                    <SignUp />
                  </SignedOut>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <SignedIn>
                    <ChatProvider>
                      <Dashboard />
                    </ChatProvider>
                  </SignedIn>
                }
              />
              <Route
                path="/chat/:roomId"
                element={
                  <SignedIn>
                    <ChatProvider>
                      <ChatRoom />
                    </ChatProvider>
                  </SignedIn>
                }
              />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </SignedIn>
        </main>
      </div>
    </div>
  );
}
