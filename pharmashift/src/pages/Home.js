import React from 'react';
import Navbar from '../components/navbar';
import Ads from '../components/ADS';
import Thoughts from '../components/thoughts';
import Login from '../components/login';
import Register from '../components/register';
import '../style.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="content">
                <Ads />
                <Thoughts />
                <Login />
                <Register />
            </div>
        </div>
    );
};

export default Home;
