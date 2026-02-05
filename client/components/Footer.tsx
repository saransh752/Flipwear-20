import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">F</span>
              </div>
              <span className="font-bold text-lg">Flip Wear</span>
            </div>
            <p className="text-sm opacity-90">
              Your go-to destination for college merchandise and student style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-90 hover:opacity-100 transition-opacity">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="opacity-90 hover:opacity-100 transition-opacity">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:hello@flipwear.com" className="opacity-90 hover:opacity-100 transition-opacity">
                  hello@flipwear.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="tel:+1234567890" className="opacity-90 hover:opacity-100 transition-opacity">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>College Campus, City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-secondary-foreground/20 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex gap-4 mb-4 sm:mb-0">
            <a href="#" aria-label="Facebook" className="opacity-75 hover:opacity-100 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="opacity-75 hover:opacity-100 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-75 hover:opacity-100 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm opacity-75">
            © {currentYear} Flip Wear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
