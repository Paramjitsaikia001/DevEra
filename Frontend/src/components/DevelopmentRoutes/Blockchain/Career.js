import { useState } from "react";

export default function CareerPrep({ closeCareerPrep, Done }) {
  const Nexthandler = () => {
    Done();
    closeCareerPrep();
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
        <h2 className="text-2xl font-bold">Career Prep & Job-Ready Projects</h2>
        <button
          onClick={closeCareerPrep}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Prepare for a blockchain developer career by building polished projects, 
        contributing to open source, and learning industry-standard tools and workflows. 
        Focus on portfolios, security reviews, and deploying real-world applications.
      </p>

      {/* Actionable Steps */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🎯 Steps to Get Job-Ready</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Write postmortems and security reviews for your own repositories.
          </li>
          <li>
            Contribute pull requests to projects like OpenZeppelin, Foundry, or wagmi.
          </li>
          <li>
            Participate in hackathons and aim for top 10% finishes.
          </li>
          <li>
            Build real-world projects and document them professionally in your portfolio.
          </li>
          <li>
            Learn interview patterns, smart contract challenges, and blockchain system design.
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://www.blockchain-council.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Blockchain Council – Career Resources & Certifications
            </a>
          </li>
          <li>
            <a
              href="https://ethereum.org/en/developers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethereum Developer Docs – Best Practices & Job-Ready Skills
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ConsenSys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ConsenSys Open Source Projects – Contribute & Learn
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@ethereumfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ethereum Foundation Medium – Updates, Tutorials, and Tips
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@DappUniversity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Dapp University – YouTube Tutorials & Project Guides
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
