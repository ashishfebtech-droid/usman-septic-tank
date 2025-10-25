import React, { useState } from "react";
import {
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Temporary Unsplash images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "public/images/s1.jpg",
      title: "4×4 ft RCC Tank Installation",
      category: "residential",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
      title: "8×3 ft Commercial Tank",
      category: "commercial",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581092921461-39ec9a3b5636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Industrial Tank Setup",
      category: "industrial",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Custom Size Installation",
      category: "custom",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Residential Project",
      category: "residential",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581092921461-39ec9a3b5636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Factory Installation",
      category: "industrial",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Shop Tank Setup",
      category: "commercial",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Large Capacity Tank",
      category: "industrial",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "custom", name: "Custom Projects" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="pt-24 min-h-screen bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            See our completed RCC septic tank projects and installations
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-brown-700 text-white"
                  : "bg-white text-brown-700 border border-brown-300 hover:bg-brown-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              {/* Actual Image */}
              <div className="aspect-square bg-brown-200 relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="absolute inset-0 hidden items-center justify-center bg-brown-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brown-300 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaSearch className="text-brown-600 text-xl" />
                    </div>
                    <p className="text-brown-600 text-sm">Image Loading...</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <FaSearch className="text-white text-2xl" />
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-brown-900 mb-2">
                  {image.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-brown-100 text-brown-700 rounded-full text-sm capitalize">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brown-600 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-brown-300 transition-colors z-10"
              >
                ✕
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video bg-brown-200 relative">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brown-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-brown-600">
                    Category:{" "}
                    <span className="capitalize">{selectedImage.category}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brown-100 transition-colors"
                  >
                    <FaArrowLeft className="text-brown-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brown-100 transition-colors"
                  >
                    <FaArrowRight className="text-brown-700" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;