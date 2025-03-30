import { scrollToSection } from '../utils/scroll';

export const ScrollIndicator = ({ text, targetSection }) => {
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden  lg:flex flex-col items-center gap-2 z-10">
            <a href={`#${targetSection}`} onClick={(e) => handleScroll(e, targetSection)} className="text-gray-400 text-sm tracking-wider animate-float-down cursor-pointer">{text}</a>
            <a href={`#${targetSection}`} onClick={(e) => handleScroll(e, targetSection)}>
                <img
                    src="/src/assets/vectors/Arrow-12.svg"
                    alt="scroll down"
                    className="w-14 h-14 animate-float-down cursor-pointer"
                />
            </a>
        </div>
    );
}; 