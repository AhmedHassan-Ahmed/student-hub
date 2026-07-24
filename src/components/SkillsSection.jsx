function SkillsSection({ user }) {
    return (
        <div className="ml-6 mr-6 bg-white shadow-lg rounded-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Technical Skills</h3>

                    {user.techSkills.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {user.techSkills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-400 py-6 border rounded-lg">
                            <p className="text-sm">No technical skills</p>
                            <p className="text-xs">Click "Edit Profile" to add some</p>
                        </div>
                    )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg ">
                    <h3 className="font-semibold mb-3">Soft Skills</h3>

                    {user.softSkills.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {user.softSkills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-400 py-6 border rounded-lg">
                            <p className="text-sm">No soft skills</p>
                            <p className="text-xs">Click "Edit Profile" to add some</p>
                        </div>
                    )}

                </div>

            </div>
        </div >
    );
}
export default SkillsSection;