import "../../styles/Profile/ProfileReview.css";
import React from "react";
import ProfileReview from "./ProfleReview.js";

function ProfileReviews({reviews}) {
    return (
        <div className="reviews">
            <p className="reviewTitle">Отзывы</p>
            <div>
                {reviews.map((review) => (
                    <ProfileReview key={review.ID} review={review}/>
                ))}
            </div>
        </div>
    );
}

export default ProfileReviews;
