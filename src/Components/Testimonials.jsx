

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Reviewer",
    content: "This WordPress theme has revolutionized how I present book reviews. It's sleek, intuitive, and perfect for showcasing literature.",
    avatar: "/images/t1.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Author",
    content: "As an author, I needed a theme that could beautifully display my works. This theme exceeded my expectations with its elegant design and easy customization.",
    avatar: "/images/t1.png"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Publisher",
    content: "The flexibility and professional look of this theme have made our publishing house's website stand out. It's a game-changer for book promotion.",
    avatar: "/images/t1.png"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Bookstore Owner",
    content: "Implementing this theme for our online bookstore was the best decision we made. It's user-friendly and has significantly boosted our online sales.",
    avatar: "/images/t1.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) 

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">What Our Users Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonials[currentIndex].content}"</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

