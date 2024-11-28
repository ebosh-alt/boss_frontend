import React from 'react';
import {BsEye} from "react-icons/bs";
import {TbEdit} from "react-icons/tb";
import {LiaRubleSignSolid} from "react-icons/lia";

const CatalogAdCard = ({adID, PhotoPath, Name, Price, Location, TypePromotionID, handleClickOnCatalogAd}) => {

    console.log(adID)
    return (
        <div className="adCard" onClick={()=>handleClickOnCatalogAd(adID)}>
            <div className="statusSection">
                {Location}
            </div>
            <div className="image-placeholder">
                <img src={PhotoPath} alt="Camera"/>
            </div>
            <div className="title">
                <p>{Name}</p>
            </div>
            <div className="price">
                <p>{Price}</p>
            </div>
            <div className={"ruble"}>
                <LiaRubleSignSolid/>
            </div>
        </div>
    );
};

export default CatalogAdCard;