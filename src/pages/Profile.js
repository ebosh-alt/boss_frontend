import UserContext from "../utils/contexts";
import {useContext, useEffect, useState} from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStatistic from "../components/Profile/ProfileStatistic";
import ProfileReviews from "../components/Profile/ProfileReviews";
import ProfileAdvertisement from "../components/Profile/ProfileAdvertisement";
import GetProfile from "../services/GetProfile";
import GetReviews from "../services/GetReviews";


function Profile() {
    const {userId} = useContext(UserContext);
    const [user, setUser] = useState({
        ID: 0,
        PathAva: "",
        Username: "",
        Firstname: "",
        Lastname: "",
        NumberPhone: "",
        Rating: 0,
        VerificationStatus: "",
        Role: {
            ID: 0, Name: ""
        }
    });
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const initProfile = async () => {
            const profileJSON = await GetProfile(userId);
            const reviewJSON = await GetReviews(userId);
            if (profileJSON) {
                return [profileJSON, reviewJSON];
            }
        }
        initProfile().then((data) => {
            setUser(data[0]);
            setReviews(data[1]);
        });
    }, [])

    if (user.ID === 0) {
        console.log(user);
        return <div>Loading...</div>;
    }
    if (reviews.length === 0) {
        return <div>Loading...</div>;
    }
    return (<div className={"Profile"}>
        <ProfileHeader user={user}/>
        <ProfileStatistic/>
        <ProfileAdvertisement/>
        <ProfileReviews reviews={reviews}/>
    </div>);
}

export default Profile;
