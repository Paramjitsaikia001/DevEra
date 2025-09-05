import { useState } from "react";

export default function SecurityDeepDive({ closeSecurity, Done }) {
  const Nexthandler = () => {
    Done();
    closeSecurity();
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
        <h2 className="text-2xl font-bold">Security Deep Dive</h2>
        <button
          onClick={closeSecurity}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Security is crucial in blockchain development. Learn to identify,
        prevent, and mitigate vulnerabilities like reentrancy, access control
        flaws, integer overflows, MEV issues, and oracle manipulation. Proper
        security practices protect funds and maintain trust in your protocols.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Complete Ethernaut and Damn Vulnerable DeFi challenges.</li>
          <li>Write tests using Foundry, Slither, and Echidna for a sample contract.</li>
          <li>Create a public security checklist applied to all projects.</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://consensys.github.io/smart-contract-best-practices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ConsenSys – Smart Contract Best Practices
            </a>
          </li>
          <li>
            <a
              href="https://ethernaut.openzeppelin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethernaut Challenges – OpenZeppelin
            </a>
          </li>
          <li>
            <a
              href="https://diligence.consensys.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ConsenSys Diligence – Auditing Resources
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/3D5K8v9kMIk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Smart Contract Security – Dapp University
            </a>
          </li>
          <li>
            <a
              href="https://mythx.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MythX – Automated Security Analysis
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
