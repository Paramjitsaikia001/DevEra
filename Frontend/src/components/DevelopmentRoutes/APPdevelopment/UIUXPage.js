import React from 'react';
export default function UIUXPage({ close }) {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
            <p>Understand mobile UI/UX principles, navigation, and accessibility. Learn to use design tools and follow platform guidelines.</p>
            <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </section>
    );
} 