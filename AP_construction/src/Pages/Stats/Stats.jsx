import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiHome, FiCheckCircle, FiUsers, 
    FiClock, FiSettings, FiTrendingUp, 
    FiShield, FiAward, FiStar, FiCompass
} from 'react-icons/fi';
import { FaOm, FaLeaf, FaYinYang } from 'react-icons/fa';
import { Compass, Sun, Moon, Wind } from 'lucide-react';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [activeDirection, setActiveDirection] = useState(null);
    const [compassRotation, setCompassRotation] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState('living');
    const [showCompass, setShowCompass] = useState(false);

    // Vastu directions and their properties
    const vastuDirections = {
        north: {
            name: 'North (Kubera)',
            color: 'blue',
            element: 'Water',
            god: 'Kubera',
            benefits: 'Wealth, Career Growth',
            rooms: ['Office', 'Study Room', 'Treasury'],
            icon: <Wind className="text-xl" />
        },
        northeast: {
            name: 'Northeast (Ishaan)',
            color: 'indigo',
            element: 'Water + Air',
            god: 'Lord Shiva',
            benefits: 'Spirituality, Wisdom',
            rooms: ['Prayer Room', 'Meditation Area'],
            icon: <FaOm className="text-xl" />
        },
        east: {
            name: 'East (Indra)',
            color: 'yellow',
            element: 'Air',
            god: 'Lord Indra',
            benefits: 'Health, Prosperity',
            rooms: ['Living Room', 'Entrance'],
            icon: <Sun className="text-xl" />
        },
        southeast: {
            name: 'Southeast (Agni)',
            color: 'red',
            element: 'Fire',
            god: 'Agni',
            benefits: 'Energy, Passion',
            rooms: ['Kitchen', 'Electrical Room'],
            icon: <FiStar className="text-xl" />
        },
        south: {
            name: 'South (Yama)',
            color: 'green',
            element: 'Earth',
            god: 'Yama',
            benefits: 'Fame, Recognition',
            rooms: ['Master Bedroom', 'Heavy Storage'],
            icon: <FaLeaf className="text-xl" />
        },
        southwest: {
            name: 'Southwest (Nairrutya)',
            color: 'brown',
            element: 'Earth',
            god: 'Nairrutya',
            benefits: 'Stability, Relationships',
            rooms: ['Master Bedroom', 'Store Room'],
            icon: <FaYinYang className="text-xl" />
        },
        west: {
            name: 'West (Varuna)',
            color: 'silver',
            element: 'Water',
            god: 'Varuna',
            benefits: 'Profits, Gains',
            rooms: ['Dining Room', 'Children Room'],
            icon: <Moon className="text-xl" />
        },
        northwest: {
            name: 'Northwest (Vayu)',
            color: 'gray',
            element: 'Air',
            god: 'Vayu',
            benefits: 'Support, Networking',
            rooms: ['Guest Room', 'Bathroom'],
            icon: <Wind className="text-xl" />
        }
    };

    const stats = [
        {
            value: "500+",
            label: "Vastu Consultations",
            description: "Harmonious homes created",
            icon: <FaOm className="text-2xl sm:text-3xl" />
        },
        {
            value: "15+",
            label: "Years Experience",
            description: "Ancient wisdom applied",
            icon: <FiHome className="text-2xl sm:text-3xl" />
        },
        {
            value: "95%",
            label: "Client Satisfaction",
            description: "Positive energy delivered",
            icon: <FiCheckCircle className="text-2xl sm:text-3xl" />
        },
        {
            value: "100%",
            label: "Authentic Practices",
            description: "Traditional Vastu principles",
            icon: <FiShield className="text-2xl sm:text-3xl" />
        },
    ];

    const features = [
        {
            title: "Ancient Wisdom",
            description: "5000-year-old Vastu Shastra principles for modern living",
            icon: <FaOm className="text-xl" />
        },
        {
            title: "Personalized Analysis",
            description: "Customized Vastu solutions based on your birth chart",
            icon: <FiCompass className="text-xl" />
        },
        {
            title: "Holistic Approach",
            description: "Balance energy, health, wealth, and relationships",
            icon: <FaYinYang className="text-xl" />
        },
        {
            title: "Sustainable Harmony",
            description: "Eco-friendly solutions that align with natural forces",
            icon: <FaLeaf className="text-xl" />
        }
    ];

    // Room recommendations based on Vastu
    const roomRecommendations = {
        living: {
            name: 'Living Room',
            bestDirection: 'East or North',
            colors: ['Light Yellow', 'Cream', 'Light Green'],
            tips: ['Place seating facing East', 'Use natural lighting', 'Keep center space open']
        },
        kitchen: {
            name: 'Kitchen',
            bestDirection: 'Southeast',
            colors: ['Red', 'Orange', 'Pink'],
            tips: ['Cook facing East', 'Place fire element in Southeast', 'Avoid Northeast corner']
        },
        bedroom: {
            name: 'Master Bedroom',
            bestDirection: 'Southwest',
            colors: ['Earth tones', 'Beige', 'Light Pink'],
            tips: ['Bed in Southwest corner', 'Head towards South', 'Avoid mirrors facing bed']
        },
        study: {
            name: 'Study Room',
            bestDirection: 'North or East',
            colors: ['Light Blue', 'Green', 'White'],
            tips: ['Face East while studying', 'Keep books in Southwest', 'Good lighting essential']
        }
    };

    const handleDirectionClick = (direction) => {
        setActiveDirection(direction);
        const rotationMap = {
            north: 0, northeast: 45, east: 90, southeast: 135,
            south: 180, southwest: 225, west: 270, northwest: 315
        };
        setCompassRotation(rotationMap[direction]);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-white">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-r from-red-900 to-red-800 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-r from-blue-900 to-indigo-800 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title Section */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Harmonize Your Space With Vastu
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        Experience the ancient science of architecture for prosperity, health, and happiness
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Stats and Features */}
                    <div className="w-full lg:w-1/2">
                        {/* Stats Cards */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={containerVariants}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(255, 165, 0, 0.1)",
                                    }}
                                    className="bg-gray-900 p-4 rounded-xl border border-gray-800 group transition-all duration-300 hover:red-orange-500 hover:shadow-lg"
                                >
                                    <div className="relative z-10">
                                        <div className="mb-3 flex items-center justify-center w-10 h-10 rounded-full bg-red-900 group-hover:bg-red-800 transition-colors duration-300">
                                            {React.cloneElement(stat.icon, {
                                                className: `${stat.icon.props.className} text-orange-400 group-hover:text-orange-300`
                                            })}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                                            {stat.value}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-200 mb-1 leading-tight">
                                            {stat.label}
                                        </p>
                                        <p className="text-xs text-gray-400 leading-snug">
                                            {stat.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Features List */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={containerVariants}
                            className="space-y-4"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-500 transition-colors"
                                >
                                    <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-red-900 rounded-full text-orange-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                                        <p className="text-sm text-gray-300">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side - Interactive Vastu Compass */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="h-full bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <Compass className="mr-2 text-red-400" />
                                    Interactive Vastu Compass
                                </h3>
                                <button 
                                    onClick={() => setShowCompass(!showCompass)}
                                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
                                >
                                    {showCompass ? 'Hide' : 'Explore'}
                                </button>
                            </div>

                            {showCompass ? (
                                <div className="space-y-6">
                                    {/* Compass Wheel */}
                                    <div className="relative w-64 h-64 mx-auto">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-800 to-yellow-800 p-4">
                                            <div className="w-full h-full rounded-full bg-gray-900 relative overflow-hidden">
                                                {/* Compass Directions */}
                                                {Object.entries(vastuDirections).map(([direction, info], index) => {
                                                    const angle = index * 45;
                                                    const isActive = activeDirection === direction;
                                                    return (
                                                        <button
                                                            key={direction}
                                                            onClick={() => handleDirectionClick(direction)}
                                                            className={`absolute w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                                                                isActive 
                                                                    ? 'bg-red-500 border-red-300 scale-110' 
                                                                    : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                                                            }`}
                                                            style={{
                                                                top: `${50 + 35 * Math.cos((angle - 90) * Math.PI / 180)}%`,
                                                                left: `${50 + 35 * Math.sin((angle - 90) * Math.PI / 180)}%`,
                                                                transform: 'translate(-50%, -50%)'
                                                            }}
                                                        >
                                                            <div className="flex items-center justify-center w-full h-full text-xs font-bold text-white">
                                                                {direction.charAt(0).toUpperCase()}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                                
                                                {/* Center Circle */}
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                                                    <FaOm className="text-white text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Direction Information */}
                                    {activeDirection && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                                        >
                                            <div className="flex items-center mb-2">
                                                {vastuDirections[activeDirection].icon}
                                                <h4 className="text-lg font-bold text-red-400 ml-2">
                                                    {vastuDirections[activeDirection].name}
                                                </h4>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div>
                                                    <span className="text-gray-400">Element:</span>
                                                    <span className="text-white ml-2">{vastuDirections[activeDirection].element}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-400">Deity:</span>
                                                    <span className="text-white ml-2">{vastuDirections[activeDirection].god}</span>
                                                </div>
                                                <div className="col-span-2">
                                                    <span className="text-gray-400">Benefits:</span>
                                                    <span className="text-white ml-2">{vastuDirections[activeDirection].benefits}</span>
                                                </div>
                                                <div className="col-span-2">
                                                    <span className="text-gray-400">Ideal for:</span>
                                                    <span className="text-white ml-2">{vastuDirections[activeDirection].rooms.join(', ')}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Room Selector */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Room Guidance</h4>
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {Object.entries(roomRecommendations).map(([key, room]) => (
                                                <button
                                                    key={key}
                                                    onClick={() => setSelectedRoom(key)}
                                                    className={`p-2 rounded text-sm transition-colors ${
                                                        selectedRoom === key
                                                            ? 'bg-red-600 text-white'
                                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                    }`}
                                                >
                                                    {room.name}
                                                </button>
                                            ))}
                                        </div>
                                        
                                        {/* Room Recommendations */}
                                        <div className="bg-gray-800 p-3 rounded-lg text-sm">
                                            <h5 className="font-semibold text-orange-400 mb-2">
                                                {roomRecommendations[selectedRoom].name}
                                            </h5>
                                            <p className="text-gray-300 mb-2">
                                                <span className="text-gray-400">Best Direction:</span> {roomRecommendations[selectedRoom].bestDirection}
                                            </p>
                                            <p className="text-gray-300 mb-2">
                                                <span className="text-gray-400">Colors:</span> {roomRecommendations[selectedRoom].colors.join(', ')}
                                            </p>
                                            <div className="text-gray-300">
                                                <span className="text-gray-400">Tips:</span>
                                                <ul className="list-disc list-inside mt-1 space-y-1">
                                                    {roomRecommendations[selectedRoom].tips.map((tip, index) => (
                                                        <li key={index} className="text-xs">{tip}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="inline-block p-4 mb-4 bg-red-900 rounded-full">
                                        <Compass className="text-3xl text-orange-300" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Discover Vastu Directions
                                    </h4>
                                    <p className="text-gray-400 mb-6">
                                        Explore the 8 cardinal directions and their significance in Vastu Shastra
                                    </p>
                                    <button
                                        onClick={() => setShowCompass(true)}
                                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        Start Exploring
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;