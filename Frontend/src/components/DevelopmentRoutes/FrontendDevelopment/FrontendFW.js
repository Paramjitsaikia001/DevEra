import { useState } from "react";

export default function FrontendFrameworksPage({ closeFrontendFrameworks, Done }) {
    const Nexthandler = () => {
        Done();
        closeFrontendFrameworks();
    };

    const [isFullScreen, setFullScreen] = useState("left-[60%]");
    const fullscrenHandler = () => {
        setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
    };

    return (
        <section
            className={`transition-transform duration-300 ease-in-out fixed right-0 ${isFullScreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    {isFullScreen === "left-[60%]" ? (
                        <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                            open_in_full
                        </span>
                    ) : (
                        <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                            close_fullscreen
                        </span>
                    )}
                    <span onClick={closeFrontendFrameworks} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Frontend Frameworks</h2>

                {/* Content */}
                <div className="flex flex-col gap-6">
                    <p>
                        <span className="text-[#23daff] font-bold">Frontend frameworks</span> like React, Angular, 
                        and Vue provide structured ways to build interactive, maintainable, and scalable applications.  
                        Below is a breakdown of each framework.
                    </p>

                    {/* React Section */}
                    <div className="border border-[#28ffd4] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#28ffd4] mb-2">React</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Component-based architecture</li>
                            <li>Hooks (useState, useEffect, useContext)</li>
                            <li>React Router for navigation</li>
                            <li>State management with Redux, Zustand</li>
                        </ul>
                        <p className="font-bold">Resources:</p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex gap-3">
                                <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    React Official Docs
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/-cMqr9HpZ-Y" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    React JS Crash Course – Traversy Media
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Angular Section */}
                    <div className="border border-[#ff5722] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#ff5722] mb-2">Angular</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>TypeScript-based</li>
                            <li>Dependency Injection</li>
                            <li>RxJS for reactive programming</li>
                            <li>Angular Router for navigation</li>
                            <li>NgRx for state management</li>
                        </ul>
                        <p className="font-bold">Resources:</p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex gap-3">
                                <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                                <a href="https://angular.dev/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Angular Official Docs
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/htPYk6QxacQ" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Angular Crash Course – Traversy Media
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Vue Section */}
                    <div className="border border-[#42b883] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#42b883] mb-2">Vue</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Lightweight and easy to learn</li>
                            <li>Vue Directives (v-if, v-for)</li>
                            <li>Vue Router for navigation</li>
                            <li>Vuex / Pinia for state management</li>
                        </ul>
                        <p className="font-bold">Resources:</p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex gap-3">
                                <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Vue Official Docs
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/k5E2AVpwsko" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Vue JS Crash Course – Traversy Media
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeFrontendFrameworks} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
