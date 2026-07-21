import { useRef } from "react";
import Button from "../components/Button";
import { Plus } from "lucide-react";

const AddResource = ({ onAdd }) => {
    const dialogRef = useRef();

    const open = () => dialogRef.current.showModal();
    const close = () => dialogRef.current.close();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const resource = {
            id: Date.now(),
            title: formData.get("title"),
            description: formData.get("description"),
            image: formData.get('image'),
            link: formData.get("link"),
            done: false,
        };

        onAdd(resource);
        close();
        e.target.reset();

    };

    return (
        <>
            <Button onclick={open}>
                <Plus className="w-4 h-4" />
                Add Resource
            </Button>

            <dialog
                ref={dialogRef}
                className="m-auto w-full max-w-lg rounded-lg p-0 shadow-xl backdrop:bg-black/50"
            >
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Add Resource</h2>

                        <button
                            type="button"
                            onClick={close}
                            className="text-gray-500 hover:text-black text-xl"
                        >
                            x
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder=" "
                            className="peer w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
                            focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 "
                        />
                        <label
                            htmlFor="title"
                            className="absolute left-3 top-5 text-gray-500 transition-all duration-200
                                peer-placeholder-shown:top-5
                                peer-placeholder-shown:text-sm
                                peer-focus:top-2
                                peer-focus:text-[11px]
                                peer-focus:font-semibold
                                peer-focus:text-blue-600
                                peer-[:not(:placeholder-shown)]:top-2
                                peer-[:not(:placeholder-shown)]:text-[11px]
                                peer-[:not(:placeholder-shown)]:font-semibold
                                peer-[:not(:placeholder-shown)]:text-blue-600"
                        >
                            Resource Title
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            name="image"
                            type="text"
                            placeholder=" "
                            className="peer w-full resize-y rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
                              focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                        />
                        <label
                            htmlFor="description"
                            className="absolute left-3 top-5 bg-white px-1 text-gray-500 transition-all duration-200
                                peer-placeholder-shown:top-5
                                peer-placeholder-shown:text-sm
                                peer-focus:top-2
                                peer-focus:text-[11px]
                                peer-focus:font-semibold
                                peer-focus:text-blue-600
                                peer-[:not(:placeholder-shown)]:top-2
                                peer-[:not(:placeholder-shown)]:text-[11px]
                                peer-[:not(:placeholder-shown)]:font-semibold
                                peer-[:not(:placeholder-shown)]:text-blue-600"
                        >                            Image URL
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            name="link"
                            type="text"
                            placeholder=" "
                            className="peer w-full resize-y rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
                                focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                        />
                        <label
                            htmlFor="description"
                            className="absolute left-3 top-5 bg-white px-1 text-gray-500 transition-all duration-200
                                peer-placeholder-shown:top-5
                                peer-placeholder-shown:text-sm
                                peer-focus:top-2
                                peer-focus:text-[11px]
                                peer-focus:font-semibold
                                peer-focus:text-blue-600
                                peer-[:not(:placeholder-shown)]:top-2
                                peer-[:not(:placeholder-shown)]:text-[11px]
                                peer-[:not(:placeholder-shown)]:font-semibold
                                peer-[:not(:placeholder-shown)]:text-blue-600"
                        >                            Resource Link
                        </label>
                    </div>

                    <div className="relative">
                        <textarea
                            name="description"
                            rows="3"
                            placeholder=" "
                            className="peer w-full resize-y rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
                                 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                        />
                        <label
                            htmlFor="description"
                            className="absolute left-3 top-5 bg-white px-1 text-gray-500 transition-all duration-200
                                peer-placeholder-shown:top-5
                                peer-placeholder-shown:text-sm
                                peer-focus:top-2
                                peer-focus:text-[11px]
                                peer-focus:font-semibold
                                peer-focus:text-blue-600
                                peer-[:not(:placeholder-shown)]:top-2
                                peer-[:not(:placeholder-shown)]:text-[11px]
                                peer-[:not(:placeholder-shown)]:font-semibold
                                peer-[:not(:placeholder-shown)]:text-blue-600"
                        >                            Description
                        </label>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={close}
                            className="border px-4 py-2 rounded cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
                        >
                            Save Resource
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default AddResource;