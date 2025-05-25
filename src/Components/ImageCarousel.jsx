import React, { useState } from "react"

export default function ImageCarousel() {
  const images = [
    {
      src: "/images/c3.jpg",
      alt: "Forest pathway",
      title: "Child Festival",
    },
    {
      src: "/images/c1.jpg",
      alt: "Beautiful landscape with mountains",
      title: "GUADALAJARA INTERNATIONAL BOOK FAIR 2021",
    },
    {
      src: "/images/c2.png",
      alt: "Ocean sunset view",
      title: "Central University of Jharkhand",
    },
    
    {
      src: "/images/c4.jpg",
      alt: "City skyline at night",
      title: "Central University of Jharkhand",
    },
    {
      src: "/images/c5.png",
      alt: "Desert landscape",
      title: "",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>

      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg bg-black">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-full object-cover"
          style={{ aspectRatio: "16/9" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{images[current].title}</h3>
          <p className="text-sm opacity-90">
            Image {current + 1} of {images.length}
          </p>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full px-3 py-1"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full px-3 py-1"
        >
          &#8594;
        </button>
      </div>

      {/* Thumbnail indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              current === index ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
