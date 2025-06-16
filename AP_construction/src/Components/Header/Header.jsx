import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";

// Translation data
const translations = {
    en: {
        home: "Home",
        services: "Services",
        ourWork: "Our Work",
        aboutUs: "About Us",
        contact: "Contact",
        construction: "CONSTRUCTION",
        phone: "+91 1234567890",
        contactUs: "Contact Us",
        projects: {
            arvind: "Mr. Arvind Yadav",
            ajay: "Mr. Ajay Lagad",
            prathamesh: "Mr. Prathamesh Sakarkar"
        }
    },
    hi: {
        home: "होम",
        services: "सेवाएं",
        ourWork: "हमारा काम",
        aboutUs: "हमारे बारे में",
        contact: "संपर्क",
        construction: "निर्माण",
        phone: "+91 1234567890",
        contactUs: "संपर्क करें",
        projects: {
            arvind: "श्री अरविंद यादव",
            ajay: "श्री अजय लागड़",
            prathamesh: "श्री प्रथमेश सकरकर"
        }
    },
    mr: {
        home: "मुख्यपृष्ठ",
        services: "सेवा",
        ourWork: "आमचे काम",
        aboutUs: "आमच्याबद्दल",
        contact: "संपर्क",
        construction: "बांधकाम",
        phone: "+91 1234567890",
        contactUs: "संपर्क साधा",
        projects: {
            arvind: "श्री अरविंद यादव",
            ajay: "श्री अजय लागड",
            prathamesh: "श्री प्रथमेश सकरकर"
        }
    }
};

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const t = translations[currentLanguage];

    const menuItems = [
        { name: t.home, href: "#home", key: "home" },
        { name: t.services, href: "#services", key: "services" },
        { 
            name: t.ourWork, 
            href: "#projects",
            key: "ourWork",
            submenu: [
                { name: t.projects.arvind, href: "/ourwork/arvind-yadav" },
                { name: t.projects.ajay, href: "/ourwork/ajay-lagad" },
                { name: t.projects.prathamesh, href: "/ourwork/prathamesh-sakarkar" },
            ]
        },
        { name: t.aboutUs, href: "#about", key: "aboutUs" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const changeLanguage = (langCode) => {
        setCurrentLanguage(langCode);
        setIsLanguageOpen(false);
        // Here you would typically save to localStorage or context
        // localStorage.setItem('language', langCode);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !document.getElementById('mobile-menu')?.contains(event.target) && 
                !document.getElementById('menu-button')?.contains(event.target)) {
                toggleMenu();
            }
            if (isLanguageOpen && !document.getElementById('language-selector')?.contains(event.target)) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, isLanguageOpen]);

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
            {/* Dramatic background glow */}
            <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/20 via-red-500/10 to-transparent pointer-events-none z-30" />
            
            <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-red-500/20 py-2 border-b border-red-900/50' 
                    : 'bg-black/90 backdrop-blur-md py-4'
            }`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo - Bold and Modern */}
                        <a 
                            href="/" 
                            className="flex items-center space-x-3 z-50 group"
                            onClick={(e) => handleLinkClick(e, "#home", "home")}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                                   <img src="https://media-bom2-4.cdn.whatsapp.net/v/t61.24694-24/429813849_1186320302370762_6001324166806614634_n.jpg?ccb=11-4&oh=01_Q5Aa1wEzSQn60T8vLy9PmWUdV8HBO0PCjjLekNg0XupznfgBLg&oe=685CDC06&_nc_sid=5e03e0&_nc_cat=110" alt="" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white group-hover:text-red-400 transition-colors duration-300">
                                    AP Construction
                                </span>
                                <span className="text-xs text-red-400 tracking-[0.2em] font-medium">
                                    {t.construction}
                                </span>
                            </div>
                        </a>

                        {/* Desktop Navigation - Sleek */}
                        <nav className="hidden lg:flex items-center space-x-2">
                            {menuItems.map((item) => (
                                <div key={item.key} className="relative group">
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href, item.key)}
                                        className={`flex items-center px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                                            activeLink === item.key 
                                                ? "text-black bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/30" 
                                                : "text-white hover:text-red-400 hover:bg-white/10 hover:backdrop-blur-sm"
                                        }`}
                                    >
                                        {item.name}
                                        {item.submenu && <ChevronDown className="ml-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                                    </a>

                                    {item.submenu && (
                                        <div className="absolute top-full left-0 w-64 mt-2 bg-black/95 backdrop-blur-lg border border-red-900/50 rounded-xl shadow-2xl shadow-red-500/20 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                            {item.submenu.map((subitem) => (
                                                <a
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    onClick={(e) => handleLinkClick(e, subitem.href, subitem.name)}
                                                    className="block px-5 py-3 text-sm text-white hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 rounded-lg mx-2"
                                                >
                                                    {subitem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right Section - Modern */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* Language Selector */}
                            <div className="relative" id="language-selector">
                                <button
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-red-400 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                        {languages.find(lang => lang.code === currentLanguage)?.flag}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isLanguageOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-lg border border-red-900/50 rounded-xl shadow-2xl py-2 z-50">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-200 ${
                                                    currentLanguage === lang.code 
                                                        ? 'text-red-400 bg-red-500/20' 
                                                        : 'text-white hover:text-red-400 hover:bg-white/10'
                                                }`}
                                            >
                                                <span className="text-lg">{lang.flag}</span>
                                                <span className="font-medium">{lang.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a
                                href={`tel:${t.phone}`}
                                className="flex items-center space-x-2 text-white hover:text-red-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">{t.phone}</span>
                            </a>
                            
                            <a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, "#contact", "contact")}
                                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105"
                            >
                                {t.contact}
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            id="menu-button"
                            onClick={toggleMenu}
                            className="lg:hidden text-white hover:text-red-400 p-3 z-50 rounded-xl hover:bg-white/10 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden">
                    <div 
                        id="mobile-menu"
                        className="fixed inset-y-0 right-0 w-80 bg-black/95 backdrop-blur-lg shadow-2xl z-50 overflow-y-auto border-l border-red-900/50"
                    >
                        <div className="p-6 border-b border-red-900/50">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">AP</span>
                                </div>
                                <div>
                                    <span className="text-xl font-black text-white">AP Construction</span>
                                    <div className="text-xs text-red-400 tracking-wider">{t.construction}</div>
                                </div>
                            </div>
                        </div>

                        {/* Language Selector Mobile */}
                        <div className="p-4 border-b border-red-900/30">
                            <div className="flex items-center space-x-2 mb-3">
                                <Globe className="w-4 h-4 text-red-400" />
                                <span className="text-sm font-medium text-white">Language</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`flex flex-col items-center p-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                                            currentLanguage === lang.code 
                                                ? 'text-red-400 bg-red-500/20 border border-red-500/50' 
                                                : 'text-white hover:text-red-400 hover:bg-white/10'
                                        }`}
                                    >
                                        <span className="text-lg mb-1">{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-4">
                            {menuItems.map((item) => (
                                <div key={item.key} className="mb-2">
                                    <div
                                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                                            activeLink === item.key 
                                                ? "bg-gradient-to-r from-red-500 to-red-600 text-black shadow-lg" 
                                                : "text-white hover:bg-white/10 hover:text-red-400"
                                        }`}
                                        onClick={() => item.submenu && setActiveSubmenu(activeSubmenu === item.key ? null : item.key)}
                                    >
                                        <a
                                            href={item.href}
                                            onClick={(e) => !item.submenu && handleLinkClick(e, item.href, item.key)}
                                            className="text-sm font-semibold"
                                        >
                                            {item.name}
                                        </a>
                                        {item.submenu && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                                activeSubmenu === item.key ? "rotate-180" : ""
                                            }`} />
                                        )}
                                    </div>

                                    {item.submenu && activeSubmenu === item.key && (
                                        <div className="pl-6 py-2 space-y-1">
                                            {item.submenu.map((subitem) => (
                                                <a
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    onClick={(e) => handleLinkClick(e, subitem.href, subitem.name)}
                                                    className="block p-3 text-sm text-white hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                                                >
                                                    {subitem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="p-6 border-t border-red-900/50 mt-auto">
                            <a
                                href={`tel:${t.phone}`}
                                className="flex items-center space-x-3 p-4 text-white hover:text-red-400 hover:bg-white/10 rounded-xl mb-4 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5 text-red-400" />
                                <span className="font-medium">{t.phone}</span>
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, "#contact", "contact")}
                                className="block w-full p-4 text-center font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                            >
                                {t.contactUs}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}