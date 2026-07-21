import { useRef, useState } from "react";
import Button from "./Button";

const EditProfile = ({ user, onSave }) => {
    const dialogRef = useRef();
    const [preview, setPreview] = useState(user.image);

    const open = () => dialogRef.current.showModal();
    const close = () => dialogRef.current.close();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const updatedUser = {
            name: formData.get("name"),
            title: formData.get("title"),
            bio: formData.get("bio"),
            image: preview, // 
            email: formData.get("email"),
            phone: formData.get("phone"),
            location: formData.get("location"),
            techSkills: formData.get("techSkills").split(","),
            softSkills: formData.get("softSkills").split(","),
        };

        onSave(updatedUser);
        close();
        e.target.reset();

    };

    const InputField = ({ id, name, label, defaultValue }) => (
        <div className="relative">
            <input
                id={id}
                name={name}
                defaultValue={defaultValue}
                placeholder=" "
                className="peer w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
                focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
            <label
                htmlFor={id}
                className="absolute left-3 top-5 text-gray-500 transition-all duration-200
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-sm
                peer-focus:top-2
                peer-focus:text-[11px]
                peer-focus:font-semibold
                peer-focus:text-blue-600
                peer-[:not(:placeholder-shown)]:top-2
                peer-[:not(:placeholder-shown)]:text-[11px]"
            >
                {label}
            </label>
        </div>
    );

    return (
        <>
            <Button onclick={open}>Edit Profile</Button>

            <dialog
                ref={dialogRef}
                className="m-auto w-full max-w-lg rounded-xl p-0 shadow-2xl backdrop:bg-black/50"
            >
                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Edit Profile</h2>
                        <button onClick={close} type="button">✕</button>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <img
                            src={preview}
                            alt="preview"
                            className="w-24 h-24 rounded-full object-cover border"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="text-sm"
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-700">Personal Info</h3>

                        <InputField id="name" name="name" label="Full Name" defaultValue={user.name} />
                        <InputField id="title" name="title" label="Job Title" defaultValue={user.title} />

                        <div className="relative">
                            <textarea
                                name="bio"
                                defaultValue={user.bio}
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
                                Bio
                            </label>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-700">Contact Info</h3>

                        <InputField id="email" name="email" label="Email" defaultValue={user.email} />
                        <InputField id="phone" name="phone" label="Phone" defaultValue={user.phone} />
                        <InputField id="location" name="location" label="Location" defaultValue={user.location} />
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-700">Skills</h3>

                        <InputField
                            id="tech"
                            name="techSkills"
                            label="Technical Skills (comma separated)"
                            defaultValue={user.techSkills.join(", ")}
                        />

                        <InputField
                            id="soft"
                            name="softSkills"
                            label="Soft Skills (comma separated)"
                            defaultValue={user.softSkills.join(", ")}
                        />
                    </div>

                    <div className="flex justify-end gap-3">
                        <button onClick={close} type="button" className="border px-4 py-2 rounded">
                            Cancel
                        </button>

                        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">
                            Save
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default EditProfile;