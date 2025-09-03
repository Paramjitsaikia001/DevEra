import React from 'react';
export default function DesignPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Game Design</h2>
            <p>Understand game mechanics, level design, player experience, and prototyping. Learn to use design tools and iterate on ideas.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 