import { useState } from "react";

export default function OraclesAutomation({ closeOraclesAutomation, Done }) {
  const Nexthandler = () => {
    Done();
    closeOraclesAutomation();
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
        <h2 className="text-2xl font-bold">Oracles & Automation</h2>
        <button
          onClick={closeOraclesAutomation}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Smart contracts cannot fetch real-world data on their own.{" "}
        <strong>Oracles</strong> like Chainlink bring off-chain data
        (price feeds, APIs, randomness) on-chain, enabling DeFi and other
        real-world applications. For recurring tasks,{" "}
        <strong>automation services</strong> like Chainlink Keepers
        or Gelato Network let contracts self-execute without manual triggers.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Create a lottery dApp using Chainlink VRF for randomness.</li>
          <li>Fetch live ETH/USD price using Chainlink Price Feeds.</li>
          <li>Automate recurring token transfers using Chainlink Automation.</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.chain.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Chainlink Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://learn.chain.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Chainlink Learning Hub
            </a>
          </li>
          <li>
            <a
              href="https://docs.gelato.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Gelato Automation Docs
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/7xAZ1I2jWY8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Chainlink Automation & Keepers Explained (YouTube)
            </a>
          </li>
          <li>
            <a
              href="https://www.rareskills.io/post/chainlink-vrf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              RareSkills – Chainlink VRF Tutorial
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
