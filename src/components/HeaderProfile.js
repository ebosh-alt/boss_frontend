import React from 'react';
import '../styles/HeaderProfile.css';
import '../assets/logo.svg';

const HeaderProfile = () => {
    return (
        <div className="profile-card">
            <button className="back-button">←</button>

            <div className="profile-info">
                <div className="profile-image">
                    <img src="logo.svg" alt="Profile" />
                </div>

                <div className="profile-details">
                    <h2 className="profile-name">Nikita I</h2>
                    <p className="profile-handle">@Nikita_iii</p>
                </div>

                <div className="profile-rating">
                    <span className="rating-star">★</span>
                    <span className="rating-score">4.8</span>
                </div>

                <button className="edit-button">✎</button>
            </div>

            <button className="contact-button">Контактные данные</button>
        </div>
    );
};

export default HeaderProfile;
