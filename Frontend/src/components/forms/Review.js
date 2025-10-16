import React, { useState } from "react";
import RandomUser from "../../assets/images/appLogo.png";
import { textStyles, cardStyles, inputStyles, iconStyles } from '../../utils/styles';

export default function Reviews() {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleInput = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === "") return;
    const newReview = {
      id: Date.now(),
      text: review,
      time: "Just now",
    };
    setReviews([newReview, ...reviews]);
    setReview("");
  };

  return (
    <section className="reviews w-full p-4">
      <div className="review-header border-b-2 border-gray-400 mb-4">
        <h2 className={textStyles?.title || "text-xl font-semibold"}>Reviews</h2>
      </div>

      <div className="review-container flex flex-col gap-4">
        <div className="reviews-view-section flex flex-wrap gap-3 max-h-60 overflow-auto">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div key={r.id} className={cardStyles?.review || "p-3 border rounded-md bg-gray-100"}>
                <div className="reviewer-msg flex items-center gap-2">
                  <div className="reviewer rounded-full">
                    <img className="w-8 h-8" src={RandomUser} alt="reviewer" />
                  </div>
                  <div className="review-msg flex gap-1 items-center">
                    <h2>"</h2>
                    <p>{r.text}</p>
                    <h2>"</h2>
                  </div>
                </div>
                <div className="review-time flex justify-end text-xs text-gray-600">
                  <p>{r.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No reviews yet. Be the first to write one!</p>
          )}
        </div>

        <div className="User-review">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              className={inputStyles?.review || "border p-2 rounded w-full"}
              type="text"
              name="review"
              id="User-review"
              value={review}
              onChange={handleInput}
              placeholder="Write your opinion..."
            />
            <button type="submit" className="p-2 border rounded hover:bg-gray-200">
              <span className={iconStyles?.material || "material-icons"}>send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}