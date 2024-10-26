import UserContext from "../utils/contexts";
import {useContext, useEffect, useState} from "react";
import GetAdvertisementAllInfoJSON from "../services/GetAdvertisement";
import AdvertisementInfo from "../components/AdvertisementInfo";
import AdvertisementSellerInfo from "../components/AdvertisementSellerInfo";
import AdvertisementReviews from "../components/AdvertisementReviews";


function Advertisement(adID) {
    const {userId, setUserId} = useContext(UserContext); // для всех (область виждимости)
    const [advertisementData, setAdvertisement] = useState(null) // Только для компонента (область виждимости)
    useEffect(() => {
        const initAdvertisement = async () => {
            const advertisementJSON = await GetAdvertisementAllInfoJSON(adID);
            if (advertisementJSON) {
                return advertisementJSON
            }
        }
        initAdvertisement().then((data) => {
            setAdvertisement(data);
        });
    }, [])
    console.log(adID)
    // console.log(advertisement)
    // console.log(adID)
    if (!advertisementData) {
        return <div>Loading...</div>;
      }
    return (
        <div className="advertisementAllInfo">
            {/* {<AdvertisementInfo ad = {advertisementData}/> */}
            <AdvertisementSellerInfo seller = {advertisementData.User}/>
            <AdvertisementReviews reviews={advertisementData.Reviews}/>
        </div>
    );
}

export default Advertisement;
