import React from 'react';
import Navbar from '../components/navbar';
import logo from '../images/logo.png';

import './About.css'; 

const About = () => {
    return (
        <div className='about-us'>
            <Navbar />
            <div className='about-content'>
                <img src={logo} alt="logo" className='logo'/>
                
                <h1>About Us</h1>
                <p>PharmaShift is an innovative online medical store offering a seamless healthcare experience. 
                    Patients can consult with licensed doctors, search for nearby pharmacies, and order prescription 
                    and over-the-counter medications online. With a user-friendly interface and swift delivery options,
                     PharmaShift ensures convenient and accessible healthcare from the comfort of your home.





</p>
               
            </div>
            <div className='contact-information'>
                <h3>Contact Information</h3>
                <p>Phone Number: 9819094546</p>
                <p>Telephone Number:+025 94637   </p>
                <p>Email: <a href='mailto:pharmashift@gmail.com'>PharmaShift@gmail.com</a></p>
                <p>Website: <a href='http://pharmashift.com' target='_blank' rel='noopener noreferrer'>pharmashift.com</a></p>
            </div>
        </div>
    );
};

export default About;

