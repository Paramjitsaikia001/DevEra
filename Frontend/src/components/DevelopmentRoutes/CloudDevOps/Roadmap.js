import { useState } from "react";
import Header from "../../layout/Header";

// Placeholder imports for each roadmap step page
// You would need to create these components (e.g., LinuxPage, ProgrammingPage)
// following the same pattern as your Blockchain pages.
import LinuxPage from "../CloudDevOps/Linux";
import ProgrammingPage from "../CloudDevOps/Programming";
import CoreConceptsPage from "../CloudDevOps/CoreConcepts";
import GitPage from "../CloudDevOps/Git";
import CloudFundamentalsPage from "../CloudDevOps/CloudFundamentals";
import IaCPage from "../CloudDevOps/IaC";
import ContainersPage from "../CloudDevOps/Containers";
import CICDPage from "../CloudDevOps/CICD";
import ConfigManagementPage from "../CloudDevOps/ConfigManagement";
import MonitoringPage from "../CloudDevOps/Monitoring";
import AdvancedCloudPage from "../CloudDevOps/AdvancedCloud";
import SREPage from "../CloudDevOps/SRE";
import FinOpsPage from "../CloudDevOps/FinOps";
import CertificationsPage from "../CloudDevOps/Certifications";
import Fullresource from "../CloudDevOps/Fullresource";

const roadmap = [
  {
    id: 0,
    name: "Master Linux & Bash",
    handler: "handleLinux",
    des: "Become an expert with the Linux command line. Learn file system navigation, permissions, and shell scripting for automation.",
  },
  {
    id: 1,
    name: "Learn a Programming Language",
    handler: "handleProgramming",
    des: "Master Python or Go for automation, scripting, and API interactions. These languages are core to DevOps practices.",
  },
  {
    id: 2,
    name: "Understand Core Concepts",
    handler: "handleCoreConcepts",
    des: "Grasp fundamental concepts of networking (DNS, OSI), security (firewalls), and operating systems.",
  },
  {
    id: 3,
    name: "Version Control with Git",
    handler: "handleGit",
    des: "Learn Git for collaborative development. Practice essential commands like clone, commit, pull, push, and branching.",
  },
  {
    id: 4,
    name: "Cloud Fundamentals (AWS/Azure/GCP)",
    handler: "handleCloudFundamentals",
    des: "Get started with one major cloud provider. Learn IaaS, PaaS, SaaS, and the core services like EC2/VMs, S3/Storage, and VPCs.",
  },
  {
    id: 5,
    name: "Infrastructure as Code (IaC)",
    handler: "handleIaC",
    des: "Automate infrastructure provisioning. Learn Terraform or a cloud-native tool like AWS CloudFormation or Azure Bicep.",
  },
  {
    id: 6,
    name: "Containerization & Orchestration",
    handler: "handleContainers",
    des: "Master Docker for creating and managing containers, then learn Kubernetes to orchestrate and scale them in production.",
  },
  {
    id: 7,
    name: "CI/CD Pipeline",
    handler: "handleCICD",
    des: "Build automated pipelines for continuous integration and delivery using tools like Jenkins, GitLab CI/CD, or GitHub Actions.",
  },
  {
    id: 8,
    name: "Configuration Management",
    handler: "handleConfigManagement",
    des: "Automate server configuration and software deployment. Learn Ansible for its simplicity and power.",
  },
  {
    id: 9,
    name: "Monitoring & Logging",
    handler: "handleMonitoring",
    des: "Implement monitoring with Prometheus and Grafana. Set up centralized logging with the ELK stack or a cloud-native solution.",
  },
  {
    id: 10,
    name: "Advanced Cloud Architecture",
    handler: "handleAdvancedCloud",
    des: "Explore advanced topics like serverless computing, microservices, and advanced networking configurations.",
  },
  {
    id: 11,
    name: "Site Reliability Engineering (SRE)",
    handler: "handleSRE",
    des: "Adopt SRE principles. Focus on reliability, scalability, and efficiency. Learn about SLOs, SLIs, and error budgets.",
  },
  {
    id: 12,
    name: "FinOps & Governance",
    handler: "handleFinOps",
    des: "Learn to manage and optimize cloud costs. Implement governance policies to ensure security and compliance.",
  },
  {
    id: 13,
    name: "Certifications",
    handler: "handleCertifications",
    des: "Validate your skills with professional certifications like AWS Certified DevOps Engineer - Professional or Microsoft Certified: DevOps Engineer Expert.",
  },
];

