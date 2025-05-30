import { Link } from "react-router-dom";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-dark-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">💬</span>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300">
            Whisprr
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/features"
            className="text-muted-foreground hover:text-primary-500 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-primary-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-primary-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-primary-500 hover:bg-primary-600">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
