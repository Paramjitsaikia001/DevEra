import React from 'react';
export default function JavaScriptPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">JavaScript</h2>
            <p>Master JS fundamentals, DOM manipulation, and ES6+ features.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
}
