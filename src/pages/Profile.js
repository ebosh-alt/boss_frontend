import UserContext from "../utils/contexts";
import {useContext} from "react";

function Profile() {
    const {userId, setUserId} = useContext(UserContext);

    return (
        <div>
            <p>Profile</p>
        </div>
    );
}

export default Profile;
