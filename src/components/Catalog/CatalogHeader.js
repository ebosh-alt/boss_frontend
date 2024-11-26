import "../../styles/Catalog/Catalog.css"
import { useNavigate } from 'react-router-dom';


function CatalogHeader() {
    const navigate = useNavigate();

    return (
        <div className="catalog-header-block">
            <img className="catalog-header-img" src="./svg/logo.svg"/>

            {/* <img className="catalog-header-img" src="CatalogHeader.png" alt="Catalog Header" /> */}
            <a onClick={() => navigate('/')} className="catalog-header-profile">
                <div>
                    Name
                </div>
            </a>
        </div>
    )
}

export default CatalogHeader