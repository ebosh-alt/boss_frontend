import CatalogHeader from "../components/Catalog/CatalogHeader.js"
import CatalogSettings from "../components/Catalog/CatalogSettings.js";
import { useState, useEffect } from 'react';
import FilterPanel from "../components/Catalog/FilterPannel.js";
import CatalogAds from "../components/Catalog/CatalogAds.js";
import { useNavigate } from "react-router-dom";
import GetCatalogAdsJSON from "../services/GetCatalogAdsJSON.js";


import { config } from '../Config';
import { useUser } from '../utils/contexts/UserContext';

function Catalog() {
    const [sortOrder, setSortOrder] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [location, setLocation] = useState('');
    const [inputCategory, setinputCategory] = useState('');
    const [catalogAds, setCatalogAds] = useState(null)
    const [clickedCatalogAd, setClickedCatalogAd] = useState(null);
    const [gender, setGender] = useState('Женский')

    // TODO: Функция получения категорий + Функция получения подкатегорий 
    
    const { user } = useUser();
    

    const navigate = useNavigate();
    const handleClickOnCatalogAd = (adID) => {
        setClickedCatalogAd(adID);
        const advertisementUrl = "/Advertisement?ad_id="+adID;
        navigate(advertisementUrl);
    }

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // TODO: Функция получения товаров учитывая фильтр 
    useEffect(() => {
        const initCatalogAds = async () => {
            // GetCatalogAdsJSON принимает параметры( фильтры, строка поиска и тд )
            const catalogAdsJSON = await GetCatalogAdsJSON(gender , location ); 
            if (catalogAdsJSON) {
                return catalogAdsJSON
            }
        }
        initCatalogAds().then((data) => {
            setCatalogAds(data);
        });
    }, [gender, location])

    if (!catalogAds) {
        return <div>Loading...</div>;
    }
    // Функция для переключения панели фильтров
    const toggleFilterPanelShow = () => {
        setIsFilterOpen(true);
    };
    const toggleFilterPanelHide = () => {
        setIsFilterOpen(false);
    };

    
    const options = [
        { label: 'Категория', value: '', img: "", id: 0 },
        { label: 'Одежда', value: 'Clothes', img: "", id: 1 },
        { label: 'Обувь', value: 'Shoes', img: "", id: 2 },
        { label: 'Аксессуары', value: 'Accessories', img: "", id: 3 },
    ];



    return (
        <>
            {
                isFilterOpen && 
                <FilterPanel toggleFilterPanel={toggleFilterPanelHide} sortOrder={sortOrder} setSortOrder={setSortOrder} priceRange={priceRange} setPriceRange={setPriceRange} location={location} setLocation={setLocation} gender={gender} setGender={setGender}/>
            }
            {/* Остальные блоки страницы: видимость зависит от isFilterOpen */}
            {
                !isFilterOpen && 
                <>
                    <CatalogHeader /> 
                    <CatalogSettings toggleFilterPanel={toggleFilterPanelShow} inputCategory={inputCategory} setinputCategory={setinputCategory} options={options}/>
                    <CatalogAds catalogAds={catalogAds} handleClickOnCatalogAd={handleClickOnCatalogAd}/>
                </>
            }
            
            
            {/* <AdvertisementReviews /> */}
        </>
    );
}

export default Catalog;
