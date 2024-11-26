import React, {Fragment} from 'react';
import '../../styles/AddAdvertisementHeader.css';
import {IoChevronBackOutline} from "react-icons/io5";

function Header() {
    return (
        <Fragment>
            <div className={"AdvertisementHeader"}>
                <div className={"backArrow"}>
                    <IoChevronBackOutline/>
                </div>
                <div className="buttonsAdd">
                    <a href="/Profile" className="buttonAdd">Категории</a>
                </div>
            </div>
        </Fragment>);
}

export default Header;
