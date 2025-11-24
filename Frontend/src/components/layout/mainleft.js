import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import UserContext from '../../Context/user.context';
import { Home,Search ,Bell,FolderCode,CircleUserRound,ChartArea,Bookmark,Info,Cog} from 'lucide-react';
import { useContext } from 'react';

export default function Mainleft({ toggleHideLeft, Hide_Left }) {
    const { logOut } = useContext(UserContext)
    const location = useLocation();
    const isRegisterPage = location.pathname === '/traintoexcellency/Frontend-build/Register';
    const isLoginPage = location.pathname === '/traintoexcellency/Frontend-build/login';
    const isAdditionalDetailsPage = location.pathname === '/traintoexcellency/Frontend-build/Register/additional-details';
    const isPersonalDetailsPage = location.pathname === '/traintoexcellency/Frontend-build/Register/personal-details'

    if (isRegisterPage || isAdditionalDetailsPage || isLoginPage || isPersonalDetailsPage) {
        return null;
    }

    const logoutHandler = async () => {
        try {
            await logOut()
            window.location.href="/traintoexcellency/Frontend-build"
        } catch (error) {
            console.log(error);

        }
    }

    return (

        <section className={`
            md:h-[100vh] md:sticky md:top-0 md:items-center justify-between md:p-0 md:m-0 md:bg-primary-dark
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
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/home' ? 'xl:bg-[#314969] ' : ''} xl:list-none xl:gap-3 flex xl:items-center xl:flex-row items-start flex-col text-gray-300 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl `}>
                                <span className=" text-4xl font-[200]">
                                     <Home className={`${location.pathname === '/traintoexcellency/Frontend-build/home' ? ' xl:fill-transparent fill-white' : ''}`}/>
                                </span>
                                <span className='xl:block hidden'>Home</span>
                            </li>
                        </Link>

                        {/* search  */}
                        <Link to="/traintoexcellency/Frontend-build/explore">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/explore' ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex xl:items-center items-start xl:flex-row flex-col  md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl `}>
                                <span className={` text-4xl`}>
                                <Search className={`${location.pathname === '/traintoexcellency/Frontend-build/explore' ? 'xl:stroke-1 stroke-[3px]' : ''}`}/>
                                </span>
                                <span className='xl:block hidden'>Search</span>
                            </li>
                        </Link>

                        {/* notificatons  */}
                        <Link to="/traintoexcellency/Frontend-build/notification">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/notification' ? 'xl:bg-[#314969] bg-none' : ''}    xl:list-none xl:gap-3 flex xl:items-center items-start xl:flex-row flex-col  md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl `}>
                                <span className=" material-symbols-outlined text-4xl font-[100] ">
                                    <Bell className={`${location.pathname === '/traintoexcellency/Frontend-build/notification' ? ' xl:fill-transparent fill-white' : ''}`}/>
                                </span>
                                <span className='xl:block hidden'>Notifications</span>
                            </li>
                        </Link>

                        <Link to="/traintoexcellency/Frontend-build/development">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/development' ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex xl:items-center items-start xl:flex-row md:py-2 px-3 flex-col xl:hover:bg-[#314969]  rounded-xl text-gray-300 hover:text-gray-100 `}>
                                <span className={` material-symbols-outlined text-4xl`}>
                                    <FolderCode className={`${location.pathname === '/traintoexcellency/Frontend-build/development' ? ' xl:fill-transparent fill-white' : ''}`}/>
                                </span>
                                <div className={`xl:block hidden `}>
                                    Development
                                </div>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/profile">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/profile' ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                <span className="material-symbols-outlined text-4xl">
                                    <CircleUserRound className={`${location.pathname === '/traintoexcellency/Frontend-build/profile' ? 'xl:stroke-1 stroke-[3px]'  : ''}`}/>
                                </span>
                                <span className='xl:block hidden'>Profile</span>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/ai-chat">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/ai-chat' ? 'xl:bg-[#314969] bg-none' : ''}  xl:list-none xl:gap-3 flex md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                < span className="material-symbols-outlined text-4xl">
                                    <ChartArea className={`${location.pathname === '/traintoexcellency/Frontend-build/ai-chat' ? 'xl:stroke-1 stroke-[3px]'  : ''}`}/>
                                </span>
                                <span className='xl:block hidden'>Your Activity</span>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/saved">
                            <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/saved' ? 'text-[#00ffea]' : ''} xl:list-none xl:gap-3 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl flex xl:items-center items-start xl:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                <span className="material-symbols-outlined text-4xl">
                                    <Bookmark className={`${location.pathname === '/traintoexcellency/Frontend-build/saved' ? ' xl:fill-transparent fill-white' : ''}`}/>
                                </span>
                                <span className='xl:block hidden'>Saved</span>
                            </li>
                        </Link>

                    </ul>

                    <ul className='flex flex-col'>
                        <Link to="/traintoexcellency/Frontend-build/About-us">
                            <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} xl:list-none xl:gap-3 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl flex items-center xl:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                <span className="material-symbols-outlined text-4xl">
                                    <Info/>
                                </span>
                                <span className='xl:block hidden'>About us</span>
                            </li>
                        </Link>
                        <Link to="/traintoexcellency/Frontend-build/About-us">
                            <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} xl:list-none xl:gap-3 md:py-2 px-3 xl:hover:bg-[#314969]  rounded-xl flex items-center xl:flex-row flex-col text-gray-300 hover:text-gray-100 `}>
                                <span class="material-symbols-outlined text-4xl">
                                    <Cog/>
                                </span>
                                <span className='xl:block hidden'>Settings</span>
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

                    <button 
                    onClick={logoutHandler}
                    className=" rounded-xl h-11 w-[90%] text-white border-2 border-white/40 p-0 m-0 flex justify-center items-center gap-1 cursor-pointer">
                        <div className='flex justify-center items-center gap-1'>
                            <h2 className='text-base font-extrabold'>Log out</h2>
                        </div>
                    </button>
                </div>
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-4 justify-center"></ul>
                </div>
            </section>
        </section>


    );
}