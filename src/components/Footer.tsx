import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-green-800 text-gray-100 py-8 px-4 mt-20">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      {/* Social Media */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaInstagram size={22} /></a>
        <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaFacebookF size={22} /></a>
        <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><FaTwitter size={22} /></a>
      </div>
      {/* Links */}
      <div className="flex space-x-8 mb-4 md:mb-0 text-sm">
        <a href="/privacy" className="hover:text-orange-400">Privacy Policy</a>
        <a href="/terms" className="hover:text-orange-400">Terms</a>
        <a href="mailto:info@juicebar.com" className="hover:text-orange-400">Contact</a>
      </div>
      {/* Copyright */}
      <div className="text-xs text-gray-300">&copy; {new Date().getFullYear()} Juice Bar. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
