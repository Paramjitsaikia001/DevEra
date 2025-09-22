import { useState } from 'react';

import Header from '../../layout/Header';
import Fullresource from '../Gamedevelopment/Fullresource';
import GameEnginesPage from '../Gamedevelopment/GameEngines';
import GitPage from '../Gamedevelopment/Git';
import GraphicsPage from '../Gamedevelopment/Graphics';
import NetworkingPage from '../Gamedevelopment/Networking';
import AIPage from '../Gamedevelopment/AI';
import DSAPage from '../Gamedevelopment/GamedDSA';
// Placeholder imports for each roadmap step page
// You would need to create these components (e.g., ProgrammingPage, GameEnginesPage)
// following the same pattern as your other roadmap pages.
import ProgrammingPage from '../Gamedevelopment/Programming';
import PublishingPage from '../Gamedevelopment/Publishing';
import MathPage from '../Gamedevelopment/Math';

const roadmap = [
  {
    id: 0,
    name: "Master Basic Programming",
    handler: "handleProgramming",
    des: "Start with a solid foundation in programming. Learn C/C++ or C# to grasp fundamental concepts like variables, functions, and logic. This is the bedrock of game development.",
  },
  {
    id: 1,
    name: "Choose a Game Engine",
    handler: "handleGameEngines",
    des: "Select a game engine to simplify development. Unity (C#) and Unreal Engine (C++) are the two most popular choices. They handle complex tasks, allowing you to focus on design.",
  },
  {
    id: 2,
    name: "Learn Data Structures & Algorithms",
    handler: "handleDSA",
    des: "Understand how to write efficient code. Mastering DSAs like arrays, queues, and stacks is crucial for optimizing game performance and creating complex, lag-free experiences.",
  },
  {
    id: 3,
    name: "Version Control with Git",
    handler: "handleGit",
    des: "Collaborate effectively on projects. Learn Git and GitHub to manage your code, track changes, and work seamlessly with other developers and designers.",
  },
  {
    id: 4,
    name: "Understand Game Physics & Math",
    handler: "handleMath",
    des: "Dive into the math and physics behind games. Study 2D/3D coordinate systems, vectors, and kinematics to simulate realistic movement, gravity, and object interactions.",
  },
  {
    id: 5,
    name: "Graphics Processing",
    handler: "handleGraphics",
    des: "Learn the basics of how graphics are rendered. Explore concepts like shaders, OpenGL, or CUDA to create visually stunning effects and optimize rendering performance.",
  },
  {
    id: 6,
    name: "Networking for Multiplayer",
    handler: "handleNetworking",
    des: "If you want to build multiplayer games, you must understand networking. Learn how to handle data synchronization, client-server architecture, and packet transmission.",
  },
  {
    id: 7,
    name: "Artificial Intelligence (AI)",
    handler: "handleAI",
    des: "Bring characters to life. Study fundamental AI algorithms like pathfinding (A* algorithm) to create intelligent enemies, NPCs, and dynamic game environments.",
  },
  {
    id: 8,
    name: "Game Publishing & Marketing",
    handler: "handlePublishing",
    des: "Learn how to get your game to players. Understand the process of publishing on platforms like Steam, Google Play, or the Epic Games Store, and the basics of marketing your game.",
  },
];

export default function GameDev() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each step
  const [showProgramming, setShowProgramming] = useState(false);
  const [showGameEngines, setShowGameEngines] = useState(false);
  const [showDSA, setShowDSA] = useState(false);
  const [showGit, setShowGit] = useState(false);
  const [showMath, setShowMath] = useState(false);
  const [showGraphics, setShowGraphics] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showPublishing, setShowPublishing] = useState(false);
  const [showFullResource, setFullResource] = useState(false);

  // Handlers for each step
  const handlers = {
    handleProgramming: () => setShowProgramming(!showProgramming),
    handleGameEngines: () => setShowGameEngines(!showGameEngines),
    handleDSA: () => setShowDSA(!showDSA),
    handleGit: () => setShowGit(!showGit),
    handleMath: () => setShowMath(!showMath),
    handleGraphics: () => setShowGraphics(!showGraphics),
    handleNetworking: () => setShowNetworking(!showNetworking),
    handleAI: () => setShowAI(!showAI),
    handlePublishing: () => setShowPublishing(!showPublishing),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
      {/* Modals */}
      {showProgramming && <ProgrammingPage closeProgramming={handlers.handleProgramming} />}
      {showGameEngines && <GameEnginesPage closeGameEngines={handlers.handleGameEngines} />}
      {showDSA && <DSAPage closeDSA={handlers.handleDSA} />}
      {showGit && <GitPage closeGit={handlers.handleGit} />}
      {showMath && <MathPage closeMath={handlers.handleMath} />}
      {showGraphics && <GraphicsPage closeGraphics={handlers.handleGraphics} />}
      {showNetworking && <NetworkingPage closeNetworking={handlers.handleNetworking} />}
      {showAI && <AIPage closeAI={handlers.handleAI} />}
      {showPublishing && <PublishingPage closePublishing={handlers.handlePublishing} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>GAME DEVELOPMENT ROADMAP</h1>
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