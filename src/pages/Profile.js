import UserContext from "../utils/contexts";
import {useContext, useEffect, useState} from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStatistic from "../components/Profile/ProfileStatistic";
import ProfileReviews from "../components/Profile/ProfileReviews";
import ProfileAdvertisement from "../components/Profile/ProfileAdvertisement";
import GetProfile from "../services/GetProfile";

function Profile() {
    const {userId, setUserId} = useContext(UserContext);
    const [user, setUser] = useState({
        ID: 1,
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

    useEffect(() => {
        const initProfile = async () => {
            const profileJSON = await GetProfile(userId);
            if (profileJSON) {
                return profileJSON
            }
        }
        initProfile().then((data) => {
            setUser(data);
            console.log(user)
        });
    }, [])
    if (!user) {
        return <div>Loading...</div>;
    }
    return (<div className={"Profile"}>
        <ProfileHeader user={user}/>
        <ProfileStatistic/>
        <ProfileAdvertisement/>
        <ProfileReviews/>
    </div>);
}

export default Profile;
