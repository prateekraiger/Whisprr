import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-dark-200 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">💬</span>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300">
                Whisprr
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Secure, private, and seamless communication for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-500">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-500">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                📘
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-500 transition-colors"
              >
                📸
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-200 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Whisprr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
