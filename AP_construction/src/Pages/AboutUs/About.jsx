import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function About() {
    const [showFullMission, setShowFullMission] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Engineer data
    const engineers = [
        {
            id: 1,
            name: "Er. AP Engineer",
            title: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1581093450025-4d07a64a3c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
            shortBio: "Construction visionary with 15+ years transforming skylines across India.",
            fullBio: "With over 15 years in the construction industry, our founder has pioneered innovative building techniques that have reshaped urban landscapes. His commitment to quality and precision has established AP Construction as a leader in the field, delivering landmark projects that stand the test of time.",
            quote: "Every structure we build carries our reputation - that's why we never compromise on quality.",
            stats: [
                { value: "15+", label: "Years Exp." },
                { value: "200+", label: "Projects" },
                { value: "98%", label: "Satisfaction" }
            ]
        },
        {
            id: 2,
            name: "Er. Lead Architect",
            title: "Chief Architect",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
            shortBio: "Award-winning architect specializing in modern sustainable designs.",
            fullBio: "Our chief architect brings international experience and multiple design awards to AP Construction. With expertise in sustainable materials and energy-efficient designs, she ensures our projects are both beautiful and environmentally responsible. Her innovative approach has won accolades from clients and industry peers alike.",
            quote: "Great architecture solves problems - both for today and for generations to come.",
            stats: [
                { value: "12+", label: "Years Exp" },
                { value: "5", label: "Awards" },
                { value: "LEED", label: "Certified" }
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>About AP Construction | Premium Construction Solutions</title>
                <meta name="description" content="AP Construction is a premier construction firm specializing in high-quality residential, commercial and infrastructure projects across India." />
                <meta name="keywords" content="AP Construction, about construction company, building contractors, construction experts, infrastructure development" />
                <link rel="canonical" href="https://apconstruction.com/about" />

                {/* Open Graph tags */}
                <meta property="og:title" content="About AP Construction | Premium Construction Solutions" />
                <meta property="og:description" content="AP Construction is a premier construction firm specializing in high-quality residential, commercial and infrastructure projects across India." />
                <meta property="og:image" content="https://apconstruction.com/about-og-image.jpg" />
                <meta property="og:url" content="https://apconstruction.com/about" />
                <meta property="og:type" content="website" />

                {/* Company schema */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "AP Construction",
                      "url": "https://apconstruction.com",
                      "logo": "https://apconstruction.com/logo.png",
                      "description": "AP Construction delivers premium construction services with unmatched quality and precision.",
                      "foundingDate": "2010", 
                      "founders": [
                        {
                          "@type": "Person",
                          "name": "Er. AP Engineer"
                        }
                      ],
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Corporate Office Address",
                        "addressLocality": "Mumbai",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400001",
                        "addressCountry": "IN"
                      },
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91XXXXXXXXXX",
                        "contactType": "customer service"
                      }
                    }
                    `}
                </script>
            </Helmet>
            
            <div className="min-h-screen bg-black text-white" id='about'>
                {/* Hero Section with Dramatic Black and Red Theme */}
                <motion.div
                    className="relative py-24 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] opacity-20 bg-cover bg-center"></div>
                    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            variants={fadeIn}
                        >
                            <span className="text-white">Building </span>
                            <span className="text-red-500">Tomorrow's</span>
                            <span className="block text-white">Landmarks Today</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Precision engineering meets visionary design in every AP Construction project.
                        </motion.p>
                        <motion.div 
                            className="mt-8"
                            variants={fadeIn}
                        >
                            <div className="inline-flex items-center space-x-4">
                                <div className="h-1 w-20 bg-red-500"></div>
                                <span className="text-red-500 font-medium">EST. 2010</span>
                                <div className="h-1 w-20 bg-red-500"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            {/* Image Section */}
                            <motion.div
                                className="w-full md:w-5/12 relative mb-8 md:mb-0"
                                variants={fadeIn}
                            >
                                <div className="absolute inset-0 bg-red-500 rounded-xl transform -rotate-3 scale-105 z-0"></div>
                                <div className="absolute inset-0 border-4 border-red-500 rounded-xl transform rotate-3 scale-105 z-0 opacity-70"></div>
                                <img
                                    src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/429813849_1186320302370762_6001324166806614634_n.jpg?ccb=11-4&oh=01_Q5Aa1wEzSQn60T8vLy9PmWUdV8HBO0PCjjLekNg0XupznfgBLg&oe=685CDC06&_nc_sid=5e03e0&_nc_cat=110"
                                    alt="AP Construction Team"
                                    className="relative w-full h-full object-cover rounded-xl z-10"
                                />
                            </motion.div>

                            {/* About Text */}
                            <motion.div
                                className="w-full md:w-7/12 space-y-8"
                                variants={fadeIn}
                            >
                                <div className="flex items-center">
                                    <div className="h-0.5 w-16 bg-red-500 mr-4"></div>
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        <span className="text-red-500">About</span> AP Construction
                                    </h2>
                                </div>

                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Since 2010, <span className="font-semibold text-red-500">AP Construction</span> has been at the forefront of India's construction industry, delivering landmark projects that redefine skylines and set new standards in quality.
                                </p>

                                {/* Mission & Vision */}
                                <motion.div
                                    className="bg-gray-900 p-8 rounded-xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                                        <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        Our Mission & Vision
                                    </h3>
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {showFullMission ? (
                                            <>
                                                To revolutionize the construction industry through innovative engineering, sustainable practices, and uncompromising quality. We envision a future where every AP Construction project becomes a benchmark for excellence, combining cutting-edge technology with timeless craftsmanship. Our commitment extends beyond buildings - we're constructing legacies that will inspire generations.
                                            </>
                                        ) : (
                                            <>
                                                To revolutionize the construction industry through innovative engineering, sustainable practices, and uncompromising quality. We envision a future where every AP Construction project becomes a benchmark for excellence...
                                            </>
                                        )}
                                    </p>
                                    <motion.button
                                        className="mt-6 text-red-500 text-base font-medium flex items-center hover:text-red-400 group"
                                        onClick={() => setShowFullMission(!showFullMission)}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {showFullMission ? 'Show Less' : 'Read More'}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showFullMission ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            )}
                                        </svg>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Engineers Section */}
                        <motion.div
                            className="mt-24 md:mt-28"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <div className="text-center mb-16">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-6"
                                    variants={fadeIn}
                                >
                                    <span className="text-red-500">Meet</span> Our Leadership
                                </motion.h2>
                                <motion.div 
                                    className="h-1 w-24 bg-red-500 mx-auto"
                                    variants={fadeIn}
                                ></motion.div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {engineers.map((engineer) => (
                                    <motion.div
                                        key={engineer.id}
                                        className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all border border-gray-800 relative group"
                                        variants={fadeIn}
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative h-80">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent z-10"></div>
                                            <img
                                                src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/429813849_1186320302370762_6001324166806614634_n.jpg?ccb=11-4&oh=01_Q5Aa1wEzSQn60T8vLy9PmWUdV8HBO0PCjjLekNg0XupznfgBLg&oe=685CDC06&_nc_sid=5e03e0&_nc_cat=110"
                                                alt={engineer.name}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                                                <h3 className="text-2xl font-bold mb-1">{engineer.name}</h3>
                                                <p className="text-sm font-medium bg-red-500 inline-block px-4 py-1 rounded-full">
                                                    {engineer.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <div className="flex justify-between mb-6 border-b border-gray-800 pb-6">
                                                {engineer.stats.map((stat, index) => (
                                                    <div key={index} className="text-center">
                                                        <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                                                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <p className="text-gray-300 text-base mb-6 leading-relaxed">
                                                {expandedCard === engineer.id ? engineer.fullBio : engineer.shortBio}
                                            </p>

                                            {expandedCard === engineer.id && (
                                                <motion.div
                                                    className="mt-6 pt-6 border-t border-gray-800"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="italic text-red-400 text-base">
                                                        "{engineer.quote}"
                                                    </p>
                                                </motion.div>
                                            )}

                                            <motion.button
                                                className="mt-6 text-red-500 text-base font-medium flex items-center hover:text-red-400 group"
                                                onClick={() => setExpandedCard(expandedCard === engineer.id ? null : engineer.id)}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                {expandedCard === engineer.id ? 'Show Less' : 'Read More'}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    {expandedCard === engineer.id ? (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                    ) : (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    )}
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Core Values Section */}
                        <motion.div 
                            className="mt-28 bg-gradient-to-r from-gray-900 to-black rounded-xl p-10 md:p-14 border border-gray-800"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    <span className="text-red-500">Our</span> Core Values
                                </h2>
                                <div className="h-1 w-24 bg-red-500 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        title: "Innovation",
                                        desc: "Pioneering new construction techniques and smart building solutions",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Precision",
                                        desc: "Meticulous attention to detail in every aspect of construction",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Integrity",
                                        desc: "Honest, transparent dealings with clients and partners",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Sustainability",
                                        desc: "Environmentally responsible construction practices",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                            </svg>
                                        )
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 group"
                                        whileHover={{ y: -10 }}
                                        variants={fadeIn}
                                    >
                                        {item.icon}
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div 
                            className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            {[
                                { value: "13+", label: "Years Experience" },
                                { value: "250+", label: "Projects Completed" },
                                { value: "98%", label: "Client Satisfaction" },
                                { value: "50+", label: "Professional Team" }
                            ].map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-gray-900 p-8 text-center rounded-xl border border-gray-800"
                                    variants={fadeIn}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;