export default function DevOps() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each step
  const [showLinux, setShowLinux] = useState(false);
  const [showProgramming, setShowProgramming] = useState(false);
  const [showCoreConcepts, setShowCoreConcepts] = useState(false);
  const [showGit, setShowGit] = useState(false);
  const [showCloudFundamentals, setShowCloudFundamentals] = useState(false);
  const [showIaC, setShowIaC] = useState(false);
  const [showContainers, setShowContainers] = useState(false);
  const [showCICD, setShowCICD] = useState(false);
  const [showConfigManagement, setShowConfigManagement] = useState(false);
  const [showMonitoring, setShowMonitoring] = useState(false);
  const [showAdvancedCloud, setShowAdvancedCloud] = useState(false);
  const [showSRE, setShowSRE] = useState(false);
  const [showFinOps, setShowFinOps] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showFullResource, setFullResource] = useState(false);


  // Handlers for each step
  const handlers = {
    handleLinux: () => setShowLinux(!showLinux),
    handleProgramming: () => setShowProgramming(!showProgramming),
    handleCoreConcepts: () => setShowCoreConcepts(!showCoreConcepts),
    handleGit: () => setShowGit(!showGit),
    handleCloudFundamentals: () => setShowCloudFundamentals(!showCloudFundamentals),
    handleIaC: () => setShowIaC(!showIaC),
    handleContainers: () => setShowContainers(!showContainers),
    handleCICD: () => setShowCICD(!showCICD),
    handleConfigManagement: () => setShowConfigManagement(!showConfigManagement),
    handleMonitoring: () => setShowMonitoring(!showMonitoring),
    handleAdvancedCloud: () => setShowAdvancedCloud(!showAdvancedCloud),
    handleSRE: () => setShowSRE(!showSRE),
    handleFinOps: () => setShowFinOps(!showFinOps),
    handleCertifications: () => setShowCertifications(!showCertifications),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
      {/* Modals */}
      {showLinux && <LinuxPage closeLinux={handlers.handleLinux} />}
      {showProgramming && <ProgrammingPage closeProgramming={handlers.handleProgramming} />}
      {showCoreConcepts && <CoreConceptsPage closeCoreConcepts={handlers.handleCoreConcepts} />}
      {showGit && <GitPage closeGit={handlers.handleGit} />}
      {showCloudFundamentals && <CloudFundamentalsPage closeCloudFundamentals={handlers.handleCloudFundamentals} />}
      {showIaC && <IaCPage closeIaC={handlers.handleIaC} />}
      {showContainers && <ContainersPage closeContainers={handlers.handleContainers} />}
      {showCICD && <CICDPage closeCICD={handlers.handleCICD} />}
      {showConfigManagement && <ConfigManagementPage closeConfigManagement={handlers.handleConfigManagement} />}
      {showMonitoring && <MonitoringPage closeMonitoring={handlers.handleMonitoring} />}
      {showAdvancedCloud && <AdvancedCloudPage closeAdvancedCloud={handlers.handleAdvancedCloud} />}
      {showSRE && <SREPage closeSRE={handlers.handleSRE} />}
      {showFinOps && <FinOpsPage closeFinOps={handlers.handleFinOps} />}
      {showCertifications && <CertificationsPage closeCertifications={handlers.handleCertifications} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>CLOUD COMPUTING & DEVOPS</h1>
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