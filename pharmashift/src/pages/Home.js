import React from 'react';
import Navbar from '../components/navbar';
import Ads from '../components/ADS';
import Thoughts from '../components/thoughts';
import Doctorlist from'../components/Doctorlist';
import './homepage.css';


import '../style.css';
const Home = () => {
    return (
        <div className='home-page'>
           <Navbar />
            <div className="left-column">
                <Ads />
                <Thoughts />

            </div>
            <div className="right-column">
                <Doctorlist></Doctorlist>
            </div>
        </div>
    );
};

export default Home;
