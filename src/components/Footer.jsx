import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Website Name */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PropertyHub</h2>
          <p className="text-gray-200">Your trusted platform to find, manage, and explore properties effortlessly.</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-200">Email: info@propertyhub.com</p>
          <p className="text-gray-200">Phone: +880 123 456 789</p>
          <p className="text-gray-200">Address: 123 PropertyHub Street, Dhaka, Bangladesh</p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="text-gray-200 hover:text-secondary transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-200 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-secondary transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} PropertyHub. All rights reserved.
      </div>
    </footer>
  );
}
