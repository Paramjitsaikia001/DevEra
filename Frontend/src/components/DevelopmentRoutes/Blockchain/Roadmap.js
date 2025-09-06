import { useState } from "react";
import Header from "../../layout/Header";

// Placeholder imports for each roadmap step page (create these similar to your AI pages)
import PrereqsPage from "../Blockchain/Prereqs";
import ToolingPage from "../Blockchain/Tooling";
import SolidityPage from "../Blockchain/Solidity";
import TestingPage from "../Blockchain/Testing";
import FrontendPage from "../Blockchain/Frontend";
import TokensPage from "../Blockchain/Tokens";
import UpgradesPage from "../Blockchain/Upgrades";
import DataPage from "../Blockchain/Data";
import OraclesPage from "../Blockchain/Oracles";
import DefiPage from "../Blockchain/Defi";
import L2Page from "../Blockchain/L2";
import SecurityPage from "../Blockchain/Security";
import AdvancedPage from "../Blockchain/Advanced";
import DevOpsPage from "../Blockchain/DevOps";
import PortfolioPage from "../Blockchain/Portfolio";
import CareerPage from "../Blockchain/Career";
import Fullresource from "../Blockchain/Fullresource";

const roadmap = [
  {
    id: 0,
    name: "Prereqs (Foundations)",
    handler: "handlePrereqs",
    des: "Learn basics of cryptography, blockchain mental models, and environment setup (Node.js, Git, pnpm).",
  },
  {
    id: 1,
    name: "Tooling Setup",
    handler: "handleTooling",
    des: "Install MetaMask, connect to testnets, and use frameworks like Hardhat & Foundry. Explore viem, wagmi, and OpenZeppelin.",
  },
  {
    id: 2,
    name: "Solidity Foundations",
    handler: "handleSolidity",
    des: "Learn types, mappings, events, visibility, storage vs memory, and payable functions with gas optimization.",
  },
  {
    id: 3,
    name: "Testing & Quality",
    handler: "handleTesting",
    des: "Write unit and fuzz tests using Hardhat/Foundry. Add gas reports, coverage, and CI/CD pipelines with GitHub Actions.",
  },
  {
    id: 4,
    name: "Frontend Integration",
    handler: "handleFrontend",
    des: "Connect wallets via wagmi + RainbowKit. Read/write smart contracts with viem, ethers, and manage ABIs and configs.",
  },
  {
    id: 5,
    name: "Token Standards",
    handler: "handleTokens",
    des: "Build ERC-20, ERC-721, and ERC-1155 with permits, royalties, and role-based access control for real-world assets.",
  },
  {
    id: 6,
    name: "Upgrades & Access Control",
    handler: "handleUpgrades",
    des: "Implement proxy patterns, initializers, role-based permissions, timelocks, and multisigs for upgrade safety.",
  },
  {
    id: 7,
    name: "Data & Indexing",
    handler: "handleData",
    des: "Design event schemas, build subgraphs with The Graph, and use IPFS/Arweave for decentralized storage.",
  },
  {
    id: 8,
    name: "Oracles & Automation",
    handler: "handleOracles",
    des: "Integrate Chainlink price feeds, VRF for randomness, and automation tools like Keepers for periodic execution.",
  },
  {
    id: 9,
    name: "DeFi Primitives",
    handler: "handleDefi",
    des: "Understand AMMs, lending/borrowing, liquidations, and yield farming with liquidity mining and vesting.",
  },
  {
    id: 10,
    name: "L2s & Cross-chain",
    handler: "handleL2",
    des: "Learn rollups (Optimistic vs ZK), deploy on Optimism/Arbitrum, and explore bridge & message passing mechanisms.",
  },
  {
    id: 11,
    name: "Security Deep Dive",
    handler: "handleSecurity",
    des: "Master reentrancy, MEV, and oracle attacks. Practice fuzzing, invariants, and CTFs like Ethernaut & Damn Vulnerable DeFi.",
  },
  {
    id: 12,
    name: "Advanced Paths",
    handler: "handleAdvanced",
    des: "Pick Solana, Polkadot, StarkNet, or ZK paths. Learn ecosystem languages, PDAs, ZK proofs, or account abstraction.",
  },
  {
    id: 13,
    name: "DevOps & Operations",
    handler: "handleDevOps",
    des: "Secure keys, monitor with Tenderly/Etherscan, set alerts, and design incident response with multisig operations.",
  },
  {
    id: 14,
    name: "Portfolio Buildout",
    handler: "handlePortfolio",
    des: "Ship projects: tokens, NFTs, AMM, and an advanced-path app. Deploy to testnets & L2s, document with diagrams/tests.",
  },
  {
    id: 15,
    name: "Career Prep & Project ideas",
    handler: "handleCareer",
    des: "Contribute to open-source, join hackathons, and target roles like Solidity dev, protocol engineer, or security researcher.",
  },
];

