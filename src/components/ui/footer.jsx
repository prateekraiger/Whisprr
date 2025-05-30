import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#21252B] border-t border-[#3E4451]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">💬</span>
              <span className="text-xl font-bold bg-gradient-to-r from-[#61AFEF] to-[#C678DD] bg-clip-text text-transparent">
                Whisprr
              </span>
            </Link>
            <p className="text-[#ABB2BF] text-sm">
              Secure messaging for everyone. Connect, chat, and collaborate with
              confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-[#ABB2BF] hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#ABB2BF] hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#ABB2BF] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-[#ABB2BF]">
                <span className="mr-2">📧</span>
                support@whisprr.com
              </li>
              <li className="text-[#ABB2BF]">
                <span className="mr-2">📞</span>
                +1 (234) 567-890
              </li>
              <li className="text-[#ABB2BF]">
                <span className="mr-2">📍</span>
                123 Chat Street, Digital City
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3E4451]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#ABB2BF] text-sm">
              © {new Date().getFullYear()} Whisprr. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-[#ABB2BF] hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[#ABB2BF] hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-[#ABB2BF] hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
