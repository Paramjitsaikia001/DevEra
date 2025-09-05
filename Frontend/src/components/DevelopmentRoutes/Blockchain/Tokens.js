import { useState } from "react";

export default function TokenStandards({ closeTokenStandards, Done }) {
  const Nexthandler = () => {
    Done();
    closeTokenStandards();
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
        <h2 className="text-2xl font-bold">Token Standards</h2>
        <button
          onClick={closeTokenStandards}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understand and implement Ethereum token standards like{" "}
        <strong>ERC-20</strong> (fungible tokens), <strong>ERC-721</strong>{" "}
        (NFTs), and <strong>ERC-1155</strong> (multi-token). Learn about
        extensions such as <strong>EIP-2612 permits</strong>,{" "}
        <strong>ERC-2981 royalties</strong>, and role-based access control.
        Practice by building your own ERC-20 with airdrop features and an
        NFT collection with on-chain metadata.
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.openzeppelin.com/contracts/4.x/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Token Contracts
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/en/developers/docs/standards/tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethereum.org Token Standards Guide
            </a>
          </li>
          <li>
            <a
              href="https://eips.ethereum.org/EIPS/eip-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ERC-20 Specification (EIP-20)
            </a>
          </li>
          <li>
            <a
              href="https://eips.ethereum.org/EIPS/eip-721"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ERC-721 Specification (EIP-721)
            </a>
          </li>
          <li>
            <a
              href="https://eips.ethereum.org/EIPS/eip-1155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ERC-1155 Specification (EIP-1155)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=9uEmNgHzPhQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ERC-20 & ERC-721 Explained (YouTube)
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
