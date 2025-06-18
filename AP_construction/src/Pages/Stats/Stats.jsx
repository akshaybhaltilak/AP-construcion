import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiHome, FiCheckCircle, FiUsers, 
    FiClock, FiSettings, FiTrendingUp, 
    FiShield, FiAward, FiStar
} from 'react-icons/fi';
import { FaHardHat, FaTruck, FaCity } from 'react-icons/fa';
import { Hammer, Building, PaintBucket, Zap } from 'lucide-react';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [activeTab, setActiveTab] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizCorrect, setQuizCorrect] = useState(false);

    // New interactive quiz about construction knowledge
    const constructionQuiz = {
        question: "What's the most critical phase in construction?",
        options: [
            "Foundation",
            "Roofing",
            "Interior Design",
            "Landscaping"
        ],
        correctAnswer: 0,
        fact: "A strong foundation ensures the structural integrity of the entire building, preventing future issues like settling or cracking."
    };

    const handleQuizSubmit = () => {
        setQuizSubmitted(true);
        const isCorrect = parseInt(quizAnswer) === constructionQuiz.correctAnswer;
        setQuizCorrect(isCorrect);
    };

    const stats = [
        {
            value: "35K+",
            label: "Square Foot Completed",
            description: "Premium construction delivered",
            icon: <FaCity className="text-2xl sm:text-3xl" />
        },
        {
            value: "10+",
            label: "Ongoing Projects",
            description: "Currently transforming skylines",
            icon: <FiHome className="text-2xl sm:text-3xl" />
        },
        {
            value: "20+",
            label: "Completed Projects",
            description: "Client satisfaction guaranteed",
            icon: <FiCheckCircle className="text-2xl sm:text-3xl" />
        },
        {
            value: "100%",
            label: "Safety Record",
            description: "Zero major incidents",
            icon: <FiShield className="text-2xl sm:text-3xl" />
        },
    ];

    const features = [
        {
            title: "Innovative Designs",
            description: "Cutting-edge architectural solutions tailored to your vision",
            icon: <FiStar className="text-xl" />
        },
        {
            title: "Expert Craftsmanship",
            description: "Skilled professionals with decades of combined experience",
            icon: <FaHardHat className="text-xl" />
        },
        {
            title: "Timely Delivery",
            description: "We honor deadlines without compromising quality",
            icon: <FiClock className="text-xl" />
        },
        {
            title: "Sustainable Materials",
            description: "Eco-friendly construction for a better tomorrow",
            icon: <FiTrendingUp className="text-xl" />
        }
    ];

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
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full opacity-10 blur-3xl"></div>
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
                        className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Build Your Vision With Us
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        Discover why we're the trusted choice for premium construction projects
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
                                        boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)",
                                    }}
                                    className="bg-gray-900 p-4 rounded-xl border border-gray-800 group transition-all duration-300 hover:border-red-500 hover:shadow-lg"
                                >
                                    <div className="relative z-10">
                                        <div className="mb-3 flex items-center justify-center w-10 h-10 rounded-full bg-red-900 group-hover:bg-red-800 transition-colors duration-300">
                                            {React.cloneElement(stat.icon, {
                                                className: `${stat.icon.props.className} text-red-400 group-hover:text-red-300`
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
                                    <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-red-900 rounded-full text-red-300">
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

                    {/* Right Side - Interactive Quiz */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="h-full bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <FiAward className="mr-2 text-red-400" />
                                    Construction Challenge
                                </h3>
                                <button 
                                    onClick={() => setShowQuiz(!showQuiz)}
                                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
                                >
                                    {showQuiz ? 'Hide' : 'Try Now'}
                                </button>
                            </div>

                            {showQuiz ? (
                                <div className="space-y-6">
                                    <p className="text-lg text-white">
                                        {constructionQuiz.question}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        {constructionQuiz.options.map((option, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`option-${index}`}
                                                    name="quiz"
                                                    value={index}
                                                    checked={quizAnswer === index.toString()}
                                                    onChange={(e) => setQuizAnswer(e.target.value)}
                                                    className="hidden"
                                                />
                                                <label 
                                                    htmlFor={`option-${index}`}
                                                    className={`flex items-center w-full p-3 rounded-lg cursor-pointer transition-colors ${
                                                        quizAnswer === index.toString() 
                                                            ? 'bg-red-900 border-red-700' 
                                                            : 'bg-gray-800 hover:bg-gray-700 border-gray-700'
                                                    } border`}
                                                >
                                                    <span className={`flex items-center justify-center w-5 h-5 rounded-full mr-3 ${
                                                        quizAnswer === index.toString() 
                                                            ? 'bg-red-500' 
                                                            : 'bg-gray-600'
                                                    }`}>
                                                        {String.fromCharCode(65 + index)}
                                                    </span>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    {!quizSubmitted ? (
                                        <button
                                            onClick={handleQuizSubmit}
                                            disabled={!quizAnswer}
                                            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                                                quizAnswer 
                                                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                                                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            }`}
                                        >
                                            Submit Answer
                                        </button>
                                    ) : (
                                        <div className={`p-4 rounded-lg ${
                                            quizCorrect 
                                                ? 'bg-green-900 text-green-100' 
                                                : 'bg-red-900 text-red-100'
                                        }`}>
                                            <h4 className="font-bold mb-2">
                                                {quizCorrect ? 'Correct!' : 'Not Quite!'}
                                            </h4>
                                            <p className="text-sm">
                                                {constructionQuiz.fact}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setQuizSubmitted(false);
                                                    setQuizAnswer('');
                                                }}
                                                className="mt-3 text-sm bg-black bg-opacity-30 hover:bg-opacity-50 px-3 py-1 rounded transition-colors"
                                            >
                                                Try Again
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="inline-block p-4 mb-4 bg-red-900 rounded-full">
                                        <FaHardHat className="text-3xl text-red-300" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Test Your Construction Knowledge
                                    </h4>
                                    <p className="text-gray-400 mb-6">
                                        Take our quick quiz to see how much you know about building processes!
                                    </p>
                                    <button
                                        onClick={() => setShowQuiz(true)}
                                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        Start Challenge
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