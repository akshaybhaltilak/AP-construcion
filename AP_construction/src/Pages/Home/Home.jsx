import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BadgeIndianRupee, Clock, Star, Users, ArrowRight, PlayCircle } from 'lucide-react';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';
import Projects from '../Projects/Projects';
import Contactform from '../ContactUs/ContactUs';
import About from '../AboutUs/About';
import { NavLink } from 'react-router-dom';

const services = [
  {
    name: "Architectural Planning",
    href: "/services/planning",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80",
    description: "Innovative architectural planning with cutting-edge design solutions that transform your vision into reality.",
    category: "Design"
  },
  {
    name: "Project Sanctioning",
    href: "/services/sanctioning",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80",
    description: "Comprehensive legal approvals and regulatory compliance for seamless project execution.",
    category: "Legal"
  },
  {
    name: "Premium Construction",
    href: "/services/buildingconstruction",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    description: "World-class construction services delivering exceptional quality for residential and commercial projects.",
    category: "Construction"
  },
  {
    name: "3D Visualization",
    href: "/services/3dmodeling",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    description: "Photorealistic 3D renderings and virtual walkthroughs to visualize your dream space before construction.",
    category: "Technology"
  },
  {
    name: "Luxury Interiors",
    href: "/services/interiordesigning",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2858&q=80",
    description: "Sophisticated interior design solutions that blend aesthetics with functionality for premium living spaces.",
    category: "Design"
  },
  {
    name: "Modern Renovation",
    href: "/services/renovation",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    description: "Contemporary renovation services that breathe new life into existing spaces with modern upgrades.",
    category: "Renovation"
  },
  {
    name: "Cost Estimation",
    href: "/services/estimation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    description: "Precise cost analysis and budget planning to ensure your project stays within financial parameters.",
    category: "Finance"
  },
  {
    name: "Land Development",
    href: "/services/landsubdivision",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    description: "Strategic land subdivision and development services with complete legal documentation and approvals.",
    category: "Development"
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Enhanced animation variants
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Text animation variants
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const textItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98, y: 0 }
  };

  const renderIndicators = () => {
    return (
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center items-center gap-2 z-30 px-4">
        <div className="bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 transition-all duration-500 ${
                index === currentIndex 
                  ? "bg-red-500 w-6 sm:w-8 shadow-lg shadow-red-500/50" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>AP Construction - Premier Construction Company</title>
        <meta name="description" content="AP Construction offers top-quality construction services. Commercial and residential building solutions with expert craftsmanship." />
        <meta name="keywords" content="AP construction, construction services, building contractor" />
        <link rel="canonical" href="https://apconstruction.in/" />
      </Helmet>
      <div className="relative text-white overflow-hidden bg-black" id="home">
        {/* Hero Carousel Section */}
        <section
          className="relative h-screen w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full z-10"
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${services[currentIndex].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20">
                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-32 h-32 border border-red-500/20 rounded-full hidden lg:block animate-pulse" />
                    <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-white/10 rotate-45 hidden lg:block" />
                    
                    {/* Content container */}
                    <div className="relative h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 z-20">
                      <div className="max-w-7xl mx-auto w-full">
                        <div className="max-w-3xl">
                          <motion.div
                            variants={textContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4 sm:space-y-6"
                          >
                            {/* Category badge */}
                            <motion.div
                              variants={textItemVariants}
                              className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 text-sm font-medium text-red-400"
                            >
                              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                              <span>{services[currentIndex].category}</span>
                            </motion.div>

                            {/* Counter */}
                            <motion.div
                              variants={textItemVariants}
                              className="text-xs sm:text-sm font-mono tracking-widest text-white/60 flex items-center space-x-2"
                            >
                              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                              <div className="w-8 sm:w-12 h-px bg-red-500" />
                              <span>{String(services.length).padStart(2, '0')}</span>
                            </motion.div>

                            {/* Main heading */}
                            <motion.h1
                              variants={textItemVariants}
                              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white"
                            >
                              <span className="block">
                                {services[currentIndex].name.split(' ')[0]}
                              </span>
                              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                {services[currentIndex].name.split(' ').slice(1).join(' ')}
                              </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                              variants={textItemVariants}
                              className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl"
                            >
                              {services[currentIndex].description}
                            </motion.p>

                            {/* Action buttons */}
                            <motion.div
                              variants={textItemVariants}
                              className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                              <motion.div
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                              >
                                <NavLink
                                  to="#projects"
                                  className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/25 min-w-[200px]"
                                >
                                  <span>Explore Our Work</span>
                                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </NavLink>
                              </motion.div>
                              
                              <motion.div
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                              >
                                <NavLink
                                  to="#contact"
                                  className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:border-red-500 hover:bg-red-600/10 backdrop-blur-sm min-w-[200px]"
                                >
                                  <span>Get Free Quote</span>
                                  <PlayCircle className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
                                </NavLink>
                              </motion.div>
                            </motion.div>

                            {/* Stats preview */}
                            <motion.div
                              variants={textItemVariants}
                              className="hidden lg:flex items-center space-x-8 pt-8 text-white/60"
                            >
                              <div className="flex items-center space-x-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="text-sm">5.0 Rating</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">500+ Clients</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-green-400" />
                                <span className="text-sm">10+ Years</span>
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {renderIndicators()}

          {/* Enhanced Navigation buttons */}
          <div className="hidden sm:block">
            <button
              onClick={handlePrev}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white z-30 hover:bg-red-600/80 hover:border-red-500/50 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white z-30 hover:bg-red-600/80 hover:border-red-500/50 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile touch areas with visual feedback */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-0 h-full w-1/4 z-20 sm:hidden active:bg-white/5 transition-colors"
            aria-label="Previous slide"
          />
          <button
            onClick={handleNext}
            className="absolute right-0 top-0 h-full w-1/4 z-20 sm:hidden active:bg-white/5 transition-colors"
            aria-label="Next slide"
          />

          {/* Mobile swipe indicator */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wider sm:hidden">
            ← SWIPE →
          </div>
        </section>

        <Stats id="stats" />
        <Services id="services" />
        <Projects id="project" />
        <About />
        <Contactform />
      </div>
    </>
  );
};

export default Home;