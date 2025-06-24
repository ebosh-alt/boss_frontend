import {useContext, useEffect, useState, Fragment} from "react";
import GetAdvertisementAllInfoJSON from "../services/GetAdvertisement";
import AdvertisementInfo from "../components/Advertisement/AdvertisementInfo";
import AdvertisementSellerInfo from "../components/Advertisement/AdvertisementSellerInfo";
import AdvertisementReviews from "../components/Advertisement/AdvertisementReviews";


function Advertisement(adID) {
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

    if (!advertisementData) {
        return <div>Loading...</div>;
    }

    return (
        // <div className="advertisementAllInfo">
        <Fragment>
            <AdvertisementInfo ad = {advertisementData}/>
            <AdvertisementSellerInfo seller = {advertisementData.User}/>
            <AdvertisementReviews reviews={advertisementData.Reviews}/>
            {/* </div> */}
        </Fragment>
    );
}

export default Advertisement;
