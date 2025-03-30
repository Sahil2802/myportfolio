export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-between m-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-30 max-w-7xl mx-auto">
                <div className="flex flex-col ">
                    <div className="flex flex-col">
                        <h2 className="text-5xl md:text-8xl font-bold text-[#ea580c]">Contact</h2>
                        <img
                            src="/src/assets/vectors/doodle_underline.svg"
                            alt="doodle underline"
                            className="w-55 md:w-100 h-auto "
                        />
                        <span className="text-5xl md:text-8xl font-bold text-white">me.</span>
                    </div>
                    <p className="text-gray-400 mb-2 w-70 md:w-100 ">Have a project in mind or just want to connect? Let's collaborate and create something together. Reach out to discuss ideas, opportunities, or anything tech-related!</p>
                </div>
                <form className="flex flex-col gap-8 w-[270px] md:w-[400px] lg:w-[450px] m-4">
                    <input type="text" placeholder=" Name" className="mt-6 border-b-2 border-white/10 focus:border-[#ea580c] outline-none bg-transparent" />
                    <input type="email" placeholder=" Email" className="border-b-2 border-white/10 focus:border-[#ea580c] outline-none bg-transparent" />
                    <textarea placeholder=" Message" className="h-30 border-2 border-white/10 focus:border-[#ea580c] outline-none bg-transparent resize-none" />
                    <button className="bg-[#ea580c] text-white px-6 py-1 rounded-full w-fit cursor-pointer hover:bg-amber-700 transition" type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;