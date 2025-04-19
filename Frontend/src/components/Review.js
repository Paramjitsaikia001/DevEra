import React, { useState } from "react";
import RandomUser from "../images/appLogo.png"
export default function Reviews() {
   const[review,setReview]=useState("");
   const handleinput =(e)=>{
      setReview(e.target.value)
console.log(e.target.value);
   }
   return (
      <section className="reviews  w-[100%]">
         <div className="review-header border-b-2 border-gray-700 mb-4">
            <h2 className=' text-2xl font-bold text-[#FFFF]'>Reviews</h2>
         </div>
         <div className="review-container  w-[100%] flex flex-col justify-start gap-2">
            <div className="reviews-view-section flex gap-2 overflow-auto">
               <div className="reviews flex flex-col p-3 border-none rounded-md bg-[#31ffff] gap-2 ">
                  <div className="reviewer-msg flex justify-center items-center gap-2">
                     <div className="reviewer rounded-full">
                        <img className="w-8 h-8" src={RandomUser} alt="reviewer" />
                     </div>
                     <div className="review-msg flex gap-1">
                        <h2>"</h2>
                        <p>this is very good Lorem ipsum dolor sit amet.{review}
                        </p>
                        <h2>"</h2>
                     </div>
                  </div>
                  <div className="review-time flex justify-end text-[0.8rem]">
                     <p>1hours ago</p>
                  </div>
               </div>
            </div>
            <div className="User-review w-auto">
               < form className='flex justify-start items-center ' >
                  <input className='outline-none w-[50%]' 
                  type="text"
                   name="review"
                    id="User-review"
                    value={review}
                    onChange={handleinput}
                    placeholder="write your opinion" />
                  <button type="submit">
                     <span class="material-symbols-outlined">
                        send
                     </span>
                  </button>
               </form>
            </div>
         </div>
      </section>
   )
}