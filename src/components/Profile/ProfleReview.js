import React from 'react';
import "../../styles/ProfileReview.css";

const ProfileReview = ({review}) => {
    const {
        Text,
        Mark,
        Reviewer: {
            PathAva,
            ID: reviewerID,
            Username,
            Firstname
        }
    } = review;

    const displayName = Firstname || Username;

    return (
        <div className="reviewCard">
            <a href={`/profile/${reviewerID}`}>
                <img src={PathAva} alt={displayName} className="reviewerAvatar"/>
            </a>

            <a href={`/profile/${reviewerID}`} className="reviewerName">
                {displayName}
            </a>

            <div className="reviewRating">
                {'★'.repeat(Mark).padEnd(5, '☆')}
            </div>

            <p className="reviewText">{Text}</p>
        </div>
    );
};

export default ProfileReview;
