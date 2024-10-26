import json

d= {
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
            "ID": 1,
            "Text": "Отличная сделка! Рекомендую продавца.",
            "Mark": 5,
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
            "Text": "dxtcfgvjhk",
            "Mark": 4,
            "Reviewer": {
                "ID": 4,
                "PathAva": "",
                "Username": "moderator_user",
                "Firstname": "Анна",
                "Lastname": "Кузнецова",
                "NumberPhone": "79113456789",
                "Rating": 4.9,
                "VerificationStatus": "verified",
                "Role": {
                    "ID": 3,
                    "Name": "Модератор"
                }
            },
            "Deal": {
                "ID": 0,
                "AdvertisementID": 0,
                "BuyerID": 0,
                "DateDeal": "0001-01-01T00:00:00Z"
            }
        }
    ],
    "Photos": [
        {
            "ID": 0,
            "Path": "/images/phone.jpg",
            "AdvertisementID": 0
        }
    ]
}

f_path = "getAdAllInfo.json"

def save_data(data, file_path):
    with open(file_path, "w+") as f:
        jdata = json.dumps(data)
        f.write(jdata)

if __name__ == "__main__":
    print (d)
    save_data(d, f"./test/json/{f_path}")