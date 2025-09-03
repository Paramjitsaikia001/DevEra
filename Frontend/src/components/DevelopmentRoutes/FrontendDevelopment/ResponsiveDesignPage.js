import React from 'react';
export default function ResponsiveDesignPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Responsive Design</h2>
            <p>Use Flexbox, Grid, and media queries.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 