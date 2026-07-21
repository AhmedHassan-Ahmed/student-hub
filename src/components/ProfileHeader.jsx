function ProfileHeader({ user }) {
    return (
        <div className="w-full mt-4">

            <div className="w-full h-32 bg-blue-400 rounded-sm shadow-sm
                md:h-36 lg:h-40 relative flex justify-center md:justify-start md:px-6">

                <div className="
                    w-40 h-40
                    md:w-48 md:h-48 md:translate-y-1/2
                    lg:w-52 lg:h-52
                    rounded-full overflow-hidden border-4 border-white shadow-sm
                    translate-y-1/3
                ">
                    <img
                        src={user.image || "https://i.pravatar.cc/150"}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            <div className="
                text-center mt-24 
                md:text-left md:ml-64 md:mt-5
                lg:ml-64
            ">
                <h2 className="text-2xl font-bold text-black md:text-3xl">
                    {user.name || "Your Name"}
                </h2>

                <p className="text-gray-600 mt-2 md:text-lg">
                    {user.title || "Add your job title"}
                </p>
            </div>

        </div>
    );
}

export default ProfileHeader;