import { Link } from "react-router-dom";

function PagesFooter() {
    return (
        <footer className="bg-white/90 border-t shadow-top border-gray-200 mt-16 text-center">
            <div className="max-w-7xl mx-auto px-6 py-8 grid gap-8 md:grid-cols-3">

                <div>
                    <h2 className="text-blue-700 tracking-tight text-lg font-bold mb-3">
                        Student-Hub
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Track your progress and stay organized in one place.
                    </p>
                </div>

                <div className="md:text-center">
                    <h3 className="text-blue-700 font-medium mb-2">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 my-3 text-sm">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Dashboard", path: "/dashboard" },
                            { name: "Tasks", path: "/tasks" },
                            { name: "Resources", path: "/resources" },
                            { name: "Notes", path: "/notes" },
                            { name: "Profile", path: "/profile" },
                        ].map((link) => (
                            <li key={link.name} className="hover:scale-110 transition-all duration-500">
                                <Link
                                    to={link.path}
                                    className="px-4 py-1 rounded-md transition hover:bg-blue-100 hover:text-blue-700 "
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-blue-700 font-medium mb-3">
                        Connect
                    </h3>

                    <div className="flex flex-col gap-3 text-md">

                        <span>hello@studenthub.com</span>
                        <span>+20 123 456 7890</span>
                        <span>Cairo, Egypt</span>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-200 text-center text-sm py-4 text-blue-900">
                © 2026 Student Hub. All rights reserved.
            </div>
        </footer>
    );
}

export default PagesFooter;