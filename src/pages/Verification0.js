// import UserContext from "../utils/contexts";
import "./Verification.css"
import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';


function Verification0() {
    // const {userId, setUserId} = useContext(UserContext);
    const navigate = useNavigate();
    const [continueType, setContinueType] = useState("here")

    function hadleClickContinueTypeBut(type) {
        setContinueType(type)
        navigate("/Verification1")
      }

    return (
        <div className="verification-kyc-0">
            <div className="verification-kyc-0-firstl">
                Подтвердите свою личность
            </div>
            <div className="verification-kyc-0-secondl">
                <p>
                    Для обеспечения безопасности и соответствия нормативным требованиям, мы просим вас пройти верификацию личности.
                </p>
                <p>
                    Этот процесс занимает всего несколько минут.
                </p>
            </div>
            <div className="verification-kyc-0-thirdl">
                <div className="verification-kyc-0-thirdl-block">
                    <div className="verification-kyc-0-thirdl-icon-block">
                        <img className="verification-kyc-0-thirdl-icon" src="./svg/verification0_1.svg" />
                    </div>
                    <div className="verification-kyc-0-thirdl-stage">
                        Шаг 1
                    </div>
                    <div className="verification-kyc-0-thirdl-stage-text">
                        Предоставьте документ, удостоверяющий личность
                    </div>
                </div>
                <div className="verification-kyc-0-thirdl-block">
                    <div className="verification-kyc-0-thirdl-icon-block">
                        <img className="verification-kyc-0-thirdl-icon" src="./svg/verification0_2.svg" />
                    </div>                    
                    <div className="verification-kyc-0-thirdl-stage">
                        Шаг 2
                    </div>
                    <div className="verification-kyc-0-thirdl-stage-text">
                        Верификация личных данных
                    </div>
                </div>
                <div className="verification-kyc-0-thirdl-block">
                    <div className="verification-kyc-0-thirdl-icon-block">
                        <img className="verification-kyc-0-thirdl-icon" src="./svg/verification0_3.svg" />
                    </div>   
                    <div className="verification-kyc-0-thirdl-stage">
                        Шаг 3
                    </div>
                    <div className="verification-kyc-0-thirdl-stage-text">
                        Подтверждение данных
                    </div>
                </div>
            </div>
            <div className="verification-kyc-0-fourthl">
                <span>
                    Вам должно быть не менее 18 лет,  и Вы достигли совершеннолетия в действующей юрисдикции. Вы должны пройти верификацию лично от себя.
                </span>
            </div>

            <div className="verification-kyc-0-fifthl">
                <div onClick={() => hadleClickContinueTypeBut('here')} className={continueType === 'here' ? "verification-kyc-0-fifthl-but-block active" : "verification-kyc-0-fifthl-but-block" }>
                    {/* <button type="button" onClick={() => hadleClickContinueTypeBut('here')} className={continueType === 'Продавец' ? "verification-kyc-0-fivel-continue-type-but active" : "verification-kyc-0-fivel-continue-type-but" }> */}
                        Продолжить на этом устройстве
                    {/* </button> */}
                </div>
                <div onClick={() => hadleClickContinueTypeBut('another')} className={continueType === 'another' ? "verification-kyc-0-fifthl-but-block active" : "verification-kyc-0-fifthl-but-block" }>
                    {/* <button type="button" onClick={() => hadleClickContinueTypeBut('another')} className={continueType === 'Покупатель' ? "verification-kyc-0-fivel-continue-type-but active" : "verification-kyc-0-fivel-continue-type-but" }> */}
                        Продолжить на телефоне
                    {/* </button> */}
                </div>
            </div>
        </div>
    );
}

export default Verification0;
