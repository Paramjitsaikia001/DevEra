import { useState } from "react";

export default function L2CrossChain({ closeL2CrossChain, Done }) {
  const Nexthandler = () => {
    Done();
    closeL2CrossChain();
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
        <h2 className="text-2xl font-bold">L2s & Cross-chain</h2>
        <button
          onClick={closeL2CrossChain}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Layer 2 solutions and cross-chain protocols improve scalability and
        interoperability in blockchain ecosystems. Understanding rollups,
        bridges, and message passing ensures efficient deployment and secure
        asset transfers across multiple networks.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Deploy a smart contract on Ethereum L1 and an L2 (Optimism/Arbitrum).</li>
          <li>Build a cross-chain messenger that relays messages between L1 and L2.</li>
          <li>Create a demo bridge for token transfers between two testnets.</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://ethereum.org/en/developers/docs/layer-2-scaling/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethereum.org – Layer 2 Scaling
            </a>
          </li>
          <li>
            <a
              href="https://optimism.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Optimism Documentation
            </a>
          </li>
          <li>
            <a
              href="https://developer.offchainlabs.com/docs/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Arbitrum Developer Docs
            </a>
          </li>
          <li>
            <a
              href="https://docs.chainbridge.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ChainBridge Docs – Cross-chain bridges
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/QjL4-z8I3Lw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Layer 2 & Cross-chain Explained – Finematics
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
