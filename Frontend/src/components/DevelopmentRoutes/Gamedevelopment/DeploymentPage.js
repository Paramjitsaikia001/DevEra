import React from 'react';
export default function DeploymentPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Deployment</h2>
            <p>Learn how to build and publish your game for different platforms (PC, mobile, web, consoles).</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 