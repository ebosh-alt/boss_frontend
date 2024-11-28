// import { json } from "react-router-dom";


const GetCatalogAdsJSON = async () => {
    const url = ""
    const bodyData = {
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
            const response = await fetch("jsons/getCatalog.json");
            if (response.ok) {
                const catalogAdsJSON = await response.json();
                console.log("23", catalogAdsJSON)
                return catalogAdsJSON
            } else {
                console.error("Ошибка запроса", response.status);
            }
        } catch (error) {
            console.error("Ошибка запроса", error)
        }
    }
}
export default GetCatalogAdsJSON