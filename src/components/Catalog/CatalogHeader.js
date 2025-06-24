import "../../styles/Catalog/Catalog.css"
import { useNavigate } from 'react-router-dom';

import { config } from '../../Config';
import { useUser } from '../../utils/contexts/UserContext';

function CatalogHeader() {
    const navigate = useNavigate();

    const { user } = useUser();


    return (
        <div className="catalog-header-block">
            <img className="catalog-header-img" src="./svg/logo.svg"/>

            {/* <img className="catalog-header-img" src="CatalogHeader.png" alt="Catalog Header" /> */}
            <a onClick={() => navigate('/Profile')} className="catalog-header-profile">
                <div>
                    {user.firstName}
                </div>
            </a>
        </div>
    )
}

export default CatalogHeader