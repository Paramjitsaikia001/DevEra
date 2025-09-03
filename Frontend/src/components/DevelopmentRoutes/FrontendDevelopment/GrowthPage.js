import React from 'react';
export default function GrowthPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Keep Growing</h2>
            <p>Explore new frameworks, contribute to open source, and build your portfolio!</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 