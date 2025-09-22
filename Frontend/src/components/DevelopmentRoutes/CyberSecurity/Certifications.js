import { useState } from "react";

export default function CertificationsPage({ closeCertifications, Done }) {
  const Nexthandler = () => {
    Done();
    closeCertifications();
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
            onClick={closeCertifications}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 9: Certifications
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Certifications are a great way to validate your skills to employers and demonstrate that you
            have a structured understanding of key cybersecurity domains. They are not a substitute
            for hands-on practice, but they can be a significant boost to your resume.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">Certifications by Level:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Beginner:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">CompTIA Security+:</span> The industry standard for foundational security knowledge.</li>
                  <li><span className="font-bold">Google Cybersecurity Certificate:</span> A more accessible, entry-level option.</li>
                  <li><span className="font-bold">ISC² CC (Certified in Cybersecurity):</span> Another excellent entry-level option.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Intermediate:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">eJPT (eLearnSecurity Junior Penetration Tester):</span> A hands-on, beginner-friendly pentesting certification.</li>
                  <li><span className="font-bold">BTL1 (Blue Team Level 1):</span> A hands-on certification focused on security operations.</li>
                  <li><span className="font-bold">CompTIA CySA+ (Cybersecurity Analyst):</span> A certification focused on threat detection and analysis.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Advanced:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">OSCP (Offensive Security Certified Professional):</span> A highly respected, hands-on penetration testing cert.</li>
                  <li><span className="font-bold">PNPT (Practical Network Penetration Tester):</span> A practical, realistic cert focused on an entire pentest engagement.</li>
                  <li><span className="font-bold">CRTO (Certified Red Team Operator):</span> For those focused on more advanced, simulated real-world attacks.</li>
                </ul>
              </li>
            </ul>

            <p className="font-bold">Resources to Study for Certs:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/9bnqYf_O5s4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    CompTIA Security+ Full Course - Professor Messer
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/W87M3f50y00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    eJPTv2 Course & Exam Guide - The Cyber Mentor
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://academy.tcm.ac/p/pnpt-cert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">PNPT Certification (TCM Security)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCertifications}
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