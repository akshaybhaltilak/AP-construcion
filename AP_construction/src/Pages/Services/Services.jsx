import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const servicesData = [
    {
      title: "Planning",
      description: "Strategic project planning for optimal outcomes",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "Our comprehensive planning services include detailed project scoping, timeline development, resource allocation, and risk assessment. We create a solid foundation for your project with clear milestones and efficient workflows to ensure success from conception to completion.",
      icon: "📐",
      color: "from-red-900 to-orange-500"
    },
    {
      title: "Sanctioning",
      description: "Expert guidance through regulatory approvals",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
      longDescription: "We navigate complex approval processes with regulatory bodies, ensuring all permits and sanctions are obtained efficiently. Our team handles paperwork, compliance checks, and government liaisons to prevent costly delays and keep your project on track.",
      icon: "📝",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Building Construction",
      description: "Complete construction management solutions",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "From groundbreaking to final inspections, our construction services deliver exceptional quality craftsmanship. We maintain strict adherence to timelines, budgets, and safety standards while providing transparent communication throughout your project's lifecycle.",
      icon: "🏗️",
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "3D Modeling",
      description: "Immersive visualizations of your project",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      longDescription: "Our advanced 3D modeling creates photorealistic renderings and interactive walkthroughs. Experience your space before construction begins, allowing for design refinements and confident decision-making about materials, layouts, and finishes.",
      icon: "🖥️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interior Design",
      description: "Harmonious and functional spaces",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      longDescription: "Our interior design team creates spaces that balance aesthetics with functionality. We incorporate your personal style while optimizing flow, lighting, and spatial relationships to create environments that are both beautiful and practical.",
      icon: "🛋️",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Renovation",
      description: "Transforming existing structures with care",
      image: "https://images.unsplash.com/photo-1600566752229-250ed79470f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "We breathe new life into existing structures through careful renovation that preserves character while updating functionality. Our approach enhances efficiency, comfort, and appearance while respecting the building's original integrity.",
      icon: "🔨",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Estimation",
      description: "Accurate financial planning",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "Our detailed estimation services provide comprehensive cost breakdowns, helping you plan financially with confidence. We analyze materials, labor, timelines, and potential variables to create accurate projections and prevent budget overruns.",
      icon: "💰",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Land Sub-division",
      description: "Professional land development",
      image: "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      longDescription: "We handle the complexities of land subdivision including surveys, legal requirements, and infrastructure planning. Our team coordinates with local authorities to maximize land value while ensuring compliance with all regulations.",
      icon: "🏞️",
      color: "from-lime-500 to-green-500"
    }
  ];

  const openServiceDetails = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const goToContact = () => {
    navigate('/contact');
    closeServiceDetails();
  };

  return (
    <>
      <Helmet>
        <title>Premium Construction Services | Vastushobha Construction</title>
        <meta name="description" content="Comprehensive construction services including residential buildings, commercial complexes, renovations, and Vastu-compliant designs by Vastushobha Construction." />
        <meta name="keywords" content="construction services, vastu construction, building contractors, home renovation" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="relative bg-gray-900 min-h-screen w-full overflow-x-hidden" id="services">
        {/* Hero Section */}
        <div className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-800"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Crafting Excellence
              </motion.h1>
              <motion.h2
                className="text-3xl md:text-4xl font-medium text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our Premium Construction Services
              </motion.h2>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-red-900 to-red-700 mb-8 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.p
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From visionary concepts to masterful execution, we deliver comprehensive construction solutions tailored to your unique requirements and aspirations.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onClick={() => openServiceDetails(service)}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                isHovered={hoveredService === index}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 px-4 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-gradient-to-br from-gray-800 to-black p-12 rounded-3xl border border-gray-800 shadow-2xl">
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Begin Your Construction Journey
              </motion.h3>
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our team of experts is ready to transform your vision into reality with precision craftsmanship and innovative solutions.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-900 hover:to-red-700 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  Start Your Project
                </motion.button>
                <motion.button
                  className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl font-bold text-lg text-white border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/portfolio')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2h12V4H6v12a1 1 0 11-2 0V4z" clipRule="evenodd" />
                  </svg>
                  View Our Work
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeServiceDetails}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-800"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <motion.img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <motion.div
                      className={`absolute top-6 right-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${selectedService.color} text-white text-3xl shadow-lg`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {selectedService.icon}
                    </motion.div>
                    <motion.h3
                      className="text-4xl font-bold text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedService.title}
                    </motion.h3>
                    <motion.p
                      className="text-xl text-gray-300 mt-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedService.description}
                    </motion.p>
                  </div>
                </div>

                <div className="p-8 overflow-y-auto flex-grow">
                  <motion.p
                    className="text-gray-300 mb-8 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {selectedService.longDescription}
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="font-bold text-xl text-white mb-4">Our Approach</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-300">Vastu-compliant designs for harmonious living spaces</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-300">10+ years of construction expertise</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-300">Transparent pricing with no hidden costs</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-300">Premium materials from trusted suppliers</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 border-t border-gray-800">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className="flex-1 py-4 px-6 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium text-white transition-colors border border-gray-700 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={closeServiceDetails}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Close
                    </motion.button>
                    <motion.button
                      className="flex-1 py-4 px-6 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-900 hover:to-red-700 rounded-xl font-medium text-white transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={goToContact}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Get a Free Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ service, index, onClick, onMouseEnter, onMouseLeave, isHovered }) => {
  return (
    <motion.div
      className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90 rounded-2xl"
        animate={{
          opacity: isHovered ? 0.7 : 0.9
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Image with parallax effect */}
      <motion.div 
        className="absolute inset-0 overflow-hidden rounded-2xl"
        animate={{
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Top icon with gradient */}
        <motion.div
          className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white text-2xl shadow-lg ml-auto`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          {service.icon}
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-2"
            animate={{
              color: isHovered ? `var(--color-${service.color.split('-')[1]}-400)` : "#ffffff"
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="text-gray-300 text-base mb-6"
            animate={{
              y: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700"
              animate={{
                x: isHovered ? 5 : 0,
                backgroundColor: isHovered ? `rgba(var(--color-${service.color.split('-')[1]}-900), 0.3)` : "rgba(0, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-medium">Learn more</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{
                  stroke: isHovered ? `var(--color-${service.color.split('-')[1]}-400)` : "#ffffff"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hover overlay - animated border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl pointer-events-none border-2"
        animate={{
          borderColor: isHovered ? `var(--color-${service.color.split('-')[1]}-500)` : "rgba(255,255,255,0.1)",
          boxShadow: isHovered ? `0 0 20px 0 rgba(var(--color-${service.color.split('-')[1]}-500), 0.3)` : "none"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Services;