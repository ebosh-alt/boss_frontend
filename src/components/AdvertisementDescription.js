import UserContext from "../utils/contexts";
import {useContext} from "react";
import AdvertisementPhotos from "./AdvertisementPhotos";
import AdvertisementAbout from "./AdvertisementAbout";
import "../styles/AdvertisementDescription.css";

function AdvertisementDescription({description}) {
    const {userId, setUserId} = useContext(UserContext);
    return (
        <>
        <hr className="horizont-line"/>
        <div className="advertisement-description">
            <div className="description-card-block-name">
                Описание
            </div>
            <span>{description}</span>
        </div>
        </>
    );
}

export default AdvertisementDescription;
