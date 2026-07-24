import { testimonials } from "../data/testimonials";
import { Star } from "lucide-react";
function Testimonials() {
    return (
        <section id="testimonials" className="bg-gray-50 py-20 px-6 dark:bg-gray-900">
            <h4 className="text-center text-[#6C90C3] font-semibold tracking-widest">
                TESTIMONIALS
            </h4>
            <h2 className="text-center text-4xl font-bold mt-2 mb-14 text-gray-900 dark:text-white">
                What Our Students Say
            </h2>
            <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
                {testimonials.map((student) => (
                    <div key={student.id} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-6 shadow-lg shadow-blue-600/10 hover:scale-105 duration-300 dark:border-gray-700 dark:bg-gray-950 dark:shadow-[#6C90C3]/20">
                        <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {student.name}
                            </h3>
                            <div className="flex gap-1 my-2 text-yellow-400">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                {student.review}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Testimonials;
