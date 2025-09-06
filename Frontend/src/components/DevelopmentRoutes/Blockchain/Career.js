import { useState } from "react";

export default function CareerPrep({ closeCareerPrep, Done }) {
  const [isFullScreen, setFullScreen] = useState("left-[60%]");

  const fullscrenHandler = () => {
    setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
  };

  const Nexthandler = () => {
    Done();
    closeCareerPrep();
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
            onClick={closeCareerPrep}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Career Prep & Job-Ready Projects
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Prepare for a blockchain developer career by{" "}
            <span className="text-[#23daff] font-bold">building polished projects</span>,{" "}
            <span className="text-[#23daff] font-bold">contributing to open source</span>, 
            and learning{" "}
            <span className="text-[#23daff] font-bold">industry-standard tools</span> 
            and workflows. Focus on portfolios, security reviews, and deploying 
            real-world applications.
          </p>

          {/* Learning list */}
          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">Steps to Get Job-Ready:</p>
            <ul className="list-disc list-inside">
              <li>Write postmortems and security reviews for your own repositories.</li>
              <li>Contribute pull requests to projects like OpenZeppelin, Foundry, or wagmi.</li>
              <li>Participate in hackathons and aim for top 10% finishes.</li>
              <li>Build real-world projects and document them professionally in your portfolio.</li>
              <li>Learn interview patterns, smart contract challenges, and blockchain system design.</li>
            </ul>

            <p className="font-bold">Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://www.blockchain-council.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Blockchain Council – Career Resources & Certifications
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://ethereum.org/en/developers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Ethereum Developer Docs – Best Practices & Job-Ready Skills
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  art
                </span>
                <a
                  href="https://github.com/ConsenSys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    ConsenSys Open Source Projects – Contribute & Learn
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  blog
                </span>
                <a
                  href="https://medium.com/@ethereumfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Ethereum Foundation Medium – Updates, Tutorials, and Tips
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://www.youtube.com/@DappUniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Dapp University – YouTube Tutorials & Project Guides
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeCareerPrep}
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