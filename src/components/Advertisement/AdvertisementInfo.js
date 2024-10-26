import UserContext from "../../utils/contexts";
import {useContext} from "react";
import AdvertisementPhotos from "./AdvertisementPhoto";
import AdvertisementAbout from "./AdvertisementAbout";
import AdvertisementDescription from "./AdvertisementDescription";

function AdvertisementInfo(ad) {
    const {userId, setUserId} = useContext(UserContext);
    return (
        <div className="advertisementInfo">
            <AdvertisementPhotos photos={ad.Photos}/>
            <AdvertisementAbout/>
            <AdvertisementDescription description={ad.Description}/>
        </div>
    );
}

export default AdvertisementInfo;
