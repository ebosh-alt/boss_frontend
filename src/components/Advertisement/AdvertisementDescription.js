import "../../styles/Advertisement/AdvertisementDescription.css";

function AdvertisementDescription({description}) {
    return (
        <>
        <hr className="horizont-line"/>
        <div className="advertisement-description">
            <div className="description-card-block-name">
                Описание
            </div>
            <span>{description}</span>
        </div>
        </>
    );
}

export default AdvertisementDescription;
