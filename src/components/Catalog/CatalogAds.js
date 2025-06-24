import React from 'react';
import CatalogAdCard from './CatalogAdCard';


const CatalogAds = ({catalogAds, handleClickOnCatalogAd}) => {

        return (
            <div className="catalog-feed-block">
                    {catalogAds.map((ad) => (
                        <CatalogAdCard
                            key={ad.ID}
                            adID={ad.ID}
                            PhotoPath={ad.PhotoPath}
                            Name={ad.Name}
                            Price={ad.Price}
                            Location={ad.Location}
                            TypePromotionID={ad.TypePromotionID}
                            handleClickOnCatalogAd={handleClickOnCatalogAd}
                        />
                    ))}
            </div>
        );
    }
;

export default CatalogAds;
