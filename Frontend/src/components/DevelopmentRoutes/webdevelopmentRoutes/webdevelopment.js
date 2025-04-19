
import { useState } from "react";
import CodeEditor from "./codeEditor";
import Hyperpage from "./Htmlpage";
import Header from "../../Header";
import CSSpage from "./CSSpage";
import Jspage from "./Javascriptpage";
import PackageManager from "./Packagemanager";
import NodeJSpage from "./NodeJs";
import Expresspage from "./expresspage";
import DBMSpage from "./DBMS";
import VersionControlSystems from "./Versioncontrol";
import FrontendProjectDeploymentpage from "./FrontendProjectDeploy";
import APIpage from "./APIpage";
import FullstackDeploymentpage from "./FullstackProjectDeployment";
import ProjectBuild from "./ProjectBuild";
import LibraryandFramework from "./LibraryandFramework";
import ReactPage from "./ReactPage";
import AngularPage from "./AngularPage";
import VuePage from "./VuePage";
import NextForReact from "./NextForReact";
import NustPage from "./NustPage";
import AngularUniversalPage from "./AngularUniversalPage";
import BootstrapPage from "./Bootstrap";
import Tailwindcss from "./Tailwindcss";
import MaterialUIPage from "./Material_UI";
import FullResources from "./FullResources";
import Details from "./Details";

