import UserContext from "../utils/contexts";
import {useContext} from "react";
import HeaderProfile from "../components/HeaderProfile";

function Home() {
    const {userId, setUserId} = useContext(UserContext);

    return (
        <div>
            <HeaderProfile/>
        </div>
    );
}

export default Home;
