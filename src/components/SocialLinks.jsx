import Github from '../assets/vectors/Github.svg'
import Linkedin from '../assets/vectors/Linkedin.svg'
import mail from '../assets/vectors/mail.svg'
import { useScroll } from '../context/useScroll'

export const SocialLinks = () => {
    const { activeSection } = useScroll()

    return (
        <>
            {/* Pagination Dots */}
            <div className="fixed left-22 top-1/2 -translate-y-1/2 hidden [@media(max-width:1272px)]:block lg:flex flex-col items-center gap-4">
                <a href="#home" className={`w-3 h-3 rounded-full transition-colors ${activeSection === 'home' ? 'bg-[#ea580c] w-4 h-4' : 'bg-gray-400 hover:bg-[#ea580c]'}`}></a>
                <a href="#about" className={`w-3 h-3 rounded-full transition-colors ${activeSection === 'about' ? 'bg-[#ea580c] w-4 h-4' : 'bg-gray-400 hover:bg-[#ea580c]'}`}></a>
                <a href="#projects" className={`w-3 h-3 rounded-full transition-colors ${activeSection === 'projects' ? 'bg-[#ea580c] w-4 h-4' : 'bg-gray-400 hover:bg-[#ea580c]'}`}></a>
                <a href="#contact" className={`w-3 h-3 rounded-full transition-colors ${activeSection === 'contact' ? 'bg-[#ea580c] w-4 h-4' : 'bg-gray-400 hover:bg-[#ea580c]'}`}></a>
            </div>

            {/* Social Links */}
            <div className="fixed right-22 top-1/2 -translate-y-1/2 flex flex-col gap-4 [@media(max-width:1272px)]:hidden">
                <a href="https://github.com/Sahil2802" target="_blank" rel="noopener noreferrer" className="group transition-transform hover:-translate-y-1">
                    <img src={Github} alt="GitHub" className="w-6 h-6 transition-colors group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="https://www.linkedin.com/in/sahil2802/" target="_blank" rel="noopener noreferrer" className="group transition-transform hover:-translate-y-1">
                    <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 transition-colors group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="mailto:forsahil2802@gmail.com" className="group transition-transform hover:-translate-y-1">
                    <img src={mail} alt="Email" className="w-6 h-6 transition-colors group-hover:brightness-0 group-hover:invert" />
                </a>
            </div>
        </>
    )
} 