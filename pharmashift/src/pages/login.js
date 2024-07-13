// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { login } from '../api'; // Assuming you have an API function for login
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); 
    const navigate = useNavigate();
    const { setIsAuthenticated, setUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
            setIsAuthenticated(true);
            setUser(response.data);
            switch (role) {
                case 'admin':
                    navigate('/admin');
                    break;
                case 'doctor':
                    navigate('/doctor');
                    break;
                case 'medicalStore':
                    navigate('/medical-store');
                    break;
                default:
                    navigate('/');
                    break;
            }
        } catch (error) {
            alert('Invalid username or password');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <select 
                        name="role" 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="medicalStore">Medical Store</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleRegisterClick}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

