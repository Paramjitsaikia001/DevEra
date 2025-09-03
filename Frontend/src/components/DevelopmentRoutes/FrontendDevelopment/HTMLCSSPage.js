import React from 'react';
export default function HTMLCSSPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">HTML & CSS</h2>
            <p>Learn to structure and style web pages.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 