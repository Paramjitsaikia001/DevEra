import { useState } from "react";
import Header from "../../layout/Header";

// Import roadmap detail pages (you can create each one later)
import FoundationsPage from "../APPdevelopment/FoundationsPage";
import FrameworksPage from "./FrameworksPage";
import UIStylingPage from "../APPdevelopment/UIStylingPage";
import StateManagementPage from "../APPdevelopment/StateManagementPage";
import NavigationRoutingPage from "../APPdevelopment/NavigationPage";
import APIsNetworkingPage from "../APPdevelopment/APIsNetworkingPage";
import NativeModulesPage from "../APPdevelopment/NativeModulesPage";
import AuthSecurityPage from "../APPdevelopment/AuthSecurityPage";
import TestingDebuggingPage from "../APPdevelopment/TestingDebuggingPage";
import PerformancePage from "../APPdevelopment/PerformancePage";
import DeploymentPage from "../APPdevelopment/DeploymentPage";
import AdvancedTopicsPage from "../APPdevelopment/AdvancedTopicsPage";
import ProjectIdeaPage from "../APPdevelopment/ProjectIdea"
import FullresourcePage from "../APPdevelopment/Fullresource"

const roadmap = [
  {
    id: 1,
    name: "Programming Foundations",
    handler: "handleFoundations",
    des: "Learn JavaScript/TypeScript for React Native or Dart for Flutter. Understand mobile basics like UI, navigation, lifecycle, and permissions."
  },
  {
    id: 2,
    name: "Core Frameworks",
    handler: "handleFrameworks",
    des: "Master React Native, Flutter, or alternatives like NativeScript/Ionic. Build cross-platform apps with a single codebase."
  },
  {
    id: 3,
    name: "UI & Styling",
    handler: "handleUIStyling",
    des: "Work with Flexbox, responsive layouts, Material Design, Cupertino widgets, and animations (Reanimated, Lottie)."
  },
  {
    id: 4,
    name: "State Management",
    handler: "handleStateManagement",
    des: "Use Redux Toolkit, Zustand, MobX, React Query (RN) or Provider, Riverpod, Bloc, GetX (Flutter). Add offline storage with SQLite, Realm, Hive."
  },
  {
    id: 5,
    name: "Navigation & Routing",
    handler: "handleNavigation",
    des: "Implement navigation with React Navigation or Flutter Navigator/GoRouter. Add deep linking and multi-level routing."
  },
  {
    id: 6,
    name: "APIs & Networking",
    handler: "handleAPIsNetworking",
    des: "Integrate REST/GraphQL APIs with Axios, Fetch, Apollo. Use WebSockets or Firebase for real-time features."
  },
  {
    id: 7,
    name: "Native Modules & Device Features",
    handler: "handleNativeModules",
    des: "Access camera, location, maps, sensors, notifications, and file storage with native modules or plugins."
  },
  {
    id: 8,
    name: "Authentication & Security",
    handler: "handleAuthSecurity",
    des: "Implement Firebase Auth, Auth0, or Supabase. Secure storage (Keychain, Keystore), biometrics, SSL pinning, and safe APIs."
  },
  {
    id: 9,
    name: "Testing & Debugging",
    handler: "handleTestingDebugging",
    des: "Write unit, integration, and E2E tests with Jest, Detox, Flutter Test. Debug with Flipper, React Native Debugger, Flutter DevTools."
  },
  {
    id: 10,
    name: "App Performance Optimization",
    handler: "handlePerformance",
    des: "Reduce bundle size, lazy load, optimize images, minimize re-renders/widget rebuilds, and use background services efficiently."
  },
  {
    id: 11,
    name: "Deployment & Distribution",
    handler: "handleDeployment",
    des: "Build APK/AAB for Android and IPA for iOS. Release via Google Play Console and Apple App Store. Use CI/CD with Fastlane, Bitrise, or GitHub Actions."
  },
  {
    id: 12,
    name: "Advanced Topics",
    handler: "handleAdvancedTopics",
    des: "Explore backend integration, payments, real-time chat, AI/ML, AR/VR, push notifications, analytics, and scaling strategies."
  },
  {
    id: 13,
    name:"Project ideas",
    handler: "handleProjectIdeas",
    des: "Build real-world projects like a social media app, e-commerce app, chat application, fitness tracker, or a news aggregator to apply your skills."
  }
];

