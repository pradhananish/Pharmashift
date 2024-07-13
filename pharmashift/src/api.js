// src/api.js
import axios from 'axios';

export const login = async ({ username, password }) => {
    try {
        const response = await axios.post('http://localhost:8000/api/token/', {
            username,
            password
        });
        
        // Assuming your API returns data in a structure similar to { data: { username, role } }
        const userData = response.data;
        
        return userData;
    } catch (error) {
        // Handle error
        throw new Error('Invalid username or password');
    }
};

