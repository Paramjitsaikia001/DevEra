import React, { useState } from "react";
import RandomUser from "../../assets/images/appLogo.png"
import { textStyles, cardStyles, inputStyles, iconStyles } from '../../utils/styles';

export default function Reviews() {
   const [review, setReview] = useState("");
   const handleinput = (e) => {
      setReview(e.target.value)
      console.log(e.target.value);
   }
   return (
      <section className="reviews  w-[100%]">
         <div className="review-header border-b-2 border-gray-400 mb-4 ">
            <h2 className={textStyles.title}>Reviews</h2>
         </div>
         <div className="review-container  w-[100%] flex flex-col justify-start gap-2">
               {/* review  */}

            <div className="reviews-view-section flex gap-2 overflow-auto">

{/* reviews  */}
               <div className={cardStyles.review}>
                  <div className="reviewer-msg flex justify-center items-center gap-2">
                     <div className="reviewer rounded-full">
                        <img className="w-8 h-8" src={RandomUser} alt="reviewer" />
                     </div>

                     <div className="review-msg flex gap-1">
                        <h2>"</h2>
                        <p>{review}
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
                  <input className={inputStyles.review}
                     type="text"
                     name="review"
                     id="User-review"
                     value={review}
                     onChange={handleinput}
                     placeholder="write your opinion" />
                  <button type="submit">
                     <span className={iconStyles.material}>
                        send
                     </span>
                  </button>
               </form>
            </div>
         </div>
      </section>
   )
}