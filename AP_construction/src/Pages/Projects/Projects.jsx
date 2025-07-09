import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronUp, ChevronDown, MapPin, Calendar, User, Heart, Share2, Bookmark, Play, Pause } from 'lucide-react';

const Projects = () => {
    const ourProjects = [
        {
            id: 1,
            title: "Skyline Residential Complex",
            category: "Residential",
            imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Downtown Mumbai, Maharashtra",
            shortDescription: "A luxurious 25-story residential complex featuring modern amenities, green spaces, and smart home technology.",
            owner: {
                name: "Rajesh Sharma",
                position: "Managing Director",
                photo: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            year: "2023",
            likes: 245,
            status: "Completed"
        },
        {
            id: 2,
            title: "Tech Hub Corporate Center",
            category: "Commercial",
            imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Bandra Kurla Complex, Mumbai",
            shortDescription: "State-of-the-art commercial complex designed for tech companies with flexible workspaces and modern infrastructure.",
            owner: {
                name: "Priya Patel",
                position: "CEO",
                photo: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            year: "2024",
            likes: 189,
            status: "In Progress"
        },
        {
            id: 3,
            title: "Heritage Mall Renovation",
            category: "Renovation",
            imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Colaba, Mumbai",
            shortDescription: "Complete renovation of a historic shopping mall blending traditional architecture with contemporary retail spaces.",
            owner: {
                name: "Vikram Mehta",
                position: "Director",
                photo: "https://randomuser.me/api/portraits/men/67.jpg"
            },
            year: "2023",
            likes: 312,
            status: "Completed"
        },
        {
            id: 4,
            title: "Green Valley Township",
            category: "Residential",
            imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            address: "Pune, Maharashtra",
            shortDescription: "Eco-friendly residential township with sustainable design, solar panels, and green building certification.",
            owner: {
                name: "Ananya Reddy",
                position: "Chairperson",
                photo: "https://randomuser.me/api/portraits/women/63.jpg"
            },
            year: "2024",
            likes: 156,
            status: "In Progress"
        },
        {
            id: 5,
            title: "Oceanview Luxury Villas",
            category: "Residential",
            imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            address: "Alibaug, Maharashtra",
            shortDescription: "Exclusive beachfront villas with private pools and panoramic ocean views.",
            owner: {
                name: "Nikhil Malhotra",
                position: "Managing Partner",
                photo: "https://randomuser.me/api/portraits/men/41.jpg"
            },
            year: "2023",
            likes: 421,
            status: "Completed"
        },
        {
            id: 6,
            title: "TechPark Bangalore",
            category: "Commercial",
            imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            address: "Whitefield, Bangalore",
            shortDescription: "State-of-the-art IT park with smart building technology and collaborative workspaces.",
            owner: {
                name: "Deepika Iyer",
                position: "CEO",
                photo: "https://randomuser.me/api/portraits/women/68.jpg"
            },
            year: "2022",
            likes: 298,
            status: "Completed"
        }
    ];

    const ref = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [likedProjects, setLikedProjects] = useState(new Set());
    const [bookmarkedProjects, setBookmarkedProjects] = useState(new Set());
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => 
                    prevIndex === ourProjects.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, ourProjects.length]);

    const handleScroll = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollPosition = container.scrollTop;
            const projectHeight = container.scrollHeight / ourProjects.length;
            const newIndex = Math.round(scrollPosition / projectHeight);
            
            if (newIndex !== activeIndex && newIndex >= 0 && newIndex < ourProjects.length) {
                setActiveIndex(newIndex);
            }
        }
    };

    const scrollToProject = (index) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const projectHeight = container.scrollHeight / ourProjects.length;
            container.scrollTo({
                top: index * projectHeight,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const navigateProject = (direction) => {
        const newIndex = direction === 'up' 
            ? Math.max(0, activeIndex - 1)
            : Math.min(ourProjects.length - 1, activeIndex + 1);
        scrollToProject(newIndex);
    };

    const handleLike = (projectId) => {
        setLikedProjects(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectId)) {
                newSet.delete(projectId);
            } else {
                newSet.add(projectId);
            }
            return newSet;
        });
    };

    const handleBookmark = (projectId) => {
        setBookmarkedProjects(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectId)) {
                newSet.delete(projectId);
            } else {
                newSet.add(projectId);
            }
            return newSet;
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const currentProject = ourProjects[activeIndex];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black" id="projects" ref={ref}>
            {/* Header */}
            <motion.div 
                className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Our Projects</h1>
                        <p className="text-gray-300 text-sm mt-1">
                            {activeIndex + 1} of {ourProjects.length} projects
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="flex items-center gap-2 bg-red-900/20 backdrop-blur-sm border border-red-900/30 rounded-full px-4 py-2 text-white hover:bg-red-900/40 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                            {isPlaying ? 'Pause' : 'Play'}
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                ref={containerRef}
                onScroll={handleScroll}
                className="h-full w-full snap-y snap-mandatory overflow-y-auto scrollbar-hide"
            >
                {ourProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={projectVariants}
                        className="h-full w-full flex items-center justify-center snap-start relative"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: index === activeIndex ? 1 : 1.1 }}
                                transition={{ duration: 0.8 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 w-full h-full flex flex-col">
                            {/* Project Info */}
                            <div className="flex-1 flex items-end p-6 pb-32">
                                <motion.div 
                                    className="w-full max-w-md"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: index === activeIndex ? 1 : 0, x: index === activeIndex ? 0 : -30 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {/* Status Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            project.status === 'Completed' 
                                                ? 'bg-green-900/30 text-green-300 border border-green-900/50'
                                                : 'bg-orange-900/30 text-orange-300 border border-orange-900/50'
                                        }`}>
                                            {project.status}
                                        </span>
                                        <span className="bg-red-900/30 text-red-300 border border-red-900/50 px-3 py-1 rounded-full text-xs font-medium">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                                        {project.title}
                                    </h2>

                                    {/* Location */}
                                    <div className="flex items-center text-gray-300 mb-3">
                                        <MapPin size={16} className="mr-2 text-red-400" />
                                        <span className="text-sm">{project.address}</span>
                                    </div>

                                    {/* Year */}
                                    <div className="flex items-center text-gray-300 mb-4">
                                        <Calendar size={16} className="mr-2 text-red-400" />
                                        <span className="text-sm">{project.year}</span>
                                    </div>

                                    {/* Owner Info */}
                                    <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-2xl p-3 mb-4 border border-white/10">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-400">
                                            <img 
                                                src={project.owner.photo} 
                                                alt={project.owner.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">{project.owner.name}</p>
                                            <p className="text-gray-400 text-xs">{project.owner.position}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ 
                                            height: showDetails ? 'auto' : 0, 
                                            opacity: showDetails ? 1 : 0 
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {project.shortDescription}
                                        </p>
                                    </motion.div>

                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="text-red-400 text-sm hover:text-red-300 transition-colors"
                                    >
                                        {showDetails ? 'Show Less' : 'Read More...'}
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Right Side Actions */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
                {/* Like Button */}
                <motion.button
                    onClick={() => handleLike(currentProject.id)}
                    className="flex flex-col items-center gap-1 text-white hover:text-red-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className={`p-3 rounded-full backdrop-blur-sm border ${
                        likedProjects.has(currentProject.id)
                            ? 'bg-red-900/50 border-red-900/50 text-red-400'
                            : 'bg-black/30 border-white/20'
                    }`}>
                        <Heart size={20} fill={likedProjects.has(currentProject.id) ? 'currentColor' : 'none'} />
                    </div>
                    <span className="text-xs">
                        {currentProject.likes + (likedProjects.has(currentProject.id) ? 1 : 0)}
                    </span>
                </motion.button>

                {/* Bookmark Button */}
                <motion.button
                    onClick={() => handleBookmark(currentProject.id)}
                    className="flex flex-col items-center gap-1 text-white hover:text-yellow-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className={`p-3 rounded-full backdrop-blur-sm border ${
                        bookmarkedProjects.has(currentProject.id)
                            ? 'bg-yellow-900/50 border-yellow-900/50 text-yellow-400'
                            : 'bg-black/30 border-white/20'
                    }`}>
                        <Bookmark size={20} fill={bookmarkedProjects.has(currentProject.id) ? 'currentColor' : 'none'} />
                    </div>
                </motion.button>

                {/* Share Button */}
                <motion.button
                    className="flex flex-col items-center gap-1 text-white hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
                        <Share2 size={20} />
                    </div>
                </motion.button>
            </div>

            {/* Navigation Controls */}
            <div className="absolute right-4 bottom-20 z-40 flex flex-col gap-2">
                <motion.button
                    onClick={() => navigateProject('up')}
                    disabled={activeIndex === 0}
                    className={`p-2 rounded-full backdrop-blur-sm border transition-all ${
                        activeIndex === 0 
                            ? 'bg-black/20 border-white/10 text-gray-600' 
                            : 'bg-black/30 border-white/20 text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: activeIndex === 0 ? 1 : 1.1 }}
                    whileTap={{ scale: activeIndex === 0 ? 1 : 0.9 }}
                >
                    <ChevronUp size={20} />
                </motion.button>
                
                <motion.button
                    onClick={() => navigateProject('down')}
                    disabled={activeIndex === ourProjects.length - 1}
                    className={`p-2 rounded-full backdrop-blur-sm border transition-all ${
                        activeIndex === ourProjects.length - 1 
                            ? 'bg-black/20 border-white/10 text-gray-600' 
                            : 'bg-black/30 border-white/20 text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: activeIndex === ourProjects.length - 1 ? 1 : 1.1 }}
                    whileTap={{ scale: activeIndex === ourProjects.length - 1 ? 1 : 0.9 }}
                >
                    <ChevronDown size={20} />
                </motion.button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-4 left-4 right-20 z-40">
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-black/30 backdrop-blur-sm rounded-full h-1">
                        <motion.div 
                            className="bg-red-500 h-full rounded-full"
                            style={{ width: `${((activeIndex + 1) / ourProjects.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <span className="text-white text-xs">
                        {Math.round(((activeIndex + 1) / ourProjects.length) * 100)}%
                    </span>
                </div>
                
                <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                    {ourProjects.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => scrollToProject(index)}
                            className={`flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex 
                                    ? 'bg-red-500 w-6' 
                                    : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Projects;