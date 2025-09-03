import { useState } from "react";
import Header from "../../layout/Header";
import PythonPage from "./Pythonpage";
import MathematicalPage from "./Mathematical";
import MLlibandalgPage from "./MLLibandalg";
import DataManiAndVisuPage from "./DataManiAndVisu";
import NeuralNetworksPage from "./NauandDP";
import NLPPage from "./NeuralandProcess";
import ComputerVisionPage from "./ComputerVission";
import EthicsAIPage from "./ERAI";

const roadmap = [
    {
        id: 1,
        name: "Python",
        handler: "handlePythonPage",
        des: "Learn Python syntax, OOP, and essential libraries like NumPy & Pandas for data handling."
    },
    {
        id: 2,
        name: "Mathematical Knowledge",
        handler: "handleMathematical",
        des: "Master Linear Algebra, Probability, Statistics, and Calculus to understand ML algorithms."
    },
    {
        id: 3,
        name: "Machine Learning Libraries & Algorithms",
        handler: "handleMLLinandAlgPage",
        des: "Use Scikit-learn, XGBoost, and LightGBM to implement ML models like regression, classification, and clustering."
    },
    {
        id: 4,
        name: "Data Manipulation & Visualization",
        handler: "handleDataManiAndVisu",
        des: "Use Pandas for data handling and Matplotlib/Seaborn for visualizing trends and insights."
    },
    {
        id: 5,
        name: "Neural Networks & Deep Learning",
        handler: "handleNeuralNetworks",
        des: "Learn deep learning concepts like CNNs, RNNs, and Transformers using TensorFlow and PyTorch for NLP and CV applications."
    },
    {
        id: 6,
        name: "Natural Language Processing (NLP)",
        handler: "NLPhandler",
        des: "Dive into NLP for tasks like text classification, sentiment analysis, and language modeling."
    },
    {
        id: 7,
        name: "Computer Vision",
        handler: "computervisionHandler",
        des: "Explore computer vision for image classification, object detection, and facial recognition."
    },
    {
        id: 8,
        name: "Ethics and Responsible AI",
        handler: "EthicsAIHandler",
        des: "Understand AI fairness, bias detection, and ethical considerations for responsible AI development."
    }
];

export default function AiMl() {
    const [activeId, setActiveId] = useState(null);

    // Modal states
    const [pythonpage, setPythonpage] = useState(false);
    const [Mathematical, setMathematical] = useState(false);
    const [MLLinandAlgPage, setMLLinandAlgPage] = useState(false);
    const [DataManiAndVisu, setDataManiAndVisu] = useState(false);
    const [NeuralNetworks, setNeuralNetworks] = useState(false);
    const [showNLPPage, setNLPPage] = useState(false);
    const [showcomputervission, setcomputervission] = useState(false);
    const [showEthicsAIPage, setEthicsAIPage] = useState(false);

    // Handlers
    const handlePythonPage = () => setPythonpage(!pythonpage);
    const handleMathematical = () => setMathematical(!Mathematical);
    const handleMLLinandAlgPage = () => setMLLinandAlgPage(!MLLinandAlgPage);
    const handleDataManiAndVisu = () => setDataManiAndVisu(!DataManiAndVisu);
    const handleNeuralNetworks = () => setNeuralNetworks(!NeuralNetworks);
    const NLPhandler = () => setNLPPage(!showNLPPage);
    const computervisionHandler = () => setcomputervission(!showcomputervission);
    const EthicsAIHandler = () => setEthicsAIPage(!showEthicsAIPage);

    const handlers = {
        handlePythonPage,
        handleMathematical,
        handleMLLinandAlgPage,
        handleDataManiAndVisu,
        handleNeuralNetworks,
        NLPhandler,
        computervisionHandler,
        EthicsAIHandler,
    };

    return (
        <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden pt-[5rem]">
            {/* Modals */}
            {pythonpage && <PythonPage closePython={handlePythonPage} />}
            {Mathematical && <MathematicalPage closeMathematical={handleMathematical} />}
            {MLLinandAlgPage && <MLlibandalgPage closeMLLibandalg={handleMLLinandAlgPage} />}
            {DataManiAndVisu && <DataManiAndVisuPage closeDataManiAndVisu={handleDataManiAndVisu} />}
            {NeuralNetworks && <NeuralNetworksPage closeNeuralNetworks={handleNeuralNetworks} />}
            {showNLPPage && <NLPPage closeNLP={NLPhandler} />}
            {showcomputervission && <ComputerVisionPage closeComputerVision={computervisionHandler} />}
            {showEthicsAIPage && <EthicsAIPage closeEthicsAI={EthicsAIHandler} />}

            <div className='flex justify-center p-4 w-[100%]'>
                <Header />
            </div>

            {/* header */}
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>AI ML DEVELOPMENT</h1>
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
                            className={`flex items-center w-full my-4 ${item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"}`}
                        >
                            <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem]`}>
                                <div className={`flex items-center w-full ${item.id % 2 === 0 ? "sm:justify-start" : "sm:justify-start sm:flex-row-reverse"}`}>
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
                                        <div className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"}`}>
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
            <div className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10">
                <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
                    full course Resource
                    <span className="material-symbols-outlined">
                        text_snippet
                    </span>
                </button>
            </div>
        </section>
    );
}