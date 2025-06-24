import Review from "./AdvertisementReview.js"
import '../../styles/Advertisement/AdvertisementReview.css';


function AdvertisementReviews({reviews}) {
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
