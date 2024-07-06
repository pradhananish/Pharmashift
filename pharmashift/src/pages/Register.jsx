import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const { setIsAuthenticated, setUser } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        reader.onloadend = () => {
            const newUser = { username, profilePic: reader.result };
            setUser(newUser);
            setIsAuthenticated(true);
            localStorage.setItem('registeredUser', JSON.stringify(newUser));
            navigate('/login');
        };

        if (profilePic) {
            reader.readAsDataURL(profilePic);
        } else {
            alert('Please upload a profile picture.');
        }
    };

    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    return (
        <div className="register-container">
            <h1>Register Page</h1>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username"
                    required
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password"
                    required
                />
                <input 
                    type="file" 
                    onChange={handleProfilePicChange}
                    accept="image/*"
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
