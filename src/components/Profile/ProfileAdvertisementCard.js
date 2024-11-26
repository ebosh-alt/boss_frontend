import React from 'react';
import '../../styles/ProfileAdvertisement.css';
import {BsEye} from "react-icons/bs";
import {TbEdit} from "react-icons/tb";
import {LiaRubleSignSolid} from "react-icons/lia";

const ProfileAdvertisementCard = ({isActive, title, views, price, isAdvanced}) => {
    return (
        <div className={`adCard ${isActive ? 'active' : 'inactive'} ${isAdvanced ? 'advanced' : 'notAdvanced'}`}>
            <div className="statusSection">
                <span>{isActive}</span>
                {isActive ? (
                    <span>Активно</span>
                ) : (
                    <span>Завершено</span>
                )}
                <a>
                    <TbEdit className="editIconAd"/>
                </a>
            </div>
            <div className="image-placeholder">
                <img src="ad.png" alt="Camera"/>
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="views">
                <p><BsEye/> {views}</p>
            </div>
            <div className="price">
                <p>{price}</p>
            </div>
            <div className={"ruble"}>
                <LiaRubleSignSolid/>
            </div>
            <button className={`promoteButton ${isAdvanced ? 'advanced' : 'notAdvanced'}`} disabled={!isActive}>
                {isAdvanced ? (
                    <span>Продвинуто</span>
                ) : (
                    <span>Продвинуть</span>
                )}
            </button>
        </div>
    );
};

export default ProfileAdvertisementCard;