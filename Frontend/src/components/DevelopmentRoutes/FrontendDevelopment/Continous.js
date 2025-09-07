import { useState } from "react";

export default function StayingUpdatedPage({ closeStayingUpdated, Done }) {
    const Nexthandler = () => {
        Done();
        closeStayingUpdated();
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
                    <span onClick={closeStayingUpdated} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Staying Updated</h2>

                {/* Intro */}
                <p className="mb-6">
                    Frontend development evolves rapidly. Stay updated on trends like **Web3**, **PWAs**, or **advanced animations/3D tools** by following X posts, contributing to open-source, and engaging with communities on Discord or at meetups to remain competitive.
                </p>

                {/* Key Trends */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Key Trends</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Web3 & Blockchain:** Understanding decentralized applications (dApps) and smart contracts.</li>
                        <li>**Progressive Web Apps (PWAs):** Creating web apps that offer an app-like experience with offline support and push notifications.</li>
                        <li>**Advanced UI/UX:** Exploring new frontiers in animations, 3D graphics (WebGL), and immersive experiences.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://web.dev/explore/progressive-web-apps" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                web.dev - Guide to PWAs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/L2M49v3uE_k" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Web3 Explained for Beginners - Fireship
                            </a>
                        </div>
                    </div>
                </div>

                {/* Communities & Learning */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Communities & Continuous Learning</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Social Media:** Follow influential developers on platforms like X (formerly Twitter) for real-time updates.</li>
                        <li>**Open-Source:** Contribute to projects on GitHub to stay current with new technologies and collaboration practices.</li>
                        <li>**Meetups & Conferences:** Attend local meetups or virtual conferences to network and learn from experts.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Dev.to - Community Blog
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/g6qL80N_v0o" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                The Best Way to Learn to Code - Kevin Powell
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeStayingUpdated} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}