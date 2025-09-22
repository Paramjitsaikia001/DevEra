import { useState } from "react";

export default function FoundationsPage({ closeFoundations, Done }) {
  const Nexthandler = () => {
    Done();
    closeFoundations();
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
            onClick={closeFoundations}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 1: Foundations 🏛️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            The Big Data journey starts with a solid foundation in core technologies. Without
            these, it's impossible to effectively manage and process data at scale. This stage
            is about building the fundamental skills that every data engineer needs.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Python:</span> The most popular language for data engineering. Learn basic
                syntax, data structures, and how to write simple ETL (Extract, Transform, Load) scripts.
              </li>
              <li>
                <span className="font-bold">SQL:</span> The universal language of data. Master writing complex queries,
                joins, and subqueries, which are essential for extracting data from databases.
              </li>
              <li>
                <span className="font-bold">Linux Shell:</span> Big data tools are almost exclusively built for Linux.
                Get comfortable with the command line (`ls`, `cd`, `grep`), file permissions, and shell scripting.
              </li>
              <li>
                <span className="font-bold">Git:</span> Learn version control to manage your code collaboratively.
                Master basic commands like `commit`, `push`, `pull`, and `branch`.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/zR5M7F6gU8I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Python Full Course for Beginners - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://mode.com/sql-tutorial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">SQL Tutorial - Mode Analytics</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/yzC4ht78QyE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Linux Command Line Tutorial - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/RGOj5yH7evk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Git & GitHub Crash Course - freeCodeCamp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeFoundations}
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