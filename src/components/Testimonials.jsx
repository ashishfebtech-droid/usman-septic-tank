import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Roorkee",
      rating: 5,
      comment: "Usman Septic Tanks ne meri factory ke liye 5000L tank install kiya. Quality bahut acchi hai aur service bhi professional. 2 saal ho gaye, koi problem nahi aayi.",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Priya Singh",
      location: "Haridwar", 
      rating: 5,
      comment: "Ghar ke liye 4x4 ft tank liya. Installation team bahut cooperative thi. Price bhi competitive hai. Highly recommend!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amit Sharma",
      location: "Dehradun",
      rating: 5,
      comment: "Commercial restaurant ke liye 3000L tank lagwaya. Time pe delivery aur professional work. Bahut satisfied hain.",
      date: "3 months ago"
    },
    {
      id: 4,
      name: "Suresh Patel",
      location: "Muzaffarnagar",
      rating: 5,
      comment: "15 saal se inke tanks use kar raha hun. Quality kabhi compromise nahi ki. RCC tanks sabse best hain.",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Neha Gupta",
      location: "Meerut",
      rating: 5,
      comment: "Quick installation aur reasonable price. WhatsApp pe quick response milta hai. Very reliable service.",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Vikram Yadav",
      location: "Saharanpur",
      rating: 5,
      comment: "Industrial area mein factory ke liye multiple tanks lagwaye. Har tank ki quality same acchi hai. Trusted company.",
      date: "4 months ago"
    }
  ];

  const testimonialsPerView = 3; // Big screens pe 3 dikhayenge
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get current testimonials to show
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerView;
    return testimonials.slice(startIndex, startIndex + testimonialsPerView);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">Customer Reviews</h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            See what our satisfied customers say about our RCC septic tanks and services
          </p>
        </div>

        {/* Carousel for ALL screens */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl mb-6">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / testimonialsPerView)}%)` }}>
              
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / testimonialsPerView}%` }}
                >
                  <div className="bg-brown-50 rounded-2xl p-6 border border-brown-200 hover:shadow-lg transition-shadow h-full">
                    {/* Quote Icon */}
                    <div className="text-brown-400 mb-4">
                      <FaQuoteLeft className="w-8 h-8" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Comment */}
                    <p className="text-brown-700 mb-6 leading-relaxed text-sm lg:text-base">
                      {testimonial.comment}
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <h4 className="font-bold text-brown-900">{testimonial.name}</h4>
                        <p className="text-brown-600 text-sm">{testimonial.location}</p>
                      </div>
                      <span className="text-brown-500 text-xs lg:text-sm">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows & Count - NICHE */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-brown-700 text-white rounded-full flex items-center justify-center hover:bg-brown-800 transition-colors shadow-lg"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <span className="text-brown-700 font-medium">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-brown-700 text-white rounded-full flex items-center justify-center hover:bg-brown-800 transition-colors shadow-lg"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-brown-700' : 'bg-brown-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-brown-800 text-white rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <p className="text-brown-200">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-brown-200">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <p className="text-brown-200">Would Recommend</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;