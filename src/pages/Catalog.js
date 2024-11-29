import CatalogHeader from "../components/Catalog/CatalogHeader.js"
import CatalogSettings from "../components/Catalog/CatalogSettings.js";
import { useState } from 'react';
import FilterPanel from "../components/Catalog/FilterPannel.js";

function Catalog() {
    const [sortOrder, setSortOrder] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [location, setLocation] = useState('');
    const [inputCategory, setinputCategory] = useState('');


    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // Функция для переключения панели фильтров
    const toggleFilterPanelShow = () => {
        setIsFilterOpen(true);
    };
    const toggleFilterPanelHide = () => {
        setIsFilterOpen(false);
    };
    return (
        <>
            {isFilterOpen && <FilterPanel toggleFilterPanel={toggleFilterPanelHide} sortOrder={sortOrder} setSortOrder={setSortOrder} priceRange={priceRange} setPriceRange={setPriceRange} location={location} setLocation={setLocation} />}
            {/* Остальные блоки страницы: видимость зависит от isFilterOpen */}
            {!isFilterOpen && <><CatalogHeader /> <CatalogSettings toggleFilterPanel={toggleFilterPanelShow} inputCategory={inputCategory} setinputCategory={setinputCategory} /></>}
            
            
            {/* <AdvertisementReviews /> */}
        </>
    );
}

export default Catalog;
