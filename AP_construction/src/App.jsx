import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import ProjectDetail from "./Pages/OurProjectDetails/OurProjectDetails";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import About from "./Pages/AboutUs/About";
import ContactForm from "./Pages/ContactUs/ContactUs";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {showSplash ? <SplashScreen /> : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="about" element={<About />} />
              <Route path="ourwork" element={<Projects />} />
              <Route path="ourwork/:slug" element={<ProjectDetail />} />
            </Route>
          </Routes>
        )}
      </Router>
    </HelmetProvider>
  );
}

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      {/* Main Content */}
      <div className="text-center px-4 w-full max-w-md relative">
        {/* Animated Logo */}
        <div className="relative mb-8 mx-auto w-32 h-32">
          <div className="absolute inset-0 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full  flex items-center justify-center shadow-lg">
            <div className="text-4xl font-bold text-red-500 animate-pulse"><img src="png.png" alt="" /></div>
          </div>
        </div>

        {/* Brand Title */}
        <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
          <span className="text-red-500">AP</span> Construction
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-6 animate-fade-in delay-100">
          Excellence in Every Structure
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full animate-progress"
            style={{ width: '0%' }}
          ></div>
        </div>

        {/* Construction Icons */}
        <div className="flex justify-center space-x-4">
          {['🏗️', '⚒️', '🏢', '📐', '🔧'].map((icon, i) => (
            <span 
              key={i} 
              className="text-2xl opacity-0 animate-icon-bounce"
              style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx="true">{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 2.5s ease-out forwards;
        }
        
        @keyframes icon-bounce {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 1; transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-icon-bounce {
          animation: icon-bounce 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;