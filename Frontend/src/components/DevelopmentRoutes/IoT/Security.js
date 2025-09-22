import { useState } from "react";

export default function SecurityPage({ closeSecurity, Done }) {
  const Nexthandler = () => {
    Done();
    closeSecurity();
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
            onClick={closeSecurity}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 9: Security 🔒
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            IoT devices often sit in insecure environments, making them a prime target for attacks.
            Security is not an afterthought in IoT; it must be a core part of your development process
            from day one.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Encryption:</span> Understand how to use encryption algorithms like
                TLS/SSL to secure data transmitted between your device and the cloud.
              </li>
              <li>
                <span className="font-bold">Device Authentication:</span> Learn how to use unique keys and
                certificates to ensure that only authorized devices can connect to your platform.
              </li>
              <li>
                <span className="font-bold">Firmware Updates (OTA):</span> Learn how to securely push firmware
                updates to devices over the air (OTA) and implement a rollback mechanism in case of failure.
              </li>
              <li>
                <span className="font-bold">Secure Boot:</span> Understand the process of ensuring that only
                verified, signed code can run on a device at startup.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/3fT-17Lp2Dk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    IoT Security Crash Course - IBM
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.arm.com/technologies/security-on-iot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Security Best Practices for IoT - ARM
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://aws.github.io/aws-iot-device-sdk-cpp/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    AWS IoT Device SDK Documentation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeSecurity}
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