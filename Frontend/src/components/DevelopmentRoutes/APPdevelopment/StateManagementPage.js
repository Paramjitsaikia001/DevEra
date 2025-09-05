import { useState } from "react";

export default function StateManagementPage({ closeState, Done }) {
    const Nexthandler = () => {
        Done();
        closeState();
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
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    {isFullScreen === "left-[60%]" ? (
                        <span
                            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                            onClick={fullscrenHandler}
                        >
                            open_in_full
                        </span>
                    ) : (
                        <span
                            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                            onClick={fullscrenHandler}
                        >
                            close_fullscreen
                        </span>
                    )}
                    <span
                        onClick={closeState}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    State Management in Cross-Platform Apps
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">State Management</span> is one of the 
                        most important aspects of mobile app development. It controls how data flows between 
                        components, screens, and services, ensuring a smooth user experience.
                    </p>

                    <p>
                        Choosing the right state management solution depends on the app’s complexity, 
                        performance requirements, and developer familiarity.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Key Concepts:</p>
                        <ul className="list-disc list-inside">
                            <li>Local state vs global state</li>
                            <li>Prop drilling and context</li>
                            <li>Immutable data updates</li>
                            <li>Side effects and async operations</li>
                            <li>Performance optimization with memoization</li>
                        </ul>

                        <p className="font-bold">Popular State Management Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="text-[#28ffd4] font-semibold">React Context API</span> – Great for small to medium apps.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Redux</span> – Predictable state container with middleware like Thunk & Saga.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">MobX</span> – Simple, reactive state management.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Zustand</span> – Minimal, fast, and easy-to-use state management library.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Recoil</span> – Experimental state management for React apps.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Flutter Bloc / Riverpod</span> – Popular choices in Flutter ecosystem.
                            </li>
                        </ul>

                        <p className="font-bold">Resources to Learn State Management:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://redux.js.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Redux Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://react.dev/reference/react/useContext"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">React Context API Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://bloclibrary.dev/#/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Flutter Bloc Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/poQXNp9ItL4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Redux Crash Course – Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/2kL28Qyw9FQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Flutter State Management – Bloc Pattern</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeState}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Close
                    </button>
                    <button
                        onClick={Nexthandler}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Done
                    </button>
                </div>
            </div>
        </section>
    );
}