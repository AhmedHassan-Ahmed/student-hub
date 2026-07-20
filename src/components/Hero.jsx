import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
import student1 from "../assets/images/student1.jpg";
import student2 from "../assets/images/student2.jpeg";
import student3 from "../assets/images/student3.jpeg";
function Hero() {
    return (
        <section id="hero" className="bg-[#0C1225] text-white min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        Stay Organized.<br />Learn <span className="text-[#6C90C3]"> Better.</span>
                    </h1>
                    <p className="text-[#6C90C3] font-semibold mb-4">
                        Student Productivity Platform
                    </p>
                    <p className="text-gray-400 mt-6 text-lg leading-8">
                        Track your study progress, manage tasks,
                        save notes and access learning resources
                        in one place.
                    </p>
                    <div className="flex gap-5 mt-10">
                        <Link to="/dashboard" className="bg-[#6C90C3] text-[#0C1225] px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-[#6C90C3]/30
                        hover:bg-[#0C1225] hover:text-[#6C90C3]
                        transition-colors duration-300">
                            Get Started
                            <ArrowRight size={18}/>
                        </Link>
                        <button className="border border-[#6C90C3] px-6 py-3 rounded-lg text-[#6C90C3] shadow-lg shadow-[#6C90C3]/30
                        hover:bg-[#6C90C3] hover:text-[#0C1225]
                        transition-colors duration-300 cursor-pointer">
                            Learn More
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mt-10">
                        <div className="flex -space-x-4">
                            <img src={student1} className="w-12 h-12 rounded-full border-2 border-[#0C1225] object-cover"/>
                            <img src={student2} className="w-12 h-12 rounded-full border-2 border-[#0C1225] object-cover"/>
                            <img src={student3} className="w-12 h-12 rounded-full border-2 border-[#0C1225] object-cover"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Join 1,400+ Students
                            </h3>
                            <p className="text-gray-400 text-sm">
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