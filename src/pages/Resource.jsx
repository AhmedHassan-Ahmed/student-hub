import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import AddResource from "../components/AddResource";

function Resource() {
    const [resources, setResources] = useState(() => {
        const saved = localStorage.getItem("resources");
        return saved ? JSON.parse(saved) : [];
    });

    const handleDelete = (id) => {
        const updated = resources.filter((res) => res.id !== id);
        setResources(updated);
    };

    const handleAdd = (newResource) => {
        setResources([...resources, newResource]);
    };

    const handleCheck = (id) => {
        const updated = resources.map((res) =>
            res.id === id ? { ...res, done: !res.done } : res);
        setResources(updated);
    }


    useEffect(() => {
        localStorage.setItem("resources", JSON.stringify(resources));
    }, [resources]);

    return (

        <div className="">
            <div className="bg-white border-b border-gray-200 px-6 py-5">
                <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <a href="#" className="hover:text-gray-700">
                        Dashboard
                    </a>
                    <span className="mx-2 text-gray-400">/</span>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                        My Resources
                    </a>
                </div>

                <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-5xl font-serif font-bold text-gray-900">
                            My Learning Resources
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Explore and manage your saved learning materials and tools.                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <AddResource onAdd={handleAdd} />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 gap-5
                pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {resources.map((res) => (
                    <ResourceCard
                        key={res.id}
                        resource={res}
                        onDelete={handleDelete}
                        onCheck={handleCheck} />
                ))}
            </div>
        </div>

    );
}

export default Resource;