const InputField = ({
    id,
    name,
    label,
    type = "text",
    defaultValue = "",
    error,
    required = false,
    pattern,
    minLength
}) => {
    return (
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

            {error && (
                <p className="text-red-500 text-xs mt-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;