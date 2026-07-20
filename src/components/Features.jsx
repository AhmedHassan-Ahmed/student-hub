import { features } from "../data/features";
function Features() {
    return (
        <section id="features" className="bg-[#10182F] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center">
                    Why Choose <span className="text-[#6C90C3]"> Student Hub?</span>
                </h2>
                <p className="text-center text-gray-400 mt-4 mb-14">
                    Everything you need to stay productive.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.id} className="bg-[#0C1225] rounded-2xl p-8 hover:scale-105 duration-300">
                                <Icon size={40} className="text-[#6C90C3] mb-6"/>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
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