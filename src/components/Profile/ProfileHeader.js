import React, {Fragment} from 'react';
import '../../styles/Profile/ProfileHeader.css';
import {FaRegEdit} from "react-icons/fa";
import {IoChevronBackOutline, IoStarSharp} from "react-icons/io5";
import {ReactComponent as VerifiedIcon} from '../../assets/verified.svg';
import { useNavigate } from 'react-router-dom';

function ProfileHeader({user}) {
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className="ProfileHeader">
                <div className="backArrow" onClick={() => navigate("/Catalog")}>
                    <IoChevronBackOutline className="iconBackArrow"/>
                </div>
                <div className="profileInfo">
                    {/* <div className="photoPlaceholder">
                        <img src={user.PathAva} alt="Camera" className="icon"/>
                    </div> */}
                    <div className="nameSection">
                        <h2 className="name">{user.firstName + " " + user.lastName + " "}
                            {user.status === 'Продавец' && <VerifiedIcon className="verifiedIcon"/>}
                        </h2>
                    </div>
                    {/* <div className="usernameSection">
                        <p className="username">{user.Username}</p>
                    </div> */}
                    <div className="ratingSection">
                        <span className="star"><IoStarSharp/></span>
                        <span className="rating">{user.Rating}</span>
                    </div>
                    <div className="editIcon">
                        <FaRegEdit/>
                    </div>
                    {/* <div className="verifiedIcon">
                        <VerifiedIcon/>
                    </div> */}
                </div>
            </div>
            <div className="buttons">
                {/* <a href="/Profile" className="button">Контактные данные</a>
                {user.Role.ID === 0 && <a href="/Profile" className="button">Стать продавцом</a>}
                {user.Role.ID === 1 && <a href="/Profile" className="button">Стать партнером</a>} */}
            </div>
        </Fragment>);
}

export default ProfileHeader;
