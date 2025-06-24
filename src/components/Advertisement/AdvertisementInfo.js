import AdvertisementPhotos from "./AdvertisementPhotos";
import AdvertisementAbout from "./AdvertisementAbout";
import AdvertisementDescription from "./AdvertisementDescription";

function AdvertisementInfo({ad}) {
    return (
        <div className="advertisementInfo">
            <AdvertisementPhotos photos = {ad.Photos}/>
            <AdvertisementAbout ad = {ad}/>
            <AdvertisementDescription description = {ad.Description}/>
        </div>
    );
}

export default AdvertisementInfo;
