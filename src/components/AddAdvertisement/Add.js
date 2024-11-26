import React, { useState } from 'react';
import '../../styles/AddAdvertisement.css';

const Add = () => {
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    // Функция для обработки загрузки изображений
    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files.length + images.length <= 5) {
            const newImages = [...images, ...Array.from(files)];
            setImages(newImages);
        } else {
            alert('Вы можете загрузить не более 5 изображений');
        }
    };

    // Функция для удаления изображения
    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    return (
        <div className="product-form">
            <div className="form-group">
                <div className="image-placeholder">
                    <img src={images[0] ? URL.createObjectURL(images[0]) : ""} alt="Основное изображение" />
                </div>
                <div className="input-fields">
                    <input
                        type="text"
                        placeholder="Название"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Стоимость"
                        min="0"
                    />
                </div>
            </div>
            <div className="image-upload">
                {/*<label>Добавьте главное и дополнительное изображение товара</label>*/}
                {/*<div className="images">*/}
                {/*    {images.slice(0, 5).map((image, index) => (*/}
                {/*        <div key={index} className="image-box">*/}
                {/*            <img src={URL.createObjectURL(image)} alt={`image-${index}`} />*/}
                {/*            <button onClick={() => removeImage(index)}>Удалить</button>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*    {images.length < 5 && (*/}
                {/*        <div className="add-image">*/}
                {/*            <label htmlFor="image-upload" className="plus-button">+</label>*/}
                {/*            <input*/}
                {/*                id="image-upload"*/}
                {/*                type="file"*/}
                {/*                accept="image/*"*/}
                {/*                onChange={handleImageUpload}*/}
                {/*                style={{ display: 'none' }}*/}
                {/*                multiple*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
            {/*<textarea*/}
            {/*    value={description}*/}
            {/*    onChange={(e) => setDescription(e.target.value)}*/}
            {/*    placeholder="Описание"*/}
            {/*/>*/}
        </div>
    );
};

export default Add;
