import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const socialLinks = [
    { icon: <FaWhatsapp className="text-brown-600" />, url: 'https://wa.me/919876543210' },
    { icon: <FaFacebook className="text-brown-600" />, url: '#' },
    { icon: <FaInstagram className="text-brown-600" />, url: '#' }
  ];

  return (
    <>
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-brown-800">Usman Septic Tanks</h2>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-brown-700 hover:text-brown-900 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-brown-700 hover:text-brown-900 font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brown-700 hover:text-brown-900 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brown-700 hover:text-brown-900 font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('enquiry')}
                className="bg-brown-700 text-white px-4 py-2 rounded-lg hover:bg-brown-800 font-medium"
              >
                Quick Enquiry
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="text-brown-700 text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 md:hidden">
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-brown-200">
                <h3 className="text-lg font-bold text-brown-800">Menu</h3>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2"
                >
                  <FaTimes className="text-brown-700" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-4 mb-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-brown-700 hover:text-brown-900 font-medium py-3"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left text-brown-700 hover:text-brown-900 font-medium py-3"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-brown-700 hover:text-brown-900 font-medium py-3"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-brown-700 hover:text-brown-900 font-medium py-3"
                >
                  Contact
                </button>
              </nav>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <a href="tel:+919876543210" className="flex items-center space-x-3 text-brown-700">
                  <FaPhone className="text-brown-600" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:info@usmantanks.com" className="flex items-center space-x-3 text-brown-700">
                  <FaEnvelope className="text-brown-600" />
                  <span>info@usmantanks.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Quick Enquiry Button */}
              <button 
                onClick={() => scrollToSection('enquiry')}
                className="w-full bg-brown-700 text-white py-3 rounded-lg font-medium mt-auto"
              >
                Quick Enquiry
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;