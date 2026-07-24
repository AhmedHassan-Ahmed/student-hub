import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
import student1 from "../assets/images/student1.jpg";
import student2 from "../assets/images/student2.jpeg";
import student3 from "../assets/images/student3.jpeg";
function Hero() {
    const scrollToAbout = () => {
        const about = document.getElementById("about");
        if (about) {
            about.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section id="hero" className="bg-white text-gray-900 min-h-[90vh] flex items-center dark:bg-gray-950 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        Stay Organized.<br />Learn <span className="text-[#6C90C3]"> Better.</span>
                    </h1>
                    <p className="text-[#6C90C3] font-semibold mb-4">
                        Student Productivity Platform
                    </p>
                    <p className="text-gray-600 mt-6 text-lg leading-8 dark:text-gray-400">
                        Track your study progress, manage tasks,
                        save notes and access learning resources
                        in one place.
                    </p>
                    <div className="flex gap-5 mt-10">
                        <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-blue-600/30
                        hover:bg-blue-700 dark:bg-[#6C90C3] dark:text-[#0C1225] dark:shadow-[#6C90C3]/30 dark:hover:bg-[#0C1225] dark:hover:text-[#6C90C3]
                        transition-colors duration-300">
                            Get Started
                            <ArrowRight size={18}/>
                        </Link>
                        <button 
                            onClick={scrollToAbout}
                            className="border border-blue-600 px-6 py-3 rounded-lg text-blue-600 shadow-lg shadow-blue-600/30
                            hover:bg-blue-600 hover:text-white dark:border-[#6C90C3] dark:text-[#6C90C3] dark:shadow-[#6C90C3]/30 dark:hover:bg-[#6C90C3] dark:hover:text-[#0C1225]
                            transition-colors duration-300 cursor-pointer">
                                Learn More
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mt-10">
                        <div className="flex -space-x-4">
                            <img src={student1} className="w-12 h-12 rounded-full border-2 border-white object-cover dark:border-[#0C1225]"/>
                            <img src={student2} className="w-12 h-12 rounded-full border-2 border-white object-cover dark:border-[#0C1225]"/>
                            <img src={student3} className="w-12 h-12 rounded-full border-2 border-white object-cover dark:border-[#0C1225]"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Join 1,400+ Students
                            </h3>
                            <p className="text-gray-600 text-sm dark:text-gray-400">
                                Improve your learning journey.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img src={hero} alt="Hero" className="w-full max-w-xl object-contain"/>
                </div>
            </div>
        </section>
    );
}
export default Hero;
