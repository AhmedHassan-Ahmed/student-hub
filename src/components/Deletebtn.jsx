import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Deletebtn({ onDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <>
            <FaTrash
                onClick={() => setShowConfirm(true)}
                className="cursor-pointer border rounded-full text-3xl p-2 transition-all duration-1000 ease-in-out
                            hover:bg-red-800 hover:border-red-800 hover:text-white" />
            {showConfirm && (
                <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
                    <div className="border border-primary p-6 rounded-lg bg-white text-center shadow-lg animate-in fade-in zoom-in">
                        <p className="mb-3">
                            Are you sure you want to delete?</p>
                        <div className="flex gap-4 justify-center">
                            <button className="bg-red-800 text-white px-3 py-1 rounded cursor-pointer transition-all duration-1000 ease-in-out
                            hover:bg-red-900"
                                onClick={() => {
                                    onDelete();
                                    setShowConfirm(false);
                                }}>
                                Yes
                            </button>
                            <button className="bg-gray-300 px-4 py-1 rounded cursor-pointer transition-all duration-1000 ease-in-out
                            hover:bg-gray-400"
                                onClick={() => setShowConfirm(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Deletebtn;