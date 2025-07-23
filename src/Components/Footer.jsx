import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo2 from '../images/logo2.png';
import flag from '../images/flag.png';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-start justify-between">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo2} alt="Logo" className="w-40 md:w-60 rounded-xl" />
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Get Connected</h2>
            <div className="flex gap-4">
              <Link to="/" className="bg-white text-blue-600 p-3 rounded-full hover:scale-110 transition">
                <FaFacebook className="text-3xl" />
              </Link>
              <a href="https://www.instagram.com/localvibezofficial/" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 p-3 rounded-full hover:scale-110 transition">
                <FaInstagram className="text-3xl" />
              </a>
              <Link to="/" className="bg-white text-blue-500 p-3 rounded-full hover:scale-110 transition">
                <FaLinkedin className="text-3xl" />
              </Link>
              <Link to="/" className="bg-white text-red-600 p-3 rounded-full hover:scale-110 transition">
                <FaYoutube className="text-3xl" />
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link to="/tnc" className="hover:text-blue-300">Terms & Conditions</Link></li>
              <li><Link to="/community-guidelines" className="hover:text-blue-300">Community Guidelines</Link></li>
              <li><Link to="/advertising-policy" className="hover:text-blue-300">Advertising Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-blue-300">Cookie Policy</Link></li>
              <li><Link to="/verification-policy" className="hover:text-blue-300">Verification Policy</Link></li>
              <li><Link to="/faq" className="hover:text-blue-300">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-zinc-700 pt-6">
          <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} LocalVibez. All rights reserved.</p>
          <div className="mt-3 flex justify-center items-center gap-2 text-lg">
            Made In <img src={flag} width={30} alt="India" /> With Love
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
