import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import AddResource from "../components/AddResource";
import PageMainHeader from "../components/PageMainHeader";
import Button from "../components/Button";
import ProgressBox from "../components/ResourcesProgressBox";
import PagesFooter from "../components/PagesFooter";

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

            <div className="ml-6 mr-6 grid grid-cols-1 gap-5
            md:grid-cols-2">
                <div className="">
                    <div className="grid grid-cols-3 lg:flex-row lg:items-start gap-3 pt-6
                    lg:grid-cols-4">
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

                <ProgressBox
                    total={total}
                    completed={completed}
                    percentage={percentage}
                    topicStats={topicStats}
                />
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

            <PagesFooter />
        </div>

    );
}

export default Resource;