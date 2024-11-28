import json

d_ad = {
    "ID": 1,
    "User": {
        "ID": 1,
        "PathAva": "cfhvgbhjk",
        "Username": "admin_user",
        "Firstname": "Иван",
        "Lastname": "Иванов",
        "NumberPhone": "79123456789",
        "Rating": 4.85,
        "VerificationStatus": "verified",
        "Role": {
            "ID": 1,
            "Name": "Администратор"
        }
    },
    "Name": "Продам телефон",
    "Description": "Смартфон в отличном состоянии",
    "Price": 15000,
    "DatePlacement": "2024-10-18T19:08:46.706137Z",
    "Location": "Москва",
    "TypePromotion": {
        "ID": 1,
        "Name": "Стандартное продвижение",
        "Price": 10,
        "TimeLive": 2592000000000000
    },
    "ViewsCount": 120,
    "DateExpirePromotion": "2024-11-17T19:08:46.706137Z",
    "AdvertismentCategory": {
        "ID": 1,
        "Name": "Электроника"
    },
    "Reviews": [
        {
            "ID": 5,
            "Text": "erdeferde",
            "Mark": 3,
            "Reviewer": {
                "ID": 2,
                "PathAva": "",
                "Username": "regular_user",
                "Firstname": "Петр",
                "Lastname": "Петров",
                "NumberPhone": "79111234567",
                "Rating": 5,
                "VerificationStatus": "unverified",
                "Role": {
                    "ID": 2,
                    "Name": "Пользователь"
                }
            },
            "Deal": {
                "ID": 0,
                "AdvertisementID": 0,
                "BuyerID": 0,
                "DateDeal": "0001-01-01T00:00:00Z"
            }
        },
        {
            "ID": 6,
            "Text": "erdeferde",
            "Mark": 3,
            "Reviewer": {
                "ID": 2,
                "PathAva": "",
                "Username": "regular_user",
                "Firstname": "Петр",
                "Lastname": "Петров",
                "NumberPhone": "79111234567",
                "Rating": 5,
                "VerificationStatus": "unverified",
                "Role": {
                    "ID": 2,
                    "Name": "Пользователь"
                }
            },
            "Deal": {
                "ID": 0,
                "AdvertisementID": 0,
                "BuyerID": 0,
                "DateDeal": "0001-01-01T00:00:00Z"
            }
        },
    ],
    "Photos": [
        {
            "ID": 0,
            "Path": "./G_powerTQ2.jpg",
            "AdvertisementID": 0
        },
        {
            "ID": 1,
            "Path": "./фото.jpeg",
            "AdvertisementID": 0
        },
        {
            "ID": 2,
            "Path": "./фото2.jpg",
            "AdvertisementID": 0
        }
    ]
}

d_catalog = [
    {
        "ID": 1,
        "PhotoPath": "adphotopath1.jpg",
        "Name": "Охотничье ружье",
        "Price": 18000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 2,
        "PhotoPath": "adphotopath2.jpg",
        "Name": "Охотничье ружье",
        "Price": 19000,
        "Location": "г. Москва",
        "TypePromotionID": 2,
    },
    {
        "ID": 3,
        "PhotoPath": "adphotopath3.jpg",
        "Name": "Охотничье ружье",
        "Price": 20000,
        "Location": "г. Москва",
        "TypePromotionID": 3,
    },
    {
        "ID": 4,
        "PhotoPath": "adphotopath4.jpg",
        "Name": "Охотничье ружье",
        "Price": 17000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 5,
        "PhotoPath": "adphotopath5.jpg",
        "Name": "Охотничье ружье",
        "Price": 16000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 6,
        "PhotoPath": "adphotopath6.jpg",
        "Name": "Охотничье ружье",
        "Price": 15000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 7,
        "PhotoPath": "adphotopath7.jpg",
        "Name": "Охотничье ружье",
        "Price": 14000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 8,
        "PhotoPath": "adphotopath8.jpg",
        "Name": "Охотничье ружье",
        "Price": 13000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 9,
        "PhotoPath": "adphotopath9.jpg",
        "Name": "Охотничье ружье",
        "Price": 12000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
    {
        "ID": 10,
        "PhotoPath": "adphotopath10.jpg",
        "Name": "Охотничье ружье",
        "Price": 180000,
        "Location": "г. Москва",
        "TypePromotionID": 1,
    },
]

f_ad_path = "getAdAllInfo.json"

f_catalog_path = "getCatalog.json"

def save_data(data, file_path):
    with open(file_path, "w+") as f:
        jdata = json.dumps(data)
        f.write(jdata)

if __name__ == "__main__":
    print (d_ad)
    save_data(d_ad, f"./public/jsons/{f_ad_path}")
    print (d_catalog)
    save_data(d_catalog, f"./public/jsons/{f_catalog_path}")