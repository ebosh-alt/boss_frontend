import "../../styles/Catalog/Catalog.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import FilterPanel from "./FilterPannel";
// import { IoFilter } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Selector from "../../services/Selector.js";



function CatalogSettings({toggleFilterPanel, inputCategory, setinputCategory}) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    // const [sortOrder, setSortOrder] = useState(''); // сортировка
    // const [priceRange, setPriceRange] = useState({ min: '', max: '' }); // диапазон цен
    // const [location, setLocation] = useState(''); // выбор местоположения
    
    
    
    
    
    const options = [
        { label: 'Категория', value: '', img: "" },
        { label: 'Оптика', value: 'Optics', img: "./optics.png" },
        { label: 'Пули, гильзы', value: 'Bullets, cartridges', img: "./bullets.png" },
        { label: 'Оружие', value: 'Weapons', img: "./weapons.png" },
        { label: 'Снаряжение', value: 'Equipment', img: "./equipment.png" },
        { label: 'Разное', value: 'Miscellaneous', img: "./miscellaneous.png" },
    ];
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value)
    };
    function handleSearchButClick() {
        navigate("/Catalog")
    }

    const handleSelectCategory = (option) => {
        setinputCategory(option);
        setIsOpen(false);
    };

    return (
        <>
            <div className="catalog-settings-search-filter-block">
                <div className="catalog-settings-search-block">
                    <input className="catalog-settings-search-input" type="text" id="search-input" placeholder="" onChange={handleInputChange}/>
                    <button className="catalog-settings-search-img-block" onClick={handleSearchButClick}>
                        <FaMagnifyingGlass className="catalog-settings-search-img" />

                    </button>
                </div>
                
                <button className="catalog-settings-filter-block" onClick={toggleFilterPanel}>
                    <img className="catalog-settings-filter-img" src="./svg/filter.svg" alt=""/>
                </button>
            </div>
            <Selector prefix="catalog-settings-category" isOpen={isOpen} setIsOpen={setIsOpen} inputCategory={inputCategory} handleSelectCategory={handleSelectCategory} options={options} />
        </>
    )
}

export default CatalogSettings