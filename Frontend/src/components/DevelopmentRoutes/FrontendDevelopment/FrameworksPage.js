import React from 'react';
export default function FrameworksPage({ close }) {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
      <p>Learn React (or Vue/Angular).</p>
      <button onClick={close} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
    </section>
  );
} 