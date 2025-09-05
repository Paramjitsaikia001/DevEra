import { useState } from "react";

export default function AdvancedPaths({ closeAdvancedPaths, Done }) {
  const Nexthandler = () => {
    Done();
    closeAdvancedPaths();
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
        <h2 className="text-2xl font-bold">Advanced Paths</h2>
        <button
          onClick={closeAdvancedPaths}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Choose your advanced blockchain specialization: Solana with Rust,
        Polkadot with Substrate, ZK proofs, or Cairo for StarkNet. Each path
        focuses on high-performance, scalable, and next-generation blockchain
        development techniques.
      </p>

      {/* Mini Projects */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🛠️ Mini Projects</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <span className="font-bold">Solana + Rust:</span> Token vesting
            program with a React client using Anchor framework.
          </li>
          <li>
            <span className="font-bold">Polkadot + Substrate:</span> Custom
            reputation pallet for a test chain.
          </li>
          <li>
            <span className="font-bold">ZK Proofs:</span> Allowlist with
            zero-knowledge proof of membership using Noir or Circom.
          </li>
          <li>
            <span className="font-bold">Cairo + StarkNet:</span> Account
            abstraction with paymaster integration.
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.solana.com/developing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Solana Developer Docs
            </a>
          </li>
          <li>
            <a
              href="https://substrate.dev/docs/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Substrate + Polkadot Docs
            </a>
          </li>
          <li>
            <a
              href="https://noir-lang.org/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Noir Language for ZK Proofs
            </a>
          </li>
          <li>
            <a
              href="https://starknet.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Cairo + StarkNet Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@LearnSolana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Solana Video Tutorials – LearnSolana
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
