import UserContext from "../utils/contexts";
import {useContext} from "react";
import "../styles/AdvertisementAbout.css"

function AdvertisementAbout( {ad} ) {
    const {userId, setUserId} = useContext(UserContext);
    const {
        ID,
        Name,
        Description,
        Price,
        DatePlacement,
        Location,
        ViewsCount,
        AdvertismentCategory: {
            Name: categoryName,
        },

      } = ad;
    return (
        <div className="advertisement-about">
            <div className="ad-about-row">
                <div className="advertisement-name">
                    {Name}
                </div>
                <div className="advertisement-price">
                    {Price} ₽
                    {/* <img src="./RUB.png" alt="₽"/> */}
                </div>
            </div>
            <div className="ad-about-row">
                <div className="advertisement-category">
                    {categoryName}
                </div>
            </div>
            <div className="ad-about-row">
                <div className="advertisement-location">
                    <img src="./Marker.png"/>
                    {Location}
                </div>
              
                <div className="advertisement-views">
                    <img className="" src="./views.png"/>
                    {ViewsCount}
                </div>
            </div>
        </div>
    );
}

export default AdvertisementAbout;
