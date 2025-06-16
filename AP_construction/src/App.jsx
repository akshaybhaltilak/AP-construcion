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
    const timer = setTimeout(() => setShowSplash(false), 4000);
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
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      {/* Moving Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center px-4 w-full max-w-lg relative z-10">
        {/* Logo Container with Advanced Animation */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            {/* Rotating Border Ring */}
            <div className="absolute inset-0 w-44 h-44 md:w-52 md:h-52 mx-auto">
              <div className="rotating-border"></div>
            </div>
            
            {/* Logo with Morph Effect */}
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative logo-container">
              <div className="logo-backdrop"></div>
              <div className="logo-content">
                <div className="logo-text">AP</div>
              </div>
            </div>
            
            {/* Pulsing Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pulse-ring ring-1"></div>
              <div className="pulse-ring ring-2"></div>
              <div className="pulse-ring ring-3"></div>
            </div>
            
            {/* Interactive Particles */}
            <div className="absolute inset-0 particles-container">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Brand Title with Glitch Effect */}
        <div className="brand-container">
          <h1 className="brand-title">
            <span className="brand-text brand-text-main">AP</span>
            <span className="brand-text brand-text-sub">Construction</span>
          </h1>
          <div className="brand-glitch" data-text="AP Construction">AP Construction</div>
        </div>

        {/* Subtitle with Typewriter Effect */}
        <div className="subtitle-container">
          <h2 className="subtitle">
            <span className="typewriter">Excellence in Every Structure</span>
          </h2>
        </div>

        {/* Interactive Progress Loader */}
        <div className="loader-container">
          <div className="progress-wrapper">
            <div className="progress-track">
              <div className="progress-fill"></div>
              <div className="progress-glow"></div>
            </div>
            <div className="progress-indicator"></div>
          </div>
          <div className="loader-text">
            <span className="loading-dots">Initializing</span>
          </div>
        </div>

        {/* Construction Icons with Bounce */}
        <div className="icons-container">
          {['🏗️', '⚒️', '🏢', '📐', '🔧'].map((icon, i) => (
            <span 
              key={i} 
              className="construction-icon"
              style={{ 
                animationDelay: `${i * 0.2 + 1}s`,
                '--random-x': `${(Math.random() - 0.5) * 20}px`,
                '--random-y': `${(Math.random() - 0.5) * 20}px`
              }}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced Animations & Styles */}
      <style jsx="true">{`
        /* Grid Background */
        .grid-background {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Floating Shapes */
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          background: linear-gradient(45deg, #ef4444, #dc2626);
          opacity: 0.1;
          animation: floatShape 10s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 10%;
          border-radius: 50%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 20%;
          right: 15%;
          transform: rotate(45deg);
          animation-delay: 1s;
        }

        .shape-3 {
          width: 40px;
          height: 40px;
          bottom: 20%;
          left: 20%;
          border-radius: 50%;
          animation-delay: 2s;
        }

        .shape-4 {
          width: 100px;
          height: 20px;
          bottom: 30%;
          right: 20%;
          border-radius: 10px;
          animation-delay: 1.5s;
        }

        .shape-5 {
          width: 50px;
          height: 50px;
          top: 60%;
          left: 5%;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          animation-delay: 0.5s;
        }

        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.2; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.15; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 0.2; }
        }

        /* Logo Animations */
        .logo-container {
          position: relative;
          animation: logoEntrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .rotating-border {
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-radius: 50%;
          background: linear-gradient(45deg, #ef4444, #dc2626, #b91c1c) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: rotateBorder 3s linear infinite;
        }

        .logo-backdrop {
          position: absolute;
          inset: 8px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 50%;
          box-shadow: 
            inset 0 0 30px rgba(239, 68, 68, 0.3),
            0 0 50px rgba(239, 68, 68, 0.2);
        }

        .logo-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .logo-text {
          font-size: 3rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 
            0 0 20px rgba(239, 68, 68, 0.8),
            0 0 40px rgba(239, 68, 68, 0.6),
            0 0 60px rgba(239, 68, 68, 0.4);
          animation: logoGlow 2s ease-in-out infinite alternate;
        }

        @keyframes logoEntrance {
          0% {
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.1) rotate(-10deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes logoGlow {
          0% {
            text-shadow: 
              0 0 20px rgba(239, 68, 68, 0.8),
              0 0 40px rgba(239, 68, 68, 0.6);
          }
          100% {
            text-shadow: 
              0 0 30px rgba(239, 68, 68, 1),
              0 0 60px rgba(239, 68, 68, 0.8),
              0 0 80px rgba(239, 68, 68, 0.6);
          }
        }

        /* Pulse Rings */
        .pulse-ring {
          position: absolute;
          border: 2px solid rgba(239, 68, 68, 0.4);
          border-radius: 50%;
          animation: pulseRing 2s ease-out infinite;
        }

        .ring-1 {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 250px;
          height: 250px;
          animation-delay: 0.7s;
        }

        .ring-3 {
          width: 300px;
          height: 300px;
          animation-delay: 1.4s;
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        /* Particles */
        .particles-container {
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #ef4444, #dc2626);
          border-radius: 50%;
          animation: particleFloat 4s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 0.8;
          }
          90% {
            opacity: 1;
          }
        }

        /* Brand Title */
        .brand-container {
          position: relative;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .brand-title {
          position: relative;
          z-index: 2;
          animation: titleSlideIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;
          opacity: 0;
        }

        .brand-text {
          display: inline-block;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .brand-text-main {
          font-size: 4rem;
          color: #ffffff;
          text-shadow: 0 4px 20px rgba(239, 68, 68, 0.5);
          margin-right: 0.5rem;
          animation: mainTextGlow 3s ease-in-out infinite;
        }

        .brand-text-sub {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #ffffff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: subTextShimmer 2s ease-in-out infinite;
        }

        .brand-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-size: 4rem;
          font-weight: 800;
          color: rgba(239, 68, 68, 0.8);
          z-index: 1;
          animation: glitchEffect 0.3s ease-in-out infinite;
          opacity: 0;
        }

        @keyframes titleSlideIn {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes mainTextGlow {
          0%, 100% {
            text-shadow: 0 4px 20px rgba(239, 68, 68, 0.5);
          }
          50% {
            text-shadow: 0 4px 30px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6);
          }
        }

        @keyframes subTextShimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes glitchEffect {
          0%, 100% {
            opacity: 0;
            transform: translate(0);
          }
          10% {
            opacity: 0.8;
            transform: translate(-2px, 2px);
          }
          20% {
            opacity: 0.8;
            transform: translate(2px, -2px);
          }
          30% {
            opacity: 0;
            transform: translate(0);
          }
        }

        /* Subtitle */
        .subtitle-container {
          margin-bottom: 2.5rem;
          overflow: hidden;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.05em;
        }

        .typewriter {
          display: inline-block;
          border-right: 2px solid #ef4444;
          animation: 
            typewriter 2s steps(25) 1.5s forwards,
            blink 1s infinite 3.5s;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
        }

        @keyframes typewriter {
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        /* Loader */
        .loader-container {
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 2s forwards;
          opacity: 0;
        }

        .progress-wrapper {
          position: relative;
          width: 200px;
          margin: 0 auto 1rem;
        }

        .progress-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ef4444, #dc2626, #ef4444);
          border-radius: 2px;
          width: 0;
          animation: progressFill 3s ease-out forwards;
        }

        .progress-glow {
          position: absolute;
          top: -2px;
          left: -4px;
          height: 8px;
          width: 8px;
          background: radial-gradient(circle, #ef4444, transparent);
          border-radius: 50%;
          animation: progressGlow 3s ease-out forwards;
        }

        .progress-indicator {
          position: absolute;
          top: -6px;
          left: -6px;
          width: 12px;
          height: 12px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.8);
          animation: indicatorMove 3s ease-out forwards;
        }

        @keyframes progressFill {
          to {
            width: 100%;
          }
        }

        @keyframes progressGlow {
          to {
            left: calc(100% - 4px);
          }
        }

        @keyframes indicatorMove {
          to {
            left: calc(100% - 6px);
          }
        }

        .loader-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        .loading-dots::after {
          content: '';
          animation: loadingDots 1.5s infinite;
        }

        @keyframes loadingDots {
          0%, 20% {
            content: '';
          }
          40% {
            content: '.';
          }
          60% {
            content: '..';
          }
          80%, 100% {
            content: '...';
          }
        }

        /* Construction Icons */
        .icons-container {
          display: flex;
          justify-content: center;
          space-x: 1.5rem;
          gap: 1.5rem;
        }

        .construction-icon {
          font-size: 1.8rem;
          opacity: 0;
          animation: iconBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes iconBounce {
          0% {
            transform: translateY(100px) scale(0);
            opacity: 0;
          }
          60% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .brand-text-main {
            font-size: 3rem;
          }
          
          .brand-text-sub {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
          
          .construction-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;