import { useState, useEffect } from "react";
import PageMainHeader from "../components/PageMainHeader";
import ProfileHeader from "../components/ProfileHeader";
import BioSection from "../components/BioSection";
import ContactSection from "../components/ContactSection";
import SkillsSection from "../components/SkillsSection";
import EditProfile from "../components/EditProfile";

function Profile() {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        const parsed = saved ? JSON.parse(saved) : {};

        return {
            name: parsed.name || "Your name",
            email: parsed.email || "",
            title: parsed.title || parsed.role || "Job Title",
            bio: parsed.bio || "",
            image: parsed.image,
            phone: parsed.phone || "",
            location: parsed.location || "",
            softSkills: parsed.softSkills || [],
            techSkills: parsed.techSkills || [],
        };
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <div>
            <div>
                <PageMainHeader
                    title="My Profile"
                    description="Manage your personal information"
                    currentPage="My Profile"
                >
                    <EditProfile
                        user={user}
                        onSave={(updated) =>
                            setUser((prev) => ({ ...prev, ...updated }))
                        }
                    />
                </PageMainHeader>


            </div>

            <ProfileHeader user={user} />

            <BioSection user={user} />

            <ContactSection user={user} />

            <SkillsSection user={user} />
        </div>
    );
}

export default Profile;