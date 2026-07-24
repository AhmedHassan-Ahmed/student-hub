import { FaTrash, FaCheck } from "react-icons/fa";
import Deletebtn from "./Deletebtn";
import Checkbtn from "./Checkbtn";
import Button from "./Button";

function ResourceCard({ resource, onDelete, onCheck, deletingId }) {
    return (
        <div className="bg-white mx-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col md:mx-7 lg:mx-0">

            <div className="relative">
                <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-52 object-cover rounded-t-lg"
                />

                <div className="absolute top-2 right-2 flex gap-2">
                    <Checkbtn onCheck={() => onCheck(resource.id)} isDone={resource.done} />
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h2 className="font-bold text-lg mb-2">{resource.title}</h2>

                <p className="text-gray-500 text-sm flex-grow">
                    {resource.description}
                </p>
                <div className="flex items-center gap-2 mt-4 md:justify-between">
                    <Button
                        className="mt-4 w-full rounded-lg md:w-full"
                        onclick={() => window.open(resource.link, "_blank")}
                    >
                        Explore
                    </Button>
                    <Deletebtn onDelete={() => onDelete(resource.id)} />

                </div>
            </div>
        </div>
    )
}

export default ResourceCard;