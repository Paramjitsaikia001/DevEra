import { useState } from "react";

export default function Linux({ closeLinux, Done }) {
  const [isFullScreen, setFullScreen] = useState("left-[60%]");

  const fullscrenHandler = () => {
    setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
  };

  const Nexthandler = () => {
    Done();
    closeLinux();
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
            onClick={closeLinux}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Master Linux & Bash
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            The foundation of cloud and DevOps is Linux. You need to be
            comfortable with the **Linux command line**, managing files and
            directories, and automating tasks with **shell scripting (Bash)**.
          </p>

          {/* Learning list */}
          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Commands:</span> Master essential
                commands like `ls`, `cd`, `pwd`, `mkdir`, `rm`, `cp`, `mv`.
              </li>
              <li>
                <span className="font-bold">Permissions:</span> Understand file
                permissions (`chmod`, `chown`) and user management.
              </li>
              <li>
                <span className="font-bold">Shell Scripting:</span> Write basic
                Bash scripts to automate repetitive tasks and manage your system.
              </li>
              <li>
                <span className="font-bold">Process Management:</span> Learn to
                manage processes with `ps`, `top`, `kill`.
              </li>
            </ul>

            <p className="font-bold">Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://linuxjourney.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Linux Journey
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://www.youtube.com/watch?v=sWbXc_eJ8w4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    FreeCodeCamp - Linux for Beginners
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeLinux}
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