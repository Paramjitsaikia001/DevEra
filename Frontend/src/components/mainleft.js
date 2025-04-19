import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import AIChatIcon from '../assats/askme.svg';

export default function Mainleft() {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/traintoexcellency/Frontend-build/Register';

    if (isRegisterPage) {
        return null;
    }

    return (
        <section className="hidden md:flex md:flex-col md:h-[100vh] md:sticky md:top-0 md:items-center justify-between md:w-[20%] md:p-0 md:m-0 md:bg-gray-800 md:border-r-2 md:border-gray-600">
            <section className="flex flex-col items-center gap-10 h-[65vh] w-[100%] pt-8">
                <Logo />
                <nav className='hidden md:block'>
                    <ul className="flex flex-col justify-start w-[12rem] text-xl pb-2 gap-1">
                        <Link to="/traintoexcellency/Frontend-build/">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 md:py-2 px-3 hover:bg-[#314969] rounded-full hover:font-bold`}>
                                <span className="material-symbols-outlined">home</span>
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/development">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/development' ? 'font-bold' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row md:py-2 px-3 flex-col hover:bg-[#314969] rounded-full text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className={`${location.pathname === '/traintoexcellency/Frontend-build/development' ? 'text-[#4bbcc0]' : ''} material-symbols-outlined`}>developer_board</span>
                                <div className={`${location.pathname === '/traintoexcellency/Frontend-build/development' ? 'text-[#0ff]' : ''}`}>
                                    Development
                                </div>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/language">
                            <li className={`text-white ${location.pathname === '/language' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex md:py-2 px-3 hover:bg-[#314969] rounded-full items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">code_blocks</span>
                                <span>Language</span>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/ai-chat">
                            <li className={`text-white ${location.pathname === '/language' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex md:py-2 px-3 hover:bg-[#314969] rounded-full items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <img src={AIChatIcon} alt="AiChatIcon" />
                                <h2>AI Chat</h2>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/explore">
                            <li className={`text-white ${location.pathname === '/explore' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 md:py-2 px-3 hover:bg-[#314969] rounded-full flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">explore</span>
                                <span>Explore</span>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/About-us">
                            <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 md:py-2 px-3 hover:bg-[#314969] rounded-full flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">info</span>
                                <span>About us</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </section>

            <section className="hidden md:your-activity md:h-auto md:flex md:flex-col md:border-t-2 md:border-gray-500 md:w-[100%] md:p-2 md:items-center md:justify-between">
                <div className="chatButtonHeader w-[100%] px-1 flex justify-center items-center gap-1">
                    <Link to="/traintoexcellency/Frontend-build/ai-chat" className="border-0 rounded-full h-11 w-[90%] gradientColor p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <div className='flex justify-center items-center gap-1'>
                            <img src={AIChatIcon} alt="AiChatIcon" />
                            <h2 className='text-base font-extrabold'>Ask Me</h2>
                        </div>
                    </Link>
                    <div className="newchat p-2 rounded-full cursor-pointer gradientColor flex juscify-center items-center text-white hover:text-[#000] text-xl">
                        <span className="material-symbols-outlined">add</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-4 justify-center"></ul>
                </div>
            </section>
        </section>
    );
}