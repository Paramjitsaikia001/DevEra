import { useState } from "react";
import Header from "../../layout/Header";

// Placeholder imports for each roadmap step page
// You would need to create these components (e.g., ProgrammingPage, MathPage)
// following the same pattern as your other roadmap pages.
import ProgrammingPage from "../DataScience/Programming";
import MathPage from "../DataScience/Math";
import VizPage from "../DataScience/DataViz";
import SQLPage from "../DataScience/SQL";
import MLPage from "../DataScience/ML";
import ProjectsPage from "../DataScience/Projects";
import SpecializationPage from "../DataScience/Specialization";
import Fullresource from "../DataScience/Fullresource";


const roadmap = [
  {
    id: 0,
    name: "Master Python",
    handler: "handleProgramming",
    des: "Start with Python, the industry-standard language for data science. Learn the basics and essential libraries like NumPy and Pandas for data manipulation.",
  },
  {
    id: 1,
    name: "Understand Math & Stats",
    handler: "handleMath",
    des: "Grasp the foundational concepts of statistics, probability, and linear algebra. This conceptual knowledge is crucial for understanding how algorithms work.",
  },
  {
    id: 2,
    name: "Data Visualization & Analysis",
    handler: "handleViz",
    des: "Learn to clean, process, and analyze data. Master visualization tools like Matplotlib and Seaborn to tell stories with data through graphs and charts.",
  },
  {
    id: 3,
    name: "Learn SQL & Databases",
    handler: "handleSQL",
    des: "Understand how to work with databases. Learn SQL to query, manage, and extract data, as most real-world data is stored in relational databases.",
  },
  {
    id: 4,
    name: "Machine Learning & Deep Learning",
    handler: "handleML",
    des: "Dive into the core of data science. Learn various machine learning algorithms and deep learning concepts to build predictive models and analyze complex data.",
  },
  {
    id: 5,
    name: "Build Projects & Portfolio",
    handler: "handleProjects",
    des: "Apply your skills by building end-to-end data science projects. This is essential for gaining practical experience and demonstrating your abilities to employers.",
  },
  {
    id: 6,
    name: "Specialize & Learn Tools",
    handler: "handleSpecialization",
    des: "Choose a specialization like NLP or Computer Vision. Learn to use tools and frameworks for deploying and managing your models in production.",
  },
];

export default function DataScience() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each step
  const [showProgramming, setShowProgramming] = useState(false);
  const [showMath, setShowMath] = useState(false);
  const [showViz, setShowViz] = useState(false);
  const [showSQL, setShowSQL] = useState(false);
  const [showML, setShowML] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const [showFullResource, setFullResource] = useState(false);


  // Handlers for each step
  const handlers = {
    handleProgramming: () => setShowProgramming(!showProgramming),
    handleMath: () => setShowMath(!showMath),
    handleViz: () => setShowViz(!showViz),
    handleSQL: () => setShowSQL(!showSQL),
    handleML: () => setShowML(!showML),
    handleProjects: () => setShowProjects(!showProjects),
    handleSpecialization: () => setShowSpecialization(!showSpecialization),
    handleFullResource: () => setFullResource(!showFullResource),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
      {/* Modals */}
      {showProgramming && <ProgrammingPage closeProgramming={handlers.handleProgramming} />}
      {showMath && <MathPage closeMath={handlers.handleMath} />}
      {showViz && <VizPage closeViz={handlers.handleViz} />}
      {showSQL && <SQLPage closeSQL={handlers.handleSQL} />}
      {showML && <MLPage closeML={handlers.handleML} />}
      {showProjects && <ProjectsPage closeProjects={handlers.handleProjects} />}
      {showSpecialization && <SpecializationPage closeSpecialization={handlers.handleSpecialization} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>DATA SCIENCE ROADMAP</h1>
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