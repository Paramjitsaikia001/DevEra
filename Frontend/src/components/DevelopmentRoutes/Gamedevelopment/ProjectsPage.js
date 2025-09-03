import React from 'react';
export default function ProjectsPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <p>Build real-world games to solidify your skills: Platformer, Puzzle, Multiplayer, etc.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 