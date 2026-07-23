import {Link} from "react-router-dom";
import { X } from "lucide-react";
function DashboardSidebar({isOpen, setIsOpen}) {
    return (
        <aside className={`
            h-screen w-64 bg-[#0C1225] p-6 fixed top-0 left-0 z-50
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0
            `}>
                <button
                onClick={() => setIsOpen(false)}
                className="md:hidden mb-6">
                    <X size={30} />
                </button>
            <h1 className="text-2xl font-bold text-blue-400">
                Student Hub
            </h1>
            <nav className="mt-10 flex flex-col gap-4">
                <Link
                to="/"
                className="hover:text-blue-400 transition">
                    Home
                </Link>
                <Link
                to="/dashboard"
                className="hover:text-blue-400 transition">
                    Dashboard
                </Link>
                <Link
                to="/resource"
                className="hover:text-blue-400 transition">
                    Resources
                </Link>
                <Link
                to="/tasks"
                className="hover:text-blue-400 transition">
                    Tasks
                </Link>
                <Link
                to="/notes"
                className="hover:text-blue-400 transition">
                    Notes
                </Link>
                <Link
                to="/profile"
                className="hover:text-blue-400 transition">
                    Profile
                </Link>
            </nav>
        </aside>
    );
}

export default DashboardSidebar;
