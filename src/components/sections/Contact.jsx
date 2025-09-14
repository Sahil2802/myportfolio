import assets from '../../utils/assets';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { env } from '../../config/env';

export const Contact = ({ sectionRef }) => {
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        const apiKey = env.WEB3FORMS_KEY;

        if (!apiKey) {
            console.error('API Key is missing');
            toast.error('Configuration error. Please try again later.');
            setResult("");
            return;
        }

        formData.append("access_key", apiKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log('Response:', data); // Debug log

            if (data.success) {
                setResult("");
                toast.success("Message sent");
                event.target.reset();
            } else {
                console.error("Error", data);
                toast.error(data.message || "Failed to send message");
                setResult("");
            }
        } catch (error) {
            console.error("Error", error);
            toast.error("Something went wrong!");
            setResult("");
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="min-h-screen flex items-center justify-between m-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-30 max-w-7xl mx-auto">
                <div className="flex flex-col ">
                    <div className="flex flex-col">
                        <h2 className="text-5xl md:text-8xl font-bold text-[#ea580c]">Contact</h2>
                        <img
                            src={assets.DoodleUnderline}
                            alt="doodle underline"
                            className="w-55 md:w-100 h-auto "
                        />
                        <span className="text-5xl md:text-8xl font-bold text-white">me.</span>
                    </div>
                    <p className="text-gray-400 mb-2 w-70 md:w-100 ">Have a project in mind or just want to connect? Let's collaborate and create something together. Reach out to discuss ideas, opportunities, or anything tech-related!</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-[220px] md:w-[400px] lg:w-[450px] m-4">
                    <input
                        type="text"
                        name="name"
                        placeholder=" Name"
                        required
                        className="mt-6 border-b-2 border-white/10 focus:border-[#ea580c] outline-none bg-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder=" Email"
                        required
                        className="border-b-2 border-white/10 focus:border-[#ea580c] outline-none bg-transparent"
                    />
                    <textarea
                        name="message"
                        placeholder=" Message"
                        required
                        className="h-30 border-2 border-white/10 focus:border-[#ea580c] outline-none bg-transparent resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#ea580c] text-white px-6 py-1 rounded-full w-fit cursor-pointer hover:bg-amber-700 transition"
                        disabled={result === "Sending...."}
                    >
                        {result || "Send"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;