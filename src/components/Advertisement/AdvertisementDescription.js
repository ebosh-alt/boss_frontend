import UserContext from "../../utils/contexts";
import {useContext} from "react";
import AdvertisementPhotos from "./AdvertisementPhoto";
import AdvertisementAbout from "./AdvertisementAbout";

function AdvertisementDescription(ad) {
    const {userId, setUserId} = useContext(UserContext);
    return (
        <div className="advertisementDescription">
        </div>
    );
}

export default AdvertisementDescription;
