import React from 'react';
export default function PlatformsPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Platforms (iOS, Android, Cross-platform)</h2>
            <p>Choose your target platform: iOS, Android, or cross-platform (Flutter, React Native, etc.).</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 