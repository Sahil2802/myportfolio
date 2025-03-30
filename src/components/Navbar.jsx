import { useScroll } from '../context/useScroll'
import { scrollToSection } from '../utils/scroll'
import { useState } from 'react'

export const Navbar = () => {
    const { activeSection } = useScroll()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
        setIsMenuOpen(false); // Close menu after clicking a link
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 lg:bg-transparent">
            <div className="flex justify-between max-w-[90%] mx-auto px-4 py-5 space-x-5">
                {/* Logo */}
                <a href="#home" onClick={(e) => handleClick(e, 'home')} className="text-xl -mt-3 sm:text-xl md:text-2xl font-brasika-display">
                    Sahil <span className="custom-text-orange text-4xl ml-[-5px]">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-14">
                    <a href="#home" onClick={(e) => handleClick(e, 'home')} className={`text-gray-400 hover:text-white relative group ${activeSection === 'home' ? 'text-white' : ''}`}>
                        Home
                        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#ea580c] transition-all duration-300 ${activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="#about" onClick={(e) => handleClick(e, 'about')} className={`text-gray-400 hover:text-white relative group ${activeSection === 'about' ? 'text-white' : ''}`}>
                        About me
                        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#ea580c] transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className={`text-gray-400 hover:text-white relative group ${activeSection === 'projects' ? 'text-white' : ''}`}>
                        Projects
                        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#ea580c] transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className={`text-gray-400 hover:text-white relative group ${activeSection === 'contact' ? 'text-white' : ''}`}>
                        Contact
                        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#ea580c] transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                </div>

                {/* Mobile Menu Button*/}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors z-[60]"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed inset-0 bg-black/95 transition-all duration-300 z-[55] ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                {/* Navigation links */}
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, 'home')}
                        className={`text-2xl ${activeSection === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => handleClick(e, 'about')}
                        className={`text-2xl ${activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        About me
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => handleClick(e, 'projects')}
                        className={`text-2xl ${activeSection === 'projects' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleClick(e, 'contact')}
                        className={`text-2xl ${activeSection === 'contact' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}