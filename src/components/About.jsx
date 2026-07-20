import about from "../assets/images/about.png";
function About() {
    return (
        <section id="about" className="bg-[#0C1225] text-[white] py-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h5 className="text-[#6C90C3] uppercase tracking-widest font-semibold">
                        SMART & SIMPLE
                    </h5>
                    <h2 className="text-4xl font-bold mt-3 leading-tight">
                        A Better Way to <br /> Manage Your Studies
                    </h2>
                    <p className="text-gray-400 mt-6 leading-8">
                        Our dashboard helps you stay organized and
                        focused on what matters most.
                    </p>
                    <ul className="space-y-4 mt-8">
                        <li className="font-semibold">✔ Easy Navigation</li>
                        <li className="font-semibold">✔ Modern Interface</li>
                        <li className="font-semibold">✔ Responsive Design</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img src={about} alt="About" className="w-full max-w-xl"/>
                </div>
            </div>
        </section>
    );
}
export default About;