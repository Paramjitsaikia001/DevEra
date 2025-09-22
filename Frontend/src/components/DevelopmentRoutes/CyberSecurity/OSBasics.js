import { useState } from "react";

export default function OSBasicsPage({ closeOSBasics, Done }) {
  const Nexthandler = () => {
    Done();
    closeOSBasics();
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
            onClick={closeOSBasics}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 3: Operating System Basics
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            The majority of cybersecurity work involves interacting with computers and servers
            directly. A strong grasp of both <span className="font-bold">Linux</span> and <span className="font-bold">Windows</span>
            operating systems is essential for both attacking (Red Team) and defending (Blue Team).
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn (Linux):</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Basic Commands:</span> `ls`, `cd`, `pwd`, `mkdir`, `rm`, `cat`, `grep`.
              </li>
              <li>
                <span className="font-bold">File System:</span> Understand the directory structure (`/`, `/etc`, `/var`, `/home`).
              </li>
              <li>
                <span className="font-bold">File Permissions:</span> Learn what `chmod` and `chown` do and how to read permissions.
              </li>
              <li>
                <span className="font-bold">Processes:</span> How to view and manage running processes with `ps`, `top`, and `kill`.
              </li>
              <li>
                <span className="font-bold">Bash Scripting:</span> Write simple scripts to automate tasks.
              </li>
            </ul>

            <p className="font-bold">What to Learn (Windows):</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Command Prompt (CMD):</span> Basic commands and navigation.
              </li>
              <li>
                <span className="font-bold">PowerShell:</span> A more powerful scripting language for
                automation and system administration.
              </li>
              <li>
                <span className="font-bold">Event Viewer:</span> Where Windows logs important events,
                including security-related ones.
              </li>
              <li>
                <span className="font-bold">Task Manager:</span> How to view processes and services.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn OS Basics:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/C-Yc4t8d8Bw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Linux for Ethical Hackers - The Cyber Mentor
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/0-CjJp5L5tQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Windows Command Line and PowerShell Basics - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://linuxjourney.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Linux Journey</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeOSBasics}
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