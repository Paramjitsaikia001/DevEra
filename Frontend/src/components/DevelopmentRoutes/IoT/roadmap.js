import { useState } from "react";
import Header from "../../layout/Header";

// Placeholder imports for each roadmap step page
import FoundationsPage from "../IoT/Foundations";
import MicrocontrollersPage from "../IoT/Microcontrollers";
import SensorsPage from "../IoT/Sensors";
import ProtocolsPage from "../IoT/Protocols";
import NetworkingPage from "../IoT/Networking";
import EmbeddedOSPage from "../IoT/EmbeddedOS";
import CloudPlatformsPage from "../IoT/CloudPlatforms";
import DataProcessingPage from "../IoT/DataProcessing";
import EdgeComputingPage from "../IoT/EdgeComputing";
import SecurityPage from "../IoT/Security";
import ApplicationPage from "../IoT/Application";
import IndustrialIoTPage from "../IoT/IndustrialIoT";
import ProjectsPage from "../IoT/Projects";
import CareerPage from "../IoT/Career";
import Fullresource from "../IoT/Fullresource";

const roadmap = [
  {
    id: 0,
    name: "Foundations",
    handler: "handleFoundations",
    des: "Learn C/C++, Python, and electronics basics. Master Linux, Git, and networking to build a solid base for embedded and backend development.",
  },
  {
    id: 1,
    name: "Microcontrollers & Hardware",
    handler: "handleMicrocontrollers",
    des: "Get hands-on with Arduino, ESP32, or STM32. Learn about GPIO, PWM, and other essential hardware interfaces.",
  },
  {
    id: 2,
    name: "Sensors & Actuators",
    handler: "handleSensors",
    des: "Work with common sensors (like temperature, motion) to collect data and actuators (like motors, relays) to interact with the physical world.",
  },
  {
    id: 3,
    name: "Communication Protocols",
    handler: "handleProtocols",
    des: "Understand how devices communicate. Learn short-range protocols like Bluetooth and long-range ones like Wi-Fi and LoRaWAN.",
  },
  {
    id: 4,
    name: "Networking & IoT Connectivity",
    handler: "handleNetworking",
    des: "Grasp how devices connect to the internet. Learn about IP addressing, TCP vs UDP, and how to set up an MQTT broker for messaging.",
  },
  {
    id: 5,
    name: "Embedded OS & RTOS",
    handler: "handleEmbeddedOS",
    des: "Learn about operating systems for constrained devices, like FreeRTOS or Zephyr, for scheduling and multitasking.",
  },
  {
    id: 6,
    name: "IoT Cloud Platforms",
    handler: "handleCloudPlatforms",
    des: "Connect your devices to the cloud. Learn about services like AWS IoT Core and Azure IoT Hub for provisioning and state management.",
  },
  {
    id: 7,
    name: "Data Processing & Analytics",
    handler: "handleDataProcessing",
    des: "Process and store the data you collect. Learn about stream processing and time-series databases for storing sensor data.",
  },
  {
    id: 8,
    name: "Edge Computing",
    handler: "handleEdgeComputing",
    des: "Run ML models directly on your devices. Learn about frameworks like TensorFlow Lite and the role of edge gateways.",
  },
  {
    id: 9,
    name: "Security",
    handler: "handleSecurity",
    des: "Secure your devices and data. Learn about encryption, secure authentication, and managing firmware updates over the air.",
  },
  {
    id: 10,
    name: "IoT Application Development",
    handler: "handleApplication",
    des: "Build applications to interact with your devices. Learn to create mobile apps or web dashboards for device control and data visualization.",
  },
  {
    id: 11,
    name: "Industrial IoT (IIoT)",
    handler: "handleIndustrialIoT",
    des: "Explore the industrial side of IoT. Learn about SCADA systems, Modbus, and use cases like predictive maintenance.",
  },
  {
    id: 12,
    name: "Projects (Portfolio)",
    handler: "handleProjects",
    des: "Build end-to-end projects like smart home systems or environmental monitors. This is crucial for showcasing your skills.",
  },
  {
    id: 13,
    name: "Career Scaling",
    handler: "handleCareer",
    des: "Learn how to deploy and manage thousands of devices. Explore IoT standards, 5G IoT, and digital twins for professional growth.",
  },
];

