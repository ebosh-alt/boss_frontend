import UserContext from "../utils/contexts";
import {useContext} from "react";

function Home() {
    const {userId, setUserId} = useContext(UserContext);

    return (
        <div>
        </div>
    );
}

export default Home;
