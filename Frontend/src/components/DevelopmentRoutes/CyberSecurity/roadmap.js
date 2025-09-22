import { useState } from "react";
import Header from "../../layout/Header";

// Placeholder imports for each roadmap ge
// You would need to create these components following the same pattern.
import BasicsPage from "../CyberSecurity/Basics";
import NetworkingPage from "../CyberSecurity/Networking";
import OSBasicsPage from "../CyberSecurity/OSBasics";
import CyberLabPage from "../CyberSecurity/CyberLab";
import RedTeamPage from "../CyberSecurity/RedTeam";
import BlueTeamPage from "../CyberSecurity/BlueTeam";
import TrackChoicePage from "../CyberSecurity/TrackChoice";
import ProjectsPage from "../CyberSecurity/Projects";
import CertificationsPage from "../CyberSecurity/Certifications";
import RoutinePage from "../CyberSecurity/Routine";
import Fullresource from "../CyberSecurity/Fullresource";

const roadmap = [
  {
    id: 0,
    name: " Basics & Mindset",
    handler: "handleBasics",
    des: "Understand core concepts like the CIA Triad (Confidentiality, Integrity, Availability) and the ethical rule of 'practice only in your own lab'.",
  },
  {
    id: 1,
    name: " Networking Basics",
    handler: "handleNetworking",
    des: "Learn fundamental networking concepts: IP addresses, DNS, and the OSI & TCP/IP models. Practice with tools like ping, curl, and Wireshark.",
  },
  {
    id: 2,
    name: " Operating System Basics",
    handler: "handleOSBasics",
    des: "Master the basics of Linux and Windows. Learn Linux commands, file permissions, and how to use Windows Event Viewer and PowerShell.",
  },
  {
    id: 3,
    name: " Build Your Cyber Lab",
    handler: "handleCyberLab",
    des: "Set up a virtual lab with Kali Linux, a target OS (Ubuntu/Windows), and vulnerable applications like DVWA and OWASP Juice Shop.",
  },
  {
    id: 4,
    name: " Learn Common Attacks (Red Team)",
    handler: "handleRedTeam",
    des: "Practice web attacks like SQL Injection and Cross-Site Scripting. Use tools like Burp Suite and Nmap in your lab.",
  },
  {
    id: 5,
    name: " Learn Defense (Blue Team)",
    handler: "handleBlueTeam",
    des: "Focus on detection and analysis. Learn to analyze logs with tools like Sysmon and Wireshark to spot suspicious activity.",
  },
  {
    id: 6,
    name: " Choose a Track",
    handler: "handleTrackChoice",
    des: "After building a foundation, decide on a specialization like Ethical Hacking, SOC Analysis, AppSec, or Cloud Security.",
  },
  {
    id: 7,
    name: " Projects to Prove Skills",
    handler: "handleProjects",
    des: "Build a portfolio with projects like a simple port scanner, a penetration test report, or a SIEM with custom alerts.",
  },
  {
    id: 8,
    name: " Certifications",
    handler: "handleCertifications",
    des: "Validate your skills with certifications like CompTIA Security+ for beginners or advanced options like OSCP.",
  },
  {
    id: 9,
    name: " Routine & Practice",
    handler: "handleRoutine",
    des: "Establish a consistent routine: daily theory, hands-on practice, and weekly labs on platforms like TryHackMe or HackTheBox.",
  },
];

export default function Cybersecurity() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each
  const [showBasics, setShowBasics] = useState(false);
  const [showNetworking, setShowNetworking] = useState(false);
  const [showOSBasics, setShowOSBasics] = useState(false);
  const [showCyberLab, setShowCyberLab] = useState(false);
  const [showRedTeam, setShowRedTeam] = useState(false);
  const [showBlueTeam, setShowBlueTeam] = useState(false);
  const [showTrackChoice, setShowTrackChoice] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showRoutine, setShowRoutine] = useState(false);
  const [showFullResource, setFullResource] = useState(false);


  //  Handlers for each step
   const handlers = {
    handleBasics: () => setShowBasics(!showBasics),
    handleNetworking: () => setShowNetworking(!showNetworking),
    handleOSBasics: () => setShowOSBasics(!showOSBasics),
    handleCyberLab: () => setShowCyberLab(!showCyberLab),
    handleRedTeam: () => setShowRedTeam(!showRedTeam),
    handleBlueTeam: () => setShowBlueTeam(!showBlueTeam),
    handleTrackChoice: () => setShowTrackChoice(!showTrackChoice),
    handleProjects: () => setShowProjects(!showProjects),
    handleCertifications: () => setShowCertifications(!showCertifications),
    handleRoutine: () => setShowRoutine(!showRoutine),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
      {/* Modals */}
      {showBasics && <BasicsPage closeBasics={handlers.handleBasics} />}
      {showNetworking && <NetworkingPage closeNetworking={handlers.handleNetworking} />}
      {showOSBasics && <OSBasicsPage closeOSBasics={handlers.handleOSBasics} />}
      {showCyberLab && <CyberLabPage closeCyberLab={handlers.handleCyberLab} />}
      {showRedTeam && <RedTeamPage closeRedTeam={handlers.handleRedTeam} />}
      {showBlueTeam && <BlueTeamPage closeBlueTeam={handlers.handleBlueTeam} />}
      {showTrackChoice && <TrackChoicePage closeTrackChoice={handlers.handleTrackChoice} />}
      {showProjects && <ProjectsPage closeProjects={handlers.handleProjects} />}
      {showCertifications && <CertificationsPage closeCertifications={handlers.handleCertifications} />}
      {showRoutine && <RoutinePage closeRoutine={handlers.handleRoutine} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>CYBERSECURITY ROADMAP</h1>
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