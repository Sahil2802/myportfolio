import { ScrollIndicator } from '../ScrollIndicator';
import assets from '../../utils/assets'

/**
 * Projects Component
 * Displays a grid of project cards showcasing featured projects
 * Each card contains project details, tech stack, and action buttons
 */
export const Projects = ({ sectionRef }) => {
    return (
        // Main projects section with full viewport height and relative positioning for scroll indicator
        <section ref={sectionRef} id="projects" className="min-h-screen py-30 relative m-4">
            {/* Container with max width and center alignment for content */}
            <div className="max-w-5xl mx-auto">
                {/* Section title */}
                <h2 className="text-4xl font-bold mb-5">Featured Projects</h2>

                {/* Grid layout for project cards - 1 column on mobile, 2 columns on medium screens and up */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Project Card 1 */}
                    <div className="rounded-xl p-4 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition">
                        {/* Project title */}
                        <h3 className="text-xl font-bold mb-2">Algorithm Visualizer</h3>

                        {/* Project description */}
                        <p className="text-gray-400 mb-2">
                            Interactive web-application to visualize various sorting algorithms including Bubble Sort, Merge Sort, etc.
                        </p>

                        {/* Technology tags section */}
                        <div className="flex flewrap gap-2 mb-4">
                            {/* Map through tech stack array to create tags */}
                            {
                                ["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span key={key} className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer">
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex gap-2.5">
                            {/* Play button with icon */}
                            <a href="https://sahil2802.github.io/sorting-visualizer/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-amber-700 text-white transition-colors text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>

                            </a>
                            {/* GitHub icon button */}
                            <a href="https://github.com/Sahil2802/sorting-visualizer" target="_blank" rel="noopener noreferrer" className="py-1.5 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                                <img className='w-6 h-6' src={assets.Github} alt="GitHub repository link" />
                            </a>
                        </div>


                    </div>
                    {/* Project Card 2 */}
                    <div className="rounded-xl p-4 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition">
                        {/* Project title */}
                        <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>

                        {/* Project description */}
                        <p className="text-gray-400 mb-2">
                            A simple expense tracker web application built with React and Tailwind CSS to manage and personal expenses.
                        </p>

                        {/* Technology tags section */}
                        <div className="flex flewrap gap-2 mb-4">
                            {/* Map through tech stack array to create tags */}
                            {
                                ["ReactJs", "Tailwind CSS"].map((tech, key) => (
                                    <span key={key} className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer">
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex gap-2.5">
                            {/* Play button with icon */}
                            <a href="https://v1-expense-tracker.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-amber-700 text-white transition-colors text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>

                            </a>
                            {/* GitHub icon button */}
                            <a href="https://github.com/Sahil2802/expense-tracker" target="_blank" rel="noopener noreferrer" className="py-1.5 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                                <img className='w-6 h-6' src={assets.Github} alt="GitHub repository link" />
                            </a>
                        </div>


                    </div>
                    {/* Project Card 3 */}
                    <div className="rounded-xl p-4 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition">
                        {/* Project title */}
                        <h3 className="text-xl font-bold mb-2">Sudoku Solver Game</h3>

                        {/* Project description */}
                        <p className="text-gray-400 mb-2">
                            Interactive Sudoku solver with a backtracking algorithm and real-time visualization using Python & Pygame.
                        </p>

                        {/* Technology tags section */}
                        <div className="flex flewrap gap-2 mb-4">
                            {/* Map through tech stack array to create tags */}
                            {
                                ["Python", "Pygame"].map((tech, key) => (
                                    <span key={key} className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer">
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex gap-2.5">
                            {/* Play button with icon */}
                            {/* <a href="" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-amber-700 text-white transition-colors text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>

                            </a> */}
                            {/* GitHub icon button */}
                            <a href="https://github.com/Sahil2802/sudoku-solver" target="_blank" rel="noopener noreferrer" className="py-1.5 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                                <img className='w-6 h-6' src={assets.Github} alt="GitHub repository link" />
                            </a>
                        </div>


                    </div>
                    {/* Project Card 4 */}
                    <div className="rounded-xl p-4 border border-white/10 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(242,155,68,0.2)] hover:-translate-y-1 transition">
                        {/* Project title */}
                        <h3 className="text-xl font-bold mb-2"> Movie Recommender</h3>

                        {/* Project description */}
                        <p className="text-gray-400 mb-2">
                            A movie recommender system that suggests movies based on user preferences using content-based filtering.
                        </p>

                        {/* Technology tags section */}
                        <div className="flex flewrap gap-2 mb-4">
                            {/* Map through tech stack array to create tags */}
                            {
                                ["Python", "Streamlit"].map((tech, key) => (
                                    <span key={key} className="bg-[#ea580c]/10 text-[#ea580c] py-1 px-3 rounded-full text-sm hover:bg-[#ea580c]/20 hover:shadow-[0_2px_8px_rgba(234,88,12,0.2)] transition cursor-pointer">
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex gap-2.5">
                            {/* Play button with icon */}
                            {/* <a href="" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-amber-700 text-white transition-colors text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>

                            </a> */}
                            {/* GitHub icon button */}
                            <a href="https://github.com/Sahil2802/BootCamp/tree/main/MovieRecommender" target="_blank" rel="noopener noreferrer" className="py-1.5 px-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors">
                                <img className='w-6 h-6' src={assets.Github} alt="GitHub repository link" />
                            </a>
                        </div>


                    </div>
                </div>
            </div>
            {/* Scroll indicator for navigation to next section */}
            <ScrollIndicator text="Contact" targetSection="contact" />
        </section>
    )
}