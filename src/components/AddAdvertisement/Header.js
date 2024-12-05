import React, {Fragment, useState} from 'react';
import '../../styles/AddAdvertisementHeader.css';
import {IoChevronBackOutline} from "react-icons/io5";
import Selector from "../../services/Selector";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputCategory, setinputCategory] = useState('');

    const handleSelectCategory = (option) => {
        setinputCategory(option);
        setIsOpen(false);
    };
    const options = [
        {label: 'Категория', value: '', img: ""},
        {label: 'Оптика', value: 'Optics', img: "./optics.png"},
        {label: 'Пули, гильзы', value: 'Bullets, cartridges', img: "./bullets.png"},
        {label: 'Оружие', value: 'Weapons', img: "./weapons.png"},
        {label: 'Снаряжение', value: 'Equipment', img: "./equipment.png"},
        {label: 'Разное', value: 'Miscellaneous', img: "./miscellaneous.png"},
    ];

    return (
        <Fragment>
            <div className={"AdvertisementHeader"}>
                <div className={"backArrow"}>
                    <IoChevronBackOutline/>
                </div>
                <Selector prefix="CatalogSettingsCategory" isOpen={isOpen} setIsOpen={setIsOpen}
                          inputCategory={inputCategory} handleSelectCategory={handleSelectCategory} options={options}/>

            </div>
        </Fragment>);
}

export default Header;
