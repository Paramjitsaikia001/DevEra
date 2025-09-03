import { useState } from "react";

export default function ReduxPage({ closeRedux, Done }) {
    const [isFullScreen, setFullScreen] = useState("left-[60%]");

    const fullscrenHandler = () => {
        setFullScreen(prev => (prev === "left-[60%]" ? "left-[20%]" : "left-[60%]"));
    };

    const Nexthandler = () => {
        Done();
        closeRedux();
    };

    return (
        <section className={`transition-transform duration-300 ease-in-out fixed right-0 ${isFullScreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                        {isFullScreen === "left-[60%]" ? "open_in_full" : "close_fullscreen"}
                    </span>
                    <span onClick={closeRedux} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">close</span>
                </div>

                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-full rounded-md p-2">Redux</h2>

                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Redux</span> is a predictable state container for JavaScript applications, commonly used with React for managing global state.</p>
                    <p>Redux helps you manage the state of your application in a centralized store, enabling consistent behavior, easier debugging, and powerful developer tools.</p>
                    <p>It follows a unidirectional data flow and uses actions and reducers to update state.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to learn Redux:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Redux Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/poQXNp9ItL4" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Redux Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/9boMnm5X9ak" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Redux Toolkit - Simplified</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={closeRedux} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
