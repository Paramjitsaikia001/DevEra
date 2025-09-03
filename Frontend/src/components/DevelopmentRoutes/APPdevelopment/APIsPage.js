import React from 'react';
export default function APIsPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">APIs & Integrations</h2>
            <p>Integrate third-party APIs (maps, auth, payments, etc.) and learn about REST/GraphQL.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 