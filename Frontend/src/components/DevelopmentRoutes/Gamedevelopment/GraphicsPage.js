import React from 'react';
export default function GraphicsPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Graphics & Assets</h2>
            <p>Learn about 2D/3D graphics, asset creation, importing assets, and using asset stores.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 