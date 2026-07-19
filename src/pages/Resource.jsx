import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ResourceCard from "../components/ResourceCard";
import { resources as initialResources } from "../data/resourceData";

function Resource() {
    const [resources, setResources] = useState(initialResources.map(r => ({ ...r, done: false })));
    const handleDelete = (id) => {
        const updated = resources.filter((res) => res.id !== id);
        setResources(updated);
    };

    const handleCheck = (id) => {
        const updated = resources.map((res) =>
            res.id === id ? { ...res, done: !res.done } : res);
        setResources(updated);
    }

    return (

        <div className="m-5 p-4">
            <PageHeader title="My Resources" buttonText="Add Resource"
            />
            <div className="grid grid-cols-1 gap-6
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