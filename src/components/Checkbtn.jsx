import { FaCheck } from "react-icons/fa";
import { resources } from "../data/resourceData";

function Checkbtn({ onCheck, isDone }) {
    return (
        <FaCheck className={`cursor-pointer border rounded-full text-3xl p-2 transition-all duration-1000 ease-in-out
                    hover:bg-green-800 hover:border-green-800 hover:text-white
                    ${isDone
                ? "bg-green-500 text-white"
                : "border text-green-600 border-green-600"}`}
            onClick={onCheck} />

    )
}

export default Checkbtn;