export default function Blockchain() {
  const [activeId, setActiveId] = useState(null);

  // Modal states
  const [showPrereqs, setPrereqs] = useState(false);
  const [showTooling, setTooling] = useState(false);
  const [showSolidity, setSolidity] = useState(false);
  const [showTesting, setTesting] = useState(false);
  const [showFrontend, setFrontend] = useState(false);
  const [showTokens, setTokens] = useState(false);
  const [showUpgrades, setUpgrades] = useState(false);
  const [showData, setData] = useState(false);
  const [showOracles, setOracles] = useState(false);
  const [showDefi, setDefi] = useState(false);
  const [showL2, setL2] = useState(false);
  const [showSecurity, setSecurity] = useState(false);
  const [showAdvanced, setAdvanced] = useState(false);
  const [showDevOps, setDevOps] = useState(false);
  const [showPortfolio, setPortfolio] = useState(false);
  const [showCareer, setCareer] = useState(false);
   const [showFullResource, setFullResource] = useState(false);

  // Handlers
  const handlers = {
    handlePrereqs: () => setPrereqs(!showPrereqs),
    handleTooling: () => setTooling(!showTooling),
    handleSolidity: () => setSolidity(!showSolidity),
    handleTesting: () => setTesting(!showTesting),
    handleFrontend: () => setFrontend(!showFrontend),
    handleTokens: () => setTokens(!showTokens),
    handleUpgrades: () => setUpgrades(!showUpgrades),
    handleData: () => setData(!showData),
    handleOracles: () => setOracles(!showOracles),
    handleDefi: () => setDefi(!showDefi),
    handleL2: () => setL2(!showL2),
    handleSecurity: () => setSecurity(!showSecurity),
    handleAdvanced: () => setAdvanced(!showAdvanced),
    handleDevOps: () => setDevOps(!showDevOps),
    handlePortfolio: () => setPortfolio(!showPortfolio),
    handleCareer: () => setCareer(!showCareer),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
      {/* Modals */}
      {showPrereqs && <PrereqsPage closePrereqs={handlers.handlePrereqs} />}
      {showTooling && <ToolingPage closeToolingSetup={handlers.handleTooling} />}
      {showSolidity && <SolidityPage closeSolidityFoundations={handlers.handleSolidity} />}
      {showTesting && <TestingPage closeTestingQuality={handlers.handleTesting} />}
      {showFrontend && <FrontendPage closeFrontendIntegration={handlers.handleFrontend} />}
      {showTokens && <TokensPage closeTokenStandards={handlers.handleTokens} />}
      {showUpgrades && <UpgradesPage closeUpgradesAccessControl={handlers.handleUpgrades} />}
      {showData && <DataPage closeDataIndexing={handlers.handleData} />}
      {showOracles && <OraclesPage closeOraclesAutomation={handlers.handleOracles} />}
      {showDefi && <DefiPage closeDeFiPrimitives={handlers.handleDefi} />}
      {showL2 && <L2Page closeL2CrossChain={handlers.handleL2} />}
      {showSecurity && <SecurityPage closeSecurity={handlers.handleSecurity} />}
      {showAdvanced && <AdvancedPage closeAdvancedPaths={handlers.handleAdvanced} />}
      {showDevOps && <DevOpsPage closeDevOps={handlers.handleDevOps} />}
      {showPortfolio && <PortfolioPage closePortfolio={handlers.handlePortfolio} />}
      {showCareer && <CareerPage closeCareerPrep={handlers.handleCareer} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>BLOCKCHAIN DEVELOPMENT</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className={`flex items-center w-full my-4 ${
                item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
              }`}
            >
              <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem]`}>
                <div
                  className={`flex items-center w-full ${
                    item.id % 2 === 0 ? "sm:justify-start" : "sm:justify-start sm:flex-row-reverse"
                  }`}
                >
                  <div className="line w-[2rem] h-1 bg-white"></div>
                  <div
                    onClick={() => {
                      if (item.handler) {
                        handlers[item.handler]?.();
                      }
                    }}
                    className={`relative w-[80%] sm:h-[5rem] text-center rounded-xl cursor-pointer bg-[#eeeeeedd] py-4 px-2 hover:bg-[#9aa3f6] transition-all duration-300`}
                    onMouseEnter={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                  >
                    <h4 className="text-lg text-center font-semibold text-gray-800">{item.name}</h4>
                    <div
                      className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${
                        activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">{item.des}</p>
                    </div>
                    <div className={`sm:hidden block transition-all duration-500 ease-in-out`}>
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">{item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Resources Button */}
      <div className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10">
        <button
          onClick={handlers.handleFullResource}
          className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2"
        >
          full course Resource
          <span className="material-symbols-outlined">text_snippet</span>
        </button>
      </div>
    </section>
  );
}
