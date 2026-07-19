function PageHeader({ title, buttonText, onClick }) {
    return (
        <div className="flex justify-between items-center mb-6">

            <h1 className="text-primary font-bold font-headers text-3xl">
                {title}
            </h1>

            <button
                onClick={onClick}
                className="bg-accent text-white px-4 py-2 rounded-lg cursor-pointer
        transition-all duration-300 hover:bg-blue-400"
            >
                {buttonText}
            </button>

        </div>
    );
}

export default PageHeader;