import React from 'react';
import '../../styles/ProfileHeader.css';

function ProfileHeader() {
    return (
        <div className="card">
            <div className="header">
                <div className="backArrow">&#8592;</div>
                <div className="profileInfo">
                    <div className="photoPlaceholder">
                        <img src="camera_icon.png" alt="Camera" className="icon"/>
                    </div>
                    <div className="nameSection">
                        <h2 className="name">Nikita I</h2>
                        <p className="username">@Nikita_iii</p>
                    </div>
                    <div className="ratingSection">
                        <span className="star">&#9733;</span>
                        <span className="rating">4.8</span>
                    </div>
                </div>
                <div className="editIcon">&#9998;</div>
            </div>
            <div className="buttons">
                <button className="button">Контактные данные</button>
                <button className="button">Стать партнером</button>
            </div>
        </div>
    );
}

export default ProfileHeader;
