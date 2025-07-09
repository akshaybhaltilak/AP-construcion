import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function About() {
    const [showFullMission, setShowFullMission] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);

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

    // Founder's achievements
    const achievements = [
        {
            title: "Excellence in Construction",
            description: "Delivered 250+ successful projects across residential and commercial sectors",
            icon: "🏆"
        },
        {
            title: "Innovation Leader",
            description: "Pioneered sustainable construction practices in the region",
            icon: "💡"
        },
        {
            title: "Quality Assurance",
            description: "Maintained 98% client satisfaction rate throughout 13+ years",
            icon: "⭐"
        },
        {
            title: "Industry Recognition",
            description: "Recognized for outstanding contribution to construction industry",
            icon: "🎖️"
        }
    ];

    // Social work initiatives
    const socialWork = [
        {
            title: "Student Scholarship Program",
            description: "Supporting underprivileged students by providing educational scholarships and mentorship for their career development",
            icon: "🎓",
            impact: "50+ Students Supported"
        },
        {
            title: "Environmental Conservation",
            description: "Leading tree plantation drives and environmental awareness campaigns to create a greener future",
            icon: "🌱",
            impact: "1000+ Trees Planted"
        },
        {
            title: "Community Support",
            description: "Providing assistance to economically disadvantaged families through various welfare programs",
            icon: "🤝",
            impact: "100+ Families Helped"
        },
        {
            title: "Skill Development",
            description: "Training programs for young professionals in construction and engineering fields",
            icon: "🔧",
            impact: "30+ Youth Trained"
        }
    ];

    return (
        <>
            <Helmet>
                <title>About AP Construction | Abhijeet Parde - Founder & CEO</title>
                <meta name="description" content="Learn about AP Construction and founder Abhijeet Parde's journey in delivering premium construction solutions while making a positive social impact." />
                <meta name="keywords" content="AP Construction, Abhijeet Parde, construction company, social work, tree plantation, student support" />
                <link rel="canonical" href="https://apconstruction.com/about" />

                {/* Open Graph tags */}
                <meta property="og:title" content="About AP Construction | Abhijeet Parde - Founder & CEO" />
                <meta property="og:description" content="Learn about AP Construction and founder Abhijeet Parde's journey in delivering premium construction solutions while making a positive social impact." />
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
                      "founder": {
                        "@type": "Person",
                        "name": "Abhijeet Parde",
                        "jobTitle": "Founder & CEO"
                      },
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Nagpur",
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                      }
                    }
                    `}
                </script>
            </Helmet>
            
            <div className="min-h-screen bg-black text-white" id='about'>
                {/* Hero Section */}
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
                            <span className="text-red-500">Dreams</span>
                            <span className="block text-white">Creating Impact</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Excellence in construction with a commitment to social responsibility
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

                {/* About Company Section */}
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
                                <div className="absolute inset-0 bg-red-100 rounded-xl transform -rotate-3 scale-105 z-0"></div>
                                <div className="absolute inset-0 border-4 border-red-300 rounded-xl transform rotate-3 scale-105 z-0 opacity-70"></div>
                                <img
                                    src="png.png"
                                    alt="AP Construction Company"
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
                                    Since 2010, <span className="font-semibold text-red-500">AP Construction</span> has been a trusted name in the construction industry, delivering exceptional quality projects while making a positive impact on society. Under the visionary leadership of <span className="font-semibold text-red-500">Abhijeet Parde</span>, we have established ourselves as a company that builds not just structures, but also communities.
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
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-red-400 mb-2">Mission</h4>
                                            <p className="text-gray-300 text-base leading-relaxed">
                                                To deliver world-class construction solutions that exceed client expectations while contributing positively to society through sustainable practices and community development initiatives.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-red-400 mb-2">Vision</h4>
                                            <p className="text-gray-300 text-base leading-relaxed">
                                                {showFullMission ? (
                                                    <>
                                                        To be the leading construction company that sets benchmarks in quality, innovation, and social responsibility. We envision a future where every project we undertake becomes a testament to excellence while our social initiatives create lasting positive change in communities. Our goal is to build not just structures, but a better tomorrow for all.
                                                    </>
                                                ) : (
                                                    <>
                                                        To be the leading construction company that sets benchmarks in quality, innovation, and social responsibility. We envision a future where every project we undertake becomes a testament to excellence...
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>
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

                        {/* Founder Section */}
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
                                    <span className="text-red-500">Meet</span> Our Founder
                                </motion.h2>
                                <motion.div 
                                    className="h-1 w-24 bg-red-500 mx-auto"
                                    variants={fadeIn}
                                ></motion.div>
                            </div>

                            <motion.div
                                className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all border border-gray-800 relative group max-w-4xl mx-auto"
                                variants={fadeIn}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-96 lg:h-auto">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent z-10"></div>
                                        <img
                                            src="https://t3.ftcdn.net/jpg/03/31/45/62/360_F_331456233_4P3W6RcjbyYrKYdevmkdLeyqaDDCn5ri.jpg"
                                            alt="Abhijeet Parde"
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 lg:hidden">
                                            <h3 className="text-2xl font-bold mb-1">Abhijeet Parde</h3>
                                            <p className="text-sm font-medium bg-red-500 inline-block px-4 py-1 rounded-full">
                                                Founder & CEO
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-8 lg:p-10">
                                        <div className="hidden lg:block mb-6">
                                            <h3 className="text-3xl font-bold mb-2">Abhijeet Parde</h3>
                                            <p className="text-lg font-medium text-red-500">Founder & CEO</p>
                                        </div>

                                        <div className="flex justify-between mb-6 border-b border-gray-800 pb-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-red-500">13+</div>
                                                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Exp.</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-red-500">250+</div>
                                                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-red-500">98%</div>
                                                <div className="text-xs text-gray-400 uppercase tracking-wider">Satisfaction</div>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-base mb-6 leading-relaxed">
                                            {expandedSection === 'founder' ? (
                                                <>
                                                    A visionary leader with over 13 years of experience in the construction industry, Abhijeet Parde has built AP Construction into a symbol of excellence and social responsibility. His innovative approach to construction combined with his deep commitment to community welfare has set new standards in the industry. Beyond business success, he believes in giving back to society through various philanthropic initiatives.
                                                </>
                                            ) : (
                                                <>
                                                    A visionary leader with over 13 years of experience in the construction industry, Abhijeet Parde has built AP Construction into a symbol of excellence and social responsibility...
                                                </>
                                            )}
                                        </p>

                                        {expandedSection === 'founder' && (
                                            <motion.div
                                                className="mt-6 pt-6 border-t border-gray-800"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="italic text-red-400 text-base">
                                                    "Success is not just about building structures, but about building a better society. Every project we complete should contribute to the betterment of our community."
                                                </p>
                                            </motion.div>
                                        )}

                                        <motion.button
                                            className="mt-6 text-red-500 text-base font-medium flex items-center hover:text-red-400 group"
                                            onClick={() => setExpandedSection(expandedSection === 'founder' ? null : 'founder')}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            {expandedSection === 'founder' ? 'Show Less' : 'Read More'}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                {expandedSection === 'founder' ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                )}
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Achievements Section */}
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
                                    <span className="text-red-500">Professional</span> Achievements
                                </motion.h2>
                                <motion.div 
                                    className="h-1 w-24 bg-red-500 mx-auto"
                                    variants={fadeIn}
                                ></motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all group"
                                        variants={fadeIn}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="text-4xl mb-4">{achievement.icon}</div>
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Work Section */}
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
                                    <span className="text-red-500">Social</span> Impact & Community Service
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
                                    variants={fadeIn}
                                >
                                    Beyond construction, Abhijeet Parde is committed to creating positive change in society through various social initiatives
                                </motion.p>
                                <motion.div 
                                    className="h-1 w-24 bg-red-500 mx-auto"
                                    variants={fadeIn}
                                ></motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {socialWork.map((work, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all group shadow-lg"
                                        variants={fadeIn}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                    >
                                        <div className="flex items-center mb-6">
                                            <div className="text-4xl mr-4">{work.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                                                    {work.title}
                                                </h3>
                                                <span className="text-red-500 text-sm font-medium">{work.impact}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">{work.description}</p>
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
                                        title: "Excellence",
                                        desc: "Delivering superior quality in every project with meticulous attention to detail",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Integrity",
                                        desc: "Honest, transparent dealings with clients, partners, and community",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Innovation",
                                        desc: "Embracing new technologies and construction methods for better results",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Social Responsibility",
                                        desc: "Contributing to community development and environmental sustainability",
                                        icon: (
                                            <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
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
                                { value: "13+", label: "Years of Excellence" },
                                { value: "250+", label: "Successful Projects" },
                                { value: "98%", label: "Client Satisfaction" },
                                { value: "1000+", label: "Lives Impacted" }
                            ].map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-gray-900 p-8 text-center rounded-xl border border-gray-800 hover:border-red-500 transition-all"
                                    variants={fadeIn}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div 
                            className="mt-28 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-12 md:p-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Build Something Amazing?
                            </h2>
                            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                                Join us in creating exceptional structures while making a positive impact on society
                            </p>
                            <motion.button
                                className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Project Today
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;