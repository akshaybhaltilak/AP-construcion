import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, Star, Users, ChevronRight, Play, Phone, Mail } from 'lucide-react';

// Translation data
const translations = {
    en: {
        premiumQuality: "Premium Quality Since 1999",
        viewPortfolio: "View Our Portfolio",
        getFreeQuote: "Get Free Quote",
        callNow: "Call Now",
        email: "Email",
        licensed: "Licensed & Insured",
        rated: "5-Star Rated",
        clients: "1000+ Happy Clients",
        projectsDone: "Projects Done",
        yearsExperience: "Years Experience",
        services: [
            {
                name: "Planning & Design",
                description: "Strategic architectural planning with innovative design solutions that bring your vision to life with precision and modern aesthetics.",
                stats: "500+ Projects"
            },
            {
                name: "Legal Sanctioning",
                description: "Complete legal compliance and approval services ensuring seamless construction process with all regulatory requirements.",
                stats: "100% Approval Rate"
            },
            {
                name: "Premium Construction",
                description: "World-class construction services using cutting-edge technology and premium materials for lasting quality.",
                stats: "25+ Years Experience"
            },
            {
                name: "3D Visualization",
                description: "Photorealistic 3D modeling and virtual tours that let you experience your dream project before construction begins.",
                stats: "Ultra HD Quality"
            },
            {
                name: "Luxury Interiors",
                description: "Bespoke interior design solutions that blend functionality with aesthetic excellence for modern living spaces.",
                stats: "Award Winning"
            },
            {
                name: "Smart Renovation",
                description: "Transform existing spaces with smart renovation solutions that enhance value and modernize your property.",
                stats: "Zero Waste Policy"
            }
        ]
    },
    hi: {
        premiumQuality: "1999 से प्रीमियम गुणवत्ता",
        viewPortfolio: "हमारा पोर्टफोलियो देखें",
        getFreeQuote: "मुफ्त कोटेशन प्राप्त करें",
        callNow: "अभी कॉल करें",
        email: "ईमेल",
        licensed: "लाइसेंसयुक्त और बीमाकृत",
        rated: "5-स्टार रेटेड",
        clients: "1000+ खुश ग्राहक",
        projectsDone: "पूर्ण परियोजनाएं",
        yearsExperience: "वर्षों का अनुभव",
        services: [
            {
                name: "योजना और डिज़ाइन",
                description: "आधुनिक सौंदर्यशास्त्र के साथ आपके दृष्टिकोण को जीवंत करने वाले नवाचार डिज़ाइन समाधानों के साथ रणनीतिक वास्तुशिल्प योजना।",
                stats: "500+ परियोजनाएं"
            },
            {
                name: "कानूनी मंजूरी",
                description: "सभी नियामक आवश्यकताओं के साथ निर्बाध निर्माण प्रक्रिया सुनिश्चित करने वाली पूर्ण कानूनी अनुपालन और अनुमोदन सेवाएं।",
                stats: "100% अनुमोदन दर"
            },
            {
                name: "प्रीमियम निर्माण",
                description: "स्थायी गुणवत्ता के लिए अत्याधुनिक तकनीक और प्रीमियम सामग्री का उपयोग करके विश्व-स्तरीय निर्माण सेवाएं।",
                stats: "25+ वर्षों का अनुभव"
            },
            {
                name: "3D विज़ुअलाइज़ेशन",
                description: "फोटोरियलिस्टिक 3D मॉडलिंग और वर्चुअल टूर्स जो आपको निर्माण शुरू होने से पहले अपने सपनों की परियोजना का अनुभव करने देते हैं।",
                stats: "अल्ट्रा एचडी गुणवत्ता"
            },
            {
                name: "लक्जरी इंटीरियर",
                description: "आधुनिक रहने की जगहों के लिए कार्यक्षमता को सौंदर्य उत्कृष्टता के साथ मिलाने वाले बेस्पोक इंटीरियर डिज़ाइन समाधान।",
                stats: "पुरस्कार विजेता"
            },
            {
                name: "स्मार्ट नवीनीकरण",
                description: "स्मार्ट नवीनीकरण समाधानों के साथ मौजूदा स्थानों को बदलें जो मूल्य बढ़ाते हैं और आपकी संपत्ति को आधुनिक बनाते हैं।",
                stats: "शून्य अपशिष्ट नीति"
            }
        ]
    },
    mr: {
        premiumQuality: "1999 पासून प्रीमियम गुणवत्ता",
        viewPortfolio: "आमचा पोर्टफोलिओ पहा",
        getFreeQuote: "मोफत कोटेशन मिळवा",
        callNow: "आता कॉल करा",
        email: "ईमेल",
        licensed: "परवानाधारक आणि विमाधारक",
        rated: "5-स्टार रेटेड",
        clients: "1000+ आनंदी ग्राहक",
        projectsDone: "पूर्ण प्रकल्प",
        yearsExperience: "वर्षांचा अनुभव",
        services: [
            {
                name: "नियोजन आणि डिझाइन",
                description: "आधुनिक सौंदर्यशास्त्रासह तुमच्या दृष्टीकोनाला जिवंत करणारे नाविन्यपूर्ण डिझाइन समाधानांसह धोरणात्मक वास्तुशिल्प नियोजन।",
                stats: "500+ प्रकल्प"
            },
            {
                name: "कायदेशीर मंजुरी",
                description: "सर्व नियामक आवश्यकतांसह अखंड बांधकाम प्रक्रिया सुनिश्चित करणाऱ्या संपूर्ण कायदेशीर अनुपालन आणि मंजुरी सेवा।",
                stats: "100% मंजुरी दर"
            },
            {
                name: "प्रीमियम बांधकाम",
                description: "टिकाऊ गुणवत्तेसाठी अत्याधुनिक तंत्रज्ञान आणि प्रीमियम सामग्री वापरून जागतिक दर्जाच्या बांधकाम सेवा।",
                stats: "25+ वर्षांचा अनुभव"
            },
            {
                name: "3D व्हिज्युअलायझेशन",
                description: "फोटोरिअलिस्टिक 3D मॉडेलिंग आणि व्हर्च्युअल टूर्स जे तुम्हाला बांधकाम सुरू होण्यापूर्वी तुमच्या स्वप्नातील प्रकल्पाचा अनुभव घेऊ देतात।",
                stats: "अल्ट्रा एचडी गुणवत्ता"
            },
            {
                name: "लक्झरी इंटीरियर",
                description: "आधुनिक राहण्याच्या जागांसाठी कार्यक्षमतेला सौंदर्य उत्कृष्टतेसह मिश्रित करणारे बेस्पोक इंटीरियर डिझाइन समाधान।",
                stats: "पुरस्कार विजेता"
            },
            {
                name: "स्मार्ट नूतनीकरण",
                description: "स्मार्ट नूतनीकरण समाधानांसह विद्यमान जागा रूपांतरित करा जे मूल्य वाढवतात आणि तुमच्या मालमत्तेचे आधुनिकीकरण करतात।",
                stats: "शून्य कचरा धोरण"
            }
        ]
    }
};

