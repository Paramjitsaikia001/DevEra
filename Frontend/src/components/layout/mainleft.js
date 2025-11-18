import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

export default function Mainleft({ toggleHideLeft, Hide_Left }) {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/traintoexcellency/Frontend-build/Register';
    const isLoginPage = location.pathname === '/traintoexcellency/Frontend-build/login';
    const isAdditionalDetailsPage = location.pathname === '/traintoexcellency/Frontend-build/Register/additional-details';
    const isPersonalDetailsPage = location.pathname === '/traintoexcellency/Frontend-build/Register/personal-details'

    if (isRegisterPage || isAdditionalDetailsPage || isLoginPage || isPersonalDetailsPage) {
        return null;
    }

    return (

                <section className={`
            md:h-[100vh] md:sticky md:top-0 md:items-center justify-between md:p-0 md:m-0 md:bg-[#0A1123]
            ${Hide_Left ? 'w-0 overflow-x-hidden text-sm' : 'md:w-[20%] md:flex md:flex-col'}
            transition-all duration-300 ease-in-out
          `}>
                    <section className="flex flex-col justify-start gap-6 items-center h-[65vh] w-[80%] pt-3">
                        <div className='px-3 hidden md:block w-[100%] cursor-pointer'>
                            <Logo />
                        </div>

                        {/* navber */}
                        <nav className='hidden  w-[100%] md:flex flex-col justify-between h-full'>
                            <ul className={`flex flex-col justify-start w-[100%] pb-2 gap-1 ${Hide_Left ? 'hidden' : 'text-2xl'}`}>

                                {/* home  */}
                                <Link to="/traintoexcellency/Frontend-build/home">
                                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/home' ? 'bg-[#314969]' : ''} lg:list-none lg:gap-3 flex items-center lg:flex-row flex-col text-gray-300 md:py-2 px-3 hover:bg-[#314969] rounded-xl `}>
                                        <span className="material-symbols-outlined  text-4xl font-[200]">home</span>
                                        <span className='lg:block md:hidden'>Home</span>
                                    </li>
                                </Link>

                                {/* search  */}
                                <Link to="/traintoexcellency/Frontend-build/explore">
                                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/explore' ? 'bg-[#314969]' : ''}  lg:list-none lg:gap-3 flex items-center lg:flex-row flex-col  md:py-2 px-3 hover:bg-[#314969] rounded-xl `}>
                                        <span className={`${location.pathname === '/traintoexcellency/Frontend-build/' ? 'text-[#00ffea]' : ''}    material-symbols-outlined text-4xl`}>search</span>
                                        <span className='lg:block md:hidden'>Search</span>
                                    </li>
                                </Link>

                                {/* notificatons  */}
                                <Link to="/traintoexcellency/Frontend-build/notification">
                                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/notification' ? 'bg-[#314969]' : ''}    lg:list-none lg:gap-3 flex items-center lg:flex-row flex-col  md:py-2 px-3 hover:bg-[#314969] rounded-xl `}>
                                        <span className=" material-symbols-outlined text-4xl font-[100] ">notifications</span>
                                        <span className='lg:block md:hidden'>Notifications</span>
                                    </li>
                                </Link>
                                <Link to="/traintoexcellency/Frontend-build/development">
                                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/development' ? 'bg-[#314969]' : ''}  lg:list-none lg:gap-3 flex items-center lg:flex-row md:py-2 px-3 flex-col hover:bg-[#314969] rounded-xl text-gray-300 hover:text-gray-100 `}>
                                        <span className={` material-symbols-outlined text-4xl`}>developer_board</span>
                                        <div className={`lg:block md:hidden `}>
                                            Development
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/traintoexcellency/Frontend-build/profile">
                                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/profile' ? 'bg-[#314969]' : ''}  lg:list-none lg:gap-3 flex md:py-2 px-3 hover:bg-[#314969] rounded-xl items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                        <span className="material-symbols-outlined text-4xl">person</span>
                                        <span className='lg:block md:hidden'>Profile</span>
                                    </li>
                                </Link>
                                <Link to="/traintoexcellency/Frontend-build/ai-chat">
                                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/ai-chat' ? 'bg-[#314969]' : ''}  lg:list-none lg:gap-3 flex md:py-2 px-3 hover:bg-[#314969] rounded-xl items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                        < span className="material-symbols-outlined text-4xl">
                                            trending_up</span>
                                        <span className='lg:block md:hidden'>Your Activity</span>
                                    </li>
                                </Link>
                                <Link to="/traintoexcellency/Frontend-build/explore">
                                    <li className={`text-white ${location.pathname === '/explore' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-3 md:py-2 px-3 hover:bg-[#314969] rounded-xl flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                        <span className="material-symbols-outlined text-4xl">bookmark</span>
                                        <span className='lg:block md:hidden'>Saved</span>
                                    </li>
                                </Link>

                            </ul>

                            <ul className='flex flex-col italic'>
                                <Link to="/traintoexcellency/Frontend-build/About-us">
                                    <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-3 md:py-2 px-3 hover:bg-[#314969] rounded-xl flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                        <span className="material-symbols-outlined text-4xl">info</span>
                                        <span className='lg:block md:hidden'>About us</span>
                                    </li>
                                </Link>
                                <Link to="/traintoexcellency/Frontend-build/About-us">
                                    <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-3 md:py-2 px-3 hover:bg-[#314969] rounded-xl flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                        <span class="material-symbols-outlined text-4xl">
                                            settings
                                        </span>
                                        <span className='lg:block md:hidden'>Settings</span>
                                    </li>
                                </Link>

                            </ul>
                        </nav>
                    </section>

                    <section className={`hidden md:your-activity md:h-auto  md:flex-col md:border-t-2 md:border-gray-500 md:w-[100%] md:p-2 md:items-center md:justify-between ${Hide_Left ? 'hidden' : 'md:flex'}`}>
                        <div className="chatButtonHeader w-[100%] px-1 flex flex-col justify-center items-center gap-1">
                            {/* <Link to="/traintoexcellency/Frontend-build/ai-chat" className="border-0 rounded-xl h-11 w-[90%] gradientColor p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <div className='flex justify-center items-center gap-1'>
                            <img src={AIChatIcon} alt="AiChatIcon" />
                            <h2 className='text-base font-extrabold'>Find a Mentor</h2>
                        </div>
                    </Link>
                       <Link to="/traintoexcellency/Frontend-build/ai-chat" className="border-0 rounded-xl h-11 w-[90%] gradientColor p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <div className='flex justify-center items-center gap-1'>
                            <img src={AIChatIcon} alt="AiChatIcon" />
                            <h2 className='text-base font-extrabold'>be a Mentor</h2>
                        </div>
                    </Link> */}

                            <Link to="/traintoexcellency/Frontend-build/log-out" className=" rounded-xl h-11 w-[90%] text-white border-2 border-white/40 p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                                <div className='flex justify-center items-center gap-1'>
                                    <h2 className='text-base font-extrabold'>Log out</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <ul className="flex flex-col gap-4 justify-center"></ul>
                        </div>
                    </section>
                </section>

            
    );
}