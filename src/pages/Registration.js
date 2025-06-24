import "../styles/Registration/Registration.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { config } from '../Config';
import { useUser } from '../utils/contexts/UserContext';

function Registration() {
    const [firstName, setFirstName] = useState(''); // Имя пользователя
    const [lastName, setLastName] = useState(''); // Фамилия пользователя
    const [phone, setPhone] = useState(''); // Телефон пользователя
    const [status, setStatus] = useState('Продавец'); // Статус пользователя (по умолчанию покупатель)

    const navigate = useNavigate();

    const { login } = useUser();

    const [searchParams] = useSearchParams();
    const user_id = parseInt(searchParams.get('user_id'));

    console.log('user_id:', user_id); 


    // Обработчик отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!firstName) return alert("Укажите имя");
        if (!lastName) return alert("Укажите фамилию");
        if (!phone) return alert("Укажите телефон");

        try {
            const response = await fetch(`${config.apiBaseUrl}/api/register?user_id=${user_id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({user_id, firstName, lastName, phone, status }),
            });

            if (!response.ok) throw new Error('Ошибка регистрации');
            
            // const userData = await response.json(); // { id: 1, firstName: "Иван", lastName: "Иванов" }
            
            login({user_id, firstName, lastName, phone, status }); // Сохраняем в контекст и localStorage
            // Перенаправление после успешной регистрации
            navigate(status === 'Продавец' ? '/Verification0' : '/Catalog');

        } catch (error) {
            console.error('Registration error:', error);
            alert('Произошла ошибка при регистрации');
        }
    };

    function hadleClickStatusBut(status) {
    setStatus(status)

    }

    function handleFirstNameChange(event) {
    setFirstName(event.target.value)
    }

    return (
    <>
        <div className='registration-section-name'>
            Регистрация
        </div>
        <form >
            <div className='registration-user-photo-section'>
            </div>

            <div className="registration-flname-section">
                <div className="registration-flname">
                    <label>
                        <input
                            id='firstname-input'
                            className="registration-flname-input-field"
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            placeholder='Имя'
                        />    
                        <div className="refistration-flname-empty-block"></div>
                        <input
                            id="lastname-input"
                            className="registration-flname-input-field"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Фамилия'
                        />
                    </label>
                </div>
            </div>
        
            <div className="refistration-empty-block"></div>
            <div className="registration-flname-section">
                <div className="registration-flname">
                    <label>
                        <input
                            className="registration-flname-input-field"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Телефон"
                        />
                    </label>
                </div>
            </div>

            <div>
                <label>
                    <div className="registration-statuses">
                        <button type="button" onClick={() => hadleClickStatusBut('Продавец')} className={status === 'Продавец' ? "registration-status-but active" : "registration-status-but" }>
                        Продавец
                        </button>
                        <button type="button" onClick={() => hadleClickStatusBut('Покупатель')} className={status === 'Покупатель' ? "registration-status-but active" : "registration-status-but" }>
                        Покупатель
                        </button>
                    </div>
                    <input
                    id="status-input"
                    type="text"
                    value={status}
                    onChange={() => {}}
                    style={{ display: 'none' }} // скрываем от пользователя
                    />
                </label>
            </div>
        
            {status === "Продавец" &&
            <>
            <div className="registration-seller-info-block">
                <div className="registration-seller-info-verification">
                Для обеспечения безопасности и соответствия нормативным требованиям, мы просим вас пройти верификацию личности. 
                </div>
                <div className="registration-seller-info-verification">
                Этот процесс занимает всего несколько минут.
                </div>
                <div className="registration-seller-info-agreement">
                При нажатии, вы завершите регистрацию и приступите к прохождению верификацию личности.
                </div>
            </div>
            </>
            }
            <button className="submit-registration" type="submit" onClick={handleSubmit}>
                {status === "Покупатель" && 'Завершить регистрацию'}
                {status === "Продавец" && 'Завершить регистрацию и пройти верификацию'}
            </button>
        </form>
        <div className="registration-legel-info-block">
            <a href="https://ru.wikipedia.org/wiki/%D0%AE%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BB%D0%B8%D1%86%D0%BE" className="registration-legel-info">
            Юридическая информация
            </a>
        </div>
    </>
    );
};

export default Registration;