import React, { useState } from "react";
import {
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaImage,
  FaVideo,
} from "react-icons/fa";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaType, setMediaType] = useState("all"); // "all", "images", "videos"

  // Your actual images (1 to 26)
  const imageFiles = Array.from({ length: 26 }, (_, i) => ({
    id: `img-${i + 1}`,
    src: `/usman-septic-tank/images/${i + 1}.jpg`, // ✅ Changed
    title: `RCC Septic Tank Project ${i + 1}`,
    category: getCategory(i),
    type: "image",
  }));

  // Your actual videos (1 to 13)
  const videoFiles = Array.from({ length: 13 }, (_, i) => ({
    id: `vid-${i + 1}`,
    src: `/usman-septic-tank/videos/video${i + 1}.mp4`, // ✅ Changed
    thumbnail: `/usman-septic-tank/images/${i + 1}.jpg`, // ✅ Changed
    title: `Installation Video ${i + 1}`,
    category: getCategory(i + 26),
    type: "video",
  }));

  // Combine images and videos
  const allMedia = [...imageFiles, ...videoFiles];

  function getCategory(index) {
    const categories = ["residential", "commercial", "industrial", "custom"];
    return categories[index % categories.length];
  }

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "custom", name: "Custom Projects" },
  ];

  const mediaTypes = [
    { id: "all", name: "All Media", icon: <FaSearch /> },
    { id: "image", name: "Photos", icon: <FaImage /> }, // ✅ Changed "images" to "image"
    { id: "video", name: "Videos", icon: <FaVideo /> }, // ✅ Changed "videos" to "video"
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ FIXED: Proper filtering logic
  const filteredMedia = allMedia.filter((item) => {
    // Category filter
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;

    // Media type filter
    const typeMatch = mediaType === "all" || item.type === mediaType;

    return categoryMatch && typeMatch;
  });

  const openLightbox = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setSelectedMedia(filteredMedia[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevMedia = () => {
    const prevIndex =
      (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setSelectedMedia(filteredMedia[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // ✅ Debugging ke liye - console check karo
  // Component ke START mein, return se pehle yeh add karo:
  console.log("=== DEBUG GALLERY ===");
  console.log("Total Images:", imageFiles.length);
  console.log("Total Videos:", videoFiles.length);
  console.log("All Media:", allMedia.length);
  console.log("Media Type Filter:", mediaType);
  console.log("Category Filter:", activeCategory);
  console.log("Filtered Media Count:", filteredMedia.length);
  console.log("Filtered Media:", filteredMedia);
  console.log("=====================");

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Project Gallery
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our completed RCC septic tank projects through photos and
            installation videos
          </p>
        </div>
        {/* Media Type Filters */}
        {/* // Media Type Filters - YE WALA SECTION REPLACE KARO */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {mediaTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                console.log("Changing media type to:", type.id); // Debug
                setMediaType(type.id);
                setCurrentIndex(0); // Reset index bhi karo
              }}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                mediaType === type.id
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              <span>{type.icon}</span>
              <span>{type.name}</span>
            </button>
          ))}
        </div>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                console.log("Category Changed to:", category.id); // Debug
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-amber-700 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Floating Filter Toggle - Mobile */}
        {/* Floating Filter Toggle - Mobile */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 left-6 w-14 h-14 bg-amber-600 text-white rounded-full shadow-2xl hover:bg-amber-700 transition-all z-40 flex items-center justify-center lg:hidden"
          title="Go to Filters"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>
        {/* Stats */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl px-6 py-3 shadow-md border border-amber-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">
                {imageFiles.length}
              </div>
              <div className="text-gray-600 text-sm">Photos</div>
            </div>
            <div className="w-px h-8 bg-amber-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">
                {videoFiles.length}
              </div>
              <div className="text-gray-600 text-sm">Videos</div>
            </div>
            <div className="w-px h-8 bg-amber-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">
                {filteredMedia.length}
              </div>
              <div className="text-gray-600 text-sm">Showing</div>
            </div>
          </div>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((media, index) => (
            <div
              key={media.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(media, index)}
            >
              {/* Media Container */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                {media.type === "image" ? (
                  // Image
                  <img
                    src={media.src}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error("Image failed to load:", media.src);
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  // Video with thumbnail and play button
                  <div className="relative w-full h-full">
                    <img
                      src={media.thumbnail || `/usman-septic-tank/images/1.jpg`} // ✅ Changed
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.error(
                          "Thumbnail failed to load:",
                          media.thumbnail
                        );
                        e.target.src = "/usman-septic-tank/images/1.jpg"; // ✅ Changed
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Media Type Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                      media.type === "image"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {media.type === "image" ? (
                      <FaImage className="text-xs" />
                    ) : (
                      <FaVideo className="text-xs" />
                    )}
                    <span className="capitalize">{media.type}</span>
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  {media.type === "image" ? (
                    <FaSearch className="text-white text-2xl" />
                  ) : (
                    <FaPlay className="text-white text-2xl ml-1" />
                  )}
                </div>
              </div>

              {/* Media Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {media.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm capitalize">
                    {media.category}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {media.type === "image" ? "Photo" : "Video"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* No Results Message */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-amber-600 text-2xl" />
            </div>
            <p className="text-gray-600 text-lg mb-2">
              No media found with current filters.
            </p>
            <p className="text-gray-500 mb-4">
              Media Type: <strong>{mediaType}</strong> | Category:{" "}
              <strong>{activeCategory}</strong>
            </p>
            <button
              onClick={() => {
                setMediaType("all");
                setActiveCategory("all");
              }}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
        {/* Lightbox Modal - Same as before */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            {/* ... lightbox code ... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
