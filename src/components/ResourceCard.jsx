import { FaTrash, FaCheck } from "react-icons/fa";
import Deletebtn from "./Deletebtn";
import Checkbtn from "./Checkbtn";

function ResourceCard({ resource, onDelete, onCheck }) {
    return (
        <div className=" m-1 w-full border border-primary rounded-lg shadow-lg hover:shadow-2xl transition-all duration-1000 ease-in-out ">
            <div className="relative group overflow-hidden rounded-t-lg">

                <img src={resource.image} alt={resource.title}
                    className={`rounded-t-lg w-full h-60 object-cover transition-all duration-1000 ease-in-out scale-110
                      group-hover:opacity-30 group-hover:scale-100
                      ${resource.done ? "scale-100 opacity-30" : "scale-110"}`} />

                <div className={`absolute top-0 left-0 w-full flex items-center justify-center h-60 transition-all duration-1000 opacity-0
                   group-hover:bg-gray-300 
                   ${resource.done ? "opacity-80 bg-gray-300" : "opacity-0 group-hover:opacity-80 group-hover:bg-gray-300"}`}>
                    <h2 className="font-headers text-xl text-primary text-center font-bold">
                        {resource.title}</h2>
                </div>

                <div className={`flex text-black absolute top-0 right-0 m-3 gap-3 rounded-full transition-all duration-500
                    ${resource.done ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    <Deletebtn onDelete={() => onDelete(resource.id)} />
                    <Checkbtn onCheck={() => onCheck(resource.id)}
                        isDone={resource.done} />
                </div>

            </div>

            <p className="p-2 text-gray-500">
                {resource.description}</p>

            <div>
                <button className="resource_btn my-2 mx-4 float-right cursor-pointer text-primary
                transition-all duration-1000 ease-in-out "
                ><a href={resource.link} target="_blank">Explore Now</a></button>
            </div>

        </div>
    )
}

export default ResourceCard;