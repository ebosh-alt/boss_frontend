import React, {Fragment} from 'react';
import '../../styles/ProfileHeader.css';
import {FaRegEdit} from "react-icons/fa";
import {IoChevronBackOutline, IoStarSharp} from "react-icons/io5";

function ProfileHeader({user}) {
    return (
        <Fragment>
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
                    </div>
                    <div className="usernameSection">
                        <p className="username">{user.Username}</p>
                    </div>
                    <div className="ratingSection">
                        <span className="star"><IoStarSharp/></span>z
                        <span className="rating">{user.Rating}</span>
                    </div>
                    <div className="editIcon">
                        <FaRegEdit/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <a href="/Profile" className="button">Контактные данные</a>
                {user.Role.ID === 0 && <a href="/Profile" className="button">Стать продавцом</a>}
                {user.Role.ID === 1 && <a href="/Profile" className="button">Стать партнером</a>}
            </div>
        </Fragment>);
}

export default ProfileHeader;
