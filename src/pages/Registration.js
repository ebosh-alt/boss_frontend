import "../components/Registration.css"

// function Registration() {
//     return (
//         <>
//             <div className="section-name">
//                 <p>Registration</p>
//             </div>
//             <div className="registration-user-photo-section">
//                 <img src="./G_powerTQ2.jpg" className="registration-user-photo" />
//                 <p className="registration-user-photo-text">Загрузите свой аватар</p>
//             </div>
//         </>
//     );
// }

// export default Registration;

import React, { useState } from 'react';

function Registration() {
  const [avatar, setAvatar] = useState(null); // Хранит загруженное изображение
  const [preview, setPreview] = useState(null); // Хранит URL для предпросмотра
  const [firstName, setFirstName] = useState(''); // Имя пользователя
  const [lastName, setLastName] = useState(''); // Фамилия пользователя
  const [phone, setPhone] = useState(''); // Телефон пользователя
  const [status, setStatus] = useState('buyer'); // Статус пользователя (по умолчанию покупатель)

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
    if (!avatar || !firstName || !lastName) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    // Логика отправки данных на сервер, например, через API
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phone', phone);
    formData.append('status', status);
    
    // Пример запроса на сервер
    // fetch('/api/register', {
    //   method: 'POST',
    //   body: formData,
    // });
  };

  return (
    <>
      <div className='registration-section-name'>
        Регистрация
      </div>
    <form onSubmit={handleSubmit}>
      <div className='registration-user-photo-section'>
        <label htmlFor="avatar-upload">
          {preview ? (
            <>
                <img src={preview} alt="Avatar Preview" className="registration-user-photo"/>

                <div className="registration-user-photo-text">
                    Загрузите свой аватар
                </div> 
            </>
          ) : (
            <>
              <div className="registration-user-photo-container">
                <img src="./empty_logo.png" alt="Avatar Preview" className="registration-user-photo"/>
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
              className="registration-flname-input-field"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder='Имя'
            />    
            <div className="refistration-flname-empty-block"></div>
            <input
              className="registration-flname-input-field"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
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
              required
              placeholder="Телефон"
            />
          </label>
        </div>
      </div>

      {/* <div>
        <label>
          Статус:
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="buyer">Покупатель</option>
            <option value="seller">Продавец</option>
          </select>
        </label>
      </div> */}

      <button className="submit-registration" type="submit">Завершить регистрацию</button>
    </form>
    </>
  );
};

export default Registration;