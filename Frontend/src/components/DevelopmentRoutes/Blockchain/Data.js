import { useState } from "react";

export default function DataIndexing({ closeDataIndexing, Done }) {
  const [isFullScreen, setFullScreen] = useState("left-[60%]");

   const fullscrenHandler = () => {
    setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
  };

  const Nexthandler = () => {
    Done();
    closeDataIndexing();
  };

  return (
    <section
      className={`transition-transform duration-300 ease-in-out fixed right-0 ${isFullScreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`}
    >
      <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
        {/* Header Controls */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex pb-4 justify-between items-center w-[100%]">
          {isFullScreen === "left-[60%]" ? (
            <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
              onClick={fullscrenHandler}
            >
              open_in_full
            </span>
          ) : (
            <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
              onClick={fullscrenHandler}
            >
              close_fullscreen
            </span>
          )}
          <span
            onClick={closeDataIndexing}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>
        </div>

        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Data &amp; Indexing
        </h2>

        {/* Description */}
        <p className="leading-relaxed mb-8 max-w-full">
          Blockchain contracts store minimal on-chain data, so efficient{" "}
          <span className="text-[#23daff] font-bold">event design</span> and off-chain indexing are crucial.
          Learn to use <span className="text-[#23daff] font-bold">The Graph</span> for querying and building APIs,
          and leverage decentralized storage like <span className="text-[#23daff] font-bold">IPFS</span> and{" "}
          <span className="text-[#23daff] font-bold">Arweave</span> for large assets and metadata. This enables
          scalable dApps with fast queries and persistent storage.
        </p>

        {/* What to Learn */}
        <div className="mb-8">
          <h3 className="text-[#23daff] font-bold mb-3 text-lg flex items-center space-x-2">
            <span>🛠️</span>
            <span>What to Learn</span>
          </h3>
          <ul className="list-disc list-inside space-y-2 max-w-full">
            <li>Design event schemas for a token transfer log.</li>
            <li>Build a subgraph to query NFTs and owners.</li>
            <li>Create an NFT gallery with metadata stored on IPFS.</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="mb-8">
          <h3 className="text-[#23daff] font-bold mb-4 text-lg flex items-center space-x-2">
            <span>📚</span>
            <span>Resources</span>
          </h3>
          <ul className="space-y-4 max-w-full">
            <li>
              <div className="flex gap-3 items-center">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://thegraph.com/docs/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">The Graph Official Documentation</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.ipfs.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">IPFS Documentation</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">art</span>
                <a
                  href="https://arweave.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Arweave Official Website</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">play_arrow</span>
                <a
                  href="https://youtu.be/TfTGVIxJg5M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">The Graph Crash Course (YouTube)</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">blog</span>
                <a
                  href="https://www.rareskills.io/post/the-graph-tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">RareSkills – The Graph Tutorial</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeDataIndexing}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Close
          </button>
          <button
            onClick={Nexthandler}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}
