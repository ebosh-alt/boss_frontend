import React from 'react';
import '../styles/AdvertisementSellerInfo.css';

const AdvertisementSellerInfo = ({ seller }) => {
  const {
    ID,
    PathAva,
    Username,
    Firstname,
    Lastname,
    Rating,
    Role: { Name: roleName }
  } = seller;

  // Определяем имя пользователя
  const displayName = Username || `${Firstname} ${Lastname}`;

  return (
    <div className='seller-info'>
        <div className="seller-info-card">
            <div className="seller-info-header">
                {/* Аватар */}
                <img src="logo192.png"/*{PathAva}*/ alt={displayName} className="seller-avatar" />

                {/* Имя пользователя и роль */}
                <div className="seller-details">
                    <div className="seller-name">{displayName}</div>
                    <div className="seller-role">{roleName}</div>
                </div>

                {/* Рейтинг */}
                <div className="seller-rating">
                    <span className="star">★</span> <span className="rating-num">{Rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
        <div className="seller-info-contact-block">
            {/* Кнопка для связи с продавцом */}
            <button className="seller-info-contact-button">Связаться с продавцом</button>
        </div>
    </div>
  );
};

export default AdvertisementSellerInfo;
