import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Projects = () => {
    // Sample project data with new modern projects
    const ourProjects = [
        {
            id: 1,
            title: "Skyline Residential Complex",
            category: "Residential",
            industry: "Residential",
            imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Downtown Mumbai, Maharashtra",
            location: "Mumbai, MH",
            shortDescription: "A luxurious 25-story residential complex featuring modern amenities, green spaces, and smart home technology.",
            summary: "Modern residential complex with premium facilities",
            timeline: "18 months",
            totalArea: "2.5M sq ft",
            totalSqFt: "2.5M sq ft",
            budget: "₹85 Cr",
            totalCost: "₹85 Cr",
            client: "Skyline Developers",
            year: "2023",
            slug: "skyline-residential-complex"
        },
        {
            id: 2,
            title: "Tech Hub Corporate Center",
            category: "Commercial",
            industry: "Commercial",
            imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Bandra Kurla Complex, Mumbai",
            location: "Mumbai, MH",
            shortDescription: "State-of-the-art commercial complex designed for tech companies with flexible workspaces and modern infrastructure.",
            summary: "Modern commercial hub for technology companies",
            timeline: "24 months",
            totalArea: "1.8M sq ft",
            totalSqFt: "1.8M sq ft",
            budget: "₹120 Cr",
            totalCost: "₹120 Cr",
            client: "Tech Innovations Ltd",
            year: "2024",
            slug: "tech-hub-corporate-center"
        },
        {
            id: 3,
            title: "Heritage Mall Renovation",
            category: "Renovation",
            industry: "Renovation",
            imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Colaba, Mumbai",
            location: "Mumbai, MH",
            shortDescription: "Complete renovation of a historic shopping mall blending traditional architecture with contemporary retail spaces.",
            summary: "Historic mall renovation with modern retail design",
            timeline: "12 months",
            totalArea: "800K sq ft",
            totalSqFt: "800K sq ft",
            budget: "₹45 Cr",
            totalCost: "₹45 Cr",
            client: "Heritage Properties",
            year: "2023",
            slug: "heritage-mall-renovation"
        },
        {
            id: 4,
            title: "Green Valley Township",
            category: "Residential",
            industry: "Residential",
            imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Pune, Maharashtra",
            location: "Pune, MH",
            shortDescription: "Eco-friendly residential township with sustainable design, solar panels, and green building certification.",
            summary: "Sustainable residential community with green technology",
            timeline: "30 months",
            totalArea: "3.2M sq ft",
            totalSqFt: "3.2M sq ft",
            budget: "₹150 Cr",
            totalCost: "₹150 Cr",
            client: "EcoHomes Development",
            year: "2024",
            slug: "green-valley-township"
        },
        {
            id: 5,
            title: "Luxury Hotel & Spa",
            category: "Hospitality",
            industry: "Hospitality",
            imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Goa, India",
            location: "Goa, India",
            shortDescription: "Premium beachfront hotel and spa complex featuring world-class amenities and breathtaking ocean views.",
            summary: "Luxury hospitality project with premium amenities",
            timeline: "36 months",
            totalArea: "1.2M sq ft",
            totalSqFt: "1.2M sq ft",
            budget: "₹200 Cr",
            totalCost: "₹200 Cr",
            client: "Paradise Resorts",
            year: "2024",
            slug: "luxury-hotel-spa"
        },
        {
            id: 6,
            title: "Industrial Manufacturing Hub",
            category: "Industrial",
            industry: "Industrial",
            imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Aurangabad, Maharashtra",
            location: "Aurangabad, MH",
            shortDescription: "Modern industrial complex with automated systems, efficient logistics, and sustainable manufacturing processes.",
            summary: "Advanced manufacturing facility with automation",
            timeline: "20 months",
            totalArea: "2.8M sq ft",
            totalSqFt: "2.8M sq ft",
            budget: "₹180 Cr",
            totalCost: "₹180 Cr",
            client: "Industrial Solutions Inc",
            year: "2023",
            slug: "industrial-manufacturing-hub"
        }
    ];

    // For viewport detection
    const ref = useRef(null);
    const projectsRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    // State for category filtering
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [categories, setCategories] = useState(['all']);

    // Handle animation when in view
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Update max scroll value when projects are filtered
    useEffect(() => {
        if (projectsRef.current) {
            setMaxScroll(projectsRef.current.scrollWidth - projectsRef.current.clientWidth);
        }
    }, [projectsRef, filteredProjects]);

    // Extract categories and set initial filtered projects
    useEffect(() => {
        // Extract unique categories
        const allCategories = ourProjects.map(project => project.category || project.industry);
        const uniqueCategories = ['all', ...new Set(allCategories.filter(Boolean))];
        setCategories(uniqueCategories);

        // Initialize with all projects
        setFilteredProjects(ourProjects);
    }, []);

    // Handle scroll navigation
    const handleScroll = (direction) => {
        if (projectsRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 600 : 300;
            const newPosition = direction === 'right'
                ? Math.min(scrollPosition + scrollAmount, maxScroll)
                : Math.max(scrollPosition - scrollAmount, 0);

            projectsRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    // Track scroll position for navigation button states
    const handleProjectsScroll = () => {
        if (projectsRef.current) {
            setScrollPosition(projectsRef.current.scrollLeft);
        }
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setActiveCategory(category);

        // Filter projects based on selected category
        if (category === 'all') {
            setFilteredProjects(ourProjects);
        } else {
            const filtered = ourProjects.filter(project =>
                (project.category === category) || (project.industry === category)
            );
            setFilteredProjects(filtered);
        }

        // Reset scroll position when changing category
        if (projectsRef.current) {
            projectsRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            setScrollPosition(0);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1
            }
        }),
        hover: {
            y: -15,
            scale: 1.03,
            rotateY: 5,
            boxShadow: "0 25px 50px -12px rgba(139, 0, 0, 0.25), 0 0 30px rgba(255, 255, 255, 0.1)",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const buttonVariants = {
        initial: {
            scale: 1,
            background: "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)",
            color: "#ffffff",
            boxShadow: "0 4px 15px rgba(127, 29, 29, 0.4)"
        },
        hover: {
            scale: 1.05,
            background: "linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)",
            boxShadow: "0 8px 25px rgba(127, 29, 29, 0.6), 0 0 20px rgba(255, 255, 255, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                delay: 0.2 + (i * 0.1),
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            scale: 1.1,
            y: -10,
            rotateY: 10,
            boxShadow: "0 20px 40px rgba(127, 29, 29, 0.3)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const navButtonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200
            }
        },
        hover: {
            scale: 1.2,
            rotate: 360,
            boxShadow: "0 0 20px rgba(127, 29, 29, 0.8)",
            background: "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)",
            transition: {
                type: "spring",
                stiffness: 400,
                rotate: { duration: 0.6 }
            }
        },
        tap: {
            scale: 0.9
        }
    };

    const filterContainerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.08
            }
        }
    };

    const filterItemVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        },
        active: {
            scale: 1.1,
            background: "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)",
            color: "#ffffff",
            boxShadow: "0 8px 25px rgba(127, 29, 29, 0.5), 0 0 15px rgba(255, 255, 255, 0.2)"
        },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white min-h-screen"
            style={{
                background: `
                    radial-gradient(circle at 20% 80%, rgba(127, 29, 29, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(69, 10, 10, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(127, 29, 29, 0.2) 0%, transparent 50%),
                    linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
                `
            }}
            id='projects'
            ref={ref}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 right-10 w-32 h-32 border border-red-900/20 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 left-10 w-24 h-24 border border-white/10 rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading Section with enhanced animation */}
                <motion.div
                    variants={headingVariants}
                    initial="hidden"
                    animate={controls}
                    className="text-center mb-16 sm:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative inline-block"
                    >
                        <motion.h2
                            className="text-5xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-white via-red-100 to-red-900 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Our Projects
                        </motion.h2>
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: "100%" } : {}}
                            transition={{ duration: 1, delay: 1 }}
                            className="h-2 bg-gradient-to-r from-red-900 via-red-800 to-red-700 rounded-full mx-auto mt-2"
                            style={{ maxWidth: "200px" }}
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mt-6 px-4 leading-relaxed"
                    >
                        Discover our portfolio of exceptional projects that showcase innovation, craftsmanship, and architectural excellence.
                    </motion.p>
                </motion.div>

                {/* Category Filter Tabs - Enhanced with neon design */}
                <motion.div
                    variants={filterContainerVariants}
                    initial="hidden"
                    animate={controls}
                    className="mb-16"
                >
                    <div className="w-full text-center mb-8">
                        <h3 className="text-2xl font-bold text-red-900 mb-2">Explore Categories</h3>
                        <div className="w-20 h-1 bg-red-900 mx-auto rounded-full"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 px-2 max-w-5xl mx-auto">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                variants={filterItemVariants}
                                initial="hidden"
                                animate={activeCategory === category ? "active" : "visible"}
                                whileHover={activeCategory !== category ? { 
                                    scale: 1.05, 
                                    boxShadow: "0 0 20px rgba(127, 29, 29, 0.4)",
                                    background: "rgba(127, 29, 29, 0.1)"
                                } : {}}
                                whileTap="tap"
                                onClick={() => handleCategoryChange(category)}
                                className={`px-8 py-3 text-sm font-medium rounded-full border-2 transition-all duration-300 backdrop-blur-sm ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-red-900 to-red-800 text-white border-red-800 shadow-lg font-bold'
                                        : 'bg-black/50 text-white border-red-900/50 hover:border-red-800'
                                }`}
                            >
                                {category === 'all' ? 'All Projects' : category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Empty state for when no projects match the filter */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 px-4"
                    >
                        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto shadow-2xl border border-red-900/30">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="mx-auto mb-6"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-900 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
                            <p className="text-gray-400 mb-8">We couldn't find any projects matching this category.</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleCategoryChange('all')}
                                className="px-8 py-3 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-lg hover:from-red-800 hover:to-red-700 transition-all shadow-lg font-medium"
                            >
                                View all projects
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* Projects - With horizontal scroll navigation */}
                {filteredProjects.length > 0 && (
                    <div className="relative -mx-4">
                        {/* Desktop Navigation Buttons */}
                        <div className="hidden sm:block">
                            <motion.button
                                variants={navButtonVariants}
                                initial="hidden"
                                animate={controls}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => handleScroll('left')}
                                disabled={scrollPosition <= 0}
                                className={`absolute left-4 top-1/2 z-20 transform -translate-y-1/2 p-4 rounded-full bg-black/70 backdrop-blur-sm border border-red-900/50 ${
                                    scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                aria-label="Scroll left"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>
                            <motion.button
                                variants={navButtonVariants}
                                initial="hidden"
                                animate={controls}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => handleScroll('right')}
                                disabled={scrollPosition >= maxScroll}
                                className={`absolute right-4 top-1/2 z-20 transform -translate-y-1/2 p-4 rounded-full bg-black/70 backdrop-blur-sm border border-red-900/50 ${
                                    scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                aria-label="Scroll right"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Project Cards - Horizontal Scrolling Container */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls}
                            className="flex overflow-x-auto snap-x snap-mandatory scrolling-touch pb-10 px-4 no-scrollbar"
                            ref={projectsRef}
                            onScroll={handleProjectsScroll}
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    custom={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="flex-shrink-0 w-[350px] sm:w-[420px] mx-4 snap-center bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-900/30 shadow-2xl"
                                    style={{
                                        scrollSnapAlign: 'center',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    {/* Project Image with enhanced overlay */}
                                    <div className="h-64 sm:h-72 overflow-hidden relative group">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            src={project.imageUrl || project.mainImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-red-900/20"
                                        />
                                        {/* Category Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="absolute bottom-4 left-4 flex gap-2"
                                        >
                                            <span className="bg-gradient-to-r from-red-900 to-red-800 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg border border-red-800/50">
                                                {project.category || project.industry}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-6 relative">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-2xl font-bold text-white line-clamp-1">{project.title}</h3>
                                        </div>

                                        {/* Location with icon */}
                                        <div className="flex items-center text-red-900 text-sm mb-4">
                                            <span className="flex items-center">
                                                <motion.svg 
                                                    whileHover={{ scale: 1.2 }}
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-4 w-4 mr-2" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </motion.svg>
                                                {project.address || project.location}
                                            </span>
                                        </div>

                                        {/* Project description */}
                                        <p className="text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed">
                                            {project.shortDescription || project.summary}
                                        </p>

                                        {/* Project Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3 mt-6 mb-6">
                                            {/* Timeline */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="bg-black/50 rounded-xl p-4 border border-red-900/30 flex items-center group"
                                            >
                                                <motion.svg 
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-5 w-5 text-red-900 mr-3 group-hover:text-red-800" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </motion.svg>
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium mb-1">Timeline</p>
                                                    <p className="text-white text-sm font-bold">{project.timeline}</p>
                                                </div>
                                            </motion.div>

                                            {/* Total Area */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="bg-black/50 rounded-xl p-4 border border-red-900/30 flex items-center group"
                                            >
                                                <motion.svg 
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-5 w-5 text-red-900 mr-3 group-hover:text-red-800" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                                </motion.svg>
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium mb-1">Area</p>
                                                    <p className="text-white text-sm font-bold">{project.totalArea || project.totalSqFt}</p>
                                                </div>
                                            </motion.div>

                                            {/* Budget */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="bg-black/50 rounded-xl p-4 border border-red-900/30 flex items-center group"
                                            >
                                                <motion.svg 
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-5 w-5 text-red-900 mr-3 group-hover:text-red-800" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                </motion.svg>
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium mb-1">Budget</p>
                                                    <p className="text-white text-sm font-bold">{project.budget || project.totalCost}</p>
                                                </div>
                                            </motion.div>

                                            {/* Year */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="bg-black/50 rounded-xl p-4 border border-red-900/30 flex items-center group"
                                            >
                                                <motion.svg 
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-5 w-5 text-red-900 mr-3 group-hover:text-red-800" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </motion.svg>
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium mb-1">Year</p>
                                                    <p className="text-white text-sm font-bold">{project.year}</p>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Call to Action Button */}
                                        <motion.button
                                            variants={buttonVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg shadow-lg transition-all duration-300 backdrop-blur-sm border border-red-900/50"
                                            onClick={() => {
                                                // Handle project details navigation
                                                console.log('Navigate to project:', project.slug);
                                            }}
                                        >
                                            <span className="flex items-center justify-center">
                                                View Project Details
                                                <motion.svg
                                                    whileHover={{ x: 5 }}
                                                    transition={{ duration: 0.3 }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 ml-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </motion.svg>
                                            </span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Mobile Navigation Dots */}
                        <div className="flex justify-center mt-8 sm:hidden">
                            <div className="flex space-x-2">
                                {filteredProjects.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === Math.floor(scrollPosition / 350) 
                                                ? 'bg-red-900 shadow-lg' 
                                                : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                        onClick={() => {
                                            if (projectsRef.current) {
                                                projectsRef.current.scrollTo({
                                                    left: index * 350,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Summary Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={statVariants}
                        initial="hidden"
                        animate={controls}
                        whileHover="hover"
                        custom={0}
                        className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-red-900/30 shadow-2xl"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="text-4xl font-black text-red-900 mb-2"
                        >
                            {ourProjects.length}+
                        </motion.div>
                        <p className="text-white font-medium">Projects Completed</p>
                    </motion.div>

                    <motion.div
                        variants={statVariants}
                        initial="hidden"
                        animate={controls}
                        whileHover="hover"
                        custom={1}
                        className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-red-900/30 shadow-2xl"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-4xl font-black text-red-900 mb-2"
                        >
                            ₹800Cr+
                        </motion.div>
                        <p className="text-white font-medium">Total Value</p>
                    </motion.div>

                    <motion.div
                        variants={statVariants}
                        initial="hidden"
                        animate={controls}
                        whileHover="hover"
                        custom={2}
                        className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-red-900/30 shadow-2xl"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-4xl font-black text-red-900 mb-2"
                        >
                            12M+
                        </motion.div>
                        <p className="text-white font-medium">Sq Ft Built</p>
                    </motion.div>

                    <motion.div
                        variants={statVariants}
                        initial="hidden"
                        animate={controls}
                        whileHover="hover"
                        custom={3}
                        className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-red-900/30 shadow-2xl"
                    >
                        <motion.div
                            animate={{ rotate: [0, 180, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="text-4xl font-black text-red-900 mb-2"
                        >
                            5+
                        </motion.div>
                        <p className="text-white font-medium">Years Experience</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Custom styles for hiding scrollbar */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </motion.div>
    );
};

export default Projects;