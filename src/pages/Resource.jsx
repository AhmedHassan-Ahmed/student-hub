import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import AddResource from "../components/AddResource";
import PageMainHeader from "../components/PageMainHeader";
import Button from "../components/Button";

function Resource() {
    const [resources, setResources] = useState(() => {
        const saved = localStorage.getItem("resources");
        return saved ? JSON.parse(saved) : [];
    });

    const handleDelete = (id) => {
        const updated = resources.filter((res) => res.id !== id);
        setResources(updated);
    };

    const [deletingId, setDeletingId] = useState(null);

    const deleteResource = (id) => {
        setDeletingId(id);

        setTimeout(() => {
            handleDelete(id);
            setDeletingId(null);
        }, 300);
    };
    const handleAdd = (newResource) => {
        setResources([...resources, newResource]);
    };

    const handleCheck = (id) => {
        const updated = resources.map((res) =>
            res.id === id ? { ...res, done: !res.done } : res);
        setResources(updated);
    }

    const [selectedTopic, setSelectedTopic] = useState("All");
    const topics = [
        "All",
        ...new Set(
            resources.map((res) => res.title.split(" ")[0])
        ),
    ];
    const filteredResources =
        selectedTopic === "All"
            ? resources
            : resources.filter((res) =>
                res.title.toLowerCase().includes(selectedTopic.toLowerCase())
            );

    useEffect(() => {
        localStorage.setItem("resources", JSON.stringify(resources));
    }, [resources]);

    const total = resources.length;
    const completed = resources.filter((res) => res.done).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    const topicStats = {};

    resources.forEach((res) => {
        const topic = res.title.split(" ")[0];

        if (!topicStats[topic]) {
            topicStats[topic] = { total: 0, done: 0 };
        }

        topicStats[topic].total++;
        if (res.done) topicStats[topic].done++;
    });

    return (

        <div className="">
            <PageMainHeader
                title="My Learning Resources"
                description="Explore and manage your saved learning materials and tools."
                currentPage="My Resources"
            >
                <AddResource onAdd={handleAdd} />
            </PageMainHeader>

            <div className="grid grid-cols-2 gap-5">
                <div className="">
                    <div className="grid grid-cols-5 lg:flex-row lg:items-start gap-3 pt-6">
                        {topics.map((topic) => (
                            <Button
                                key={topic}
                                onclick={() => setSelectedTopic(topic)}
                                className="ml-3"
                                variant={selectedTopic === topic ? "primary" : "outline"}
                            >
                                {topic}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 shadow-md rounded-xl p-5 mt-6 border space-y-5">

                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-white">
                            Learning Progress
                        </h3>
                        <span className="text-sm text-gray-400">
                            {completed} / {total}
                        </span>
                    </div>

                    <div>
                        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                            <div
                                className="bg-green-500 h-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>

                        <p className="text-right text-sm text-gray-400 pt-3">
                            {percentage}% completed
                        </p>
                    </div>

                    <div className="border-t pt-3 space-y-3">

                        {Object.keys(topicStats).map((topic) => {
                            const t = topicStats[topic];
                            const percent = Math.round((t.done / t.total) * 100);

                            return (
                                <div key={topic}>

                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-white">
                                            {topic}
                                        </span>
                                        <span className="text-gray-400">
                                            {t.done} / {t.total}
                                        </span>
                                    </div>

                                    <div className="w-full bg-gray-200 h-2 rounded-full">
                                        <div
                                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {resources.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredResources.map((res) => (
                        <ResourceCard
                            key={res.id}
                            resource={res}
                            onDelete={deleteResource}
                            onCheck={handleCheck}
                            deletingId={deletingId}
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