import { useState } from "react";

export default function CodeEditor({ closeHTML, Done }) {
    const Nexthandler = () => {
        Done();
        closeHTML();
    }
  const [isFullScreen, setFullScreen] = useState("left-[60%]");
    const fullscrenHandler = () => {
        if (isFullScreen === "left-[60%]") {
            setFullScreen("left-[20%]");
        } else {
            setFullScreen("left-[60%]");
        }
    }
    const [smallfullscreen,setSmallfullscreen]=useState("left-[5%]");
    const smallfullscreenhandler =()=>{
        if(smallfullscreen === "left-[5%]"){
            setFullScreen("left-0")
    }else {
        setFullScreen("left-[5%]")
    }
    }
    return (
        <section className={`transition-transform duration-300  ease-in-out fixed right-0 md:${isFullScreen} ${smallfullscreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`} style={{boxShadow: "0 0 10px 0px #000000"}}>
            <div className="bg-[#0e1542] text-white pb-0 px-4  h-[100%]">
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

                    <span
                        onClick={closeHTML}
                        class="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">HTML</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold"> HTML (HyperText Markup Language) </span>is the foundational language for web development, used to structure and display content on web pages. It organizes text, images, videos, and links into a cohesive layout using various elements like headings, paragraphs, lists, and multimedia tags. HTML also enables navigation through hyperlinks and supports interactive features like forms, allowing user input for applications.
                    </p>

                    <p>
                        If a website were a human body, HTML would be its skeleton, providing the essential structure upon which everything else is built. Just as muscles, skin, and organs rely on the skeleton for support and shape, CSS and JavaScript depend on HTML to bring style and interactivity to life. This makes HTML an indispensable component in creating responsive, accessible, and user-friendly web designs.
                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resource to become a expert in HTML:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">HTML Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.geeksforgeeks.org/html-tutorial/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">HTML Tutorial - GeeksforGeeks</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/kUMe1FH4CHE?si=seKBTBlTfXyTbZ_q" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Learn HTML – Full Tutorial for Beginners by freeCodeCamp.org</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/HcOc7P5BMi4?si=a_093o7cwV7pOR35" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">HTML Tutorial for Beginners | Complete HTML with Notes & Code by APNA COLLEGE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeHTML} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
