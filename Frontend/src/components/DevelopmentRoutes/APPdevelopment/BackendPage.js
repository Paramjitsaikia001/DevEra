import React from 'react';
export default function BackendPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Backend & Databases</h2>
            <p>Learn about backend options (Firebase, Node.js, Django, etc.) and how to connect your app to databases and cloud services.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 