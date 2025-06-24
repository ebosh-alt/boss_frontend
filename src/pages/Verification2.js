// import UserContext from "../utils/contexts";
import "../styles/Verification/Verification.css"
import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';


function Verification2() {
    const navigate = useNavigate();

    function hadleClickContinueBut() {
        navigate("/Verification3")
      }

    return (
        <div className="verification-kyc-1">
            <div className="verification-kyc-1-line">
                <img className="verification-kyc-progress-bar" src="./svg/progress_bar_2.svg" />
                Шаг 2 из 3
            </div>

            <div className="verification-kyc-1-line">
                <img className="verification-kyc-1-input-selfie-1" src="./svg/kyc_selfie_1.svg"/>
            </div>

            <div className="verification-kyc-1-line-text th">
                Сделайте селфи.
            </div>
            <div className="verification-kyc-1-line-advice empty">
                <div className="verification-kyc-1-advice">
                    Совет
                </div>
                <div className="verification-kyc-1-advice-text">
                    Лицо должно быть в центре. Избегайте вспышек и бликов.
                </div>
            </div>
            <div className="verification-kyc-1-continue-but" onClick={() => hadleClickContinueBut()}>
                Продолжить
            </div>
        </div>
    );
}

export default Verification2;
