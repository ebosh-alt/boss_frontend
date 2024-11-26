// import UserContext from "../utils/contexts";
import "../styles/Verification/Verification.css"
import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';


function Verification3() {
    // const {userId, setUserId} = useContext(UserContext);
    const navigate = useNavigate();

    function hadleClickContinueBut() {
        navigate("/Catalog")
      }

    return (
        <div className="verification-kyc-1">
            <div className="verification-kyc-1-line">
                <img className="verification-kyc-progress-bar" src="./svg/progress_bar_3.svg" />
                Шаг 3 из 3
            </div>

            <div className="verification-kyc-1-line empty">
                <img className="verification-kyc-1-input-selfie-1" src="./svg/kyc_photo_1.svg"/>
            </div>

            <div className="verification-kyc-1-line-input-photo-but">
                Сделать фото повторно
            </div>
            <div className="verification-kyc-1-line-text fourth">
                Ваши документы будут проверены в течение 10 минут. Мы уведомим вас о результате проверки.
            </div>
            <div className="verification-kyc-1-continue-but" onClick={() => hadleClickContinueBut()}>
                Отправить на проверку
            </div>
            <div className="verification-kyc-0-fourthl">
                <span>
                Ссылки на документы для ознакомления с ними перед отправкой на проверку
                </span>
            </div>
        </div>
    );
}

export default Verification3;
