import React from 'react';

const gymImages = [
    '../Images/bodypic1.jpg',
    '../Images/poster.png',
    '../Images/pic1.jpg',
    '../Images/gymlogo.jpg',
    '../Images/poster1.png',
    '../Images/gymlogo1.jpg'
];

export default function Images() {
    return (
        <div className="gym-image-cluster">
            {gymImages.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image} alt={`Gym ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

