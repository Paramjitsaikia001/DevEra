import { useState } from "react";

export default function DevOpsOperations({ closeDevOps, Done }) {
  const Nexthandler = () => {
    Done();
    closeDevOps();
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
        <h2 className="text-2xl font-bold">DevOps & Operations</h2>
        <button
          onClick={closeDevOps}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Learn how to manage blockchain deployments, monitor networks, and
        automate operations. Focus on secure key management, RPC rotation,
        alerting, and operational best practices for decentralized applications.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <span className="font-bold">Key Management:</span> Store and rotate
            private keys securely with environment separation.
          </li>
          <li>
            <span className="font-bold">Monitoring & Alerts:</span> Set up
            Etherscan/Tenderly APIs to monitor smart contract performance and
            trigger notifications on anomalies.
          </li>
          <li>
            <span className="font-bold">RPC Management:</span> Implement
            fallback RPC nodes and rotation strategies for reliability.
          </li>
          <li>
            <span className="font-bold">Multisig Operations:</span> Execute
            contract upgrades with timelocks and role-based access controls.
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.tenderly.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Tenderly Docs – Monitoring & Debugging
            </a>
          </li>
          <li>
            <a
              href="https://docs.alchemy.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Alchemy Docs – RPC & Network Management
            </a>
          </li>
          <li>
            <a
              href="https://docs.gnosis.io/safe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Gnosis Safe – Multisig & Operations
            </a>
          </li>
          <li>
            <a
              href="https://blog.openzeppelin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Blog – Security & DevOps Best Practices
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@OpenZeppelin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin YouTube Tutorials
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
