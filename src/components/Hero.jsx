import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  Leaf,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState({});

  const carouselSlides = [
    {
      id: 1,
      image: "/usman-septic-tank/images/s1.jpg",
      title: "Premium RCC Construction",
      description: "High-quality reinforced cement concrete built to last",
      gradient: "from-amber-900 via-amber-800 to-amber-900",
      pattern: "concrete",
    },
    {
      id: 2,
      image: "/usman-septic-tank/images/s2.jpg",
      title: "Durable & Long Lasting",
      description: "Built to withstand heavy loads and test of time",
      gradient: "from-stone-900 via-stone-800 to-stone-900",
      pattern: "grid",
    },
    {
      id: 3,
      image: "/usman-septic-tank/images/s3.jpg",
      title: "Expert Installation",
      description: "Professional team ensures quick & hassle-free setup",
      gradient: "from-amber-800 via-yellow-700 to-amber-800",
      pattern: "dots",
    },
    {
      id: 4,
      image: "/usman-septic-tank/images/s4.jpg",
      title: "Custom Sizes Available",
      description: "All sizes from 4×3 ft to 8×3 ft available",
      gradient: "from-yellow-900 via-amber-800 to-yellow-900",
      pattern: "diagonal",
    },
  ];

  const scrollToEnquiry = () => {
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      text: "RCC Construction",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Extra Strong",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Quick Installation",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      text: "Eco-Friendly",
      color: "bg-green-100 text-green-700",
    },
  ];

  const getPattern = (pattern) => {
    switch (pattern) {
      case "concrete":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="concrete"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                  fill="rgba(255,255,255,0.1)"
                />
                <rect
                  x="50"
                  y="50"
                  width="50"
                  height="50"
                  fill="rgba(255,255,255,0.1)"
                />
                <circle cx="25" cy="25" r="3" fill="rgba(255,255,255,0.2)" />
                <circle cx="75" cy="75" r="3" fill="rgba(255,255,255,0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#concrete)" />
          </svg>
        );
      case "grid":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        );
      case "dots":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="15" cy="15" r="2" fill="rgba(255,255,255,0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        );
      case "diagonal":
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="diagonal"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 50 L 50 0"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
                <path
                  d="M 25 50 L 50 25"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2.5 bg-linear-to-r from-amber-100 to-yellow-100 rounded-full border border-amber-200 shadow-sm">
              <span className="w-2.5 h-2.5 bg-amber-600 rounded-full mr-3 animate-pulse"></span>
              <span className="text-amber-800 font-semibold text-sm">
                India's Trusted RCC Septic Tank Manufacturer
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-gray-900">Premium</span>
                <span className="block bg-linear-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                  RCC Septic Tanks
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                High-quality{" "}
                <span className="font-bold text-amber-700">
                  Reinforced Cement Concrete
                </span>{" "}
                septic tanks that last for generations. Stronger than plastic,
                better than conventional tanks.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 ${
                    feature.color.split(" ")[0]
                  }`}
                >
                  <div className={`${feature.color.split(" ")[1]}`}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToProducts}
                className="group bg-linear-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-xl hover:from-amber-800 hover:to-amber-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToEnquiry}
                className="group border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-xl hover:bg-amber-700 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-105"
              >
                <span>Get Free Quote</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-extrabold bg-linear-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-gray-600 text-sm font-medium mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold bg-linear-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-gray-600 text-sm font-medium mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold bg-linear-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
                  Pan India
                </div>
                <div className="text-gray-600 text-sm font-medium mt-1">
                  Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Carousel */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Carousel Slides */}
              {carouselSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="w-full h-full relative">
                    {/* Background Image */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        setImageError((prev) => ({
                          ...prev,
                          [slide.id]: true,
                        }));
                        e.target.style.display = "none";
                      }}
                      style={{
                        display: imageError[slide.id] ? "none" : "block",
                      }}
                    />

                    {/* Fallback Gradient Background (shows if image fails) */}
                    <div
                      className={`w-full h-full bg-linear-to-br ${slide.gradient} flex-col items-center justify-center p-12 relative overflow-hidden`}
                      style={{
                        display: imageError[slide.id] ? "flex" : "none",
                      }}
                    >
                      {/* Background Pattern */}
                      {getPattern(slide.pattern)}

                      {/* Decorative Elements */}
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                      {/* Icon */}
                      <div className="relative z-10 inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                        <Package className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    {/* Dark Overlay - Gradient from bottom */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Content - Positioned at bottom */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-8 pb-16">
                      <div className="relative z-10 text-center space-y-2">
                        <h3 className="text-2xl md:text-2xl font-bold text-white leading-tight drop-shadow-2xl">
                          {slide.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/95 max-w-2xl mx-auto drop-shadow-lg">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows - Hidden */}
              <div className="hidden">
                <button onClick={prevSlide}>
                  <ChevronLeft className="text-amber-700 w-7 h-7" />
                </button>
                <button onClick={nextSlide}>
                  <ChevronRight className="text-amber-700 w-7 h-7" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-white"
                        : "w-2 h-2 bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badge - Hidden */}
            <div className="hidden">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    ISO Certified
                  </div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
