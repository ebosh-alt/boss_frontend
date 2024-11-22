import UserContext from "../../utils/contexts";
import {useContext} from "react";
import Review from "./AdvertisementReview.js";
import "../../styles/AdvertisementSellerInfo.css";
import "../../styles/AdvertisementReview.css";

function AdvertisementReviews({reviews}) {
    const {userId, setUserId} = useContext(UserContext);
    return (
        <div className="seller-info">
            <div className="review-card-block-name">
                Отзывы
            </div>
            <div className="AdvertisementReviewsList">
                {reviews.map((review) => (
                    <Review key={review.ID} review={review}/>
                ))}
            </div>
        </div>
    );
}

export default AdvertisementReviews;
