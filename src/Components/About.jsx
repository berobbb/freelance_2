import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, BookOpen, Award, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".decorative-bg", {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <motion.div 
            ref={containerRef}
            className="min-h-screen bg-[#f8f7f4] p-8 mb-32 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#f0efe9] opacity-30 blur-2xl decorative-bg"
                style={{ scale, opacity }}
            />
            <motion.div 
                className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#e8e7e1] opacity-30 blur-2xl decorative-bg"
                style={{ scale, opacity }}
            />
            
            <div className="max-w-7xl mx-auto relative">
                <motion.div 
                    className="flex justify-between items-center mb-12 relative"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative">
                        <h1 className="text-5xl font-serif text-gray-900 relative z-10">The Author</h1>
                        <motion.div 
                            className="absolute -bottom-2 left-0 w-1/2 h-2 bg-red-200 bg-opacity-50"
                            initial={{ width: 0 }}
                            animate={{ width: '50%' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center pb-10">
                    <motion.div 
                        className="relative flex items-center justify-center"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.div 
                            className="absolute w-3/4 md:h-[600px] -bottom-8 left-8 bg-[#f0efe9] h-[450px] md:w-2/3"
                            whileHover={{ x: 8, y: -8 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                            className="absolute w-3/4 md:h-[600px] -bottom-4 left-6 bg-[#e8e7e1] opacity-50 h-[450px] md:w-2/3"
                            whileHover={{ x: 4, y: -4 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div 
                            ref={imageRef}
                            className="relative w-3/4 md:h-[600px] overflow-hidden h-[450px] md:w-2/3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img 
                                src="/images/main.jpg"
                                alt="Author portrait"
                                className="w-full h-full object-cover "
                            />
                        </motion.div>

                        <motion.div 
                            className="absolute top-4 right-4 w-8 h-8 opacity-50 border-t-2 border-r-2 border-gray-300"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div 
                            className="absolute bottom-4 left-4 w-8 h-8 opacity-50 border-b-2 border-l-2 border-gray-300"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    <motion.div 
                        className="flex flex-col gap-8 relative"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Quote className="absolute -left-8 -top-8 w-16 h-16 text-gray-200 opacity-30" />
                        
                        <motion.h2 
                            className="md:text-5xl font-serif text-gray-900 transition-colors duration-300 text-4xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Jaiwanti Dimri
                        </motion.h2>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.div
                                        key={star}
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Star className="w-5 h-5 fill-red-500 text-red-500" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex gap-4 text-gray-500">
                                <motion.span 
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05, color: "#2196f3" }}
                                >
                                    <BookOpen className="w-4 h-4" /> 12 Books
                                </motion.span>
                                <motion.span 
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05, color: "#ffc107" }}
                                >
                                    <Award className="w-4 h-4" /> 3 Awards
                                </motion.span>
                            </div>
                        </div>

                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="absolute left-0 top-0 w-1 h-full bg-red-200 rounded-full" />
                            <p className="text-gray-600 leading-relaxed pl-6 text-lg">
                                A passionate storyteller with a unique perspective on modern relationships and family dynamics. Her work explores the delicate balance between tradition and personal freedom, weaving tales that resonate with readers across generations.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex items-center gap-4 text-sm text-gray-600 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <motion.span 
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05, color: "#e91e63" }}
                            >
                                <Heart className="w-4 h-4 text-red-400" />
                                10k+ Readers
                            </motion.span>
                            <motion.span 
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05, color: "#ffc107" }}
                            >
                                <Award className="w-4 h-4 text-amber-400" />
                                Bestselling Author
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;