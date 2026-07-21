import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import AddResource from "../components/AddResource";
import PageMainHeader from "../components/PageMainHeader";

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
            <PageMainHeader
                title="My Learning Resources"
                description="Explore and manage your saved learning materials and tools."
                currentPage="My Resources"
            >
                <AddResource onAdd={handleAdd} />
            </PageMainHeader>

            {resources.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {resources.map((res) => (
                        <ResourceCard
                            key={res.id}
                            resource={res}
                            onDelete={handleDelete}
                            onCheck={handleCheck}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center py-20 text-gray-400">

                    <p className="text-lg font-medium mb-2">
                        No resources
                    </p>

                    <p className="text-sm mb-6">
                        Start adding your learning resources
                    </p>

                </div>
            )}
        </div>

    );
}

export default Resource;