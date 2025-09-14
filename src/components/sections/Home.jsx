import { ScrollIndicator } from '../ScrollIndicator';
import assets from '../../utils/assets'

export const Home = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-45 relative px-4 md:ml-22 md:mr-30 lg:px-12">
            <div className="z-10 w-full md:w-auto ">
                <div className="flex flex-col items-center md:block">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mt-15 md:mt-0">
                        Hi, I am Sahil
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 relative">
                        <span className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 custom-text-orange">Front</span>end Developer
                        {/* arrow */}
                        <img
                            src={assets.Arrow11}
                            alt="arrow"
                            className="absolute -right-12 md:-right-22 top-1/2 -translate-y-1/2 w-16 h-16 md:w-28 md:h-28 animate-float-right hidden lg:block"
                        />
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-[300px] sm:max-w-[400px] md:max-w-[500px] text-center md:text-left">
                        &lt;With a detail-oriented focus, I enjoy solving problems with a keen interest in machine learning /&gt;
                    </p>
                </div>
            </div>
            <div className="relative w-[200px] sm:w-[300px] md:w-[300px] mt-4 md:mt-0">
                {/* image placeholder shadow */}
                <div className="w-full aspect-square bg-zinc-800 mt-10 md:mt-20 md:ml-10" />
                {/* image placeholder */}
                <img
                    className="w-full aspect-square absolute top-10"
                    src={assets.Profile}
                    alt="Profile placeholder"
                />
            </div>
            <ScrollIndicator text="About me" targetSection="about" />
        </section>
    )
}