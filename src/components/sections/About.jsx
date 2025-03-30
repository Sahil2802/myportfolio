import { ScrollIndicator } from '../ScrollIndicator';

export const About = () => {
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
        <section id="about" className="min-h-screen py-30 relative m-4">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="rounded-xl p-8 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)]  hover:-translate-y-1 transition mt-4">
                        <h3 className="text-3xl font-semibold">Education</h3>
                        <div className="pt-4">
                            <ul className="custom-list">
                                <li>
                                    <span className=" mr-10 font-bold">2021-2025</span>
                                    <span className="text-lg font-semibold">B.Tech in CSE<br /></span>
                                    <span className="ml-[156px] italic">Sharda University</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl p-8 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)]  hover:-translate-y-1 transition md:mt-4">
                        <h3 className="text-3xl font-semibold">Experience</h3>
                        <div className="pt-4">
                            <ul className="custom-list mr-[-10px]">
                                <li>
                                    <span className="mr-10 font-bold">May 2023</span>
                                    <span className="text-lg font-semibold">Reloy Shield Pvt. Ltd.<br /></span>
                                    <span className="ml-[151px] italic">Web Developer Intern</span>
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
