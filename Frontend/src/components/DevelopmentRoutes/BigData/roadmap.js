import { useState } from "react";
import Header from "../../layout/Header";

// Placeholder imports for each roadmap step page
import FoundationsPage from "../BigData/Foundations";
import DataEngineeringPage from "../BigData/DataEngineering";
import StoragePage from "../BigData/Storage";
import BatchProcessingPage from "../BigData/BatchProcessing";
import DistributedProcessingPage from "../BigData/DistributedProcessing";
import StreamingPage from "../BigData/Streaming";
import QueryEnginesPage from "../BigData/QueryEngines";
import OrchestrationPage from "../BigData/Orchestration";
import InfrastructurePage from "../BigData/Infrastructure";
import CloudServicesPage from "../BigData/CloudServices";
import GovernancePage from "../BigData/Governance";
import ObservabilityPage from "../BigData/Observability";
import MLPage from "../BigData/MLPipelines";
import CapstonePage from "../BigData/Capstone";
import CareerPage from "../BigData/Career";
import Fullresource from "../BigData/Fullresource";
import Development from "../../../hooks/developments.hooks";



export default function BigData() {
  const [activeId, setActiveId] = useState(null);

  // Modal states for each step
  const [showFoundations, setShowFoundations] = useState(false);
  const [showDataEngineering, setShowDataEngineering] = useState(false);
  const [showStorage, setShowStorage] = useState(false);
  const [showBatchProcessing, setShowBatchProcessing] = useState(false);
  const [showDistributedProcessing, setShowDistributedProcessing] = useState(false);
  const [showStreaming, setShowStreaming] = useState(false);
  const [showQueryEngines, setShowQueryEngines] = useState(false);
  const [showOrchestration, setShowOrchestration] = useState(false);
  const [showInfrastructure, setShowInfrastructure] = useState(false);
  const [showCloudServices, setShowCloudServices] = useState(false);
  const [showGovernance, setShowGovernance] = useState(false);
  const [showObservability, setShowObservability] = useState(false);
  const [showML, setShowML] = useState(false);
  const [showCapstone, setShowCapstone] = useState(false);
  const [showCareer, setShowCareer] = useState(false);
  const [showFullResource, setFullResource] = useState(false);

  // Handlers for each step
  const handlers = {
    handleFoundations: () => setShowFoundations(!showFoundations),
    handleDataEngineering: () => setShowDataEngineering(!showDataEngineering),
    handleStorage: () => setShowStorage(!showStorage),
    handleBatchProcessing: () => setShowBatchProcessing(!showBatchProcessing),
    handleDistributedProcessing: () => setShowDistributedProcessing(!showDistributedProcessing),
    handleStreaming: () => setShowStreaming(!showStreaming),
    handleQueryEngines: () => setShowQueryEngines(!showQueryEngines),
    handleOrchestration: () => setShowOrchestration(!showOrchestration),
    handleInfrastructure: () => setShowInfrastructure(!showInfrastructure),
    handleCloudServices: () => setShowCloudServices(!showCloudServices),
    handleGovernance: () => setShowGovernance(!showGovernance),
    handleObservability: () => setShowObservability(!showObservability),
    handleML: () => setShowML(!showML),
    handleCapstone: () => setShowCapstone(!showCapstone),
    handleCareer: () => setShowCareer(!showCareer),
    handleFullResource: () => setFullResource(!showFullResource),
  };

    const { data: roadmap, loading, error } = Development()

    const BigDataRoadmap = roadmap?.[12]?.roadmapSteps
    if (loading) {
        return <h1>loading</h1>
    }
    if (error) {
        return <h2 className='text-white'>Something went wrong!</h2>
    }
  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
      {/* Modals */}
      {showFoundations && <FoundationsPage closeFoundations={handlers.handleFoundations} />}
      {showDataEngineering && <DataEngineeringPage closeDataEngineering={handlers.handleDataEngineering} />}
      {showStorage && <StoragePage closeStorage={handlers.handleStorage} />}
      {showBatchProcessing && <BatchProcessingPage closeBatchProcessing={handlers.handleBatchProcessing} />}
      {showDistributedProcessing && <DistributedProcessingPage closeDistributedProcessing={handlers.handleDistributedProcessing} />}
      {showStreaming && <StreamingPage closeStreaming={handlers.handleStreaming} />}
      {showQueryEngines && <QueryEnginesPage closeQueryEngines={handlers.handleQueryEngines} />}
      {showOrchestration && <OrchestrationPage closeOrchestration={handlers.handleOrchestration} />}
      {showInfrastructure && <InfrastructurePage closeInfrastructure={handlers.handleInfrastructure} />}
      {showCloudServices && <CloudServicesPage closeCloudServices={handlers.handleCloudServices} />}
      {showGovernance && <GovernancePage closeGovernance={handlers.handleGovernance} />}
      {showObservability && <ObservabilityPage closeObservability={handlers.handleObservability} />}
      {showML && <MLPage closeML={handlers.handleML} />}
      {showCapstone && <CapstonePage closeCapstone={handlers.handleCapstone} />}
      {showCareer && <CareerPage closeCareer={handlers.handleCareer} />}
      {showFullResource && <Fullresource closeFullResources={handlers.handleFullResource} />}

      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* header */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>BIG DATA ROADMAP</h1>
        <div className="relative inline-block">
          <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">help</span>
        </div>
      </div>

      {/* Roadmap timeline */}
      <div className="conater relative w-full h-full">
        <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
        <div className="flex flex-col justify-center w-full">
          {BigDataRoadmap.map((item) => (
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