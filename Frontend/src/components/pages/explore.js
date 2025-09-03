import MobileNav from "../navigation/mobilenav"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { useNavigate } from "react-router-dom";
import React from "react";
import { buttonStyles, layoutStyles, textStyles, iconStyles } from '../../utils/styles';

export default function Explore() {
    const back = useNavigate();
    const backbutton = () => {
        back('/traintoexcellency/Frontend-build/');
    }
    return (
        <section className={layoutStyles.container}>
            <div className='flex justify-center p-4'>
                <button
                    onClick={() => backbutton()}
                    className={buttonStyles.back}
                >
                    <span className={iconStyles.nav}>
                        arrow_back_ios
                    </span>
                    <span>Back</span>
                </button>

                <Header />
            </div>
            <div className="flex flex-col items-center justify-center text-white">
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