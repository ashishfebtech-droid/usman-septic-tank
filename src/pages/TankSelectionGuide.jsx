import React from 'react';
import { FaHome, FaBuilding, FaIndustry, FaRuler, FaShieldAlt, FaClock, FaWeight, FaPhone, FaWhatsapp, FaCheck, FaArrowRight } from 'react-icons/fa';

const TankSelectionGuide = () => {
  const useCases = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "घर के लिए",
      description: "छोटे परिवार (4-5 लोग)",
      sizes: ["4×4 ft", "4×3 ft", "4×5 ft"],
      capacity: "800-1500 L",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "दुकान/ऑफिस के लिए", 
      description: "रेस्तरां, छोटे होटल, दुकान",
      sizes: ["8×3 ft", "4×4 ft", "5×2.50 ft"],
      capacity: "1000-2000 L",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <FaIndustry className="text-4xl" />,
      title: "फैक्ट्री के लिए",
      description: "बड़े उद्योग, फैक्ट्री, स्कूल",
      sizes: ["8×3 ft", "8×2.50 ft", "Custom"],
      capacity: "1800-2500 L",
      color: "from-gray-600 to-gray-700"
    }
  ];

  const products = [
    {
      id: 1,
      name: "4×4 ft RCC Septic Tank",
      capacity: "1000 L",
      description: "Perfect for small families (4-5 members). Ideal for residential homes.",
      size: "4×4 ft",
      features: ["4-5 people", "1-day install", "10 years warranty", "Low maintenance"],
      bestFor: "Small Families"
    },
    {
      id: 2,
      name: "8×3 ft RCC Septic Tank", 
      capacity: "2000 L",
      description: "Medium capacity for joint families or small commercial use.",
      size: "8×3 ft",
      features: ["6-8 people", "2-day install", "15 years warranty", "Heavy duty"],
      bestFor: "Joint Families"
    },
    {
      id: 3,
      name: "4×3 ft RCC Septic Tank",
      capacity: "800 L", 
      description: "Compact design for small families or as additional backup tank.",
      size: "4×3 ft",
      features: ["Compact", "Quick install", "8 years warranty", "Cost effective"],
      bestFor: "Small Families"
    },
    {
      id: 4,
      name: "4×4 ft Commercial Tank",
      capacity: "1200 L",
      description: "Heavy duty version with reinforced construction for commercial use.",
      size: "4×4 ft", 
      features: ["Commercial grade", "Extra strong", "12 years warranty", "Heavy usage"],
      bestFor: "Small Restaurants"
    },
    {
      id: 5,
      name: "8×3 ft Industrial Tank",
      capacity: "2500 L", 
      description: "Industrial grade for factories, workshops and medium commercial use.",
      size: "8×3 ft",
      features: ["Industrial grade", "3-day install", "20 years warranty", "Heavy load"],
      bestFor: "Factories"
    },
    {
      id: 6,
      name: "4×5 ft RCC Septic Tank",
      capacity: "1500 L",
      description: "Tall design perfect for areas with height availability.",
      size: "4×5 ft",
      features: ["Tall design", "Good capacity", "10 years warranty", "Space efficient"],
      bestFor: "Medium Families"
    }
  ];

  const advantages = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "30+ साल तक चलते हैं",
      benefit: "लंबी उम्र",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <FaWeight className="text-3xl" />,
      title: "भारी वजन सह सकते हैं", 
      benefit: "मजबूत",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "मौसम का असर नहीं",
      benefit: "टिकाऊ",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <FaRuler className="text-3xl" />,
      title: "सभी साइज उपलब्ध",
      benefit: "कस्टम",
      color: "from-amber-400 to-orange-500"
    }
  ];

  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tank Selection Guide
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            अपनी जरूरत के हिसाब से सही साइज का RCC सेप्टिक टैंक चुनें
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-white font-medium">All Sizes Available</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-white font-medium">Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-white font-medium">Custom Sizes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              आपके लिए सही टैंक
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              अपनी जरूरत के हिसाब से चुनें
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              घर, दुकान या फैक्ट्री - हर जगह के लिए सही साइज
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* RCC Septic Tank Visual */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      {/* RCC Tank Body - Concrete texture with brown tint */}
                      <div className="w-32 h-44 bg-gradient-to-br from-stone-400 via-stone-500 to-amber-900 rounded-t-lg rounded-b-2xl relative overflow-hidden shadow-2xl border-2 border-amber-800">
                        {/* Concrete texture pattern */}
                        <div className="absolute inset-0" style={{
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 10px),
                          repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 10px)`,
                        }}></div>
                        
                        {/* Reinforcement rings */}
                        <div className="absolute top-8 left-0 right-0 h-1 bg-amber-900 opacity-60"></div>
                        <div className="absolute top-16 left-0 right-0 h-1 bg-amber-900 opacity-60"></div>
                        <div className="absolute top-24 left-0 right-0 h-1 bg-amber-900 opacity-60"></div>
                        <div className="absolute top-32 left-0 right-0 h-1 bg-amber-900 opacity-60"></div>
                        
                        {/* Concrete aging spots */}
                        <div className="absolute top-12 left-4 w-3 h-3 bg-amber-900 rounded-full opacity-20"></div>
                        <div className="absolute top-20 right-6 w-2 h-2 bg-amber-800 rounded-full opacity-20"></div>
                        <div className="absolute bottom-16 left-8 w-4 h-4 bg-amber-900 rounded-full opacity-15"></div>
                        
                        {/* Light reflection on concrete */}
                        <div className="absolute top-0 left-2 w-10 h-full bg-gradient-to-r from-white/15 to-transparent"></div>
                      </div>
                      
                      {/* RCC Manhole Cover */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-36 h-10 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 rounded-full shadow-2xl border-4 border-amber-600 overflow-hidden">
                        {/* Manhole texture */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        {/* Manhole handle/grip lines */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-amber-950 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 w-8 h-1 bg-amber-950 rounded-full"></div>
                        {/* Bolt pattern */}
                        <div className="absolute top-2 left-4 w-2 h-2 bg-amber-950 rounded-full"></div>
                        <div className="absolute top-2 right-4 w-2 h-2 bg-amber-950 rounded-full"></div>
                        <div className="absolute bottom-2 left-4 w-2 h-2 bg-amber-950 rounded-full"></div>
                        <div className="absolute bottom-2 right-4 w-2 h-2 bg-amber-950 rounded-full"></div>
                      </div>

                      {/* Icon Badge */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-amber-50">
                        <div className={`text-transparent bg-gradient-to-br ${useCase.color} bg-clip-text`}>
                          {useCase.icon}
                        </div>
                      </div>

                      {/* Capacity Label */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1 rounded-full shadow-md border-2 border-amber-600">
                        <span className="font-bold text-sm">{useCase.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    
                    {/* Sizes */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 text-sm">सही साइज:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {useCase.sizes.map((size, idx) => (
                          <span key={idx} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-amber-200">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={scrollToProducts}
                      className={`w-full bg-gradient-to-r ${useCase.color} text-white py-3 rounded-xl hover:shadow-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <span>और जानें</span>
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
              सभी साइज
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our RCC Septic Tank Sizes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Available in multiple sizes to fit your specific requirements
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  {/* Tank Visual */}
                  <div className="md:w-2/5 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-100 flex items-center justify-center p-8">
                    <div className="text-center">
                      {/* 3D RCC Septic Tank */}
                      <div className="relative flex justify-center mb-4">
                        <div className="relative">
                          {/* RCC Tank Body with concrete texture - Brown tinted */}
                          <div className="w-28 h-36 bg-gradient-to-br from-stone-400 via-stone-500 to-amber-800 rounded-t-lg rounded-b-xl relative overflow-hidden shadow-2xl border-2 border-amber-700">
                            {/* Concrete texture grid */}
                            <div className="absolute inset-0" style={{
                              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(255,255,255,0.04) 6px, rgba(255,255,255,0.04) 8px),
                              repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,255,255,0.04) 6px, rgba(255,255,255,0.04) 8px)`,
                            }}></div>
                            
                            {/* Reinforcement rings (RCC steel rings visible) */}
                            <div className="absolute top-6 left-0 right-0 h-1 bg-amber-900 opacity-50"></div>
                            <div className="absolute top-14 left-0 right-0 h-1 bg-amber-900 opacity-50"></div>
                            <div className="absolute top-22 left-0 right-0 h-1 bg-amber-900 opacity-50"></div>
                            
                            {/* Concrete weathering spots */}
                            <div className="absolute top-8 left-3 w-2 h-2 bg-amber-900 rounded-full opacity-20"></div>
                            <div className="absolute top-16 right-4 w-3 h-3 bg-amber-800 rounded-full opacity-15"></div>
                            
                            {/* Light reflection on concrete surface */}
                            <div className="absolute top-0 left-1 w-8 h-full bg-gradient-to-r from-white/12 to-transparent"></div>
                          </div>
                          
                          {/* RCC Manhole Cover with bolts */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 rounded-full shadow-2xl border-3 border-amber-600 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            {/* Cross handle grip */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-amber-950 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 w-6 h-0.5 bg-amber-950 rounded-full"></div>
                            {/* Corner bolts */}
                            <div className="absolute top-1 left-3 w-1.5 h-1.5 bg-amber-950 rounded-full"></div>
                            <div className="absolute top-1 right-3 w-1.5 h-1.5 bg-amber-950 rounded-full"></div>
                            <div className="absolute bottom-1 left-3 w-1.5 h-1.5 bg-amber-950 rounded-full"></div>
                            <div className="absolute bottom-1 right-3 w-1.5 h-1.5 bg-amber-950 rounded-full"></div>
                          </div>

                          {/* Size Badge on Tank */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white px-3 py-1 rounded-lg shadow-lg border border-amber-700">
                            <span className="font-bold text-xs">{product.size}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-md">
                        <p className="text-amber-700 font-bold text-lg">{product.capacity}</p>
                        <p className="text-gray-600 text-xs">Capacity</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg px-3 py-1 inline-block">
                        <p className="text-amber-800 text-sm font-semibold">
                          {product.bestFor}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaCheck className="text-green-600 text-xs" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-105">
                        <span>Get Quote</span>
                        <FaArrowRight className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              क्यों चुनें
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              RCC टैंक के फायदे
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{advantage.benefit}</h4>
                <p className="text-gray-600 text-sm">{advantage.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            अभी भी कन्फ्यूज हैं कौनसा साइज लें?
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            हमारे एक्सपर्ट से बात करें - मुफ्त सलाह पाएं और सही साइज चुनें
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919012901312"
              className="group inline-flex items-center justify-center bg-white text-amber-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <FaPhone className="mr-3 group-hover:rotate-12 transition-transform" />
              Call: 90129 01312
            </a>
            <a
              href="https://wa.me/919012901312"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <FaWhatsapp className="mr-3 group-hover:scale-110 transition-transform" />
              WhatsApp Now
            </a>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            ⏰ 24x7 Available - कोई भी समय संपर्क करें
          </p>
        </div>
      </section>
    </div>
  );
};

export default TankSelectionGuide;