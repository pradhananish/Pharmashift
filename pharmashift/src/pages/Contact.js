import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './contact.css'; // Import CSS file for Contact component styles

const Contact = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Simulating search results for demonstration
        const searchedResults = [
            { name: 'Dr. John Doe', online: true },
            { name: 'Dr. Jane Smith', online: false },
            { name: 'Dr. Michael Brown', online: true }
            // Add more doctors as needed
        ];
        setResults(searchedResults);
    };

    const handleOptionClick = (doctor, option) => {
        // Implement logic based on the selected option
        switch (option) {
            case 'chat':
                console.log(`Chat with ${doctor.name}`);
                break;
            case 'call':
                console.log(`Call ${doctor.name}`);
                break;
            case 'appointment':
                console.log(`Make appointment with ${doctor.name}`);
                break;
            default:
                break;
        }
    };

    return (
        <div className='Contact'>
            <Navbar />
            <div className='SearchBox'>
                <input
                    type='text'
                    value={query}
                    className='SearchBox-input'
                    placeholder='Search Doctors'
                    onChange={e => setQuery(e.target.value)}
                />
                <button className='SearchButton' onClick={handleSearch}>Search</button>
            </div>
            <ul className='result-lists'>
                {results.map((doctor, index) => (
                    <li key={index} className="result-item">
                        {doctor.name}
                        {doctor.online ? (
                            <div className="options-container">
                                <button className="option-button" onClick={() => handleOptionClick(doctor, 'chat')}>Chat</button>
                                <button className="option-button" onClick={() => handleOptionClick(doctor, 'call')}>Call</button>
                                <button className="option-button" onClick={() => handleOptionClick(doctor, 'appointment')}>Appointment</button>
                            </div>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;
