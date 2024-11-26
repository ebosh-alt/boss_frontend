import UserContext from "../utils/contexts";
import {useContext} from "react";
import Header from "../components/AddAdvertisement/Header";
import '../styles/AddAdvertisement.css';
import Add from "../components/AddAdvertisement/Add";


function AddAdvertisement() {
    const {userId, setUserId} = useContext(UserContext); // для всех (область виждимости)

    return (
        <div className={"addAdvertisement"}>
            <Header/>
            <Add/>
        </div>
    );
}

export default AddAdvertisement;
