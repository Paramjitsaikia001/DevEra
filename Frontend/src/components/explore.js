import MobileNav from "./mobilenav"
import Header from "./Header"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";
import React from "react";
export default function Explore() {
    const back = useNavigate();
    const backbutton = () => {
        back('/traintoexcellency/Frontend-build/');
    }
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
            <div className="flex flex-col items-center justify-center text-white
            ">
                <span className="font-bold text-[5rem]">SOMETHING</span>
                <span className="font-bold text-[5rem]">BIG</span>
                <span className="font-bold text-[5rem]">COMING</span>
                <span className="font-bold text-[5rem]">SOON</span>
            </div>
            <Footer />
            <MobileNav />
        </section>
    )
}