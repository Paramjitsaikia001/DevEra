
import { useState } from "react";
import Header from "../../Header";

import PythonPage from "./Pythonpage";
import MathematicalPage from "./Mathematical";
import MLlibandalgPage from "./MLLibandalg";
import DataManiAndVisuPage from "./DataManiAndVisu";
import NeuralNetworksPage from "./NauandDP";
export default function AiMl() {
    const[pythonpage , setPythonpage] = useState(false);
    const[Mathematical , setMathematical] = useState(false);
    const[MLLinandAlgPage , setMLLinandAlgPage] = useState(false);
    const[DataManiAndVisu , setDataManiAndVisu] =useState(false);
    const[NeuralNetworks,setNeuralNetworks] =useState(false)


    const handlePythonPage =()=>{
        setPythonpage(!pythonpage);
    }
    const handleMathematical =()=>{
        setMathematical(!Mathematical);
    }
    const handleMLLinandAlgPage =()=>{
        setMLLinandAlgPage(!MLLinandAlgPage);
    }
    const handleDataManiAndVisu = ()=>{
        setDataManiAndVisu(!DataManiAndVisu);
    }
    const handleNeuralNetworks =()=>{
        setNeuralNetworks(!NeuralNetworks);
    }
    return (
        <section className={`relative lg:w-[80%] w-[100%] flex flex-col  justify-center items-center gap-8 overflow-hidden pt-[5rem]`}>
            {pythonpage && <PythonPage closePython={handlePythonPage} Done={handlePythonPage} />}
            {Mathematical && <MathematicalPage closeMathematical={handleMathematical} Done={handleMathematical} />}
            {MLLinandAlgPage && <MLlibandalgPage closeMLLibandalg={handleMLLinandAlgPage} Done={handleMLLinandAlgPage} />}
            {DataManiAndVisu && <DataManiAndVisuPage closeDataManiAndVisu={handleDataManiAndVisu} Done={handleDataManiAndVisu}/>}
            {NeuralNetworks && <NeuralNetworksPage closeNeuralNetworks={handleNeuralNetworks} Done={handleDataManiAndVisu}/>}
            <div className='flex justify-center p-4 w-[100%]'>

                <Header />
            </div>

            <div className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10 ">
                <button

                    className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3  rounded-2xl  font-bold flex gap-2 ">full course Resource
                    <span class="material-symbols-outlined ">
                        text_snippet
                    </span>
                </button>
            </div>
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>FULL STACK WEB DEVELOPMENT</h1>
                <div className="relative inline-block">
                    {/* Button */}
                    <span
                        className="material-symbols-outlined hover:text-[#198de0] cursor-pointer"
                    >
                        help
                    </span>
                </div>
            </div>

            <div className="  flex flex-col justify-center items-center md:w-[90%] w-[100%] lg:p-0 p-[20px] min-h-[100%]">

                {/* python */}
                <div className=" codeeditor flex w-[100%] h-[40rem] gap-8 justify-center items-center">
                    <div className="w-[40rem] px-8 py-3 my-8  h-auto  bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> Learn Python syntax, OOP, and essential libraries like NumPy & Pandas for data handling.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%] w-1 bg-[#fff] border-none `}></div>
                        <div
                        onClick={handlePythonPage}
                        className="h-auto border-none rounded-3xl w-40 p-3 font-bold  items-center flex justify-center bg-[#acc2ef] hover:bg-[#5369f9] hover:text-white cursor-pointer">Python</div>
                        <div className={`verticalLine h-[40%] bg-[#fff] w-1 border-none `}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-4 w-[70%] bg-[#fff] border-none rounded-bl-lg rounded-tr-xl`}></div>


                {/*mathematical knowledhe */}
                <div className="HTML flex gap-8 w-[100%] h-[40%] justify-center items-center  mr-0 ">
                    <div className="flex flex-col justify-center h-[100%] items-center">
                        <div className={`verticalLine h-[40%] bg-[#fff] w-1 border-none `}></div>
                        <div
                        onClick={handleMathematical}
                            className="h-auto rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center border-none font-bold  hover:bg-[#edff2a]  cursor-pointer">Mathematical knowledge</div>
                        <div className={`verticalLine h-[40%] bg-[#fff]  w-1 border-none `}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p >
                            Master Linear Algebra, Probability, Statistics, and Calculus to understand ML algorithms.

                        </p>
                    </div>
                </div>
                <div className={`horizontalLine h-4 w-[70%] bg-[#fff] border-none rounded-bl-lg rounded-tr-xl`}></div>


                {/*Machine Learning Libraries & Algorithms  */}
                <div className="CSS flex w-[100%] gap-8 justify-center items-center h-[40%]">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Use Scikit-learn, XGBoost, and LightGBM to implement ML models like regression, classification, and clustering.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] bg-[#fff] w-1 border-none `}></div>
                        <div
                        onClick={handleMLLinandAlgPage}
                            className="h-auto border-none rounded-3xl bg-[#acc2ef] w-40 p-3 font-bold  items-center flex justify-center hover:bg-[#27ffd0] cursor-pointer">Machine Learning Libraries & Algorithms</div>
                        <div className={`verticalLine h-[50%] bg-[#fff] w-1 border-none `}></div>
                    </div>
                </div>

                <div className={`horizontalLine h-1 w-[70%] bg-[#fff]  border-none rounded-br-lg rounded-tl-xl`}></div>


                {/* Data Manipulation & Visualization */}
                <div className="JavaScript flex w-[100%] gap-8 justify-center items-center  h[40%] ">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%] bg-[#fff] w-1 border-none `}></div>
                        <div
                        onClick={handleDataManiAndVisu}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center cursor-pointer font-bold hover:bg-[#2afc6c]"> Data Manipulation & Visualization </div>
                        <div className={`verticalLine h-[40%] bg-[#fff] w-1`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            Use Pandas for data handling and Matplotlib/Seaborn for visualizing trends and insights.
                        </p>
                    </div>
                </div>


                {/*Real-World AI/ML Projects */}
                <div className={`horizontalLine h-1 w-[70%]  border-none rounded-br-lg rounded-tl-xl`}></div>
                <div className="VersionControlSystems flex gap-8 justify-center items-center  w-[100%] h-[40%]">

                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Work on practical projects like spam detection, face recognition, and stock price prediction; deploy models using Flask/FastAPI.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] bg-[#fff] w-1`}></div>
                        <div
                            className="h-autp border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] font-bold items-center flex justify-center cursor-pointer hover:bg-[#cc77e3]">Real-World AI/ML Projects</div>
                        <div className={`verticalLine h-[50%] bg-[#fff] w-1 `}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%]  bg-[#fff] border-none rounded-bl-lg rounded-tr-xl`}></div>


                {/* Neural Networks & Deep Learning */}
                <div className="Neural Networks & Deep Learning flex w-[100%] gap-8 justify-center items-center  h[40%] ">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%] bg-[#fff] w-1 border-none `}></div>
                        <div
                        onClick={handleNeuralNetworks}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center cursor-pointer font-bold hover:bg-[#6dffa0]">Neural Networks & Deep Learning</div>
                        <div className={`verticalLine bg-[#fff] h-[40%] w-1 `}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            Learn deep learning concepts like CNNs, RNNs, and Transformers using TensorFlow and PyTorch for NLP and CV applications.
                        </p>
                    </div>
                </div>

                <div className={`horizontalLine h-1 w-[70%]  bg-[#fff] border-none rounded-bl-lg rounded-tr-xl`}></div>
                {/* Data Manipulation & Visualization */}
                <div className="Data Manipulation & Visualization flex w-[100%] gap-8 justify-center items-center h-[40%]">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Use Pandas for data handling and Matplotlib/Seaborn for visualizing trends and insights in datasets.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine bg-[#fff] h-[50%] w-1  border-none`}></div>
                        <div
                            className="h-auto border-none rounded-3xl w-40 py-3 px-2  items-center flex justify-center font-bold bg-[#acc2ef] hover:bg-[#3c9dca] cursor-pointer">Data Manipulation & Visualization
                        </div>
                        <div className={`verticalLine bg-[#fff] h-[50%] w-1  border-none`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] bg-[#fff]  border-none rounded-br-lg rounded-tl-xl`}></div>





                <div className="horizontalLine  flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="w-[100%] md:w-[35%] p-[0.2rem] border-2 border-white flex justify-center items-center text-white text-lg"><h4>Specialized Fields</h4></div>
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>

                {/* frontend library and framework */}
                <div className=" frontendlibraryframework flex w-[100%] gap-8 h-[60%] justify-center items-center">
                   
                    <div className="flex flex-col  justify-center items-center h-[100%]">

                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                        <div
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Natural Language Processing (NLP)</div>

                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>

                        <div

                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Computer Vision</div>

                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> 
Once you've covered the basics, dive into niches like **Natural Language Processing** or **Computer Vision** to focus on what fascinates you most.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>

                {/* Ethics and Responsible AI */}
                <div className="Data Manipulation & Visualization flex w-[100%] gap-8 justify-center items-center h-[40%]">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> Understand AI fairness, bias detection, and ethical considerations to ensure transparent, unbiased, and responsible AI development.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] bg-[#fff] w-1  border-none`}></div>
                        <div
                            className="h-auto border-none rounded-3xl w-40 py-3 px-2  items-center flex justify-center font-bold bg-[#acc2ef] hover:bg-[#3c9dca] cursor-pointer">Ethics and Responsible AI
                        </div>
                        <div className={`verticalLine h-[10rem] bg-[#fff] w-1  border-none`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%]   border-none rounded-br-lg rounded-tl-xl`}></div>
            </div>
        </section>
    );
}
