import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const socialLinks = [
    {
      icon: <FaWhatsapp className="text-lg" />,
      url: "https://wa.me/919012901312",
      label: "WhatsApp",
    },
    {
      icon: <FaFacebook className="text-lg" />,
      url: "#",
      label: "Facebook",
    },
    {
      icon: <FaInstagram className="text-lg" />,
      url: "#",
      label: "Instagram",
    },
  ];

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Aapke style ke according */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brown-700 to-brown-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Usman Septic Tanks
                </h2>
                <p className="text-xs text-brown-600 font-medium">
                  Premium RCC Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Aapke style ke according */}
            <nav className="hidden lg:flex space-x-1 items-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-brown-700 hover:bg-brown-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Home
              </Link>
              <Link
                to="/tank-selection-guide"
                className="text-gray-700 hover:text-brown-700 hover:bg-brown-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                TankGuide
              </Link>
              <Link
                to="/gallery"
                className="text-gray-700 hover:text-brown-700 hover:bg-brown-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Gallery
              </Link>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-brown-700 hover:bg-brown-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-brown-700 hover:bg-brown-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("enquiry")}
                className="text-gray-700 hover:text-brown-700 hover:bg-brown-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("enquiry")}
                className="bg-gradient-to-r from-brown-700 to-brown-600 text-white px-6 py-2.5 rounded-lg hover:from-brown-800 hover:to-brown-700 font-medium shadow-md hover:shadow-lg transition-all ml-4"
              >
                Get Quote
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="text-gray-700 w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Aapke style ke according */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden shadow-2xl animate-slideIn">
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brown-700 to-brown-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Menu</h3>
                    <p className="text-xs text-gray-500">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-700 w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                <Link
                  to="/"
                  className="block w-full text-left text-gray-700 hover:text-brown-700 hover:bg-brown-50 font-medium py-3 px-4 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/tank-selection-guide"
                  className="block w-full text-left text-gray-700 hover:text-brown-700 hover:bg-brown-50 font-medium py-3 px-4 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tank Guide
                </Link>
                <Link
                  to="/gallery"
                  className="block w-full text-left text-gray-700 hover:text-brown-700 hover:bg-brown-50 font-medium py-3 px-4 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <button
                  onClick={() => scrollToSection("products")}
                  className="block w-full text-left text-gray-700 hover:text-brown-700 hover:bg-brown-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-gray-700 hover:text-brown-700 hover:bg-brown-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("enquiry")}
                  className="block w-full text-left text-gray-700 hover:text-brown-700 hover:bg-brown-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Contact
                </button>
              </nav>

              {/* Contact Info */}
              <div className="space-y-3 mb-6 bg-brown-50 p-4 rounded-xl">
                <a
                  href="tel:+919012901312"
                  className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <FaPhone className="text-brown-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <span className="font-medium">+91 90129 01312</span>
                  </div>
                </a>
                <a
                  href="mailto:usmanseptiktankuk17@gmail.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <FaEnvelope className="text-brown-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Us</p>
                    <span className="font-medium text-sm">
                      usmanseptiktankuk17@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  FOLLOW US
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      title={social.label}
                      className="w-11 h-11 bg-gradient-to-br from-brown-100 to-brown-200 hover:from-brown-600 hover:to-brown-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-brown-700 hover:text-white shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Enquiry Button */}
              <button
                onClick={() => scrollToSection("enquiry")}
                className="w-full bg-gradient-to-r from-brown-700 to-brown-600 text-white py-3.5 rounded-xl font-semibold mt-auto shadow-lg hover:shadow-xl hover:from-brown-800 hover:to-brown-700 transition-all"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
