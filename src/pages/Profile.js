import UserContext from "../utils/contexts";
import {useContext} from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";

function Profile() {
    const {userId, setUserId} = useContext(UserContext);

    return (
        <div>
            <ProfileHeader/>
        </div>
    );
}

export default Profile;
