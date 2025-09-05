import { useState } from "react";

export default function UpgradesAccessControl({ closeUpgradesAccessControl, Done }) {
  const Nexthandler = () => {
    Done();
    closeUpgradesAccessControl();
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
        <h2 className="text-2xl font-bold">Upgrades & Access Control</h2>
        <button
          onClick={closeUpgradesAccessControl}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Learn how to make smart contracts upgradeable using{" "}
        <strong>proxy patterns</strong> (Transparent, UUPS, Beacon) and manage
        contract permissions securely with <strong>role-based access control</strong>. 
        Master OpenZeppelin's <code>Ownable</code>, <code>AccessControl</code>, 
        and upgrade plugins to ensure contracts remain flexible and secure over time.
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">📚 Resources</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://docs.openzeppelin.com/contracts/4.x/access-control"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Access Control Docs
            </a>
          </li>
          <li>
            <a
              href="https://docs.openzeppelin.com/upgrades-plugins/1.x/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Upgrades Plugins
            </a>
          </li>
          <li>
            <a
              href="https://blog.openzeppelin.com/proxy-patterns/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OpenZeppelin Blog – Proxy Patterns
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=bdXJmWajZRY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Smart Contract Upgradeability Explained (YouTube)
            </a>
          </li>
          <li>
            <a
              href="https://www.rareskills.io/post/openzeppelin-access-control"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              RareSkills – Access Control Deep Dive
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
