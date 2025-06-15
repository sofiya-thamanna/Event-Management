import { useState } from "react";
import { Link } from 'react-router-dom';
import React from "react";

const CreateEvent = () => {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 py-8 pt-24">
        {/* ... (rest of your CreateEvent form remains exactly the same) ... */}
      </div>
    </div>
  );
};

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Contact', path: '/createevent' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 bg-white shadow-sm ${isScrolled ? "py-3 md:py-4" : "py-4 md:py-6"}`}>
            {/* Logo */}
            <Link to={"/"}>
                <h1 className="text-4xl font-bold text-orange-600">Planora</h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} className="group flex flex-col gap-0.5 text-gray-700">
                        {link.name}
                        <div className="h-0.5 w-0 bg-indigo-600 group-hover:w-full transition-all duration-300" />
                    </Link>
                ))}
                <Link to="/createevent">
                    <button className="border border-indigo-600 px-4 py-1 text-sm font-medium rounded-full cursor-pointer text-indigo-600 hover:bg-indigo-50 transition-all">
                        Create Event
                    </button>
                </Link>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full ml-4 transition-all duration-300 hover:bg-indigo-700">
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-6 w-6 cursor-pointer text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg">
                        {link.name}
                    </Link>
                ))}

                <Link to="/login">
                    <button className="bg-indigo-600 text-white px-8 py-2.5 rounded-full transition-all duration-300 hover:bg-indigo-700">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default CreateEvent;