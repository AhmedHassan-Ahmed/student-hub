import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="bg-[#052659] py-20 px-6 text-center">
            <h2 className="text-4xl font-bold text-white">
                Ready to Boost Your Productivity?
            </h2>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
                Join thousands of students and take control of your learning journey.
            </p>
            <Link
                to="/dashboard"
                className="inline-block mt-10 px-8 py-4 rounded-xl font-bold border border-[#6C90C3]
                text-[#6C90C3] shadow-lg shadow-[#6C90C3]/30
                hover:bg-[#6C90C3] hover:text-[#0C1225]
                duration-300"
            >
                Get Started Now
            </Link>
        </section>
    );
    }
export default CTA;