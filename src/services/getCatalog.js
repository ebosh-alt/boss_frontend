import { json } from "react-router-dom";


const GetCatalogJSON = async (adID) => {
    const url = ""
    const bodyData = {
        id: adID
    }
    try {
        const response = await fetch(url, {method: "GET" });
        if (response.ok) {
            const advertisementJSON = await response.json();
            return advertisementJSON 
        } else {
            const errorJSON = await response.json();
            console.error("Ошибка запроса", errorJSON);
        }
    } catch (error) {
        try {
            const response = await fetch("getCatalog.json");
            if (response.ok) {
                console.log("34")
                const advertisementJSON = await response.json();
                console.log("34", advertisementJSON)
                return advertisementJSON
            } else {
                console.error("Ошибка запроса", response.status);
            }
        } catch (error) {
            console.error("Ошибка запроса", error)
        }
    }
}
export default GetCatalogJSON