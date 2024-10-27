import React from 'react';
import '../../styles/ProfileHeader.css';
import {FaRegEdit} from "react-icons/fa";
import {IoChevronBackOutline} from "react-icons/io5";

function ProfileHeader({user}) {
    return (
        <div>
            <div className="ProfileHeader">
                <div className="backArrow">
                    <IoChevronBackOutline className="iconBackArrow"/>
                </div>
                <div className="profileInfo">
                    <div className="photoPlaceholder">
                        <img src={user.PathAva} alt="Camera" className="icon"/>
                    </div>
                    <div className="nameSection">
                        <h2 className="name">{user.Firstname + " " + user.Lastname}</h2>
                        <p className="username">{user.Username}</p>
                    </div>
                    <div className="ratingSection">
                        <span className="star">&#9733;</span>
                        <span className="rating">{user.Rating}</span>
                    </div>
                    <div className="editIcon">
                        <FaRegEdit/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <a href="/Profile" className="button">Контактные данные</a>
                <a href="/Profile" className="button">Стать партнером</a>
            </div>
        </div>);
}

export default ProfileHeader;
