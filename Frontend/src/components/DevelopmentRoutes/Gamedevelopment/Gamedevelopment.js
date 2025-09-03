import { useState } from "react";
import Header from "../../layout/Header";
import EnginesPage from "./EnginesPage";
import LanguagesPage from "./LanguagesPage";
import DesignPage from "./DesignPage";
import GraphicsPage from "./GraphicsPage";
import PhysicsPage from "./PhysicsPage";
import MultiplayerPage from "./MultiplayerPage";
import DeploymentPage from "./DeploymentPage";
import ProjectsPage from "./ProjectsPage";

export default function Gamedev() {
    // State for which roadmap step is open
    const [openStep, setOpenStep] = useState(null);
    // Color lines for visual progress (future: update on click)
    const [enginesLine, setEnginesLine] = useState("bg-gray-700");
    const [languagesLine, setLanguagesLine] = useState("bg-gray-700");
    const [designLine, setDesignLine] = useState("bg-gray-700");
    const [graphicsLine, setGraphicsLine] = useState("bg-gray-700");
    const [physicsLine, setPhysicsLine] = useState("bg-gray-700");
    const [multiplayerLine, setMultiplayerLine] = useState("bg-gray-700");
    const [deploymentLine, setDeploymentLine] = useState("bg-gray-700");
    const [projectsLine, setProjectsLine] = useState("bg-gray-700");

    // Render subcomponent if open
    if (openStep === 'engines') return <EnginesPage close={() => setOpenStep(null)} />;
    if (openStep === 'languages') return <LanguagesPage close={() => setOpenStep(null)} />;
    if (openStep === 'design') return <DesignPage close={() => setOpenStep(null)} />;
    if (openStep === 'graphics') return <GraphicsPage close={() => setOpenStep(null)} />;
    if (openStep === 'physics') return <PhysicsPage close={() => setOpenStep(null)} />;
    if (openStep === 'multiplayer') return <MultiplayerPage close={() => setOpenStep(null)} />;
    if (openStep === 'deployment') return <DeploymentPage close={() => setOpenStep(null)} />;
    if (openStep === 'projects') return <ProjectsPage close={() => setOpenStep(null)} />;

    return (
        <section className="relative lg:w-[80%] w-[100%] flex flex-col pt-[5rem] justify-center items-center gap-8 overflow-hidden">
            <div className='flex justify-center p-4 w-[100%]'>
                <Header />
            </div>
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>GAME DEVELOPMENT ROADMAP</h1>
            </div>
            <div className="flex flex-col justify-center items-center md:w-[90%] w-[100%] lg:p-0 p-[20px] min-h-[100%]">
                {/* Game Engines */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%] w-1 border-none ${enginesLine}`}></div>
                        <div
                            onClick={() => setOpenStep('engines')}
                            className="h-auto border-none rounded-3xl w-40 p-3 font-bold items-center flex justify-center bg-[#acc2ef] hover:bg-[#5369f9] hover:text-white cursor-pointer">
                            Game Engines (Unity, Unreal, Godot)
                        </div>
                        <div className={`verticalLine h-[40%] w-1 border-none ${enginesLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Choose a game engine: Unity (C#), Unreal Engine (C++), Godot, etc. Each has its own strengths and learning curve.</p>
                    </div>
                </div>
                <div className={`horizontalLine h-4 w-[70%] ${enginesLine} border-none rounded-bl-lg rounded-tr-xl`}></div>
                {/* Languages */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%] w-1 border-none ${enginesLine}`}></div>
                        <div
                            onClick={() => setOpenStep('languages')}
                            className="h-auto border-none rounded-3xl w-40 p-3 font-bold items-center flex justify-center bg-[#acc2ef] hover:bg-[#edff2a] cursor-pointer">
                            Languages (C#, C++, GDScript)
                        </div>
                        <div className={`verticalLine h-[40%] w-1 border-none ${languagesLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Learn the main language(s) for your engine: C# (Unity), C++ (Unreal), GDScript (Godot), etc.</p>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${languagesLine} border-none rounded-br-lg rounded-tl-xl`}></div>
                {/* Game Design */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Understand game mechanics, level design, player experience, and prototyping. Learn to use design tools and iterate on ideas.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 border-none ${languagesLine}`}></div>
                        <div
                            onClick={() => setOpenStep('design')}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center font-bold hover:bg-[#27ffd0] cursor-pointer">Game Design</div>
                        <div className={`verticalLine h-[50%] w-1 border-none ${designLine}`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${designLine} border-none rounded-br-lg rounded-tl-xl`}></div>
                {/* Graphics & Assets */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 border-none ${designLine}`}></div>
                        <div
                            onClick={() => setOpenStep('graphics')}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center font-bold hover:bg-[#0f1855] hover:text-white cursor-pointer">Graphics & Assets</div>
                        <div className={`verticalLine h-[50%] w-1 border-none ${graphicsLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Learn about 2D/3D graphics, asset creation, importing assets, and using asset stores.</p>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${graphicsLine} border-none rounded-br-lg rounded-tl-xl`}></div>
                {/* Physics & Animation */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Understand game physics, collision detection, and animation systems.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 border-none ${graphicsLine}`}></div>
                        <div
                            onClick={() => setOpenStep('physics')}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center font-bold hover:bg-green-300 cursor-pointer">Physics & Animation</div>
                        <div className={`verticalLine h-[50%] w-1 border-none ${physicsLine}`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${physicsLine} border-none rounded-br-lg rounded-tl-xl`}></div>
                {/* Multiplayer & Networking */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 border-none ${physicsLine}`}></div>
                        <div
                            onClick={() => setOpenStep('multiplayer')}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center font-bold hover:bg-blue-300 cursor-pointer">Multiplayer & Networking</div>
                        <div className={`verticalLine h-[50%] w-1 border-none ${multiplayerLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Learn about networking, multiplayer game logic, and real-time communication.</p>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${multiplayerLine} border-none rounded-br-lg rounded-tl-xl`}></div>
                {/* Deployment */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Learn how to build and publish your game for different platforms (PC, mobile, web, consoles).</p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 border-none ${multiplayerLine}`}></div>
                        <div
                            onClick={() => setOpenStep('deployment')}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center font-bold hover:bg-purple-300 cursor-pointer">Deployment</div>
                        <div className={`verticalLine h-[50%] w-1 border-none ${deploymentLine}`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${deploymentLine} border-none rounded-br-lg rounded-tl-xl`}></div>
                {/* Projects */}
                <div className="flex w-[100%] h-[40%] gap-8 justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 border-none ${deploymentLine}`}></div>
                        <div
                            onClick={() => setOpenStep('projects')}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center font-bold hover:bg-yellow-300 cursor-pointer">Projects</div>
                        <div className={`verticalLine h-[50%] w-1 border-none ${projectsLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3 my-8 h-auto bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Build real-world games to solidify your skills: Platformer, Puzzle, Multiplayer, etc.</p>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${projectsLine} border-none rounded-br-lg rounded-tl-xl`}></div>
            </div>
        </section>
    );
}