import "../styles/Registration.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Registration() {
  const [avatar, setAvatar] = useState(null); // Хранит загруженное изображение
  const [preview, setPreview] = useState(null); // Хранит URL для предпросмотра
  const [firstName, setFirstName] = useState(''); // Имя пользователя
  const [lastName, setLastName] = useState(''); // Фамилия пользователя
  const [phone, setPhone] = useState(''); // Телефон пользователя
  const [status, setStatus] = useState('Продавец'); // Статус пользователя (по умолчанию покупатель)

  const navigate = useNavigate();

  // Обработчик загрузки файла
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file)); // Создаем URL для предпросмотра
    }
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(firstName)
    if(!avatar) {
      alert("Аватар")
    } else if (!firstName) {
      alert("Имя")
    } else if(!lastName) {
      alert("Фамилия")
    } else if(!phone) {
      alert("Номер")
    } else if(!status) {
      alert("Статус")
    } else {
      // alert("Все заполнено")
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('phone', phone);
      formData.append('status', status);
      console.log(formData)
      if (status==='Продавец'){
        navigate('/Verification0');
      } else {
        navigate('/Catalog');
      }

    }

    // Пример запроса на сервер
    // fetch('/api/register', {
    //   method: 'POST',
    //   body: formData,
    // });
    // }
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
        <label htmlFor="avatar-upload">
          {preview ? (
            <>
              <div className="registration-user-photo-container">
                <img src={preview} alt="Avatar Preview" className="registration-user-photo"/>
              </div> 

              <div className="registration-user-photo-text">
                  Загрузите свой аватар
              </div> 
            </>
          ) : (
            <>
              <div className="registration-user-photo-container">
                <img src="./svg/empty_photo_reg.svg" alt="Avatar Preview" className="registration-user-photo"/>
              </div> 
              <div className="registration-user-photo-text">
                  Загрузите свой аватар
              </div>
            </>
          )}
        </label>
        <input
          type="file"
          id="avatar-upload"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
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
          {/* <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="buyer">Покупатель</option>
            <option value="seller">Продавец</option>
          </select> */}
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