import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './style.css';
import logo from '../images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleProfileClick = () => {
        if (isAuthenticated) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
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
                    {isAuthenticated && user ? (
                        <div className="profile-picture" onClick={handleProfileClick}>
                            <img src={user.profilePic} alt="Profile" />
                        </div>
                    ) : (
                        <div className="profile-picture" onClick={handleProfileClick}>
                            <img src="/default-profile.png" alt="Profile" />
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

