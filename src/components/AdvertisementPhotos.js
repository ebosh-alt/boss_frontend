import UserContext from "../utils/contexts";
import {useContext, useState} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/AdvertisementPhotos.css"

function AdvertisementPhotos( {photos} ) {
    const {userId, setUserId} = useContext(UserContext);

    const settings = {
        dots: true,             // Показываем индикаторы снизу
        infinite: false,         // Зацикливаем слайдер
        speed: 100,             // Скорость перехода
        slidesToShow: 1,        // Показываем по 1 слайду за раз
        slidesToScroll: 1,      // Прокручиваем по 1 слайду
        arrows: false,           // Убираем стандартные кнопки
    };

    return (
        <>
        <div className="slider-container">
            <button className="back-button">
                &larr;
            </button>
            <Slider {...settings}>
                {photos.map((image) => (
                    <div key={image.ID} className="slide">
                        <img src={image.Path} className="slide-image" alt={`Slide ${image.ID}`}  />
                        
                        {/* className="slide-image" */}
                    // </div>
                ))}
            </Slider>
        </div>
        </>
    );
};

  

export default AdvertisementPhotos;
