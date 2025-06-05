import Footer from './Footer'
import webdevelopment from '../images/DevelopmentImage/fullstacjwebdev.jpg'
import appdevelopment from '../images/DevelopmentImage/appdevelopment.jpg'
import gamedevelopment from '../images/DevelopmentImage/gamedevelopment.jpg'
import frontenddev from '../images/DevelopmentImage/frontend.jpg'
import backend from '../images/DevelopmentImage/Backenddevelopment.jpg'
import IOS from '../images/DevelopmentImage/iOS-App-Development.jpg'
import androidapp from '../images/DevelopmentImage/android_app_dev.jpg'
import cybersecurity from '../images/DevelopmentImage/cybersecurity.jpg'
import DevOPSCloud from '../images/DevelopmentImage/Devops-and-cloud.jpeg'
import Blockchain from '../images/DevelopmentImage/blockchain.jpg'
import VR from '../images/DevelopmentImage/VR.jpg'
import AR from '../images/DevelopmentImage/AR.jpg'
import AIML from '../images/DevelopmentImage/AIML.jpg'
import datascience from '../images/DevelopmentImage/datascience.jpg'
import ioT from '../images/DevelopmentImage/ioT.jpg'
import bigdata from '../images/DevelopmentImage/bigdata_development.jpg'
import TypingEffect from 'react-typing-effect'
import Header from './Header'
import MobileNav from './mobilenav'
import { useNavigate, useLocation } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react'

const developmentCards = [
    {
        title: "AI and Machine Learning Development",
        description: "AI (Artificial Intelligence) and ML (Machine Learning) involve creating systems that perform tasks requiring human intelligence, like learning and problem-solving. These technologies develop algorithms for computers to learn from data.",
        image: AIML,
        route: "AIML"
    },
    {
        title: "Full Stack Web Development",
        description: "Web Development includes front-end (client-side) and back-end (server-side) work, creating functional websites. The future is bright with AI advancements and high demand for responsive, user-friendly designs.",
        image: webdevelopment,
        route: "webdev"
    },
    {
        title: "Frontend Web Development",
        description: "Frontend development involves building the user-facing part of web applications using technologies like HTML, CSS, and JavaScript. It focuses on creating responsive, interactive, and visually appealing interfaces that enhance the user experience.",
        image: frontenddev,
        route: "frontend"
    },
    {
        title: "Backend Web Development",
        description: "Backend development involves creating and maintaining the server-side logic, databases, and APIs that power web applications. It focuses on ensuring the application's functionality, security, and performance behind the scenes.",
        image: backend,
        route: "backend"
    },
    {
        title: "App Development",
        description: "App Development involves creating applications for mobile and desktop platforms. It covers both front-end (user interface) and back-end (server-side) development.",
        image: appdevelopment,
        route: "appdev"
    },
    {
        title: "iOS App Development",
        description: "iOS app development involves creating applications for Apple's iOS platform using languages like Swift or Objective-C. It focuses on delivering seamless, high-quality experiences for iPhone and iPad users.",
        image: IOS,
        route: "ios"
    },
    {
        title: "Android App Development",
        description: "Android app development involves creating applications for devices running on the Android operating system using languages like Java or Kotlin. It focuses on delivering robust, user-friendly experiences for a wide range of Android smartphones and tablets.",
        image: androidapp,
        route: "android"
    },
    {
        title: "Game Development",
        description: "Game Development involves creating interactive games, blending art, storytelling, and coding. It's a dynamic field with growing opportunities thanks to advances in VR and AR technologies.",
        image: gamedevelopment,
        route: "gamedev"
    },
    {
        title: "CyberSecurity",
        description: "Cybersecurity involves protecting computer systems, networks, and data from digital attacks and unauthorized access. It focuses on implementing security measures and mitigating threats to ensure information integrity and confidentiality.",
        image: cybersecurity,
        route: "cybersecurity"
    },
    {
        title: "Blockchain Development",
        description: "Blockchain is a decentralized, digital ledger technology that records transactions across multiple computers. It ensures transparency, security, and immutability, making it ideal for applications like cryptocurrencies, smart contracts, and supply chain management.",
        image: Blockchain,
        route: "blockchain"
    },
    {
        title: "Cloud Computing and DevOps",
        description: "Cloud Computing delivers scalable computing services like servers, storage, and software over the internet. DevOps combines software development and IT operations to enhance collaboration and automation, ensuring continuous delivery.",
        image: DevOPSCloud,
        route: "devopscloud"
    },
    {
        title: "Data Science",
        description: "Data science involves extracting meaningful insights from large and complex datasets using statistical methods, programming, and domain knowledge. It focuses on discovering patterns and making predictions through data analysis and machine learning techniques.",
        image: datascience,
        route: "datascience"
    },
    {
        title: "Virtual Reality (VR)",
        description: "Virtual Reality (VR) creates immersive, simulated environments that users can interact with in a seemingly real way. It leverages advanced technology to provide experiences in gaming, education, and more through specialized headsets and sensors.",
        image: VR,
        route: "vr"
    },
    {
        title: "Augmented Reality (AR)",
        description: "Augmented Reality (AR) overlays digital content onto the real world, enhancing users' perception of their environment. It uses smartphones and AR glasses to provide interactive and immersive experiences in various applications.",
        image: AR,
        route: "ar"
    },
    {
        title: "Internet of Things (IoT) Development",
        description: "IoT development involves creating and integrating connected devices that communicate over the internet. It requires knowledge in hardware, software, and networking to build smart solutions for homes, cities, healthcare, and industries.",
        image: ioT,
        route: "iot"
    },
    {
        title: "Big Data Development",
        description: "Big Data Development involves designing and building systems to process and analyze large volumes of data. It focuses on utilizing tools and technologies to handle data storage, processing, and analytics for businesses to derive insights.",
        image: bigdata,
        route: "bigdata"
    }
];

