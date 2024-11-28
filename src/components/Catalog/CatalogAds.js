import React from 'react';
import CatalogAdCard from './CatalogAdCard';


const CatalogAds = ({ads, catalogAds, handleClickOnCatalogAd}) => {

        return (
            <div className="catalog-advertisements">
                <div className="catalog-advertisements-line-of-two">
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
            </div>
        );
    }
;

export default CatalogAds;
