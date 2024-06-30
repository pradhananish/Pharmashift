import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    console.log('Navbar rendered');
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/pharmashift/src/images/logo.png">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`nav-menu ${isOpen ? '' : 'hide'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/near-me">Near Me</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

