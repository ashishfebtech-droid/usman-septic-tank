import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaBolt, FaLeaf, FaHeadset, FaArrowRight, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiConcreteBag } from 'react-icons/gi';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      id: 1,
      image: "/images/s1.jpg",  // ✅ Added slash at beginning
      title: "Premium RCC Construction",
      description: "High-quality reinforced cement concrete"
    },
    {
      id: 2,
      image: "/images/s1.jpg",  // ✅ Added slash at beginning
      title: "Durable & Long Lasting", 
      description: "Built to withstand heavy loads and time"
    },
    {
      id: 3,
      image: "/images/s1.jpg",  // ✅ Added slash at beginning
      title: "Expert Installation",
      description: "Professional team for quick installation"
    },
    {
      id: 4,
      image: "/images/s1.jpg",  // ✅ Added slash at beginning
      title: "Custom Sizes Available",
      description: "All sizes from 4×3 ft to 8×3 ft"
    }
  ];

  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <GiConcreteBag className="text-2xl" />, text: "RCC Construction" },
    { icon: <FaShieldAlt className="text-2xl" />, text: "Extra Strong" },
    { icon: <FaBolt className="text-2xl" />, text: "Quick Installation" },
    { icon: <FaLeaf className="text-2xl" />, text: "Eco-Friendly" }
  ];

  return (
    <section id="home" className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brown-100 rounded-full">
              <span className="w-2 h-2 bg-brown-600 rounded-full mr-2"></span>
              <span className="text-brown-700 font-medium text-sm">India's Trusted RCC Septic Tank Manufacturer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900">
                Premium RCC 
                <span className="block text-brown-700">Septic Tanks</span>
              </h1>
              <p className="text-lg text-brown-600 max-w-xl">
                High-quality <strong>Reinforced Cement Concrete</strong> septic tanks that last for generations. 
                Stronger than plastic, better than conventional tanks.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-brown-50 rounded-lg">
                  <div className="text-brown-600">
                    {feature.icon}
                  </div>
                  <span className="text-brown-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="bg-brown-700 text-white px-6 py-3 rounded-lg hover:bg-brown-800 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <FaArrowRight />
              </button>
              <button 
                onClick={scrollToEnquiry}
                className="border-2 border-brown-700 text-brown-700 px-6 py-3 rounded-lg hover:bg-brown-700 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <FaWhatsapp />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-xl font-bold text-brown-800">1000+</div>
                <div className="text-brown-600 text-sm">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-brown-800">15+</div>
                <div className="text-brown-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-brown-800">Pan India</div>
                <div className="text-brown-600 text-sm">Service</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative">
            <div className="bg-brown-100 rounded-2xl p-4 h-[500px] overflow-hidden">
              {/* Carousel Container */}
              <div className="relative h-full rounded-xl overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center flex flex-col items-center justify-end p-8"
                      style={{ backgroundImage: `url(${image.image})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                      
                      {/* Content */}
                      <div className="relative z-10 text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-lg">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
              >
                <FaChevronLeft className="text-brown-700 text-lg" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
              >
                <FaChevronRight className="text-brown-700 text-lg" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;