import React, { useState, useEffect, useRef } from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaUser, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter,
  FaArrowLeft,
  FaClock,
  FaShieldAlt,
  FaAward
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tankSize: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  // Scroll observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle contact form hash
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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
      icon: <FaPhone className="text-3xl" />,
      title: "Call Us",
      info: "+91 90129 01312",
      link: "tel:+919012901312",
      description: "Mon-Sun: 8AM - 8PM",
      color: "from-green-500 to-green-600",
      badge: "24/7 Available"
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: "WhatsApp", 
      info: "+91 90129 01312",
      link: "https://wa.me/919012901312",
      description: "Quick response guaranteed",
      color: "from-green-400 to-green-500",
      badge: "Instant Reply"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Us",
      info: "usmanseptiktankuk17@gmail.com",
      link: "mailto:usmanseptiktankuk17@gmail.com",
      description: "Send us your requirements",
      color: "from-blue-500 to-blue-600",
      badge: "24h Response"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Visit Us",
      info: "Roorkee Railway Station, Paniyala Road",
      link: "#",
      description: "Get free site consultation",
      color: "from-amber-500 to-orange-600",
      badge: "Free Visit"
    }
  ];

  const features = [
    {
      icon: <FaAward className="text-2xl" />,
      title: "15+ Years Experience",
      description: "Trusted by thousands of customers"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Quality Guarantee", 
      description: "Premium materials & workmanship"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Quick Installation",
      description: "Professional and timely service"
    }
  ];

  // Staggered animation delay function
  const getStaggerDelay = (index) => {
    return index * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      
      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 py-20 pt-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home Button */}
          
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
       

          <div className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get expert consultation and the best prices for your RCC septic tank needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach us for your septic tank requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="block group"
              >
                <div className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-amber-200 hover:shadow-2xl transition-all duration-500 hover:border-amber-300 group-hover:scale-105 h-full text-center ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
              >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {method.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-700 font-semibold mb-2">{method.info}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${getStaggerDelay(index) + 400}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us Your Requirements</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`} style={{ transitionDelay: '600ms' }}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <FaUser className="inline mr-2 text-amber-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`} style={{ transitionDelay: '650ms' }}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <FaPhone className="inline mr-2 text-amber-600" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`} style={{ transitionDelay: '700ms' }}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <FaEnvelope className="inline mr-2 text-amber-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Tank Size */}
                <div className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`} style={{ transitionDelay: '750ms' }}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Interested Tank Size
                  </label>
                  <select
                    name="tankSize"
                    value={formData.tankSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 appearance-none bg-white"
                  >
                    <option value="">Select tank size</option>
                    {tankSizes.map((size, index) => (
                      <option key={index} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '800ms' }}>
                <label className="block text-gray-700 font-semibold mb-3">
                  Additional Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your specific requirements, site details, installation timeline, or any questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`} style={{ transitionDelay: '900ms' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {isSubmitting ? 'Submitting Your Enquiry...' : 'Submit Enquiry & Get Free Quote'}
                </button>
              </div>

              <p className="text-center text-gray-500 text-sm">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
            <p className="text-gray-600">Come visit us for a free site consultation and expert advice</p>
          </div>
          
          <div className={`bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Usman Septic Tanks</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-amber-600 mr-3 text-xl" />
                    <span className="font-semibold">Address:</span>
                    <span className="ml-2">Roorkee Railway Station, Paniyala Road, Roorkee, Uttarakhand</span>
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="text-amber-600 mr-3 text-xl" />
                    <span className="font-semibold">Phone:</span>
                    <span className="ml-2">+91 90129 01312</span>
                  </p>
                  <p className="flex items-center">
                    <FaClock className="text-amber-600 mr-3 text-xl" />
                    <span className="font-semibold">Business Hours:</span>
                    <span className="ml-2">Monday - Sunday: 8:00 AM - 8:00 PM</span>
                  </p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Why Visit Us?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Free site consultation and measurement
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      See actual tank samples and quality
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Get expert technical guidance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Discuss custom requirements
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaMapMarkerAlt className="text-3xl mx-auto mb-2" />
                  <p>Map Location</p>
                  <p className="text-sm">(Google Maps integration can be added here)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;