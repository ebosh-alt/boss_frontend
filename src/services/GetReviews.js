const GetReviews = async (userID) => {
    const url = ""
    // const bodyData = {
    //     id: userID
    // }
    try {
        const response = await fetch(url, {method: "GET"});
        if (response.ok) {
            return await response.json()
        } else {
            const errorJSON = await response.json();
            console.error("Ошибка запроса", errorJSON);
        }
    } catch (error) {
        try {
            const response = await fetch("jsons/getReviews.json");
            if (response.ok) {
                return await response.json()
            } else {
                console.error("Ошибка запроса", response.status);
            }
        } catch (error) {
            console.error("Ошибка запроса", error)
        }
    }
}
export default GetReviews;
