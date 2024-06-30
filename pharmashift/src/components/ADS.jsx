import React, { useState, useEffect } from 'react';
import '../components/ads.css';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';

const adImages = [
    photo1,
    photo2,
    photo3,
    // Add more image imports
];

const Ads = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % adImages.length);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="ad-box">
            <h2></h2>
            <div className="ad-image">
                <img src={adImages[currentIndex]} alt={`Ad ${currentIndex + 1}`} />
            </div>
        </div>
    );
};

export default Ads;
