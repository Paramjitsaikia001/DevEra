import { Link, useLocation } from "react-router-dom"

export default function MobileNav() {
    const location =useLocation();
    return (
        <section className="block md:hidden z-100 w-[100%] h-16 sticky bottom-0 m-0 bg-gray-800">
            <ul className="grid grid-cols-5  gap-2 justify-evenly items-center">
                <Link to="/traintoexcellency/Frontend-build/development" >
                    <li className={`text-white ${location.pathname === '/development' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold min-w-[18%] text-[10px]`}>
                        <span className="material-symbols-outlined">developer_board</span>
                        <div>Development</div>
                    </li>
                </Link>
                <Link to="/traintoexcellency/Frontend-build/language" >
                    <li className={`text-white ${location.pathname === '/language' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold  min-w-[18%] text-[10px]`}>
                        <span className="material-symbols-outlined">code_blocks</span>
                        <span>Language</span>
                    </li>
                </Link>
                <button className=" flex flex-col m-1 py-1 px-3 border-transparent  rounded-full items-center align-center hover:font-extrabold min-w-[18%] md:w-auto">
                    <span class="material-symbols-outlined">
                        settings_voice
                    </span>
                    <span className="text-xs flex flex-col">
                        <span>Ask Me</span>
                    </span>
                </button>
                <Link to="/traintoexcellency/Frontend-build/explore" >
                    <li className={`text-white ${location.pathname === '/explore' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold min-w-[18%] text-[10px]`}>
                        <span className="material-symbols-outlined">search</span>
                        <span>Explore</span>
                    </li>
                </Link>
                <Link to="/traintoexcellency/Frontend-build/About-us" >
                    <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold min-w-[18%] text-[10px]`}>
                        <span className="material-symbols-outlined">info</span>
                        <span>About us</span>
                    </li>
                </Link>
            </ul>
        </section>
    )
}