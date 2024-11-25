import React, { useState } from 'react';
import "../styles/FilterPannel.css";
import Selector from './Selector';

const FilterPanel = ({ toggleFilterPanel, sortOrder, setSortOrder, priceRange, setPriceRange, location, setLocation }) => {
    // const [sortOrder, setSortOrder] = useState('');
    // const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    // const [location, setLocation] = useState('');
    const [isOrderOpen, setIsOrderOpen] = useState(false)
    const [isLocationOpen, setisLocationOpen] = useState(false)

    function setStandartFilters() {
        setSortOrder('')
        setPriceRange({ min: '', max: '' })
        setLocation('')
    }


    const handleSelectOrder = (option) => {
        setSortOrder(option);
        setIsOrderOpen(false);
    };

    const optionsOrder = [
        { label: 'Популярные', value: 'popular', img: "" },
        { label: 'Популярные', value: 'popular', img: "" },
        { label: 'Дешевле', value: 'd', img: "" },
        { label: 'Дороже', value: 'dd', img: "" },
    ];

    const handleSelectLocation = (option) => {
        setLocation(option);
        setIsOrderOpen(false);
    };

    const optionsLocation = [
        { label: 'Город', value: '', img: "" },
        { label: 'Москва', value: 'Moscow', img: "" },
        { label: 'Казань', value: 'Kazan', img: "" },
        { label: 'Санкт-Петербург', value: 'Saint Petersburg', img: "" },
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
                Местонахождение
            </div>
            <Selector prefix="filter-panel-location" isOpen={isLocationOpen} setIsOpen={setisLocationOpenW} inputCategory={location} handleSelectCategory={handleSelectLocation} options={optionsLocation} />
        </div>
    );
};

export default FilterPanel;
