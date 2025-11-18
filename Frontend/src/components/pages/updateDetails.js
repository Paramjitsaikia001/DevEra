import React, { useState, useEffect } from "react";
import UserContext from '../../Context/user.context';
import { useContext } from 'react';
import { inputStyles, textStyles } from "../../utils/styles";

export default function UpdateDetails() {
    const { user, updateDetails } = useContext(UserContext);

    const [fullName, setFullName] = useState("");
    const [role, setRole] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [coverPicture, setCoverPicture] = useState("");
    const [bio, setBio] = useState("");
    const [github, setGithub] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setFullName(user.fullName || "");
            setRole(user.role || "");
            setProfilePicture(user.profilePicture || "");
            setCoverPicture(user.coverPicture || "");
            setBio(user.bio || "");
            setGithub(user.github || "");
            setPortfolio(user.portfolio || "");
            setLinkedin(user.Linkedin || "");
        }
    }, [user]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const payload = {
                fullName,
                Role: role,
                profilePicture,
                coverPicture,
                github,
                Linkedin: linkedin,
                portfolio,
                bio,
            };

            await updateDetails(payload);

            alert("Profile updated successfully!");
        } catch (err) {
            console.error("Update failed", err);
            alert(err?.message || "Failed to update profile");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-primary-bg flex items-center lg:w-[80%] w-[100%]  justify-center px-4 py-10">
            <div className="w-full px-12">

                <div className="border-b-2 pb-4 border-gray-500">
                    <h2 className=' text-5xl font-bold text-primary-dark'>Update Profile Details</h2>
                </div>

                {/* Full Name */}
                <div className="mb-5">
                    <label className={`block text-gray-700 font-medium mb-1`}>Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="Your full name"
                    />
                </div>

                {/* Role */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                    >
                        <option value="">Select role</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Profile Picture URL */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1">Profile Picture URL</label>
                    <input
                        type="text"
                        value={profilePicture}
                        onChange={(e) => setProfilePicture(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://.../profile.jpg"
                    />
                    {profilePicture && (
                        <div className="mt-3">
                            <img src={profilePicture} alt="profile-preview" className="w-24 h-24 rounded-full object-cover border" />
                        </div>
                    )}
                </div>

                {/* Cover Picture URL */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1">Cover Picture URL</label>
                    <input
                        type="text"
                        value={coverPicture}
                        onChange={(e) => setCoverPicture(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://.../cover.jpg"
                    />
                    {coverPicture && (
                        <div className="mt-3">
                            <div className="w-full h-40 rounded-lg overflow-hidden border bg-gray-50">
                                <img src={coverPicture} alt="cover-preview" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Bio */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1">Bio</label>
                    <textarea
                        rows="3"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="Tell something about yourself..."
                    ></textarea>
                </div>

                {/* GitHub */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1">GitHub Link</label>
                    <input
                        type="text"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://github.com/username"
                    />
                </div>

                {/* Portfolio */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1">Portfolio Website</label>
                    <input
                        type="text"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://yourwebsite.com"
                    />
                </div>

                {/* LinkedIn */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-1">LinkedIn Profile</label>
                    <input
                        type="text"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://linkedin.com/in/username"
                    />
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-blue-300"
                >
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}