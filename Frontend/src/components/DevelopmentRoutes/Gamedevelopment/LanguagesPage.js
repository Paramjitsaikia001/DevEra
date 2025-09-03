import React from 'react';
export default function LanguagesPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Languages (C#, C++, GDScript)</h2>
            <p>Learn the main language(s) for your engine: C# (Unity), C++ (Unreal), GDScript (Godot), etc.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 