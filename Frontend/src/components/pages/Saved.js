import MobileNav from "../navigation/mobilenav"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import React from "react";
import { layoutStyles } from '../../utils/styles';
import SavedRoadmaps from "../../utils/savedRoadmap";

export default function Saved() {
  
 
    return (
        <section className={layoutStyles.container}>
            <div className='flex justify-center p-4'>
              

                <Header />
            </div>
            <div className="flex flex-col items-center justify-center ">
               <SavedRoadmaps />
            </div>
            <Footer />
            <MobileNav />
        </section>
    )
}