import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaUser, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tankSize: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const tankSizes = [
    "4×4 ft RCC Septic Tank",
    "8×3 ft RCC Septic Tank", 
    "4×3 ft RCC Septic Tank",
    "4×4 ft Commercial Tank",
    "8×3 ft Industrial Tank",
    "4×5 ft RCC Septic Tank",
    "5×2.50 ft RCC Septic Tank",
    "8×2.50 ft RCC Septic Tank",
    "Custom Size",
    "Not Sure - Need Guidance"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your enquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        tankSize: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      info: "+91 90129 01312",
      link: "tel:+919012901312",
      description: "Mon-Sun: 8AM - 8PM"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp", 
      info: "+91 90129 01312",
      link: "https://wa.me/919012901312",
      description: "Quick response guaranteed"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      info: "usmanseptiktankuk17@gmail.com",
      link: "mailto:usmanseptiktankuk17@gmail.com",
      description: "Send us your requirements"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      info: "Roorkee Railway Station, Paniyala Road",
      link: "#",
      description: "Get free site consultation"
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      url: "#",
      color: "bg-blue-500"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram", 
      url: "#",
      color: "bg-pink-500"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "#",
      color: "bg-blue-400"
    }
  ];

  return (
    <section id="enquiry" className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">Get Free Quote & Consultation</h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Interested in our RCC septic tanks? Fill out the form below and our expert will contact you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-brown-200">
              <h3 className="text-2xl font-bold text-brown-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-start space-x-4 p-4 bg-brown-50 rounded-lg hover:bg-brown-100 transition-colors group"
                  >
                    <div className="text-brown-600 group-hover:text-brown-700">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brown-900">{method.title}</h4>
                      <p className="text-brown-700 font-semibold">{method.info}</p>
                      <p className="text-brown-600 text-sm">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-brown-200">
                <h4 className="font-bold text-brown-900 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="bg-brown-800 text-white rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-3">Why Contact Us?</h4>
              <ul className="space-y-2 text-brown-100">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Free Site Visit & Consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Best Price Guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Expert Technical Guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Quick Installation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-brown-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-brown-700 font-semibold mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-brown-700 font-semibold mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-brown-700 font-semibold mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Tank Size */}
                  <div>
                    <label className="block text-brown-700 font-semibold mb-2">
                      Interested Tank Size
                    </label>
                    <select
                      name="tankSize"
                      value={formData.tankSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
                    >
                      <option value="">Select tank size</option>
                      {tankSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-brown-700 font-semibold mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500"
                    placeholder="Tell us about your specific requirements, site details, or any questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brown-700 text-white py-4 rounded-lg hover:bg-brown-800 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry & Get Free Quote'}
                </button>

                <p className="text-center text-brown-600 text-sm">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Enquiry;