export default function Development() {
    const navigate = useNavigate();
    const location = useLocation();
    const routerhander = (name) => {
        navigate(`/traintoexcellency/Frontend-build/development/${name}`);
    }
    const backbutton = () => {
        navigate('/traintoexcellency/Frontend-build/');
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
    }, [location]);
    return (
        <section className="flex flex-col lg:w-[80%] w-[100%] h-[100%] gap-4">
            <div className='flex justify-center p-4'>
                <button
                    onClick={() => backbutton()}
                    className='ml-4 my-2 bg-[#eeecec] text-black px-3 py-0 border-1 border-gray-700 rounded-[4px] flex items-center'
                >
                    <span class="material-symbols-outlined text-sm font-bold">
                        arrow_back_ios
                    </span>
                    <span>Back</span>
                </button>

                <Header />
            </div>
            <main className='p-4'>
                <div className="development flex flex-col gap-4">
                    <div className=" flex flex-col gap-1 border-gray-500">
                        <h2 className="text-white font-bold text-3xl flex flex-col">
                            <span>Hello</span>
                            <TypingEffect text={['Web Developers', 'Game Developers', 'App Developers']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={1000} />
                        </h2>
                        <h4 className="text-purple-400 text-xl">
                            Your Ultimate Guide to Mastering Development Comprehensive Roadmaps for Every Aspiring Developer.

                            Explore, Learn, and Grow with detailed, step-by-step guides Tailored for your journey in the world of tech.
                        </h4>
                    </div>
                    <div className='development-container flex flex-wrap gap-5 py-4 border-t-2'>
                        {developmentCards.map((card, index) => (
                            <div key={index} className="flex flex-col gap-2 w-[98%] md:w-[32%] min-h-48 bg-[#acc2ef] items-center py-2 border-0 rounded-lg">
                                <img className='w-[96%] h-auto border-0 rounded-lg'
                                    src={card.image}
                                    alt={`${card.title} img`}></img>

                                <div className='flex flex-col gap-2 items-center justify-around px-2'>
                                    <h3 className='font-bold'>{card.title}</h3>
                                    <p className='text-sm italic mb-4'>{card.description}</p>
                                    <button
                                        onClick={() => routerhander(card.route)}
                                        className='mt-3 border-transparent bg-[#3D5A80]  rounded-full py-1 px-3 hover:font-bold'> Show Track</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <MobileNav />
        </section>
    )
}
