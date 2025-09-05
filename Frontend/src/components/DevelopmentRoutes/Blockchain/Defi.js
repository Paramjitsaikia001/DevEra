import { useState } from "react";

export default function DeFiPrimitives({ closeDeFiPrimitives, Done }) {
  const Nexthandler = () => {
    Done();
    closeDeFiPrimitives();
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
        <h2 className="text-2xl font-bold">DeFi Primitives</h2>
        <button
          onClick={closeDeFiPrimitives}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>DeFi primitives</strong> are the building blocks of decentralized finance—
        including automated market makers (AMMs), lending protocols, stablecoins,
        and yield farming. Understanding their mechanisms helps you design
        secure, composable protocols that interact seamlessly with the DeFi ecosystem.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Build a constant-product AMM (Uniswap v2 style) with swap and liquidity functions.</li>
          <li>Create a toy lending protocol with collateralized borrowing and liquidation logic.</li>
          <li>Implement a staking contract with reward distribution (yield farming simulation).</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://uniswap.org/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Uniswap v2 Whitepaper
            </a>
          </li>
          <li>
            <a
              href="https://aave.com/whitepaper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Aave Protocol Whitepaper
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/8XJ1MSTEuUo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              DeFi in 1 Hour (YouTube – Finematics)
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/en/defi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethereum.org – DeFi Overview
            </a>
          </li>
          <li>
            <a
              href="https://github.com/OpenZeppelin/openzeppelin-contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Contracts (DeFi modules)
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
