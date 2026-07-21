function ContactSection({ user }) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            <div className="space-y-2 text-gray-600 px-2">
                {user.email || user.phone || user.location ? (
                    <>
                        {user.email && <p>✉️ {user.email}</p>}
                        {user.phone && <p>📞 {user.phone}</p>}
                        {user.location && <p>📍 {user.location}</p>}
                    </>
                ) : (
                    <div className="text-center text-gray-400 py-6 border rounded-lg">
                        <p>No contact info</p>
                        <p className="text-xs">Click "Edit Profile" to add it</p>
                    </div>
                )} </div>
        </div>
    );
}

export default ContactSection;