import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const { user, setIsAuthenticated, setUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [profilePic, setProfilePic] = useState(user.profilePic);
    const [newProfilePic, setNewProfilePic] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('registeredUser');
        navigate('/');
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedUser = { ...user, username, profilePic: reader.result || profilePic };
            setUser(updatedUser);
            localStorage.setItem('registeredUser', JSON.stringify(updatedUser));
            setIsEditing(false);
        };

        if (newProfilePic) {
            reader.readAsDataURL(newProfilePic);
        } else {
            const updatedUser = { ...user, username, profilePic };
            setUser(updatedUser);
            localStorage.setItem('registeredUser', JSON.stringify(updatedUser));
            setIsEditing(false);
        }
    };

    const handleProfilePicChange = (e) => {
        setNewProfilePic(e.target.files[0]);
    };

    return (
        <div className="profile-container">
            <h1>Profile Page</h1>
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username"
                    />
                    <input 
                        type="file" 
                        onChange={handleProfilePicChange}
                        accept="image/*"
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <h2>{username}</h2>
                    <button onClick={handleEdit}>Edit Profile</button>
                </div>
            )}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;

