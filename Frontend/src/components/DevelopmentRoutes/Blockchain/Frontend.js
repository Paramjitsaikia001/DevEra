import { useState } from "react";

export default function FrontendIntegration({ closeFrontendIntegration, Done }) {
  const Nexthandler = () => {
    Done();
    closeFrontendIntegration();
  };

  const [isFullScreen, setFullScreen] = useState("left-[60%]");
  const fullscrenHandler = () => {
    setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
  };

  return (
    <div
      className={`absolute top-0 ${isFullScreen} h-full w-[40%] bg-white shadow-lg p-6 transition-all duration-300 rounded-2xl`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Frontend Integration</h2>
        <button
          onClick={closeFrontendIntegration}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Learn how to connect your smart contracts with web applications using
        libraries like <strong>Ethers.js</strong> and <strong>Web3.js</strong>.
        Build decentralized apps (dApps) that interact with blockchain networks
        through MetaMask or WalletConnect. Practice by creating a simple dApp
        with user authentication, transactions, and real-time blockchain data
        display.
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.ethers.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethers.js Documentation
            </a>
          </li>
          <li>
            <a
              href="https://web3js.readthedocs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Web3.js Documentation
            </a>
          </li>
          <li>
            <a
              href="https://docs.metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MetaMask Developer Docs
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              FreeCodeCamp Web3.js & Ethers.js Course
            </a>
          </li>
        </ul>
      </div>

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
