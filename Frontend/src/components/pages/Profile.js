import React from "react";

export default function Profile() {
    // Dummy user data
    const user = {
        fullName: "Paramjit Saikia",
        username: "paramjit",
        email: "paramjit@example.com",
        github: "https://github.com/paramjit",
        portfolio: "https://paramjit.dev",
        isMentor: true,
        savedRoadmaps: [
            "Frontend Development",
            "AI/ML Development",
            "Web Development"
        ]
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8">
                {/* Profile Details */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-4 text-[#198de0]">Profile Details</h2>
                    <div className="flex flex-col gap-2">
                        <span><strong>Full Name:</strong> {user.fullName}</span>
                        <span><strong>Username:</strong> {user.username}</span>
                        <span><strong>Email:</strong> {user.email}</span>
                        <span>
                            <strong>GitHub:</strong>{" "}
                            <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                {user.github}
                            </a>
                        </span>
                        <span>
                            <strong>Portfolio:</strong>{" "}
                            <a href={user.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                {user.portfolio}
                            </a>
                        </span>
                    </div>
                </div>

                {/* Saved Roadmaps */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-4 text-[#198de0]">Saved Roadmaps</h2>
                    <ul className="list-disc ml-6">
                        {user.savedRoadmaps.map((roadmap, idx) => (
                            <li key={idx} className="text-gray-700">{roadmap}</li>
                        ))}
                    </ul>
                </div>

                {/* Mentor Section */}
                {user.isMentor && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-[#198de0]">Mentor Section</h2>
                        <div className="text-gray-700">
                            <p>You are registered as a <span className="font-semibold text-green-600">Mentor</span>.</p>
                            <p className="mt-2">You can help guide learners, answer questions, and share resources.</p>
                            {/* Add more mentor features here as needed */}
                        </div>
                    </div>
                )}
                </div>
        </section>
    );
}