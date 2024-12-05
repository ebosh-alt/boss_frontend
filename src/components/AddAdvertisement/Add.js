import React, {Fragment, useState} from 'react';
import '../../styles/AddAdvertisement.css';
import {CiCamera} from "react-icons/ci";
import {IoChevronBackOutline} from "react-icons/io5";
import {GoPlus} from "react-icons/go";
import {ReactComponent as EditIcon} from '../../assets/editIcon.svg';

const Add = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [photos, setPhotos] = useState([]);
    const [mainPhoto, setMainPhoto] = useState("");

    const handleAddPhoto = (event, isMainPhoto = false) => {
        const files = Array.from(event.target.files);
        if (isMainPhoto) {
            setMainPhoto(files[0]);
        } else {
            if (photos.length + files.length <= 9) {
                setPhotos([...photos, ...files]);
            } else {
                alert("Максимум можно загрузить 10 изображений!");
            }
        }
    };

    const handleRemovePhoto = (index, isMainPhoto = false) => {
        // const files = Array.from(event.target.files);
        if (isMainPhoto) {
            setMainPhoto("");
        } else {
            setPhotos(photos.filter((_, i) => i !== index));
        }
        // files.shift();

    };


    return (
        <div className="productForm">
            <div className="formGroup">
                <div className="imagePlaceholder">
                    {mainPhoto ? (
                        <div className="photoPreview">
                            <img src={mainPhoto ? URL.createObjectURL(mainPhoto) : "svg/photoPreview.svg"} alt=""
                                 className="photoImgPlaceholder"/>
                            <button
                                onClick={() => handleRemovePhoto(0, true)}
                                className="removePhotoBtnPlaceholder">×
                            </button>
                        </div>
                    ) : (
                        <label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(event) => handleAddPhoto(event, true)} // Добавляем как главное фото
                                className="addPhotoInput"
                            />
                            <CiCamera className="cameraIcon"/>
                        </label>
                    )}
                </div>
                <div className="inputFields">
                    <label>Название</label>
                    <textarea
                        className="inputDescription"
                        inputMode="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Стоимость</label>
                    <input
                        className="inputPrice"
                        type="number"
                        min="0"
                    />
                </div>

            </div>
            <div className="photoUploader">
                <label>
                    Добавьте главное и дополнительное изображение товара
                </label>
                <div className="photoUploaderContainer">
                    {photos.slice(0).map((photo, index) => (
                        <div key={index} className="photoPreview">
                            <img
                                src={URL.createObjectURL(photo)}
                                alt={`Фото ${index + 1}`}
                                className="photoImg"
                            />
                            <button
                                onClick={() => handleRemovePhoto(index)}
                                className="removePhotoBtn">×
                            </button>
                        </div>
                    ))}
                    {photos.length < 9 && (
                        <label className="addPhotoLabel">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(event) => handleAddPhoto(event)} // Добавляем как главное фото
                                className="addPhotoInput"
                            />
                            <GoPlus className="addPhotoIcon"/>
                        </label>
                    )}

                </div>
            </div>
            <div className="additionalInformation">
                <div className="formField">
                    <label htmlFor="description" className="fieldLabel">Описание</label>
                    <div className="fieldContainer">
                        <textarea
                            id="description"
                            className="descriptionInput"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}/>
                        <div className="editIconContainer">
                            <EditIcon/>
                        </div>
                    </div>
                </div>
                <div className="formField">
                    <label htmlFor="location" className="fieldLabel">Местоположение</label>
                    <div className="fieldContainer">
                        <input id="location"
                               type="text"
                               className="locationInput"
                               value={location}
                               onChange={(e) => setLocation(e.target.value)}
                        />
                        <div className="editIconContainer">
                            <EditIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promotionBlock">
                <div className="promotionInfo">
                    <p>Блок для информации о продвижении</p>
                    <button className="promoteButton">Продвигать</button>
                </div>
                <button className="submitAdButton">Разместить объявление</button>
            </div>
            <footer className="footerClass">

            </footer>
        </div>);
};

export default Add;
