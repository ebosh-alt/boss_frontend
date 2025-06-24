import React, { useState } from 'react';
import "../../styles/Catalog/FilterPannel.css";
import Selector from '../../services/Selector';

const FilterPanel = ({ toggleFilterPanel, sortOrder, setSortOrder, priceRange, setPriceRange, location, setLocation, gender, setGender }) => {
    // const [sortOrder, setSortOrder] = useState('');
    // const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    // const [location, setLocation] = useState('');
    const [isOrderOpen, setIsOrderOpen] = useState(false)
    const [isLocationOpen, setisLocationOpen] = useState(false)

    function setStandartFilters() {
        setSortOrder('')
        setPriceRange({ min: '', max: '' })
        setLocation('')
        setGender("Женский")
    }


    const handleSelectOrder = (option) => {
        setSortOrder(option);
        setIsOrderOpen(false);
    };

    const optionsOrder = [
        { label: 'Популярные', value: 'popular', img: "" },
        { label: 'Популярные', value: 'popular', img: "" },
        { label: 'Дешевле', value: 'price_asc', img: "" },
        { label: 'Дороже', value: 'price_desc', img: "" },
    ];

    const handleSelectLocation = (option) => {
        setLocation(option);
        setIsOrderOpen(false);
    };

    const optionsLocation = [
        { label: 'Подкатегория', value: '', img: "", id: 0 },
        { label: 'Верхняя одежда', value: 'Outerwear', img: "", id: 1 },
        { label: 'Джинсы', value: 'Jeans', img: "", id: 2 },
        { label: 'Брюки', value: 'Pants', img: "", id: 3 },
    ];

    const setIsOpenBlock = (param, setParam) => {
        setParam(param)
    }


    const setIsOrderOpenW = (param) => {
        setIsOrderOpen(param)
        setisLocationOpen(false)
    }
    const setisLocationOpenW = (param) => {
        setisLocationOpen(param)
        setIsOrderOpen(false)
    }

    function hadleClickStatusBut(gender) {
        setGender(gender)

    }

    return (
        <div className="filter-panel">
            <div className='filter-panel-first-line-block'>
                <img  className='filter-panel-back-button-img' src='./filterBackBut.png' onClick={toggleFilterPanel}/>
                <div className='filter-panel-button-standart' onClick={setStandartFilters}>
                    Сбросить
                </div>
            </div>

            <Selector prefix="filter-panel-order" isOpen={isOrderOpen} setIsOpen={setIsOrderOpenW} inputCategory={sortOrder} handleSelectCategory={handleSelectOrder} options={optionsOrder} />


                <div className="filter-panel-price-block">
                    <div className='filter-panel-price-text'>Цена, ₽</div>
                    <div className='filter-panel-price-input-block'>
                        <input
                            type="number"
                            value={priceRange.min}
                            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                            placeholder="От"
                            className="no-arrows filter-panel-price-input"
                        />
                        <input
                            type="number"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                            placeholder="До"
                            className="no-arrows filter-panel-price-input"
                        />
                    </div>
                </div>
            
            <div className='filter-panel-location-input-block'>
                Пол
            </div>
            <label>
                <div className="filter-panel-price-input-block">

                    <button type="button" onClick={() => hadleClickStatusBut('Женский')} className={gender === 'Женский' ? "registration-status-but active" : "registration-status-but" }>
                        Женский
                    </button>
                    <button type="button" onClick={() => hadleClickStatusBut('Мужской')} className={gender === 'Мужской' ? "registration-status-but active" : "registration-status-but" }>
                        Мужской
                    </button>
                    <input
                        id="gender-input"
                        type="text"
                        value={gender}
                        onChange={() => {}}
                        style={{ display: 'none' }} // скрываем от пользователя
                    />
                </div>
            </label>


            <div className='filter-panel-location-input-block'>
                Подкатегория
            </div>
            <Selector prefix="filter-panel-location" isOpen={isLocationOpen} setIsOpen={setisLocationOpenW} inputCategory={location} handleSelectCategory={handleSelectLocation} options={optionsLocation} />
        </div>
    );
};

export default FilterPanel;
