function Footer() {
    return (
        <footer id="contacts" className="bg-[#0C1225] py-16 px-6">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                <div>
                    <h3 className="text-white font-bold mb-4">
                        Student Hub
                    </h3>
                    <p className="text-gray-400 leading-7">
                        Your all-in-one platform to manage tasks,
                        notes and study resources efficiently.
                    </p>
                    <div className="flex gap-5 mt-6 text-2xl">
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                    </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Tasks</a></li>
                        <li><a href="#">Notes</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Resources
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>User Guide</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Contact
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>hello@studenthub.com</li>
                        <li>+20 123 456 7890</li>
                        <li>Cairo, Egypt</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Newsletter
                    </h4>
                    <input 
                        type="email" placeholder="Enter your email"
                        className="w-full bg-[#092360] font-bold text-white rounded-lg p-3 outline-none"
                    />
                    <button
                        className="w-full mt-4 py-3 rounded-xl bg-[#6C90C3]
                        text-[#0C1225] font-bold shadow-lg shadow-[#6C90C3]/30
                        hover:bg-[#0C1225] hover:text-[#6C90C3] cursor-pointer"
                    >
                        Send
                    </button>
                </div>
            </div>
            <p className="text-center text-gray-500 mt-12">
                © 2026 Student Hub. All Rights Reserved.
            </p>
        </footer>
    );
};
export default Footer;