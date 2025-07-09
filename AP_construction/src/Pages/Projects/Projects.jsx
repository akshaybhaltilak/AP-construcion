import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Projects = () => {
    // Sample project data with owner information
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
            year: "2023"
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
            year: "2024"
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
            year: "2023"
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
            year: "2024"
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
        year: "2023"
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
        year: "2022"
    },
    {
        id: 7,
        title: "Heritage Hospital",
        category: "Healthcare",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        address: "Parel, Mumbai",
        shortDescription: "300-bed multi-specialty hospital with cutting-edge medical technology.",
        owner: {
            name: "Dr. Arvind Joshi",
            position: "Chairman",
            photo: "https://randomuser.me/api/portraits/men/72.jpg"
        },
        year: "2021"
    },
    {
        id: 8,
        title: "Riverfront Mixed-Use Development",
        category: "Mixed-Use",
        imageUrl: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        address: "Sabarmati Riverfront, Ahmedabad",
        shortDescription: "Integrated development with retail, offices and residential spaces along the river.",
        owner: {
            name: "Rahul Desai",
            position: "Director",
            photo: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        year: "2024"
    },
    {
        id: 9,
        title: "Hyatt Regency Convention Center",
        category: "Hospitality",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        address: "Hitech City, Hyderabad",
        shortDescription: "5-star hotel with 50,000 sq ft convention center and luxury amenities.",
        owner: {
            name: "Sanjay Gupta",
            position: "Vice President",
            photo: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        year: "2023"
    },
    {
        id: 10,
        title: "Greenfield International School",
        category: "Institutional",
        imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        address: "Greater Noida, Uttar Pradesh",
        shortDescription: "CBSE-affiliated school with smart classrooms and extensive sports facilities.",
        owner: {
            name: "Anjali Kapoor",
            position: "Principal",
            photo: "https://randomuser.me/api/portraits/women/51.jpg"
        },
        year: "2022"
    },
    {
        id: 11,
        title: "Logistics Park",
        category: "Industrial",
        imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        address: "Bhiwandi, Maharashtra",
        shortDescription: "Modern warehousing complex with cold storage and automated material handling.",
        owner: {
            name: "Vikram Sethi",
            position: "Operations Head",
            photo: "https://randomuser.me/api/portraits/men/63.jpg"
        },
        year: "2021"
    },
    {
        id: 12,
        title: "Metro Station Redevelopment",
        category: "Infrastructure",
        imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        address: "Connaught Place, Delhi",
        shortDescription: "Modernization of heritage metro station with improved passenger facilities.",
        owner: {
            name: "Rajiv Khanna",
            position: "Project Director",
            photo: "https://randomuser.me/api/portraits/men/55.jpg"
        },
        year: "2024"
    }
    ];

    const ref = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle animation when in view
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Handle scroll snap
    const handleScroll = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollPosition = container.scrollTop;
            const projectHeight = container.scrollHeight / ourProjects.length;
            const newIndex = Math.round(scrollPosition / projectHeight);
            
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    // Scroll to specific project
    const scrollToProject = (index) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const projectHeight = container.scrollHeight / ourProjects.length;
            container.scrollTo({
                top: index * projectHeight,
                behavior: 'smooth'
            });
        }
    };

    // Animation variants
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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-screen w-full overflow-hidden text-white"
            style={{
                background: `
                    radial-gradient(circle at 20% 80%, rgba(127, 29, 29, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(69, 10, 10, 0.3) 0%, transparent 50%),
                    linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
                `
            }}
            id='projects'
            ref={ref}
        >
            {/* Heading Section */}
            <motion.div
                variants={headingVariants}
                initial="hidden"
                animate={controls}
                className="absolute top-10 left-0 right-0 z-10 text-center"
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-black text-center mb-2 bg-gradient-to-r from-white via-red-100 to-red-900 bg-clip-text text-transparent"
                >
                    Our Projects
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-300 max-w-md mx-auto px-4"
                >
                    Scroll to explore our portfolio
                </motion.p>
            </motion.div>

            {/* Projects Reels Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                ref={containerRef}
                onScroll={handleScroll}
                className="h-full w-full snap-y snap-mandatory overflow-y-auto no-scrollbar"
            >
                {ourProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={projectVariants}
                        className="h-full w-full flex flex-col items-center justify-center snap-start relative"
                    >
                        {/* Project Image */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                        </div>

                        {/* Project Info Overlay */}
                        <div className="relative z-10 w-full max-w-2xl px-6 text-center mt-auto mb-20">
                            {/* Category Tag */}
                            <motion.span 
                                className="inline-block bg-red-900 text-white text-sm px-4 py-1 rounded-full mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {project.category}
                            </motion.span>
                            
                            {/* Project Title */}
                            <motion.h3
                                className="text-3xl md:text-5xl font-bold text-white mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {project.title}
                            </motion.h3>
                            
                            {/* Address */}
                            <motion.div
                                className="flex items-center justify-center text-red-300 text-sm mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {project.address}
                            </motion.div>
                            
                            {/* Owner Info */}
                            <motion.div
                                className="flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 mx-auto w-fit border border-red-900/30"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-red-900">
                                    <img src={project.owner.photo} alt={project.owner.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white text-sm font-medium">{project.owner.name}</p>
                                    <p className="text-red-300 text-xs">{project.owner.position}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Year Indicator */}
                        <motion.div
                            className="absolute bottom-10 left-0 right-0 text-center text-gray-400 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            {project.year}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
                {ourProjects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                                ? 'bg-red-900 w-4' 
                                : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 text-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>Scroll</span>
            </motion.div>

            {/* Custom styles */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </motion.div>
    );
};

export default Projects;