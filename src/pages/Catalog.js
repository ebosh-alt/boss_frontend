import CatalogHeader from "../components/Catalog/CatalogHeader.js"
import CatalogSettings from "../components/Catalog/CatalogSettings.js";
import { useState, useEffect } from 'react';
import FilterPanel from "../components/Catalog/FilterPannel.js";
import CatalogAds from "../components/Catalog/CatalogAds.js";
import { useNavigate } from "react-router-dom";
import GetCatalogAdsJSON from "../services/GetCatalogAdsJSON.js";

function Catalog() {
    const [sortOrder, setSortOrder] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [location, setLocation] = useState('');
    const [inputCategory, setinputCategory] = useState('');
    const [catalogAds, setCatalogAds] = useState(null)
    const [clickedCatalogAd, setClickedCatalogAd] = useState(null);

    const navigate = useNavigate();
    const handleClickOnCatalogAd = (adID) => {
        setClickedCatalogAd(adID);
        const advertisementUrl = "/Advertisement?adID="+adID;
        navigate(advertisementUrl);
    }

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        const initCatalogAds = async () => {
            // GetCatalogAdsJSON принимает параметры( фильтры, строка поиска и тд )
            const catalogAdsJSON = await GetCatalogAdsJSON(); 
            if (catalogAdsJSON) {
                return catalogAdsJSON
            }
        }
        initCatalogAds().then((data) => {
            setCatalogAds(data);
        });
    }, [])

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
    return (
        <>
            {
                isFilterOpen && 
                <FilterPanel toggleFilterPanel={toggleFilterPanelHide} sortOrder={sortOrder} setSortOrder={setSortOrder} priceRange={priceRange} setPriceRange={setPriceRange} location={location} setLocation={setLocation} />
            }
            {/* Остальные блоки страницы: видимость зависит от isFilterOpen */}
            {
                !isFilterOpen && 
                <>
                    <CatalogHeader /> 
                    <CatalogSettings toggleFilterPanel={toggleFilterPanelShow} inputCategory={inputCategory} setinputCategory={setinputCategory} />
                    <CatalogAds catalogAds={catalogAds} handleClickOnCatalogAd={handleClickOnCatalogAd}/>
                </>
            }
            
            
            {/* <AdvertisementReviews /> */}
        </>
    );
}

export default Catalog;
