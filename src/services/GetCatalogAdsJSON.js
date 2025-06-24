// import { json } from "react-router-dom";
import { config } from '../Config';


const GetCatalogAdsJSON = async (gender, subcategory) => {
    console.log(gender, subcategory)
    const url = new URL(`${config.apiBaseUrl}/api/ads`)
    const searchParams = new URLSearchParams();
    if (subcategory) {
      searchParams.append('subcategory_id', subcategory.id);
    }

    if (gender) {
      searchParams.append('?gender', gender);
    }

    url.search = searchParams.toString();

    const bodyData = {
    }
    try {
        const response = await fetch(url, {headers: { 'Content-Type': 'application/json'}, method: "GET" });
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