export default function IoT() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each step
  const [showFoundations, setShowFoundations] = useState(false);
  const [showMicrocontrollers, setShowMicrocontrollers] = useState(false);
  const [showSensors, setShowSensors] = useState(false);
  const [showProtocols, setShowProtocols] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showEmbeddedOS, setShowEmbeddedOS] = useState(false);
  const [showCloudPlatforms, setShowCloudPlatforms] = useState(false);
  const [showDataProcessing, setShowDataProcessing] = useState(false);
  const [showEdgeComputing, setShowEdgeComputing] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [showIndustrialIoT, setShowIndustrialIoT] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCareer, setShowCareer] = useState(false);
  const [showFullResource, setFullResource] = useState(false);


  // Handlers for each step
  const handlers = {
    handleFoundations: () => setShowFoundations(!showFoundations),
    handleMicrocontrollers: () => setShowMicrocontrollers(!showMicrocontrollers),
    handleSensors: () => setShowSensors(!showSensors),
    handleProtocols: () => setShowProtocols(!showProtocols),
    handleNetworking: () => setShowNetworking(!showNetworking),
    handleEmbeddedOS: () => setShowEmbeddedOS(!showEmbeddedOS),
    handleCloudPlatforms: () => setShowCloudPlatforms(!showCloudPlatforms),
    handleDataProcessing: () => setShowDataProcessing(!showDataProcessing),
    handleEdgeComputing: () => setShowEdgeComputing(!showEdgeComputing),
    handleSecurity: () => setShowSecurity(!showSecurity),
    handleApplication: () => setShowApplication(!showApplication),
    handleIndustrialIoT: () => setShowIndustrialIoT(!showIndustrialIoT),
    handleProjects: () => setShowProjects(!showProjects),
    handleCareer: () => setShowCareer(!showCareer),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
      {/* Modals */}
      {showFoundations && <FoundationsPage closeFoundations={handlers.handleFoundations} />}
      {showMicrocontrollers && <MicrocontrollersPage closeMicrocontrollers={handlers.handleMicrocontrollers} />}
      {showSensors && <SensorsPage closeSensors={handlers.handleSensors} />}
      {showProtocols && <ProtocolsPage closeProtocols={handlers.handleProtocols} />}
      {showNetworking && <NetworkingPage closeNetworking={handlers.handleNetworking} />}
      {showEmbeddedOS && <EmbeddedOSPage closeEmbeddedOS={handlers.handleEmbeddedOS} />}
      {showCloudPlatforms && <CloudPlatformsPage closeCloudPlatforms={handlers.handleCloudPlatforms} />}
      {showDataProcessing && <DataProcessingPage closeDataProcessing={handlers.handleDataProcessing} />}
      {showEdgeComputing && <EdgeComputingPage closeEdgeComputing={handlers.handleEdgeComputing} />}
      {showSecurity && <SecurityPage closeSecurity={handlers.handleSecurity} />}
      {showApplication && <ApplicationPage closeApplication={handlers.handleApplication} />}
      {showIndustrialIoT && <IndustrialIoTPage closeIndustrialIoT={handlers.handleIndustrialIoT} />}
      {showProjects && <ProjectsPage closeProjects={handlers.handleProjects} />}
      {showCareer && <CareerPage closeCareer={handlers.handleCareer} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>IOT DEVELOPMENT ROADMAP</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className={`flex items-center w-full my-4 ${
                item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
              }`}
            >
              <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem]`}>
                <div
                  className={`flex items-center w-full ${
                    item.id % 2 === 0 ? "sm:justify-start" : "sm:justify-start sm:flex-row-reverse"
                  }`}
                >
                  <div className="line w-[2rem] h-1 bg-white"></div>
                  <div
                    onClick={() => {
                      if (item.handler) {
                        handlers[item.handler]?.();
                      }
                    }}
                    className={`relative w-[80%] sm:h-[5rem] text-center rounded-xl cursor-pointer bg-[#eeeeeedd] py-4 px-2 hover:bg-[#9aa3f6] transition-all duration-300`}
                    onMouseEnter={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                  >
                    <h4 className="text-lg text-center font-semibold text-gray-800">{item.name}</h4>
                    <div
                      className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${
                        activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">{item.des}</p>
                    </div>
                    <div className={`sm:hidden block transition-all duration-500 ease-in-out`}>
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">{item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Resources Button */}
      <div className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10">
        <button
          onClick={handlers.handleFullResource}
          className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2"
        >
          full course Resource
          <span className="material-symbols-outlined">text_snippet</span>
        </button>
      </div>
    </section>
  );
}