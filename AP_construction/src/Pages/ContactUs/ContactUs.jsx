import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '234b9caf-40e4-48a0-8169-1c68039db20d',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(255, 71, 87, 0.5)",
      borderColor: "#ff4757"
    }
  };

  const buttonVariants = {
    initial: {
      backgroundColor: "#ff4757",
      scale: 1
    },
    hover: {
      backgroundColor: "#ff6b81",
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    },
    submitting: {
      backgroundColor: "#ff6b81",
      scale: 0.98
    }
  };

  const successVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const errorVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact AP Construction | Premium Construction Services</title>
        <meta name="description" content="Connect with AP Construction for all your construction needs. Request quotes, schedule consultations, or discuss your building project with our expert team." />
        <meta name="keywords" content="AP Construction contact, construction company contact, premium construction services, building contractors contact" />
        <link rel="canonical" href="https://apconstruction.com/contact" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Contact AP Construction | Premium Construction Services" />
        <meta property="og:description" content="Connect with AP Construction for all your construction needs. Request quotes or discuss your building project with our expert team." />
        <meta property="og:image" content="https://apconstruction.com/contact-og-image.jpg" />
        <meta property="og:url" content="https://apconstruction.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="format-detection" content="telephone=yes" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact AP Construction",
              "description": "Contact AP Construction for premium construction services",
              "mainEntity": {
                "@type": "Organization",
                "name": "AP Construction",
                "telephone": "+91 YOUR_PHONE_NUMBER",
                "email": "contact@apconstruction.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Street Address",
                  "addressLocality": "Your City",
                  "addressRegion": "Your State",
                  "postalCode": "YOUR_POSTAL_CODE",
                  "addressCountry": "IN"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900" id="contact">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={cardVariants}
              className="text-sm uppercase tracking-widest text-red-500 mb-4 font-semibold"
            >
              Get In Touch
            </motion.h2>
            <motion.h1
              variants={cardVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Let's Build <span className="text-red-500">Together</span>
            </motion.h1>
            <motion.p
              variants={cardVariants}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Have a project in mind or questions about our premium construction services? Reach out to us and we'll respond within 24 hours.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <motion.div
              variants={cardVariants}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 flex-1"
            >
              {submitSuccess ? (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-900/20 mb-8"
                  >
                    <FiCheckCircle className="h-10 w-10 text-red-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Thank you for contacting AP Construction. Our team will get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setSubmitSuccess(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {submitError && (
                    <motion.div
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      className="mb-8 p-4 bg-red-900/20 text-red-400 rounded-lg border border-red-900/50 flex items-start"
                    >
                      <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{submitError}</span>
                    </motion.div>
                  )}

                  <motion.form
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div variants={cardVariants} className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiUser className="h-5 w-5 text-gray-500" />
                          </div>
                          <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white placeholder-gray-400 transition-all duration-200"
                            placeholder="John Doe"
                            required
                            whileFocus={inputVariants.focus}
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={cardVariants} className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-gray-500" />
                          </div>
                          <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white placeholder-gray-400 transition-all duration-200"
                            placeholder="john@example.com"
                            whileFocus={inputVariants.focus}
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div variants={cardVariants} className="relative">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="h-5 w-5 text-gray-500" />
                        </div>
                        <motion.input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white placeholder-gray-400 transition-all duration-200"
                          placeholder="+91 9876543210"
                          required
                          whileFocus={inputVariants.focus}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={cardVariants} className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <FiMessageSquare className="h-5 w-5 text-gray-500" />
                        </div>
                        <motion.textarea
                          id="message"
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white placeholder-gray-400 transition-all duration-200"
                          placeholder="Tell us about your construction project..."
                          required
                          whileFocus={inputVariants.focus}
                        ></motion.textarea>
                      </div>
                    </motion.div>

                    <motion.div variants={cardVariants} className="pt-4">
                      <motion.button
                        type="submit"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover={isSubmitting ? "submitting" : "hover"}
                        whileTap="tap"
                        animate={isSubmitting ? "submitting" : "initial"}
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 text-white font-medium rounded-lg flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 lg:max-w-md w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Our Contact Information</h2>
                  <p className="text-gray-300 mb-8">
                    Fill out the form or reach out to us directly through any of these channels.
                  </p>

                  <div className="space-y-8">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-5"
                    >
                      <div className="flex-shrink-0 bg-red-900/20 p-3 rounded-lg">
                        <FiMail className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                        <a href="mailto:contact@apconstruction.com" className="text-gray-300 hover:text-red-400 transition-colors">
                          contact@apconstruction.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-5"
                    >
                      <div className="flex-shrink-0 bg-red-900/20 p-3 rounded-lg">
                        <FiPhone className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                        <a href="tel:+91YOUR_PHONE_NUMBER" className="text-gray-300 hover:text-red-400 transition-colors">
                          +91 YOUR_PHONE_NUMBER
                        </a>
                        <br />
                        <a href="tel:+91YOUR_SECONDARY_NUMBER" className="text-gray-300 hover:text-red-400 transition-colors">
                          +91 YOUR_SECONDARY_NUMBER
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-5"
                    >
                      <div className="flex-shrink-0 bg-red-900/20 p-3 rounded-lg">
                        <FiMapPin className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                        <p className="text-gray-300">
                          Your Company Address,<br />
                          City, State - ZIP Code,<br />
                          India
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-5"
                    >
                      <div className="flex-shrink-0 bg-red-900/20 p-3 rounded-lg">
                        <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Working Hours</h3>
                        <p className="text-gray-300">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-lg font-medium text-white mb-6">Follow Our Work</h3>
                  <div className="flex space-x-5">
                    {[
                      { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                      { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                      { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                      { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href="#"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-700 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-red-600 transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;