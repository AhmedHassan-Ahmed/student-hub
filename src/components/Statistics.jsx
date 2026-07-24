import { statistics } from "../data/statistics";
function Statistics() {
    return (
        <section className="bg-[#052659] py-9 dark:bg-blue-950">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {statistics.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.id}>
                        <Icon className="mx-auto text-[#6C90C3] mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-white">
                            {item.number}
                        </h3>
                        <p className="text-gray-300">
                            {item.title}
                        </p>
                    </div>
                    );
                })}
            </div>
        </section>
    );
}
export default Statistics;
