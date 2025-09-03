import React from 'react';
export default function LanguagesPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Languages (Swift, Kotlin, Dart, JS)</h2>
            <p>Learn the main language(s) for your platform: Swift (iOS), Kotlin/Java (Android), Dart (Flutter), JavaScript/TypeScript (React Native).</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 