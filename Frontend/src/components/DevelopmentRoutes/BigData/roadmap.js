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

const roadmap = [
  {
    id: 0,
    name: "Foundations",
    handler: "handleFoundations",
    des: "Master Python, SQL, Linux, and Git. Practice writing SQL joins and Python ETL scripts to build a solid base.",
  },
  {
    id: 1,
    name: "Data Engineering Basics",
    handler: "handleDataEngineering",
    des: "Learn relational schemas, normalization, and data formats like Avro and Parquet. Understand how data is modeled and prepared for analysis.",
  },
  {
    id: 2,
    name: "Storage Fundamentals (Hadoop)",
    handler: "handleStorage",
    des: "Grasp how distributed file systems differ from traditional databases. Learn HDFS concepts and block storage.",
  },
  {
    id: 3,
    name: "Batch Processing (Hadoop)",
    handler: "handleBatchProcessing",
    des: "Understand batch jobs and when to use them. Learn Hadoop's MapReduce concepts by running a sample job.",
  },
  {
    id: 4,
    name: "Distributed Processing (Spark)",
    handler: "handleDistributedProcessing",
    des: "Master Spark's Core, DataFrame API, and Spark SQL. Learn about caching, joins, and partition tuning in PySpark.",
  },
  {
    id: 5,
    name: "Streaming & Messaging (Kafka)",
    handler: "handleStreaming",
    des: "Learn about real-time data flow with Apache Kafka. Understand topics, producers, and consumers to build a simple streaming pipeline.",
  },
  {
    id: 6,
    name: "Query Engines & Warehouses",
    handler: "handleQueryEngines",
    des: "Explore tools like Hive, Presto, and a cloud data warehouse (BigQuery, Redshift, Snowflake). Practice schema design for analytics.",
  },
  {
    id: 7,
    name: "Orchestration & Pipelines (Airflow)",
    handler: "handleOrchestration",
    des: "Automate and manage your data pipelines. Learn Apache Airflow to schedule and monitor complex workflows using DAGs.",
  },
  {
    id: 8,
    name: "Infrastructure & Deployment",
    handler: "handleInfrastructure",
    des: "Get hands-on with Docker, Kubernetes, and Terraform. Learn to deploy and manage your big data clusters reproducibly.",
  },
  {
    id: 9,
    name: "Cloud Managed Services",
    handler: "handleCloudServices",
    des: "Translate your open-source skills to managed cloud services (e.g., AWS EMR, GCP Dataproc). Understand cost and security best practices.",
  },
  {
    id: 10,
    name: "Data Governance & Security",
    handler: "handleGovernance",
    des: "Learn to secure your data. Focus on data catalogs, lineage, access controls, and compliance with regulations like GDPR.",
  },
  {
    id: 11,
    name: "Observability & Performance",
    handler: "handleObservability",
    des: "Monitor your pipelines. Learn about profiling, partition tuning, and managing logging and metrics to ensure reliability.",
  },
  {
    id: 12,
    name: "Machine Learning Pipelines",
    handler: "handleML",
    des: "Learn to integrate machine learning into your pipelines. Explore feature stores and tools for training and serving models in production.",
  },
  {
    id: 13,
    name: "Capstone Projects (Portfolio)",
    handler: "handleCapstone",
    des: "Build and publish 3 end-to-end projects. This is your portfolio to prove your skills and showcase your ability to solve real-world problems.",
  },
  {
    id: 14,
    name: "Career & Scaling Moves",
    handler: "handleCareer",
    des: "Learn cost optimization, multi-cluster architectures, and data product design. Add real-world monitoring and runbooks to your portfolio.",
  },
];

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