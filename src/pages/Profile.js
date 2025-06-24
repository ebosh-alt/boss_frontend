import {useContext, useEffect, useState} from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStatistic from "../components/Profile/ProfileStatistic";
import ProfileReviews from "../components/Profile/ProfileReviews";
import ProfileAdvertisement from "../components/Profile/ProfileAdvertisement";
import GetProfile from "../services/GetProfile";
import GetReviews from "../services/GetReviews";

import { useUser } from '../utils/contexts/UserContext';

function Profile() {
    const { user } = useUser();
    const [userJ, setUserJ] = useState({
        ID: 0,
        Firstname: "",
        Lastname: "",
        NumberPhone: "",
        Rating: 5,
        VerificationStatus: "",
        Role: {
            ID: 0, Name: ""
        }
    });
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const initProfile = async () => {
            const profileJSON = await GetProfile(user?.id);
            const reviewJSON = await GetReviews(user?.id);
            if (profileJSON) {
                return [profileJSON, reviewJSON];
            }
        }
        initProfile().then((data) => {
            setUserJ(data[0]);
            setReviews(data[1]);
        });
    }, [])

    if (user?.user_id === 0) {
        console.log(user);
        return <div>Loading...</div>;
    }
    // if (reviews.length === 0) {
    //     return <div>Loading...</div>;
    // }
    return (<div className={"Profile"}>
        <ProfileHeader user={user}/>
        {/* <ProfileStatistic/> */}
        <ProfileAdvertisement/>
        <ProfileReviews reviews={reviews}/>
    </div>);
}

export default Profile;
