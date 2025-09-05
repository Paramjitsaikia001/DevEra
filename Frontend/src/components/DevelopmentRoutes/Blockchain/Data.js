import { useState } from "react";

export default function DataIndexing({ closeDataIndexing, Done }) {
  const Nexthandler = () => {
    Done();
    closeDataIndexing();
  };

  const [isFullScreen, setFullScreen] = useState("left-[60%]");
  const fullscrenHandler = () => {
    setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
  };

  return (
    <div
      className={`absolute top-0 ${isFullScreen} h-full w-[40%] bg-white shadow-lg p-6 transition-all duration-300 rounded-2xl`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Data & Indexing</h2>
        <button
          onClick={closeDataIndexing}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Blockchain contracts store minimal on-chain data, so efficient{" "}
        <strong>event design</strong> and off-chain indexing are crucial.
        Learn to use <strong>The Graph</strong> for querying and building APIs,
        and leverage decentralized storage like <strong>IPFS</strong> and{" "}
        <strong>Arweave</strong> for large assets and metadata. This enables
        scalable dApps with fast queries and persistent storage.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Design event schemas for a token transfer log.</li>
          <li>Build a subgraph to query NFTs and owners.</li>
          <li>Create an NFT gallery with metadata stored on IPFS.</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://thegraph.com/docs/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Graph Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://docs.ipfs.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IPFS Documentation
            </a>
          </li>
          <li>
            <a
              href="https://arweave.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Arweave Official Website
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/TfTGVIxJg5M"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Graph Crash Course (YouTube)
            </a>
          </li>
          <li>
            <a
              href="https://www.rareskills.io/post/the-graph-tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              RareSkills – The Graph Tutorial
            </a>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={fullscrenHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          {isFullScreen === "left-[60%]" ? "Expand" : "Shrink"}
        </button>
        <button
          onClick={Nexthandler}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