export default function CrossPlatformRoadmap() {
  const [activeId, setActiveId] = useState(null);

  // Modal states
  const [showFoundations, setFoundations] = useState(false);
  const [showFrameworks, setFrameworks] = useState(false);
  const [showUIStyling, setUIStyling] = useState(false);
  const [showStateManagement, setStateManagement] = useState(false);
  const [showNavigation, setNavigation] = useState(false);
  const [showAPIsNetworking, setAPIsNetworking] = useState(false);
  const [showNativeModules, setNativeModules] = useState(false);
  const [showAuthSecurity, setAuthSecurity] = useState(false);
  const [showTestingDebugging, setTestingDebugging] = useState(false);
  const [showPerformance, setPerformance] = useState(false);
  const [showDeployment, setDeployment] = useState(false);
  const [showAdvancedTopics, setAdvancedTopics] = useState(false);
  const [showProjectIdeas, setProjectIdeas] = useState(false);
  const [showFullResources, setFullResources] = useState(false);


  // Handlers
  const handleFoundations = () => setFoundations(!showFoundations);
  const handleFrameworks = () => setFrameworks(!showFrameworks);
  const handleUIStyling = () => setUIStyling(!showUIStyling);
  const handleStateManagement = () => setStateManagement(!showStateManagement);
  const handleNavigation = () => setNavigation(!showNavigation);
  const handleAPIsNetworking = () => setAPIsNetworking(!showAPIsNetworking);
  const handleNativeModules = () => setNativeModules(!showNativeModules);
  const handleAuthSecurity = () => setAuthSecurity(!showAuthSecurity);
  const handleTestingDebugging = () => setTestingDebugging(!showTestingDebugging);
  const handlePerformance = () => setPerformance(!showPerformance);
  const handleDeployment = () => setDeployment(!showDeployment);
  const handleAdvancedTopics = () => setAdvancedTopics(!showAdvancedTopics);
  const handleProjectIdeas = () => setProjectIdeas(!showProjectIdeas);
  const handleFullResources = () => setFullResources(!showFullResources);

  const handlers = {
    handleFoundations,
    handleFrameworks,
    handleUIStyling,
    handleStateManagement,
    handleNavigation,
    handleAPIsNetworking,
    handleNativeModules,
    handleAuthSecurity,
    handleTestingDebugging,
    handlePerformance,
    handleDeployment,
    handleAdvancedTopics,
    handleProjectIdeas,
    handleFullResources
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
      {/* Modals */}
      {showFoundations && <FoundationsPage closeFoundation={handleFoundations} />}
      {showFrameworks && <FrameworksPage closeFrameworks={handleFrameworks} />}
      {showUIStyling && <UIStylingPage closeUIStyling={handleUIStyling} />}
      {showStateManagement && <StateManagementPage closeState={handleStateManagement} />}
      {showNavigation && <NavigationRoutingPage closeNavigation={handleNavigation} />}
      {showAPIsNetworking && <APIsNetworkingPage closeAPIs={handleAPIsNetworking} />}
      {showNativeModules && <NativeModulesPage closeNative={handleNativeModules} />}
      {showAuthSecurity && <AuthSecurityPage closeAuth={handleAuthSecurity} />}
      {showTestingDebugging && <TestingDebuggingPage closeTesting={handleTestingDebugging} />}
      {showPerformance && <PerformancePage closePerformance={handlePerformance} />}
      {showDeployment && <DeploymentPage closeDeployment={handleDeployment} />}
      {showAdvancedTopics && <AdvancedTopicsPage closeAdvanced={handleAdvancedTopics} />}
      {showProjectIdeas && <ProjectIdeaPage closeProjects={handleProjectIdeas} />}
      {showFullResources && <FullresourcePage closeFullResources={handleFullResources} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>CROSS-PLATFORM APP DEVELOPMENT</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">
            help
          </span>
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
                    item.id % 2 === 0
                      ? "sm:justify-start"
                      : "sm:justify-start sm:flex-row-reverse"
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
                    <h4 className="text-lg text-center font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <div
                      className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${
                        activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                        {item.des}
                      </p>
                    </div>
                    <div className={`sm:hidden block transition-all duration-500 ease-in-out`}>
                      <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>  

      {/* Full Resources Button */}
      <div
       onClick={handleFullResources}
      className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10">
        <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
          full course Resource
          <span className="material-symbols-outlined">text_snippet</span>
        </button>
      </div>
    </section>
  );
}
