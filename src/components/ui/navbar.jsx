import { Link } from "react-router-dom";
import { Button } from "./button";
import { UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#252526]/95 backdrop-blur-md border-b border-[#3E4451] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#61AFEF] to-[#4D8BCF] flex items-center justify-center shadow-lg group-hover:shadow-[#61AFEF]/20 transition-all duration-200">
              <span className="text-white text-lg">💬</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#61AFEF] to-[#C678DD] bg-clip-text text-transparent">
              Whisprr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[#ABB2BF] hover:text-white transition-all duration-200 hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-[#ABB2BF] hover:text-white transition-all duration-200 hover:scale-105"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-[#ABB2BF] hover:text-white transition-all duration-200 hover:scale-105"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[#ABB2BF] hover:text-white transition-all duration-200 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    className="text-[#ABB2BF] hover:text-white hover:bg-[#2C313A] transition-all duration-200"
                  >
                    Dashboard
                  </Button>
                </Link>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-8 h-8 shadow-lg hover:shadow-[#61AFEF]/20 transition-all duration-200",
                    },
                  }}
                />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="text-[#ABB2BF] hover:text-white hover:bg-[#2C313A] px-6 transition-all duration-200"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] hover:from-[#4D8BCF] hover:to-[#61AFEF] text-white px-6 shadow-lg hover:shadow-[#61AFEF]/20 transition-all duration-200">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#ABB2BF] hover:text-white transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#21252B] border-t border-[#3E4451] shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block text-[#ABB2BF] hover:text-white transition-all duration-200 py-2 hover:translate-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block text-[#ABB2BF] hover:text-white transition-all duration-200 py-2 hover:translate-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/about"
                className="block text-[#ABB2BF] hover:text-white transition-all duration-200 py-2 hover:translate-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-[#ABB2BF] hover:text-white transition-all duration-200 py-2 hover:translate-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {isSignedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-[#ABB2BF] hover:text-white transition-all duration-200 py-2 hover:translate-x-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="flex items-center space-x-2 py-2">
                    <span className="text-[#ABB2BF]">Account</span>
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8 shadow-lg",
                        },
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-2">
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      className="w-full text-[#ABB2BF] hover:text-white hover:bg-[#2C313A] py-3 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      className="w-full bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] hover:from-[#4D8BCF] hover:to-[#61AFEF] text-white py-3 shadow-lg hover:shadow-[#61AFEF]/20 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
