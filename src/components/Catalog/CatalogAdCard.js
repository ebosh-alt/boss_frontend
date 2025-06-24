import React from 'react';
import {BsEye} from "react-icons/bs";
import {TbEdit} from "react-icons/tb";
import {LiaRubleSignSolid} from "react-icons/lia";
import "../../styles/Catalog/Feed.css"

const CatalogAdCard = ({adID, PhotoPath, Name, Price, Location, TypePromotionID, handleClickOnCatalogAd}) => {

    console.log(adID)
    return (
        <div className={TypePromotionID === 2 ? "ad-card promo" : "ad-card" } onClick={()=>handleClickOnCatalogAd(adID)}>
            <div className="ad-card-location">
            </div>
            <div className="ad-card-image-placeholder">
                <img className='ad-card-image' src={PhotoPath} alt="Camera"/>
            </div>
            <div className="ad-card-title">
                <p>
                {Name}
                </p>
            </div>
            <div className="ad-card-price">
                {Price}₽
            </div>
        </div>
    );
};

export default CatalogAdCard;