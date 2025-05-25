import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-[600px] bg-[#f5f5f5] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left mt-8 md:mt-0"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif leading-tight text-gray-900 mb-4"
          >
           
           
           Stories That Stay With You
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-red-500 tracking-wide text-sm md:text-base mb-8"
          >
            FOR AUTHORS, REVIEWERS & PUBLISHERS
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-red-500 text-white hover:bg-red-600 transition-colors text-sm"
            >
              TAKE TOUR
            </motion.button>
            
           <motion.a
          href="https://www.amazon.in/Books-Jaiwanti-Dimri/s?rh=n%3A976389031%2Cp_27%3AJaiwanti%2BDimri"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm"
        >
          PURCHASE
        </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Image Section */}
        <div className="relative flex justify-center items-center w-full md:w-auto mt-8 md:mt-0">
          {/* Second Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            src="/images/hero2.png"
            alt="Second Visual"
            className="mt-4 md:mt-0 md:mr-4 w-[200px] md:w-[300px] lg:w-[350px] h-auto rounded-lg shadow-md"
          />

          {/* Main Image */}
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              y: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              } 
            }}
            src="/images/hero1.png"
            alt="Main Visual"
            className="w-[250px] md:w-[350px] lg:w-[400px] h-auto rounded-lg shadow-lg"
          />

          {/* Decorative Graphics */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 md:-top-6 right-4 md:right-8 w-10 md:w-14 lg:w-16 h-18 md:h-24 lg:h-28 bg-[#e9c46a] rounded-full"
          />
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-6 md:top-8 right-6 md:right-8 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-[#e76f51] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}