import { useRef, useState } from "react";
import Button from "../components/Button";
import { Plus } from "lucide-react";
import InputField from "./InputField";

const AddResource = ({ onAdd }) => {
    const [errors, setErrors] = useState({});

    const dialogRef = useRef();
    const open = () => dialogRef.current.showModal();
    const close = () => dialogRef.current.close();

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData(e.target);

        const title = formData.get("title")?.trim();
        const image = formData.get("image")?.trim();
        const link = formData.get("link")?.trim();
        const description = formData.get("description")?.trim();

        let newErrors = {};

        if (!title || title.length < 3) newErrors.title = "Min 3 characters";

        if (description && description.length < 5)
            newErrors.description = "Too short";

        if (!link) {
            newErrors.link = "Link is required";
        } else if (!/^https?:\/\/.+/.test(link)) {
            newErrors.link = "Please enter a valid URL (must start with http or https)";
        }

        if (image && !/^https?:\/\/.+/.test(image)) {
            newErrors.image = "Image must be a valid URL";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const resource = {
            id: Date.now(),
            title,
            description,
            image,
            link,
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

                    <div className="space-y-4">

                        <InputField
                            id="title"
                            name="title"
                            label="Resource Title"
                            required
                            minLength={3}
                            error={errors.title}
                        />

                        <InputField
                            id="link"
                            name="link"
                            label="Resource Link"
                            type="url"
                            required
                            pattern="https?://.+"
                            error={errors.link}
                        />

                        <InputField
                            id="image"
                            name="image"
                            label="Image URL"
                            required
                            type="url"
                            error={errors.image}
                        />

                        <div className="relative">
                            <textarea
                                name="description"
                                placeholder=" "
                                className="peer w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
                                focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                            />
                            <label className="absolute left-3 top-5 text-gray-500 transition-all duration-200
                                peer-placeholder-shown:top-5
                                peer-placeholder-shown:text-sm
                                peer-focus:top-2
                                peer-focus:text-[11px]
                                peer-focus:font-semibold
                                peer-focus:text-blue-600
                                peer-[:not(:placeholder-shown)]:top-2
                                peer-[:not(:placeholder-shown)]:text-[11px]">
                                Description
                            </label>

                            {errors.description && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={close}
                            className="border px-4 py-2 rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
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