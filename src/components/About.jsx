import React from 'react';
import { FaAward, FaUsers, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaAward className="text-3xl" />,
      title: "15+ Years Experience",
      description: "Over 15 years of expertise in RCC septic tank manufacturing and installation"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "1000+ Happy Customers", 
      description: "Trusted by more than 1000 satisfied customers across the region"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Quality Assurance",
      description: "Every tank undergoes strict quality checks for durability and performance"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Warranty Protected",
      description: "Comprehensive warranty on all our RCC septic tank products"
    }
  ];

  const whyChooseUs = [
    "Premium quality cement and steel used",
    "Expert engineering and design",
    "Quick and professional installation", 
    "Custom sizes available",
    "Competitive pricing",
    "After-sales support",
    "Eco-friendly construction",
    "Long lifespan (30+ years)"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">About Usman Septic Tanks</h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            Leading manufacturers of high-quality RCC septic tanks with a legacy of trust and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - About Text */}
          <div className="space-y-6">
            <div className="bg-brown-50 rounded-2xl p-6 border border-brown-200">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Our Story</h3>
              <p className="text-brown-600 mb-4">
                For over 15 years, Usman Septic Tanks has been at the forefront of providing 
                reliable and durable RCC septic tank solutions. We understand the importance 
                of proper waste management and have dedicated ourselves to creating products 
                that stand the test of time.
              </p>
              <p className="text-brown-600">
                Our commitment to quality, customer satisfaction, and innovative engineering 
                has made us the preferred choice for residential, commercial, and industrial 
                clients across the region.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-brown-50 rounded-2xl p-6 border border-brown-200">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-brown-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-brown-200 hover:shadow-lg transition-shadow">
                <div className="text-brown-600 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brown-900 mb-2">{feature.title}</h4>
                  <p className="text-brown-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mission Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brown-800 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-brown-100">
              To provide high-quality, durable RCC septic tank solutions that ensure 
              environmental safety and customer satisfaction. We aim to set new standards 
              in waste management through innovative engineering and reliable service.
            </p>
          </div>
          <div className="bg-brown-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-brown-100">
              To become the most trusted name in RCC septic tank manufacturing, 
              known for quality, reliability, and exceptional customer service 
              across the nation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;