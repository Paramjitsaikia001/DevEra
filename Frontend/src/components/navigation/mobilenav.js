import { Link, useLocation } from "react-router-dom"
import { Home, Search, FolderCode, CircleUserRound } from 'lucide-react';
import { useContext } from "react";
import UserContext from "../../Context/user.context.js";
import { LogOut } from "lucide-react";

const macDockEffect = `
  .dock-item:hover {
    transform: scale(1.5);
  }
  .dock-item {
    transition: transform 0.25s ease-out;
  }
  .dock-item:hover + .dock-item,
  .dock-item:has(+ .dock-item:hover),
  .dock-item:hover ~ .dock-item {
    transform: scale(1.3);
  }
`;

export default function MobileNav() {
    const location = useLocation();
    const { logOut } = useContext(UserContext)


    const logoutHandler = async () => {
        try {
            await logOut()
            window.location.href = "/traintoexcellency/Frontend-build"
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <section className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-3xl bg-white/40 backdrop-blur-2xl shadow-2xl w-fit px-2 border-[1px] hover:px-2 transition-transform duration-300 border-white z-50  py-2 md:hidden flex justify-around gap-8 items-center">
            <style>{macDockEffect}</style>
            <ul className="flex w-full h-full  gap-2 justify-center items-center">
                <Link to="/traintoexcellency/Frontend-build/">
                    <li className={`text-white ${location.pathname === '/' ? 'xl:bg-[#314969] ' : ''} flex items-center justify-center hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <Home className={`${location.pathname === '/' ? '  ' : ''}  w-[8vw] h-[8vw] stroke-[1.5px] `} />
                        </span>
                    </li>
                </Link>

                {/* search  */}
                <Link to="/traintoexcellency/Frontend-build/explore">
                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/explore' ? 'xl:bg-[#314969] bg-none' : ''}  flex items-center justify-center hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <Search className={`${location.pathname === '/traintoexcellency/Frontend-build/explore' ? ' stroke-[2px]' : ''} w-[8vw] h-[8vw] stroke-[1.5px]`} />
                        </span>
                    </li>
                </Link>

                <Link to="/traintoexcellency/Frontend-build/development">
                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/development' ? 'xl:bg-[#314969] bg-none' : ''} flex items-center justify-center hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <FolderCode className={`${location.pathname === '/traintoexcellency/Frontend-build/development' ? ' xl:fill-transparent fill-white' : ''} w-[8vw] h-[8vw] stroke-[1.5px] `} />
                        </span>
                    </li>
                </Link>
                <Link to="/traintoexcellency/Frontend-build/profile">
                    <li className={`text-white ${location.pathname === '/traintoexcellency/Frontend-build/profile' ? 'xl:bg-[#314969] bg-none' : ''} flex items-center justify-center hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <CircleUserRound className={`${location.pathname === '/traintoexcellency/Frontend-build/profile' ? ' stroke-[2px]' : ''} w-[8vw] h-[8vw] stroke-[1.5px]`} />
                        </span>

                    </li>
                </Link>
                <div className="line w-1 h-9 rounded-full bg-white/50"></div>
                <button
                    onClick={logoutHandler}
                    className="dock-item bg-primary-dark rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                    <LogOut className="w-[8vw] h-[8vw] stroke-[1.5px]" />
                </button>
            </ul>
        </section>
    )
}