import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsAuthenticated, setUser } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
     
        if (username === 'user' && password === 'pass') {
            setIsAuthenticated(true);
            setUser({ username, profilePic: '/path/to/profilePic.jpg' }); 
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleRegisterClick = () => {
        navigate('../Register');
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
                <div className="form-actions">
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleRegisterClick}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
