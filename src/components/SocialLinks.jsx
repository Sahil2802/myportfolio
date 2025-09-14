import assets from '../utils/assets'

export const SocialLinks = () => {
    return (
        <>
            {/* Social Links */}
            <div className="fixed right-22 top-1/2 -translate-y-1/2 flex flex-col gap-4 [@media(max-width:1272px)]:hidden">
                <a href="https://github.com/Sahil2802" target="_blank" rel="noopener noreferrer" className="group transition-transform hover:-translate-y-1">
                    <img src={assets.Github} alt="GitHub" className="w-6 h-6 transition-colors group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="https://www.linkedin.com/in/sahil2802/" target="_blank" rel="noopener noreferrer" className="group transition-transform hover:-translate-y-1">
                    <img src={assets.Linkedin} alt="LinkedIn" className="w-6 h-6 transition-colors group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="mailto:forsahil@gmail.com" className="group transition-transform hover:-translate-y-1">
                    <img src={assets.Mail} alt="Email" className="w-6 h-6 transition-colors group-hover:brightness-0 group-hover:invert" />
                </a>
            </div>
        </>
    )
} 