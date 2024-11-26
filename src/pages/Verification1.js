// import UserContext from "../utils/contexts";
import "./Verification.css"
import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';


function Verification1() {
    // const {userId, setUserId} = useContext(UserContext);
    const navigate = useNavigate();

    function hadleClickContinueBut() {
        navigate("/Verification2")
      }

    return (
        <div className="verification-kyc-1">
            <div className="verification-kyc-1-line">
                <img className="verification-kyc-progress-bar" src="./svg/progress_bar_1.svg" />
                Шаг 1 из 3
            </div>
            <div className="verification-kyc-1-line">
                <div className="verification-kyc-1-warning">
                    <img className="verification-kyc-1-warning-icon" src="./svg/warning.svg" />
                    <div className="verification-kyc-1-warning-text">
                        Пожалуйста, загрузите документ в формате JPG или PDF
                    </div>
                </div>
            </div>
            <div className="verification-kyc-1-line">
                <img className="verification-kyc-1-input-passport-1" src="./svg/kyc_passport_1.svg"/>
            </div>
            <div className="verification-kyc-1-line-text f">
                Загрузите фото документа, удостоверяющий личность
            </div>
            <div className="verification-kyc-1-line-advice">
                <div className="verification-kyc-1-advice">
                    Совет
                </div>
                <div className="verification-kyc-1-advice-text">
                    Документ должен быть чётким, без бликов, все углы документа должны быть видны.
                </div>
            </div>
            <div className="verification-kyc-1-line input-passport">
                <img src="./svg/kyc_passport_2.svg" />
                <img src="./svg/kyc_passport_2.svg" />
                <img src="./svg/kyc_passport_2.svg" />
                <img src="./svg/kyc_passport_2.svg" />
            </div>
            <div className="verification-kyc-1-line-text s">
                Загрузите дополнительные документы, подтверждающие личность
            </div>
            <div className="verification-kyc-1-continue-but" onClick={() => hadleClickContinueBut()}>
                Продолжить
            </div>
        </div>
    );
}

export default Verification1;
