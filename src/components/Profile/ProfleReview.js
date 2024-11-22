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
            Firstname,
            // Role: {ID: roleID}
        }
    } = review;

    const displayName = Firstname || Username;
    // const checkmarkColor = roleID === 1 ? '' : roleID === 2 ? 'yellow' : 'green';

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
