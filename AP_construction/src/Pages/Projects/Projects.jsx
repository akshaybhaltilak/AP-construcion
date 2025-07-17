import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronUp, ChevronDown, MapPin, Calendar, User, Heart, Share2, Bookmark, Play, Pause } from 'lucide-react';

const Projects = () => {
    const ourProjects = [
        {
            id: 1,
            title: "DR RAVI B KAPKAR",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726707/WhatsApp_Image_2025-07-16_at_19.36.27_f8kgdj.jpg",
            address: "Akola, Maharashtra",
            shortDescription: "Abheejit sir did a great for us,The team was efficient and quick",
            owner: {
                name: "DR RAVI B KAPKAR",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726699/WhatsApp_Image_2025-07-16_at_19.35.28_quyhcm.jpg"
            },
            year: "2023",
            status: "Completed"
        },
        {
            id: 2,
            title: "Ramdas bhagat.",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726704/WhatsApp_Image_2025-07-16_at_19.38.42_kyqrah.jpg",
            address: "PRERNA Nagar KHADAKI AKOLA.",
            shortDescription: "Mr. Abhigit parde is a excellent archkitecher engineer and he give the time to customer, as well as he think about the home owner how i give the perfection in the home, as per my knwoedge he is a good and save to home onwer. Lastely he is excellent. My self to pray to god. 🌹💐🙏👌",
            owner: {
                name: "Ramdas Bhagat",
                position: "M. Sc. B. Ed. Ast. Teacher",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726663/WhatsApp_Image_2025-07-17_at_09.57.12_ynpitp.jpg"
            },
            year: "2024",
            likes: 189,
            status: "In Progress"
        },
        {
            id: 3,
            title: "दादाराव बाबाराव आठवले ",
            category: "Renovation",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726710/WhatsApp_Image_2025-07-16_at_19.40.19_pl63nj.jpg",
            address: "खडकी, अकोला.",
            shortDescription: "माझ्या घराचे बांधकाम आदरणीय श्री पारडे सर (इंजिनियर) व श्री एहसान खान (ठेकेदार) यांच्या मार्गदर्शनाखाली केले असून ,त्यांनी माझ्या स्वप्नाच्याही अपेक्षेपेक्षा उच्चत्तम दर्जाची इलेव्हेशन करून दिलेअसून आज मी आणि माझे कुटुंब त्यांच्या बांधकामावर खुश आहोत .कमी जागेवर माझे घर बांधून    दिलेत .पुढील आयुष्यामध्ये त्यांची अधिकाधिक प्रगती होवो हीच ईश्वरचरणी प्रार्थना करतो.  धन्यवाद सर🙏",
            owner: {
                name: "दादाराव बाबाराव आठवले ",
                position: "शिक्षक",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726691/WhatsApp_Image_2025-07-16_at_19.39.10_ftpn93.jpg"
            },
            year: "2023",
            likes: 312,
            status: "Completed"
        },
        {
            id: 4,
            title: "sunil Shankar Navalkar",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/a_90/v1752726691/WhatsApp_Image_2025-07-16_at_19.41.47_udfenr.jpg",
            address: "khadkki",
            shortDescription: "Eng Abhijit parde sar yanna mi kam deun kharokhar changla nirnay Ghetla karn tyanche kamtar changle ahech pn kadi office la suddha apla kahi chenjes asle tar changlya prakare samjun aplyala yogt margdarshan kartat Jay hind sar👏👏",
            owner: {
                name: "sunil Shankar Navalkar",
                position: "EX Army",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726687/WhatsApp_Image_2025-07-16_at_19.41.10_il01ge.jpg"
            },
            year: "2024",
            likes: 156,
            status: "Completed"
        },
        {
            id: 5,
            title: "संजय तुळशीराम नेमाडे",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752727126/WhatsApp_Image_2025-07-16_at_19.51.18_1_komwt2.jpg",
            address: "Alibaug, Maharashtra",
            shortDescription: "AP कन्ट्रक्शन म्हणजे विश्वासाच दुसर नांव . . तुम्हाला हव असलेलं . . तुमच्या सर्व भावनांचा आदर व विचार करून .स्वप्नातील घर प्रत्यक्षात पूर्ण करून देणारं एकमेव ठिकाण",
            owner: {
                name: "संजय तुळशीराम नेमाडे",
                position: "शिक्षक",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726684/WhatsApp_Image_2025-07-16_at_19.45.22_ikkskr.jpg"
            },
            year: "2023",
            likes: 421,
            status: "Completed"
        },
        {
            id: 6,
            title: "Prashant Rameshwar Navalkar",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726688/WhatsApp_Image_2025-07-16_at_19.52.40_ps7jep.jpg",
            address: "Whitefield, Bangalore",
            shortDescription: "Dear Abhijeet Parde Sir,We are truly grateful to you for turning our dream of a beautiful home into reality. Your dedication, expertise, and attention to detail have made this journey so smooth and memorable for us.Thank you for guiding us through every step of the construction process with so much patience and care. This house is not just a building — it’s a dream fulfilled, and your hard work has made it possible.We feel blessed to have had an engineer like you by our side.🙏",
            owner: {
                name: "Prashant Rameshwar Navalkar",
                position: "Manager at Bank of Baroda",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726676/WhatsApp_Image_2025-07-16_at_19.52.27_apowpf.jpg"
            },
            year: "2022",
            likes: 298,
            status: "Completed"
        },
        {
            id: 7,
            title: "एस. एल. राठोड ",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726687/WhatsApp_Image_2025-07-16_at_19.58.42_iiygli.jpg",
            address: "संत नगरी कौलखेड अकोला ",
            shortDescription: "माझ्या स्वप्न पूर्ती चे स्वप्न जेव्हा मी पहिले तेव्हा मी खूप फिरलो. मग माझी भेट इंजिनीर अभिजित सर यांच्याशी झाली.मित्रहो साहेब ईश्वर रूपात मला मिळाले.मला फक्त प्लॉट घेण्यास मदत केली नाही तर त्या प्लॉट ला सुंदर आकार देऊन एकउत्तुंग असे बिल्डिंग रुपी राहते अतिशय सुंदरस्वप्नातील घर एका वर्षात निर्माण करुन दिले सर आपण दिलेल्या या भेटी साठी मी आयुष्य भर आपला ऋणी आहे.",
            owner: {
                name: "एस. एल. राठोड ",
                position: "",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726668/WhatsApp_Image_2025-07-16_at_19.54.53_cxjpru.jpg"
            },
            year: "2023",
            likes: 421,
            status: "Completed"
        },
        
        {
            id: 8,
            title: "विजय श्रीराम अहिर ",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726689/WhatsApp_Image_2025-07-16_at_20.00.19_cgu0er.jpg",
            address: "नरेन्द्र नगर, अकोला",
            shortDescription: "2 वर्षा पूर्वीचे स्वप्न पारडे साहेबांच्या माध्यमातून पूर्ण झाले. गेल्या वर्षी या नवीन वास्तूत प्रवेश केला आणि स्वप्नपूर्ती चा अनुभव साकार झाला.विश्वास व परंपरा चे नाव ए. पी कॉन्स्ट्रॅकशन. आज अकोला शहरात  अभिजित सरांनी गेल्या काही वर्षांपूर्वी एक रोप लावले होते त्याचे आज एका वृक्षात रूपांतर झालेले आहे. पारडे सरांनी पुढील वाटचाली करिता खूप खूप शुभेच्छा 🌹",
            owner: {
                name: "विजय श्रीराम अहिर ",
                position: "",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726668/WhatsApp_Image_2025-07-16_at_19.59.11_retiit.jpg"
            },
            year: "2023",
            likes: 421,
            status: "Completed"
        },
        {
            id: 9,
            title: "Madan Punjaji Kamble",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726679/WhatsApp_Image_2025-07-16_at_20.01.37_v3gqbv.jpg",
            address: "Alibaug, Maharashtra",
            shortDescription: "AP कन्ट्रक्शन म्हणजे विश्वासाच दुसर नांव . . तुम्हाला हव असलेलं . . तुमच्या सर्व भावनांचा आदर व विचार करून .स्वप्नातील घर प्रत्यक्षात पूर्ण करून देणारं एकमेव ठिकाण",
            owner: {
                name:"Madan Punjaji Kamble",
                position: "Dy. Station ManagarAkola Rly. Station",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726666/WhatsApp_Image_2025-07-16_at_20.00.31_htcxka.jpg"
            },
            year: "2023",
            likes: 421,
            status: "Completed"
        },
        {
            id: 10,
            title: "Syed zakir husain",
            category: "Residential",
            imageUrl: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726685/WhatsApp_Image_2025-07-16_at_20.03.31_lwnkuc.jpg",
            address: "Alibaug, Maharashtra",
            shortDescription: "AP कन्ट्रक्शन म्हणजे विश्वासाच दुसर नांव . . तुम्हाला हव असलेलं . . तुमच्या सर्व भावनांचा आदर व विचार करून .स्वप्नातील घर प्रत्यक्षात पूर्ण करून देणारं एकमेव ठिकाण",
            owner: {
                name: "Syed zakir husain",
                position: "ex sarpanch Barsitakli",
                photo: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1752726665/WhatsApp_Image_2025-07-16_at_20.02.14_vzqaua.jpg"
            },
            year: "2023",
            likes: 421,
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
                                    {/* <div className="flex items-center text-gray-300 mb-3">
                                        <MapPin size={16} className="mr-2 text-red-400" />
                                        <span className="text-sm">{project.address}</span>
                                    </div> */}

                                    {/* Year */}
                                    {/* <div className="flex items-center text-gray-300 mb-4">
                                        <Calendar size={16} className="mr-2 text-red-400" />
                                        <span className="text-sm">{project.year}</span>
                                    </div> */}

                                    {/* Owner Info */}
                                    <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10 shadow-lg">
                                        <div className="w-26 h-26 rounded-xl overflow-hidden border-4 border-red-400 shadow-md transition-transform duration-300 hover:scale-105 bg-white/10">
                                            <img 
                                                src={project.owner.photo} 
                                                alt={project.owner.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base">{project.owner.name}</p>
                                            {project.owner.position && (
                                                <p className="text-gray-400 text-xs mt-1">{project.owner.position}</p>
                                            )}
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
                {/* <motion.button
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
                </motion.button> */}

                {/* Bookmark Button */}
                {/* <motion.button
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
                </motion.button> */}

                {/* Share Button */}
                {/* <motion.button
                    className="flex flex-col items-center gap-1 text-white hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
                        <Share2 size={20} />
                    </div>
                </motion.button> */}
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