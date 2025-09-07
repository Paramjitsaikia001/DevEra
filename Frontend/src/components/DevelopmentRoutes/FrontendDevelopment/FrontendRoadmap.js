import { useState } from "react";
import Header from "../../layout/Header";
import HTMLPage from "../webdevelopmentRoutes/Htmlpage"
import CSSPage from "../webdevelopmentRoutes/CSSpage"
import Jspage from "../webdevelopmentRoutes/Javascriptpage";
import VersionControl from "../webdevelopmentRoutes/Versioncontrol"
import FrontendFrameworksPage from "./FrontendFW";
import CSSFrameworksPage from "./CSSFW";
import WebAnimationPage from "./WebAnimation";
import AdvancedJavaScriptPage from "./AdvancedJavaScriptPage";
import BuildToolsPage from "./BuildTools";
import StateManagementPage from "./StateMang";
import TypeScriptPage from "./TypeScript";
import TestingPage from "./TestingPage";
import PerformanceOptimizationPage from "./Perfomance";
import ThreeDModelingPage from "./Treedmodel";
import AdFrameworkPage from "./AdFramework";
import UIUX from "./UIXPric";
import Jobprep from "./PortJOB";
import Continouslearn from "./Continous";
import FullResource from "./FullResource";
const roadmap = [
    {
        id: 1,
        name: "HTML",
        handler:"htmlpagehandler",
        des: "HTML (HyperText Markup Language) is the standard language for creating web pages. Learn semantic HTML5, forms, accessibility (ARIA), and SEO basics to structure content effectively for any web application, from simple blogs to complex platforms."
    },
    {
        id: 2,
        name: "CSS",
        handler :"csspagehandler",
        des: "CSS (Cascading Style Sheets) styles and layouts web pages for visual appeal and responsiveness. Master CSS3 features like Flexbox, Grid, and media queries, along with preprocessors like SASS, to create modern, mobile-friendly designs."
    },
    {
        id: 3,
        name: "JavaScript (Basics)",
        handler :"jspagehandler",
        des: "JavaScript adds interactivity to web pages. Learn ES6+ syntax, DOM manipulation, event handling, and basic data structures (arrays, objects) to build dynamic features like form validation or interactive menus."
    },
    {
        id: 4,
        name: "Version Control (Git)",
        handler :"versioncontrolpagehandler",
        des: "Git is a version control system for managing code changes and collaboration. Learn Git with platforms like GitHub to track projects, push code, and contribute to open-source, a must-have skill for professional developers."
    },
    {
        id: 5,
        name: "Advanced JavaScript",
        handler :"advancejspagehandler",
        des: "Advanced JavaScript, including asynchronous programming (Promises, async/await), APIs (Fetch), and ES modules, enables dynamic, data-driven applications. These skills are essential for seamless user experiences with external services."
    },
    {
        id: 6,
        name: "Frontend Frameworks (React/Vue)",
        handler :"frontendFWpagehandler",
        des: "Frameworks like React or Vue.js are industry standards for building scalable, component-based web applications. Learn components, state management (e.g., React Hooks, Redux), and routing to create single-page applications like task managers."
    },
    {
        id: 7,
        name: "CSS Frameworks (Tailwind/Bootstrap)",
        handler :"cssFWpagehandler",

        des: "CSS frameworks like Tailwind CSS or Bootstrap speed up styling with pre-built components and utilities. They enable rapid prototyping and consistent, responsive UI development for professional-grade applications."
    },
    {
        id: 8,
        name: "Web Animation",
        handler:"webanimationpagehandler",
        des: "Web animations enhance user experience with engaging, dynamic interfaces. Learn CSS animations (keyframes, transitions), JavaScript libraries (GSAP, Anime.js), and SVG animations to create smooth effects like hover states, loading spinners, or scroll-triggered transitions."
    },
    {
        id: 9,
        name: "Build Tools",
        handler:"buildtoolspagehandler",
        des: "Build tools like Webpack, Vite, and package managers (npm/yarn) streamline development by bundling code and managing dependencies. Learn these alongside basic CI/CD concepts to deploy production-ready apps to platforms like Netlify or Vercel."
    },
    {
        id: 10,
        name: "State Management",
        handler:"statemanagementpagehandler",
        des: "Advanced state management with Redux Toolkit, Zustand, or React Context ensures efficient data flow in complex applications. These skills are critical for maintainability in projects like dashboards or e-commerce platforms."
    },
    {
        id: 11,
        name: "TypeScript",
        handler:"typescriptpagehandler",
        des: "TypeScript adds type safety to JavaScript, improving code reliability and scalability. Learn interfaces, generics, and TypeScript integration with frameworks like React to build robust, error-free applications."
    },
    {
        id: 12,
        name: "Testing",
        handler:"testingpagehandler",
        des: "Testing ensures reliable, bug-free applications. Learn Jest, React Testing Library, or Cypress for unit and end-to-end testing to validate functionality and enhance user experience in production environments."
    },
    {
        id: 13,
        name: "Performance Optimization",
        handler:"performancepagehandler",
        des: "Optimizing performance with lazy loading, code splitting, and asset optimization (images, fonts) ensures fast applications. Use tools like Lighthouse to audit and improve load times, vital for user retention and SEO."
    },
    {
        id: 14,
        name: "3D Modeling for Web",
        handler:"modelingpagehandler",
        des: "3D modeling enhances web experiences with immersive visuals. Learn Three.js or Babylon.js to create and render 3D graphics, integrating interactive models or animations into web applications for games, product showcases, or visualizations."
    },
    {
        id: 15,
        name: "Advanced Frameworks (Next.js/Gatsby)",
        handler:"Adframworkshandler",
        des: "Advanced frameworks like Next.js or Gatsby enhance React with server-side rendering and static site generation. These tools are key for building SEO-friendly, high-performance applications like blogs or e-commerce platforms."
    },
    {
        id: 16,
        name: "UI/UX Principles",
        handler: "uiuxpagehandler",
        des: "UI/UX principles, design systems, and tools like Figma, combined with accessibility standards (WCAG), ensure user-friendly, inclusive applications. These skills bridge development and design for polished, professional interfaces."
    },
    {
        id: 17,
        name: "Portfolio and Job Prep",
        handler: "jobpreppagehandler",
        des: "A strong portfolio with 3-5 diverse projects (e.g., animated landing pages, 3D product viewers, SPAs) showcases your skills. Combine with open-source contributions, a technical blog, and coding interview prep (LeetCode, HackerRank) to land a frontend role."
    },
    {
        id: 18,
        name: "Continuous Learning",
        handler: "continouslearnpagehandler",
        des: "Frontend development evolves rapidly. Stay updated on trends like Web3, PWAs, or advanced animations/3D tools by following X posts, contributing to open-source, and engaging with communities on Discord or meetups to remain competitive."
    }
];
export default function FrontendRoadmap() {
    const [activeId, setActiveId] = useState(null);

    const [showhtmlpage, sethtmlpage] = useState(false);
const [showcsspage,setcsspage] =useState(false)
const [showjspage,setjspage] =useState(false)
const [showversioncontrolpage,setversioncontrolpage] =useState(false)
const [showadvancejspage,setadvancejspage] = useState(false)
const [showfrontendFWpage,setfrontendFWpage] = useState(false)
const [showcssFWpage,setcssFWpage] = useState(false)
const [showWebanimation,setWebanimation] = useState(false)
const [showbuildtoolspage,setbuildtoolspage] = useState(false)
const [showstatemanagementpage,setstatemanagementpage] = useState(false)
const [showtypescriptpage,settypescriptpage] = useState(false)
const [showtestingpage,settestingpage] = useState(false)
const [showperformancepage,setperformancepage] = useState(false)
const [show3dmodelingpage,set3dmodelingpage] = useState(false)
const [showadframworks,setadframworks] = useState(false)
const [showuiux,setuiux] = useState(false)
const [showjobprep,setjobprep] = useState(false)
const [showcontinouslearn,setcontinouslearn] = useState(false)
const [showfullresource,setfullresource] = useState(false)

    const htmlpagehandler =()=>{
        sethtmlpage(!showhtmlpage);
    }
    const csspagehandler =()=>{
        setcsspage(!showcsspage);
    }
    const jspagehandler =()=>{
        setjspage(!showjspage);
    }
    const versioncontrolpagehandler = ()=>{
        setversioncontrolpage(!showversioncontrolpage);
    }
    const advancejspagehandler = ()=>{
        setadvancejspage(!showadvancejspage);
    }
    const frontendFWpagehandler = ()=>{
        setfrontendFWpage(!showfrontendFWpage);
    }
    const cssFWpagehandler = ()=>{
        setcssFWpage(!showcssFWpage);
    }
    const webanimationpagehandler = ()=>{
        setWebanimation(!showWebanimation);
    }
    const buildtoolspagehandler = ()=>{
        setbuildtoolspage(!showbuildtoolspage);
    }
    const statemanagementpagehandler = ()=>{
        setstatemanagementpage(!showstatemanagementpage);
    }
    const typescriptpagehandler = ()=>{
        settypescriptpage(!showtypescriptpage);
    }
    const testingpagehandler = ()=>{
        settestingpage(!showtestingpage);
    }
    const performancepagehandler = ()=>{
        setperformancepage(!showperformancepage);
    }
    const modelingpagehandler = ()=>{
        set3dmodelingpage(!show3dmodelingpage);
    }
    const Adframworkshandler = ()=>{
        setadframworks(!showadframworks);
    }
    const uiuxpagehandler = ()=>{
        setuiux(!showuiux);
    }
    const jobpreppagehandler = ()=>{
        setjobprep(!showjobprep);
    }
    const continouslearnpagehandler = ()=>{
        setcontinouslearn(!showcontinouslearn);
    }
    const fullresourcehandler = ()=>{
        setfullresource(!showfullresource);
    }

    const handlers =
        {
            htmlpagehandler,
            csspagehandler,
            jspagehandler,
            versioncontrolpagehandler,
            advancejspagehandler,
            frontendFWpagehandler,
            cssFWpagehandler,
            webanimationpagehandler,
            buildtoolspagehandler,
            statemanagementpagehandler,
            typescriptpagehandler,
            testingpagehandler,
            performancepagehandler,
            modelingpagehandler,
            Adframworkshandler,
            uiuxpagehandler,
            jobpreppagehandler,
            continouslearnpagehandler,
            fullresourcehandler
        }
    
    return (

        
        
        <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">


            {showhtmlpage && <HTMLPage closeHTML={() => sethtmlpage(false)} />}
            {showcsspage && <CSSPage closeCSS={() => setcsspage(false)} />}
            {showjspage && <Jspage closejs={() => setjspage(false)} />}
                {showversioncontrolpage && <VersionControl closeVCS={()=>setversioncontrolpage(false)}/>}
                {showadvancejspage && <AdvancedJavaScriptPage closeAdvancedJavaScript={()=>setadvancejspage(false)}/>}
                {showfrontendFWpage && <FrontendFrameworksPage closeFrontendFrameworks={()=>setfrontendFWpage(false)}/>}
                {showcssFWpage && <CSSFrameworksPage closeCSSFrameworks={()=>setcssFWpage(false)}/>}
                {showWebanimation && <WebAnimationPage closeWebAnimation={()=>setWebanimation(false)}/>}
                {showbuildtoolspage && <BuildToolsPage closeBuildTools={()=>setbuildtoolspage(false)}/>}
                {showstatemanagementpage && <StateManagementPage closeAdvancedState={()=>setstatemanagementpage(false)}/>}
                {showtypescriptpage && <TypeScriptPage closeTypeScript={()=>settypescriptpage(false)}/>}
                {showtestingpage && <TestingPage closeTesting={()=>settestingpage(false)}/>}
                {showperformancepage && <PerformanceOptimizationPage closePerformance={()=>setperformancepage(false)}/>}
                {show3dmodelingpage && <ThreeDModelingPage closeThreeDModeling={()=>set3dmodelingpage(false)}/>}
                {showadframworks && <AdFrameworkPage closeAdvancedFrameworks={()=>setadframworks(false)}/>}
                {showuiux && <UIUX closeUIUX={()=>setuiux(false)}/>}
                {showjobprep && <Jobprep closePortfolio={()=>setjobprep(false)}/>}
                {showcontinouslearn && <Continouslearn closeStayingUpdated={()=>setcontinouslearn(false)}/>}
                {showfullresource && <FullResource closeFullResources={()=>setfullresource(false)}/>}


            <div className='flex justify-center p-4 w-[100%]'>

                <Header />
            </div>

            {/* header  */}
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>FRONTEND DEVELOPMENT</h1>
                <div className="relative inline-block">
                    {/* Button */}
                    <span
                        className="material-symbols-outlined hover:text-[#198de0] cursor-pointer"
                    >
                        help
                    </span>
                </div>
            </div>


            {/* main content  */}
            <div className="conater relative w-full h-full">
                <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>

                <div className="flex flex-col justify-center w-full">

                    {roadmap.map((item) => {


                        return (
                            <div
                                key={item.id}
                                className={`flex items-center w-full my-4  ${item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
                                    }`}
                            >
                                <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem] `}>
                                    <div
                                        className={`flex items-center w-full ${item.id % 2 === 0 ? "sm:justify-start " : "sm:justify-start sm:flex-row-reverse"
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
                                            <h4 className="text-lg text-center font-semibold text-gray-800 ">{item.name}</h4>
                                            <div
                                                className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                                                    }`}
                                            >
                                                <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                    {item.des}
                                                </p>
                                            </div>
                                                <div
                                                className={` sm:hidden block transition-all duration-500 ease-in-out 
                                                    `}
                                            >
                                                <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                    {item.des}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
 <div className="fixed bottom-0 right-0 top-[90%] left-[82%] z-10">
                <button
                onClick={fullresourcehandler}
                className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
                    full course Resource
                    <span className="material-symbols-outlined">
                        text_snippet
                    </span>
                </button>
            </div>


        </section>
    );
} 