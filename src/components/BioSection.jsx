function BioSection({ user }) {
    return (
        <div className="ml-6 mr-6 bg-white shadow-lg rounded-xl p-6 mt-6
        md:mt-24">
            <h3 className="text-2xl  font-semibold mb-3">Bio</h3>
            {user.bio ? (
                <p className="text-gray-700">{user.bio}</p>
            ) : (
                <div className="text-center text-gray-400 py-6 border rounded-lg">
                    <p>No bio</p>
                    <p className="text-xs">Click "Edit Profile" to add your bio</p>
                </div>
            )}
        </div>
    );
}

export default BioSection;