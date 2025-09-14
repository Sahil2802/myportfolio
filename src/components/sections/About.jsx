import { ScrollIndicator } from '../ScrollIndicator';
export const About = ({ sectionRef }) => {
    const frontendSkills = [
        "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Git", "GitHub"
    ];
    const languages = [
        "JavaScript", "Python", "Java", "C++", "SQL"
    ];
    const libraries = [
        "React", "Node.js", "Express", "MongoDB"
    ];
    return (
        <section ref={sectionRef} id="about" className="min-h-screen py-30 relative m-4">
            <div className="max-w-5xl mx-auto">
                <div className="rounded-xl p-8 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition-all">
                    <h3 className="text-3xl font-semibold">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 rounded-xl p-4 ">
                        <div className="rounded-xl p-4 md:p-6">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 
                                    hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-4 md:p-6 transition-all ">
                            <h3 className="text-xl font-bold mb-4"> Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 
                                    hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-4 md:p-6 transition-all ">
                            <h3 className="text-xl font-bold mb-4"> Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                {libraries.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                    <div className="rounded-xl p-8 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition mt-4 md:col-span-2">
                        <h3 className="text-3xl font-semibold">Education</h3>
                        <div className="pt-4">
                            <ul className="">
                                <li>
                                    <div className="flex flex-row items-center">
                                        <span className="font-bold text-base md:text-lg mr-6 md:mr-10 min-w-[80px] md:min-w-[110px]">2021-2025</span>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-semibold">B.Tech in CSE</span>
                                            <span className="italic text-base md:ml-0">Sharda University</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl p-10 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition md:mt-4 md:col-span-3">
                        <h3 className="text-3xl font-semibold">Experience</h3>
                        <div className="pt-4">
                            <ul className="mr-[-10px]">
                                <li>
                                    <div className="flex flex-row items-center">
                                        <span className="font-bold text-base md:text-lg mr-6 md:mr-10 min-w-[120px] md:min-w-[150px]">June 2025 - Present</span>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-semibold">Excellence Technologies</span>
                                            <span className="italic text-base md:ml-0">Jr. SDE Intern</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollIndicator text="Projects" targetSection="projects" />
        </section>
    )
}



{/* <div>
                        <h3>Frontend</h3>
                        <div>
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div> */}
