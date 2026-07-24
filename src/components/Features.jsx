import { features } from "../data/features";
function Features() {
    return (
        <section id="features" className="bg-gray-50 text-gray-900 py-20 px-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center">
                    Why Choose <span className="text-[#6C90C3]"> Student Hub?</span>
                </h2>
                <p className="text-center text-gray-600 mt-4 mb-14 dark:text-gray-400">
                    Everything you need to stay productive.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.id} className="bg-white rounded-2xl p-8 shadow-sm hover:scale-105 duration-300 dark:bg-gray-950">
                                <Icon size={40} className="text-[#6C90C3] mb-6"/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
export default Features;
