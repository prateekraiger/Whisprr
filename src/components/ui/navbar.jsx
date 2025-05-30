import { Link } from "react-router-dom";
import { Button } from "./button";
import { UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#21252B]/80 backdrop-blur-md border-b border-[#3E4451]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">💬</span>
            <span className="text-xl font-bold bg-gradient-to-r from-[#61AFEF] to-[#C678DD] bg-clip-text text-transparent">
              Whisprr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/features"
              className="text-[#ABB2BF] hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-[#ABB2BF] hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[#ABB2BF] hover:text-white transition-colors"
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
                    className="text-[#ABB2BF] hover:text-white hover:bg-[#2C313A]"
                  >
                    Dashboard
                  </Button>
                </Link>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="text-[#ABB2BF] hover:text-white hover:bg-[#2C313A]"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#ABB2BF] hover:text-white"
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
          <div className="md:hidden bg-[#21252B] border-t border-[#3E4451]">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/features"
                className="block text-[#ABB2BF] hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/about"
                className="block text-[#ABB2BF] hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-[#ABB2BF] hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {isSignedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-[#ABB2BF] hover:text-white transition-colors py-2"
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
                          avatarBox: "w-8 h-8",
                        },
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      className="w-full text-[#ABB2BF] hover:text-white hover:bg-[#2C313A]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      className="w-full bg-[#61AFEF] hover:bg-[#61AFEF]/90 text-white"
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