// Service images
const serviceImages = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isMobile, setIsMobile] = useState(false);

    const t = translations[currentLanguage];

    // Detect mobile device
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Language detection from localStorage or any global state
    useEffect(() => {
        const detectLanguage = () => {
            // This would ideally come from your header component's state or localStorage
            // For now, we'll simulate language detection
            const savedLang = localStorage?.getItem('language') || 'en';
            setCurrentLanguage(savedLang);
        };
        
        detectLanguage();
        
        // Listen for language changes
        const handleStorageChange = () => {
            const newLang = localStorage?.getItem('language') || 'en';
            setCurrentLanguage(newLang);
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered && !isAnimating) {
                handleNext();
            }
        }, isMobile ? 4000 : 6000);

        return () => clearInterval(interval);
    }, [isHovered, isAnimating, isMobile]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === t.services.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 800);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? t.services.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsAnimating(false), 800);
    };

    const handleDotClick = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: isMobile ? 1 : 1.05
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: isMobile ? 0.6 : 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: isMobile ? 1 : 0.95,
            transition: {
                duration: isMobile ? 0.6 : 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    const contentVariants = {
        hidden: { 
            opacity: 0,
            y: isMobile ? 30 : 60,
            scale: isMobile ? 1 : 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: isMobile ? 0.5 : 0.8,
                ease: "easeOut",
                staggerChildren: isMobile ? 0.05 : 0.1,
                delayChildren: isMobile ? 0.1 : 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: isMobile ? 15 : 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }
        }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: isMobile ? [-5, 5, -5] : [-10, 10, -10],
            transition: {
                duration: isMobile ? 4 : 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const renderIndicators = () => {
        return (
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-30 px-4">
                {t.services.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                            index === currentIndex 
                                ? "bg-red-500 w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3" 
                                : "bg-white/40 hover:bg-white/60 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3"
                        }`}
                        whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentIndex && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                                initial={{ x: '-100%' }}
                                animate={{ x: '0%' }}
                                transition={{ duration: isMobile ? 4 : 6, ease: 'linear' }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        );
    };

    return (
        <div className="relative text-white overflow-hidden bg-black" id="home">
            {/* Hero Carousel Section */}
            <section
                className="relative min-h-screen w-full overflow-hidden"
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                    <div className="absolute inset-0 opacity-20">
                        <motion.div 
                            className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-red-500 rounded-full blur-2xl sm:blur-3xl"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div 
                            className="absolute top-32 sm:top-60 right-8 sm:right-40 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-red-400 rounded-full blur-xl sm:blur-2xl"
                            animate={{ 
                                scale: [1.2, 1, 1.2],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait" custom={currentIndex}>
                    <motion.div
                        key={`${currentIndex}-${currentLanguage}`}
                        custom={currentIndex}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="grid lg:grid-cols-2 min-h-screen items-center">
                            {/* Content Side */}
                            <motion.div
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 lg:py-0 order-2 lg:order-1 h-full flex flex-col justify-center relative z-10"
                            >
                                <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-900/30 border border-red-500/30 text-red-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                                        <Award className="w-3 sm:w-4 h-3 sm:h-4" />
                                        <span>{t.premiumQuality}</span>
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold tracking-widest text-red-500 mb-2">
                                        {String(currentIndex + 1).padStart(2, '0')}/{String(t.services.length).padStart(2, '0')} • {t.services[currentIndex].stats}
                                    </div>
                                </motion.div>

                                <motion.h1
                                    variants={itemVariants}
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
                                >
                                    <span className="text-red-500">{t.services[currentIndex].name.split(' ')[0]}</span>{' '}
                                    <span className="block sm:inline">{t.services[currentIndex].name.split(' ').slice(1).join(' ')}</span>
                                </motion.h1>

                                <motion.p
                                    variants={itemVariants}
                                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl leading-relaxed"
                                >
                                    {t.services[currentIndex].description}
                                </motion.p>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                                >
                                    <motion.button
                                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base"
                                        whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? 0 : -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Play className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                                        {t.viewPortfolio}
                                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                    
                                    <motion.button
                                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base"
                                        whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? 0 : -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {t.getFreeQuote}
                                    </motion.button>
                                </motion.div>

                                {/* Feature highlights */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400"
                                >
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-red-500 flex-shrink-0" />
                                        <span>{t.licensed}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Star className="w-3 sm:w-4 h-3 sm:h-4 text-red-500 flex-shrink-0" />
                                        <span>{t.rated}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Users className="w-3 sm:w-4 h-3 sm:h-4 text-red-500 flex-shrink-0" />
                                        <span>{t.clients}</span>
                                    </div>
                                </motion.div>

                                {/* Mobile contact quick actions */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 lg:hidden"
                                >
                                    <motion.a
                                        href="tel:+911234567890"
                                        className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm flex-1 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Phone className="w-4 h-4" />
                                        {t.callNow}
                                    </motion.a>
                                    <motion.a
                                        href="mailto:info@construction.in"
                                        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm flex-1 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mail className="w-4 h-4" />
                                        {t.email}
                                    </motion.a>
                                </motion.div>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                className="relative h-64 sm:h-80 md:h-96 lg:h-full order-1 lg:order-2 min-h-[40vh] lg:min-h-full"
                                variants={floatingVariants}
                                initial="initial"
                                animate="animate"
                            >
                                <div className="absolute inset-0 bg-gradient-to-bl from-red-500/20 to-red-600/20 rounded-2xl sm:rounded-3xl m-2 sm:m-4"></div>
                                <motion.div
                                    className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl m-2 sm:m-4 shadow-xl sm:shadow-2xl border border-red-500/20"
                                >
                                    <img
                                        src={serviceImages[currentIndex]}
                                        alt={t.services[currentIndex].name}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                    
                                    {/* Floating stats card */}
                                    <motion.div
                                        className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                    >
                                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-500">500+</div>
                                        <div className="text-xs sm:text-sm text-gray-300">{t.projectsDone}</div>
                                    </motion.div>

                                    {/* Floating quality badge */}
                                    <motion.div
                                        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 bg-red-500 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                    >
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <Award className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                                            <span className="font-semibold text-xs sm:text-sm">{t.premiumQuality.split(' ')[0]}</span>
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-300">{t.yearsExperience}</div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                {!isMobile && (
                    <>
                        <motion.button
                            onClick={handlePrev}
                            className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 border border-red-500/30"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={isAnimating}
                            aria-label="Previous slide"
                        >
                            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 rotate-180" />
                        </motion.button>

                        <motion.button
                            onClick={handleNext}
                            className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 border border-red-500/30"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={isAnimating}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                        </motion.button>
                    </>
                )}

                {/* Progress Indicators */}
                {renderIndicators()}

                {/* Swipe indicators for mobile */}
                {isMobile && (
                    <motion.div
                        className="absolute bottom-16 sm:bottom-20 left-0 right-0 flex justify-center z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-gray-300 border border-red-500/30">
                            Swipe left or right to explore
                        </div>
                    </motion.div>
                )}

                {/* Touch/Swipe handlers for mobile */}
                <div
                    className="absolute inset-0 z-10 lg:hidden"
                    onTouchStart={(e) => {
                        const touch = e.touches[0];
                        e.currentTarget.startX = touch.clientX;
                    }}
                    onTouchEnd={(e) => {
                        const touch = e.changedTouches[0];
                        const startX = e.currentTarget.startX;
                        const endX = touch.clientX;
                        const diff = startX - endX;

                        if (Math.abs(diff) > 50) { // Minimum swipe distance
                            if (diff > 0) {
                                handleNext(); // Swipe left - next slide
                            } else {
                                handlePrev(); // Swipe right - previous slide
                            }
                        }
                    }}
                />
            </section>

            {/* Stats Section */}
            <motion.section
                className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
                
                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <Award className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white" />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">25+</div>
                            <div className="text-sm sm:text-base text-gray-400">{t.yearsExperience}</div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <Users className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white" />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">1000+</div>
                            <div className="text-sm sm:text-base text-gray-400">{t.clients}</div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <Star className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white" />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">500+</div>
                            <div className="text-sm sm:text-base text-gray-400">{t.projectsDone}</div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <Shield className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white" />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
                            <div className="text-sm sm:text-base text-gray-400">{t.licensed}</div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;