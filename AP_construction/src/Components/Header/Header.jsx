import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", href: "#home", key: "home" },
        { name: "Services", href: "#services", key: "services" },
        { 
            name: "Our Work", 
            href: "#projects",
            key: "ourWork",
            submenu: [
                { name: "Mr. Arvind Yadav", href: "/ourwork/arvind-yadav" },
                { name: "Mr. Ajay Lagad", href: "/ourwork/ajay-lagad" },
                { name: "Mr. Prathamesh Sakarkar", href: "/ourwork/prathamesh-sakarkar" },
            ]
        },
        { name: "About Us", href: "#about", key: "aboutUs" },
        { name: "Contact", href: "#contact", key: "contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const handleLinkClick = (e, href, key) => {
        e.preventDefault();
        setActiveLink(key);
        
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            element?.scrollIntoView({ behavior: 'smooth' });
        }
        
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            {/* Red accent glow */}
            <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-red-900/10 via-red-900/5 to-transparent pointer-events-none z-30" />
            
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg py-2 border-b border-gray-800' 
                    : 'bg-gray-900/90 backdrop-blur-md py-3'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo - Red Accent */}
                        <a 
                            href="/" 
                            className="flex items-center space-x-3 z-50 group"
                            onClick={(e) => handleLinkClick(e, "#home", "home")}
                        >
                            <div className="relative">
                                <div className="w-12 h-12  rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-red-900/30 transition-all duration-300">
                                   <img src="png.png" alt="" />
                                </div>
                                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-red-900 rounded-full animate-pulse"></div>
                                </div> */}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white group-hover:text-red-900 transition-colors duration-300">
                                    AP Construction
                                </span>
                                <span className="text-xs text-red-900 tracking-wider font-medium">
                                    BUILDING EXCELLENCE
                                </span>
                            </div>
                        </a>

                        {/* Desktop Navigation - Red Accents */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {menuItems.map((item) => (
                                <div key={item.key} className="relative group">
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href, item.key)}
                                        className={`flex items-center px-4 py-2 text-lg font-medium rounded-lg transition-all duration-200 ${
                                            activeLink === item.key 
                                                ? "text-white" 
                                                : "text-gray-300 hover:text-white"
                                        } relative`}
                                    >
                                        {item.name}
                                        {activeLink === item.key && (
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-red-900 rounded-full"></span>
                                        )}
                                        {item.submenu && (
                                            <ChevronDown className="ml-1 w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                                        )}
                                    </a>

                                    {item.submenu && (
                                        <div className="absolute top-full left-0 w-56 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            {item.submenu.map((subitem) => (
                                                <a
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    onClick={(e) => handleLinkClick(e, subitem.href, subitem.name)}
                                                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                                                >
                                                    {subitem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Phone number with red accent */}
                            <a
                                href="tel:+911234567890"
                                className="flex items-center space-x-2 ml-4 px-4 py-2 rounded-lg hover:bg-red-900 text-white transition-all duration-300 group border border-red-900"
                            >
                                <Phone className="w-5 h-5 text-red-900 group-hover:text-white transition-colors" />
                                <span className="font-medium">
                                    +91 1234567890
                                </span>
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 focus:outline-none text-gray-300 hover:text-red-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="text-2xl text-red-900" />
                            ) : (
                                <Menu className="text-2xl" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden bg-gray-800 rounded-lg mt-2 shadow-lg">
                            <div className="flex flex-col py-2">
                                {menuItems.map((item) => (
                                    <div key={item.key} className="border-b border-gray-700 last:border-b-0">
                                        <div
                                            className={`flex items-center justify-between px-4 py-3 transition-colors duration-200 ${
                                                activeLink === item.key 
                                                    ? "text-white" 
                                                    : "text-gray-300 hover:text-white"
                                            } relative`}
                                            onClick={() => item.submenu && setActiveSubmenu(activeSubmenu === item.key ? null : item.key)}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={(e) => !item.submenu && handleLinkClick(e, item.href, item.key)}
                                                className="font-medium text-lg"
                                            >
                                                {item.name}
                                                {activeLink === item.key && (
                                                    <span className="absolute bottom-2 left-4 w-3/4 h-0.5 bg-red-900 rounded-full"></span>
                                                )}
                                            </a>
                                            {item.submenu && (
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                                                    activeSubmenu === item.key ? "rotate-180" : ""
                                                }`} />
                                            )}
                                        </div>

                                        {item.submenu && activeSubmenu === item.key && (
                                            <div className="pl-6 py-1 bg-gray-900/50">
                                                {item.submenu.map((subitem) => (
                                                    <a
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        onClick={(e) => handleLinkClick(e, subitem.href, subitem.name)}
                                                        className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                                                    >
                                                        {subitem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                
                                {/* Mobile Phone Link */}
                                <a
                                    href="tel:+911234567890"
                                    className="flex items-center px-4 py-3 mt-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 border-t border-gray-700"
                                >
                                    <Phone className="w-5 h-5 mr-2 text-red-900" />
                                    <span className="font-medium">+91 1234567890</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}