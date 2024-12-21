import React from 'react';
import './CollagePage.css'; // Import the CSS for styling

const imageUrls = [
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg',
    '/img4.jpeg',
];

// Function to generate a random rotation between 0 and 30 degrees
const getRandomRotation = () => {
    return `${Math.floor(Math.random() * 31)}deg`; // Random rotation between 0 and 30 degrees
};

const rotations=['10 deg','-20deg','30deg','-20deg']

const CollagePage = () => {
    return (
        <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'90vh'}}>
        <div className="collage-container">
            {imageUrls.map((url, index) => (
                <div
                    key={index}
                    className="image-container"
                    style={{ transform: `rotate(${rotations[index]})` }} // Apply random rotation
                >
                    <img src={url} alt={`collage-image-${index}`} className="collage-image" />
                </div>
            ))}
        </div>
            <h1 style={{textAlign:'center'}}>Achieve your dreams !!!</h1>
        </div>

    );
};

export default CollagePage;
