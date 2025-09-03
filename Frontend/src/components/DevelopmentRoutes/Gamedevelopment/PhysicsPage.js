import React from 'react';
export default function PhysicsPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Physics & Animation</h2>
            <p>Understand game physics, collision detection, and animation systems.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 