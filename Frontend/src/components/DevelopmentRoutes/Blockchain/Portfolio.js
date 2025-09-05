import { useState } from "react";

export default function PortfolioBuildout({ closePortfolio, Done }) {
  const Nexthandler = () => {
    Done();
    closePortfolio();
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
        <h2 className="text-2xl font-bold">Portfolio Buildout</h2>
        <button
          onClick={closePortfolio}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Apply everything you’ve learned to build production-grade projects
        showcasing your blockchain skills. Focus on upgradeable contracts,
        NFT collections, DeFi apps, and one advanced-path project with
        thorough documentation, tests, and deployment on testnets.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🚀 Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <span className="font-bold">Upgradeable ERC-20:</span> Mint, airdrop,
            and integrate a UI dashboard.
          </li>
          <li>
            <span className="font-bold">NFT Collection:</span> On-chain metadata,
            subgraph indexing, IPFS hosting, and marketplace listing flow.
          </li>
          <li>
            <span className="font-bold">Mini AMM:</span> Add/remove liquidity,
            view analytics with subgraph integration.
          </li>
          <li>
            <span className="font-bold">Advanced Path Project:</span> Implement
            a project from Solana/Rust, Substrate/Polkadot, ZK, or StarkNet.
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.openzeppelin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Docs – Upgradeable Contracts & Security
            </a>
          </li>
          <li>
            <a
              href="https://thegraph.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Graph – Indexing & Subgraphs
            </a>
          </li>
          <li>
            <a
              href="https://ipfs.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IPFS Docs – Decentralized File Storage
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/en/developers/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethereum Developer Docs – Testnet & Deployment
            </a>
          </li>
          <li>
            <a
              href="https://solidity-by-example.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Solidity by Example – Practice & Patterns
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
          Done
        </button>
      </div>
    </div>
  );
}
