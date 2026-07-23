import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-[#0C1225] text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
                <ul className="hidden md:flex gap-8 font-bold">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Opinions</a></li>
                    <li><a href="#start">Start</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
                <Link to="/dashboard" className="hidden md:block bg-[#6C90C3] text-[#0C1225] px-5 py-2 rounded-lg font-bold shadow-lg shadow-[#6C90C3]/30
                hover:bg-[#0C1225] hover:text-[#6C90C3]">
                    Get Started
                </Link>
                <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={32} />
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#0C1225] px-6 pb-5">
                    <ul className="flex flex-col gap-4 font-bold">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#testimonials">Opinions</a></li>
                        <li><a href="#start">Start</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                    <Link
                        to="/dashboard"
                        className="block mt-5 text-center bg-[#6C90C3] text-[#0C1225] px-5 py-2 rounded-lg font-bold hover:bg-[#0C1225] hover:text-[#6C90C3]"
                    >
                        Get Started
                    </Link>
                </div>
            )}
    </nav>
    );
}
export default Navbar;