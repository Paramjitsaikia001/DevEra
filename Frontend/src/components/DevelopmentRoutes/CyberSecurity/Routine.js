import { useState } from "react";

export default function RoutinePage({ closeRoutine, Done }) {
  const Nexthandler = () => {
    Done();
    closeRoutine();
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
            onClick={closeRoutine}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 10: Daily/Weekly Routine
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Consistency is the most important factor for success in cybersecurity. The field is
            constantly evolving, so a routine of continuous learning is essential. Here is a
            suggested routine to help you stay on track and build momentum.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">Suggested Routine:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Daily (30-60 minutes):</span>
                <ul className="list-circle list-inside ml-5">
                  <li>Read an article on a cybersecurity blog (e.g., KrebsOnSecurity).</li>
                  <li>Watch a short video on a new tool or technique.</li>
                  <li>Practice a command or skill you're learning.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Weekly:</span>
                <ul className="list-circle list-inside ml-5">
                  <li>Solve at least two beginner labs on TryHackMe or Hack The Box.</li>
                  <li>Review your notes and practice commands.</li>
                  <li>Update your personal GitHub with a small project or notes.</li>
                  <li>Share something you've learned on a blog or LinkedIn.</li>
                </ul>
              </li>
            </ul>

            <p className="font-bold">What a Job-Ready Beginner Looks Like:</p>
            <ul className="list-disc list-inside">
              <li>Can clearly explain core concepts like the CIA Triad and the OSI Model.</li>
              <li>Is comfortable with both Linux and Windows command-line tools.</li>
              <li>Has a solid foundation in web attacks and knows how to prevent them.</li>
              <li>Can analyze logs and identify suspicious activity.</li>
              <li>Has a portfolio of 2-3 projects on GitHub.</li>
              <li>Can solve beginner CTF challenges and write clear walkthroughs.</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeRoutine}
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