export default function WebDevelopment() {
    const [showCodeEditor, setCodeEditor] = useState(false);
    const [showHTML, setHTML] = useState(false);
    const [showCSS, setCSS] = useState(false);
    const [showJS, setJS] = useState(false);
    const [showPM, setPM] = useState(false);
    const [showNodeJS, setNodeJS] = useState(false);
    const [showExpress, setExpress] = useState(false);
    const [showDBMS, setDBMS] = useState(false);
    const [showVCS, setVCS] = useState(false);
    const [showFrontendProjectDeploy, setFrontendProjectDeploy] = useState(false);
    const [showAPI, setAPI] = useState(false);
    const [showfullstackDeployment, setfullstackDeployment] = useState(false);
    const [showProjectBuild, setProjectBuild] = useState(false);
    const [showLibraryFramework, setLibraryFramework] = useState(false);
    const [showReact, setReact] = useState(false);
    const [showAngular, setAngular] = useState(false);
    const [showVue, setVue] = useState(false);
    const [showNextForReact, setNextForReact] = useState(false);
    const [showNuxt, setNuxt] = useState(false);
    const [showAngularUniversal, setAngularUniversal] = useState(false);
    const [showBootstrap, setBootstrap] = useState(false);
    const [showTailwindcss, setTailwindcss] = useState(false);
    const [showMaterialUI, setMaterialUI] = useState(false);
    const [showFullResources, setFullResources] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [showDetails, setDetails] = useState(false)



    const [CodeEditorColorLine, setCodeEditorColorLine] = useState("bg-gray-700");
    const [HTMLColorLine, setHTMLColorLine] = useState("bg-gray-700");
    const [CSSColorLine, setCSSColorLine] = useState("bg-gray-700");
    const [JSColorLine, setJSColorLine] = useState("bg-gray-700");
    const [PMColorLine, setPMColorLine] = useState("bg-gray-700");
    const [NodeJsColorLine, setNodeJSColorLine] = useState("bg-gray-700");
    const [ExpressColorLine, setExpressColorLine] = useState("bg-gray-700");
    const [DBMSColorLine, setDBMSColorLine] = useState("bg-gray-700");
    const [VCSColorLine, setVCSColorLine] = useState("bg-gray-700");
    const [FrontendProjectDeployColorLine, setFrontendProjectDeployColorLine] = useState("bg-gray-700");
    const [APIColorLine, setAPIColorLine] = useState("bg-gray-700");
    const [fullstackDeploymentColorLine, setfullstackDeploymentColorLine] = useState("bg-gray-700");
    const [ProjectBuildColorLine, setProjectBuildColorLine] = useState("bg-gray-700")
    const [LibraryFrameworkColorLine, setLibraryFrameworkColorLine] = useState("bg-gray-700");
    const [ReactColorLine, setReactColorLine] = useState("bg-gray-700");
    const [AngularColorLine, setAngularColorLine] = useState("bg-gray-700");
    const [VueColorLine, setVueColorLine] = useState("bg-gray-700");
    const [NextForReactColorLine, setNextForReactColorLine] = useState("bg-gray-700");
    const [NuxtColorLine, setNuxtColorLine] = useState("bg-gray-700");
    const [AngularUniversalColorLine, setAngularUniversalColorLine] = useState("bg-gray-700");
    const [BootstrapColorLine, setBootstrapColorLine] = useState("bg-gray-700");
    const [TailwindcssColorLine, setTailwindcssColorLine] = useState("bg-gray-700");
    const [MaterialUIColorLine, setMaterialUIColorLine] = useState("bg-gray-700");




    const codeeditorhandler = () => {
        setCodeEditor(!showCodeEditor);
    };
    const HTMLhandler = () => {
        setHTML(!showHTML);
    }
    const CSShandler = () => {
        setCSS(!showCSS);
    }
    const JShandler = () => {
        setJS(!showJS);
    }
    const PMhandler = () => {
        setPM(!showPM);
    }
    const NodeJShandler = () => {
        setNodeJS(!showNodeJS);
    }
    const Expresshandler = () => {
        setExpress(!showExpress);
    }
    const DBMShandler = () => {
        setDBMS(!showDBMS);
    }
    const VCShandler = () => {
        setVCS(!showVCS);
    }
    const FrontendProjectDeployhandler = () => {
        setFrontendProjectDeploy(!showFrontendProjectDeploy);
    }
    const APIhandler = () => {
        setAPI(!showAPI);
    }

    const fullstackDeploymenthandler = () => {
        setfullstackDeployment(!showfullstackDeployment);
    }
    const ProjectBuildhandler = () => {
        setProjectBuild(!showProjectBuild);
    }
    const LibraryFrameworkhandler = () => {
        setLibraryFramework(!showLibraryFramework);
    }
    const Reacthandler = () => {
        setReact(!showReact);
    }
    const Angularhandler = () => {
        setAngular(!showAngular);
    }
    const Vuehandler = () => {
        setVue(!showVue);
    }
    const NextForReactHandler = () => {
        setNextForReact(!showNextForReact);
    }
    const NuxtHandler = () => {
        setNuxt(!showNuxt);
    }
    const AngularUniversalHandler = () => {
        setAngularUniversal(!showAngularUniversal);
    }
    const BootstrapHandler = () => {
        setBootstrap(!showBootstrap);
    }
    const TailwindcssHandler = () => {
        setTailwindcss(!showTailwindcss);
    }
    const MaterialUIHandler = () => {
        setMaterialUI(!showMaterialUI);
    }
    const FullResourcesHandler = () => {
        setFullResources(!showFullResources);
    }
    const DetailPageHandler = () => {
        setDetails(!showDetails)
    }





    const ChangeCodeEditorLineColor = () => {
        setCodeEditorColorLine("bg-blue-700");
    }
    const changehtmllinecolor = () => {
        setHTMLColorLine("bg-[#edff2a]")
    }
    const changecsslinecolor = () => {
        setCSSColorLine("bg-[#1f9a7f]")
    }
    const changejslinecolor = () => {
        setJSColorLine("bg-[#2afc6c]")
    }
    const changepmlinecolor = () => {
        setPMColorLine("bg-[#3c9dca]")
    }
    const changeNodeJSlinecolor = () => {
        setNodeJSColorLine("bg-[#3c9dca]")
    }
    const changeexpresslinecolor = () => {
        setExpressColorLine("bg-[#144326]")
    }
    const changeDBMSlinecolor = () => {
        setDBMSColorLine("bg-blue-300")
    }
    const changeVCSlinecolor = () => {
        setVCSColorLine("bg-[#cc77e3]")
    }
    const changeFrontendProjectDeploylinecolor = () => {
        setFrontendProjectDeployColorLine("bg-[#6dffa0]")
    }
    const changeAPilinecolor = () => {
        setAPIColorLine("bg-[#23daff]")
    }
    const changefullstackDeploymentlinecolor = () => {
        setfullstackDeploymentColorLine("bg-[#0e1542]")
    }
    const changeProjectBuildlinecolor = () => {
        setProjectBuildColorLine("bg-[#23daff]")
    }
    const changeLibraryFrameworklinecolor = () => {
        setLibraryFrameworkColorLine("bg-[#23daff]")
    }
    const changeReactlinecolor = () => {
        setReactColorLine("bg-[#23daff]")
    }
    const changeAngularlinecolor = () => {
        setAngularColorLine("bg-[#23daff]")
    }
    const changeVuelinecolor = () => {
        setVueColorLine("bg-[#23daff]")
    }
    const changeNextForReactlinecolor = () => {
        setNextForReactColorLine("bg-[#23daff]")
    }
    const changeNuxtlinecolor = () => {
        setNuxtColorLine("bg-[#23daff]")
    }
    const changeAngularUniversalcolor = () => {
        setAngularUniversalColorLine("bg-[#23daff]")
    }
    const changeBootstrapcolor = () => {
        setBootstrapColorLine("bg-[#23daff]")
    }
    const changeTailwindcsscolor = () => {
        setTailwindcssColorLine("bg-[#23daff]")
    }
    const changeMaterialUIcolor = () => {
        setMaterialUIColorLine("bg-[#23daff]")
    }



    return (
        <section className={`relative lg:w-[80%] w-[100%] flex flex-col ${showDetails?'': "pt-[5rem]"} justify-center items-center gap-8 overflow-hidden`}>
            <div className='flex justify-center p-4 w-[100%]'>

                <Header />
            </div>
            {showCodeEditor && <CodeEditor closeEditor={() => setCodeEditor(false)} Done={ChangeCodeEditorLineColor} />}
            {showHTML && <Hyperpage closeHTML={() => setHTML(false)} Done={changehtmllinecolor} />}
            {showCSS && <CSSpage closeCSS={() => setCSS(false)} Done={changecsslinecolor} />}
            {showJS && <Jspage closejs={() => setJS(false)} Done={changejslinecolor} />}
            {showPM && <PackageManager closePM={() => setPM(false)} Done={changepmlinecolor} />}
            {showNodeJS && <NodeJSpage closeNodeJS={() => setNodeJS(false)} Done={changeNodeJSlinecolor} />}
            {showExpress && <Expresspage closeexpress={() => setExpress(false)} Done={changeexpresslinecolor} />}
            {showDBMS && <DBMSpage closeDBMS={() => setDBMS(false)} Done={changeDBMSlinecolor} />}
            {showVCS && <VersionControlSystems closeVCS={() => setVCS(false)} Done={changeVCSlinecolor} />}
            {showFrontendProjectDeploy && <FrontendProjectDeploymentpage closeFrotendProjectDeploy={() => setFrontendProjectDeploy(false)} Done={changeFrontendProjectDeploylinecolor} />}
            {showAPI && <APIpage closeAPI={() => setAPI(false)} Done={changeAPilinecolor} />}
            {showfullstackDeployment && <FullstackDeploymentpage closeDeployment={() => setfullstackDeployment(false)} Done={changefullstackDeploymentlinecolor} />}
            {showProjectBuild && <ProjectBuild closeProjectBuild={() => setProjectBuild(false)} Done={changeProjectBuildlinecolor} />}
            {showLibraryFramework && <LibraryandFramework closeLibraryFramework={() => setLibraryFramework(false)} Done={changeLibraryFrameworklinecolor} />}
            {showReact && <ReactPage closeReact={() => setReact(false)} Done={changeReactlinecolor} />}
            {showAngular && <AngularPage closeAngular={() => setAngular(false)} Done={changeAngularlinecolor} />}
            {showVue && <VuePage closeVue={() => setVue(false)} Done={changeVuelinecolor} />}
            {showNextForReact && <NextForReact closeNextForReact={() => setNextForReact(false)} Done={changeNextForReactlinecolor} />}
            {showNuxt && <NustPage closeNuxt={() => setNuxt(false)} Done={changeNuxtlinecolor} />}
            {showAngularUniversal && <AngularUniversalPage closeAngularUniversal={() => setAngularUniversal(false)} Done={changeAngularUniversalcolor} />}
            {showBootstrap && <BootstrapPage closeBootstrap={() => setBootstrap(false)} Done={changeBootstrapcolor} />}
            {showTailwindcss && <Tailwindcss closeTailwindcss={() => setTailwindcss(false)} Done={changeTailwindcsscolor} />}
            {showMaterialUI && <MaterialUIPage closeMaterialUI={() => setMaterialUI(false)} Done={changeMaterialUIcolor} />}
            {showFullResources && <FullResources closeFullResources={() => setFullResources(false)} />}



            <div className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10 ">
                <button
                    onClick={FullResourcesHandler}
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
                        onClick={DetailPageHandler}
                        className="material-symbols-outlined hover:text-[#198de0] cursor-pointer"
                    >
                        help
                    </span>
                </div>
            </div>
            {showDetails? < Details/> : (
            <div className="  flex flex-col justify-center items-center md:w-[90%] w-[100%] lg:p-0 p-[20px] min-h-[100%]">

                {/* code editor */}
                <div className=" codeeditor flex w-[100%] h-[40rem] gap-8 justify-center items-center">
                    <div className="w-[40rem] px-8 py-3 my-8  h-auto  bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Code editor
                            A code editor is a software application designed specifically for editing source code. It provides various features to help developers write, edit, and manage code efficiently. Here are some popular code editors: Visual Studio Code (VS Code), Sublime Text, Atom, etc.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto my-4 md:h-auto  bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A code editor is a software application designed specifically for writing, editing, and managing source code.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%] w-1 border-none ${CodeEditorColorLine}`}></div>
                        <div onClick={codeeditorhandler} className="h-auto border-none rounded-3xl w-40 p-3 font-bold  items-center flex justify-center bg-[#acc2ef] hover:bg-[#5369f9] hover:text-white cursor-pointer">Code Editor</div>
                        <div className={`verticalLine h-[40%]  w-1 border-none ${CodeEditorColorLine}`}></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-auto md:h-0 w-[70vw] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className={`hidden lg:block h-1 min-w-[25.5%]  border-none ${CodeEditorColorLine} rounded-br-lg rounded-tl-xl`}></div>
                    <div className={`px-[0.5rem]  flex items-center justify-center w-auto text-white text-lg`}><h4>Front-end start here</h4></div>
                    <div className={`hidden lg:block h-1 min-w-[25.5%]  border-none ${CodeEditorColorLine}  rounded-br-lg rounded-tl-xl`}></div>
                </div>


                {/* html  */}
                <div className="HTML flex gap-8 w-[100%] h-[40%] justify-center items-center  mr-0 ">
                    <div className="flex flex-col justify-center h-[100%] items-center">
                        <div className={`verticalLine h-[40%]  w-1 border-none ${CodeEditorColorLine}`}></div>
                        <div
                            onClick={HTMLhandler}
                            className="h-auto rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center border-none font-bold  hover:bg-[#edff2a]  cursor-pointer">HTML</div>
                        <div className={`verticalLine h-[40%]  w-1 border-none ${HTMLColorLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p >
                            HTML (HyperText Markup Language) is the standard language used to create and design web pages. Whether you're building a simple personal blog or a complex web application, HTML is an essential skill for any web developer.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>HTML (HyperText Markup Language) is the standard markup language used to create and design web pages.
                        </p>
                    </div>
                </div>
                <div className={`horizontalLine h-4 w-[70%] ${HTMLColorLine} border-none rounded-bl-lg rounded-tr-xl`}></div>


                {/* css  */}
                <div className="CSS flex w-[100%] gap-8 justify-center items-center h-[40%]">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of web pages, allowing developers to create visually appealing and responsive designs.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and design of HTML documents, including layout, colors, and fonts.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%]  w-1 border-none ${HTMLColorLine}`}></div>
                        <div
                            onClick={CSShandler}
                            className="h-auto border-none rounded-3xl bg-[#acc2ef] w-40 p-3 font-bold  items-center flex justify-center hover:bg-[#27ffd0] cursor-pointer">CSS</div>
                        <div className={`verticalLine h-[50%]  w-1 border-none ${CSSColorLine}`}></div>
                    </div>
                </div>


                <div className={`horizontalLine h-1 w-[70%] ${CSSColorLine}  border-none rounded-br-lg rounded-tl-xl`}></div>


                {/* javascript */}
                <div className="JavaScript flex w-[100%] gap-8 justify-center items-center  h[40%] ">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%]  w-1 border-none ${CSSColorLine}`}></div>
                        <div
                            onClick={JShandler}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center cursor-pointer font-bold hover:bg-[#2afc6c]">JavaScript</div>
                        <div className={`verticalLine h-[40%] w-1 ${JSColorLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            JavaScript is a versatile programming language that enables dynamic and interactive web content. It allows developers to create responsive user interfaces, handle events, and manipulate the Document Object Model (DOM) to update the content and structure of web pages in real-time.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>JavaScript (JS) is a programming language used to create dynamic and interactive effects on web pages.
                        </p>
                    </div>
                </div>


                {/* VersionControlSystems */}
                <div className={`horizontalLine h-1 w-[70%] ${JSColorLine}  border-none rounded-br-lg rounded-tl-xl`}></div>
                <div className="VersionControlSystems flex gap-8 justify-center items-center  w-[100%] h-[40%]">

                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            Version control systems (VCS) like GitHub and GitLab are critical for managing and collaborating on code. They help track changes, manage multiple contributors, and integrate with automated pipelines for continuous delivery.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A version control system is a software tool that helps manage changes to source code over time, allowing multiple developers to collaborate and track revisions.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${JSColorLine}`}></div>
                        <div
                            onClick={VCShandler}
                            className="h-autp border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] font-bold items-center flex justify-center cursor-pointer hover:bg-[#cc77e3]">Version Control Systems</div>
                        <div className={`verticalLine h-[50%] w-1 ${VCSColorLine}`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${VCSColorLine}  border-none rounded-bl-lg rounded-tr-xl`}></div>

                <div className="FrontendProjectDeployment flex w-[100%] gap-8 justify-center items-center  h[40%] ">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[40%]  w-1 border-none ${VCSColorLine}`}></div>
                        <div
                            onClick={FrontendProjectDeployhandler}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center cursor-pointer font-bold hover:bg-[#6dffa0]">Frontend Project deployment</div>
                        <div className={`verticalLine h-[40%] w-1 ${FrontendProjectDeployColorLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            Deploying a frontend project built with HTML, CSS, and JavaScript involves hosting your static files on a server, making your application accessible online. Popular platforms like GitHub Pages, Netlify, and Vercel offer free and easy-to-use solutions for hosting static sites.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>Deploying frontend projects (HTML, CSS, JS) involves hosting static files online for public access. Use platforms like GitHub Pages, Netlify, or Vercel for free, easy, and reliable deployment.
                        </p>
                    </div>
                </div>

                <div className="horizontalLine flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className={`hidden md:block h-1 w-[30%]  border-none ${FrontendProjectDeployColorLine} rounded-br-lg rounded-tl-xl`}></div>
                    <div className=" p-[0.2rem] border-2 border-white flex items-center justify-center md:w-[10%] w-[100%] text-white text-lg"><h4>Back-end</h4></div>
                    <div className={`hidden md:block h-1 w-[30%]  border-none ${FrontendProjectDeployColorLine}  rounded-br-lg rounded-tl-xl`}></div>
                </div>
                {/* packagemanagement */}
                <div className="PackageManager flex w-[100%] gap-8 justify-center items-center h-[40%]">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Package managers are tools that help developers manage dependencies (libraries, frameworks, or tools) in their projects. They automate the process of installing, updating, and removing packages, ensuring your project has the right versions of required software.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A package manager is a tool that automates the process of installing, updating, configuring, and managing software packages and dependencies.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${FrontendProjectDeployColorLine} border-none`}></div>
                        <div
                            onClick={PMhandler}
                            className="h-auto border-none rounded-3xl w-40 py-3 px-2  items-center flex justify-center font-bold bg-[#acc2ef] hover:bg-[#3c9dca] cursor-pointer">Package manager
                        </div>
                        <div className={`verticalLine h-[50%] w-1 ${PMColorLine} border-none`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${PMColorLine}  border-none rounded-br-lg rounded-tl-xl`}></div>

                {/* nodejs */}
                <div className="nodeJS  flex w-[100%] gap-8 justify-center items-center h-[40%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${PMColorLine}`}></div>
                        <div
                            onClick={NodeJShandler}
                            className="h-auto font-bold hover:bg-[#0f1855] hover:text-white rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center cursor-pointer ">Node.js</div>
                        <div className={`verticalLine h-[50%] w-1 ${NodeJsColorLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It’s widely used for building server-side applications. Let's break down the key concepts you mentioned:
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>Node.js is a runtime environment that allows you to execute JavaScript code outside of a browser, typically used for building server-side applications.
                        </p>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${NodeJsColorLine}  border-none rounded-bl-lg rounded-tr-xl`}></div>

                {/* express.js */}
                <div className="Expressjs w-[100%] flex gap-8 h-[40%]  justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Express.js is a lightweight web application framework for Node.js. It is designed to build web servers and APIs efficiently and flexibly. Let’s dive deeper into the middleware and structuring large-scale projects, as you requested.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${NodeJsColorLine} border-none`}></div>
                        <div
                            onClick={Expresshandler}
                            className="h-auto trackstyle rounded-3xl w-40 p-3 bg-[#acc2ef] hover:bg-[#144326] hover:text-white font-bold items-center flex justify-center cursor-pointer">Express.js</div>
                        <div className={`verticalLine h-[50%] w-1 ${ExpressColorLine} border-none`}></div>
                    </div>
                </div>
                <div className={`horizontalLine h-2 w-[70%] ${ExpressColorLine}  border-none rounded-br-lg rounded-tl-xl`}></div>


                {/* DBMS */}
                <div className="DatabaseManagement w-[100%] flex gap-8 justify-center items-center h-[40%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${ExpressColorLine}`}></div>
                        <div
                            onClick={DBMShandler}
                            className="h-auto font-bold border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center cursor-pointer hover:bg-blue-300">Database Management</div>
                        <div className={`verticalLine h-[50%] w-1 ${DBMSColorLine}`}></div>
                    </div>
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] ">
                        <p>
                            Managing databases effectively is crucial in web development, as it ensures the efficient storage, retrieval, and manipulation of data.
                        </p>
                    </div>
                </div>
                <div className={`horizontalLine h-1 w-[70%] ${DBMSColorLine}  border-none rounded-bl-lg rounded-tr-xl`}></div>

                {/* API */}
                <div className=" APIs flex w-[100%] gap-8 h-[40%] justify-center items-center ">
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-sm md:text-lg text-[#eeecec] ">
                        <p>APIs allow software systems to communicate with each other by exposing functionality or data. In web development, APIs are commonly used for client-server communication.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${DBMSColorLine} border-none`}></div>
                        <div
                            onClick={APIhandler}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">APIs</div>
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>

                {/* fullstackDeployment */}
                <div className="fullstackdeployment flex gap-8 justify-center items-center  w-[100%] h-[40%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className={`verticalLine h-[50%] w-1 ${DBMSColorLine}`}></div>
                        <div
                            onClick={fullstackDeploymenthandler}
                            className="h-autp border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center cursor-pointer hover:bg-blue-300">Full Stack Project Deployment</div>
                        <div className={`verticalLine h-[50%] w-1 ${DBMSColorLine}`}></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            Full-stack development involves building both the frontend and backend of web applications. It requires knowledge of multiple technologies and tools to create a complete and functional product.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A version control system is a software tool that helps manage changes to source code over time, allowing multiple developers to collaborate and track revisions.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>

                {/* project build */}
                <div className="ProjectBuild flex w-[100%] gap-8 h-[40%] justify-center items-center">
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-sm md:text-lg text-[#eeecec]">
                        <p>Building a project involves planning, coding, testing, and deploying your application. It requires end-to-end execution, from ideation to production readiness, ensuring a robust and user-friendly product.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={ProjectBuildhandler}
                            className="h-auto border-none rounded-3xl w-40 p-3 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Project Build</div>
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[15.5%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[38%] flex justify-center items-center text-white text-lg"><h4>Understanding Frameworks and Libraries</h4></div>
                    <div className="hidden md:block h-1 w-[15.5%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>

                {/* libraryandframework  */}
                <div className="Libraryandframework flex gap-8 justify-center items-center  w-[100%] h-[40%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className="verticalLine h-[50%] w-1 bg-gray-600"></div>
                        <div
                            onClick={LibraryFrameworkhandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center cursor-pointer hover:bg-blue-300">Library and framework</div>
                        <div className="verticalLine h-[50%] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-sm md:text-lg text-[#eeecec]">
                        <p>Both libraries and frameworks are essential in web development. While they both provide reusable code to speed up development, they differ in their scope and how they are used in your projects.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="w-[100%] md:w-[35%] p-[0.2rem] border-2 border-white flex justify-center items-center text-white text-lg"><h4>Frontend Library/Framework</h4></div>
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>

                {/* frontend library and framework */}
                <div className=" frontendlibraryframework flex w-[100%] gap-8 h-[60%] justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> it’s essential to learn a frontend library or framework to build interactive and dynamic web applications. The three most popular ones are React, Angular, and Vue. Each has its strengths, and your choice depends on your needs, but the core principles remain similar across them.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A frontend library or framework is a collection of tools and code that simplifies the creation of user interfaces and web applications.
                        </p>
                    </div>
                    <div className="flex flex-col  justify-center items-center h-[100%]">

                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={Reacthandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">React (Library)</div>

                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>

                        <div

                            onClick={Angularhandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Angular (Framework)</div>

                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>

                        <div
                            onClick={Vuehandler}
                            className="h-auto border-none rounded-3xl w-auto  py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Vue(Framework)</div>
                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[30%] flex justify-center items-center text-white text-lg"><h4>Server-Side Rendering (SSR)</h4></div>
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>

                {/* server side rendering */}
                <div className="server-siderendering flex gap-8 justify-center items-center  w-[100%] h-[60%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={NextForReactHandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Next.js (for React)</div>
                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>

                        <div
                            onClick={NuxtHandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Nuxt.js (for Vue)</div>
                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={AngularUniversalHandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Angular Universal (for Angular)</div>
                        <div className="verticalLine h-[20%] w-1 bg-gray-600 border-none"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>To take your web development skills to the next level, it's important to learn Server-Side Rendering (SSR). This technique involves rendering a web page on the server rather than in the browser, which can significantly improve page load times and SEO.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">

                        <p>A frontend library or framework is a collection of tools and code that simplifies the creation of user interfaces and web applications.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[24.8%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[30%] flex justify-center items-center text-white text-lg"><h4>CSS Frameworks</h4></div>
                    <div className="hidden md:block h-1 w-[24.8%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>

                {/* CSSframework */}
                <div className="CSSframework flex w-[100%] gap-8 h-[80%] justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> CSS frameworks provide pre-designed and reusable code that simplifies the process of styling your web applications. By using these frameworks, you can focus more on the functionality and layout of your app, rather than spending time writing all the CSS from scratch.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A CSS framework is a library of pre-written CSS code that simplifies creating consistent and responsive web designs.
                        </p>
                    </div>
                    <div className="flex flex-col  justify-center items-center h-[100%]">
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={BootstrapHandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Bootstrap</div>
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={TailwindcssHandler}
                            className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Tailwind CSS
                        </div>
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                        <div
                            onClick={MaterialUIHandler}
                            className="h-auto border-none rounded-3xl w-auto  py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Material-UI</div>
                        <div className="verticalLine h-[50%] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-auto md:h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[24%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[30%] flex justify-center items-center text-white text-lg"><h4>State management</h4></div>
                    <div className="hidden md:block h-1 w-[24%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>
                <div className="statemanagement flex gap-8 justify-center items-center  w-[100%] h-[80%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <div className="verticalLine h-[40%] w-1 bg-gray-600 border-none"></div>
                        <div className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">React Context API</div>
                        <div className="verticalLine h-[40%] w-1 bg-gray-600 border-none"></div>
                        <div className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Redux</div>
                        <div className="verticalLine h-[40%] w-1 bg-gray-600 border-none"></div>
                        <div className="h-auto border-none rounded-3xl w-auto py-3 px-5 bg-[#acc2ef] items-center flex justify-center hover:bg-green-300 cursor-pointer">Zustand</div>
                        <div className="verticalLine h-[40%] w-1 bg-gray-600 border-none"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>State management is a crucial concept in modern web development, especially when dealing with complex applications where various components need to share or update data. Effective state management ensures that your app behaves consistently, is easy to maintain, and scales properly.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>State management in web development involves efficiently handling and synchronizing the state of an application to ensure a consistent and predictable user experience.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>
            </div>
            )}
        </section>
    );
}
