import React from 'react';

// const Review = ({ review }) => {
function Review({ review }) {
  const {
    ID,
    Text,
    Mark,
    Reviewer: {
      PathAva,
      ID: reviewerID,
      Username,
      Firstname,
      Role: { ID: roleID }
    }
  } = review;

  const displayName = Username || Firstname;
  const checkmarkColor = roleID === 1 ? '' : roleID === 2 ? 'yellow' : 'green';

  return (
    <div className="review-card">
      {/* Аватар */}
      <a href={`/profile/${reviewerID}`}>
        <img src="logo192.png"/*{PathAva}*/ alt={displayName} className="reviewer-avatar" />
      </a>

      {/* Имя пользователя */}
      <a href={`/profile/${reviewerID}`} className="reviewer-name">
        {displayName}
      </a>

      {/* Рейтинг */}
      <div className="review-rating">
        {'★'.repeat(Mark).padEnd(5, '☆')}
        {/* {'★'.repeat(Mark)} */}
      </div>

      {/* Текст отзыва */}
      <p className="review-text">{Text}</p>
    </div>
  );
};

export default Review;
