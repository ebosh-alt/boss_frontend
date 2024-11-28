import UserContext from "../utils/contexts";
import {useContext} from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const {userId, setUserId} = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div style={{width: "100%", height: "400px"}} onMouseEnter={()=>navigate("/Catalog")}>
        </div>
    );

}

export default Home;
