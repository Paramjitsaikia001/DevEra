import React from 'react';
export default function EnginesPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Game Engines (Unity, Unreal, Godot)</h2>
            <p>Choose a game engine: Unity (C#), Unreal Engine (C++), Godot, etc. Each has its own strengths and learning curve.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 