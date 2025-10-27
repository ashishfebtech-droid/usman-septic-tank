import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";

const GallerySection = () => {
  const navigate = useNavigate();

  // Featured images for home page
  const featuredImages = [
    {
      id: 1,
      src: "/usman-septic-tank/images/s1.jpg",
      title: "4×4 ft RCC Tank Installation",
      category: "Residential",
    },
    {
      id: 2,
      src: "/usman-septic-tank/images/s2.jpg",
      title: "8×3 ft Commercial Tank",
      category: "Commercial",
    },
    {
      id: 3,
      src: "/usman-septic-tank/images/s3.jpg",
      title: "Industrial Tank Setup",
      category: "Industrial",
    },
    {
      id: 4,
      src: "/usman-septic-tank/images/s4.jpg",
      title: "Custom Size Installation",
      category: "Custom",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our completed RCC septic tank installations across various projects
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/gallery")}
            >
              {/* Image */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-amber-200 to-yellow-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="text-amber-700 w-8 h-8" />
                    </div>
                    <p className="text-amber-700 font-semibold">Loading...</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-semibold mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-bold text-sm">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-xl hover:from-amber-800 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;