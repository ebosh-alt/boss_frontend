import React from 'react';
import '../../styles/Profile/ProfileAdvertisement.css';
import '../../assets/logo.svg';
import ProfileAdvertisementCard from "./ProfileAdvertisementCard";
import {GoPlus} from "react-icons/go";

const ProfileAdvertisement = ({status, title, views, price, isActive}) => {
        const ads = [
            {id: 1, isActive: false, title: 'Название', views: 84, price: '12.345.678', isAdvanced: false},
            {id: 2, isActive: false, title: 'Название', views: 10, price: '12.345.678', isAdvanced: true},
            {id: 3, isActive: true, title: 'Название', views: 84, price: '12.345.678', isAdvanced: false},
            {id: 4, isActive: true, title: 'Название', views: 10, price: '12.345.678', isAdvanced: true},
        ];

        return (
            <div>
                <div className="header">
                    <p className="headerTitle">Мои объявления</p>
                    <button className="addButton">
                        Добавить <span className="plusIcon"><GoPlus/></span>
                    </button>
                </div>

                <div className="profileAdvertisement">
                    {ads.map((ad) => (
                        <ProfileAdvertisementCard
                            key={ad.id}
                            isActive={ad.isActive}
                            title={ad.title}
                            views={ad.views}
                            price={ad.price}
                            isAdvanced={ad.isAdvanced}
                        />
                    ))}
                </div>
            </div>
        );
    }
;

export default ProfileAdvertisement;
