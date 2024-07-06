import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './contact.css';

const Contact = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showChat, setShowChat] = useState(false); 

  const handleSearch = () => {
  
    const searchedResults = [
      { name: 'Dr. John Doe', online: true, appointmentMade: false },
      { name: 'Dr. Jane Smith', online: false, appointmentMade: true },
      { name: 'Dr. Michael Brown', online: true, appointmentMade: false }
    ];

  
    const filteredResults = searchedResults.filter(doctor =>
      doctor.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleOptionClick = (doctor, option) => {
    switch (option) {
      case 'chat':
        console.log(`Chat with ${doctor.name}`);
      
        setShowChat(true);
        break;
      case 'call':
        console.log(`Call ${doctor.name}`);
      
        break;
      case 'appointment':
        console.log(`Make appointment with ${doctor.name}`);
      
        doctor.appointmentMade = true;
        break;
      default:
        break;
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat); 
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
                <button className="option-button" onClick={() => handleOptionClick(doctor, 'chat')}>
                  Chat
                </button>
                {doctor.appointmentMade ? (
                  <>
                    <button className="option-button" onClick={() => handleOptionClick(doctor, 'call')}>
                      Call
                    </button>
                    <button className="option-button" onClick={() => handleOptionClick(doctor, 'appointment')}>
                      Make Appointment
                    </button>
                  </>
                ) : (
                  <span className="appointment-required">Appointment required</span>
                )}
              </div>
            ) : (
              <span className="offline">Offline</span>
            )}
          </li>
        ))}
      </ul>

     
      {showChat && (
        <div className="chat-modal">
          <div className="chat-header">
            <h3>Chat with Doctor</h3>
            <button className="close-button" onClick={toggleChat}>Close</button>
          </div>
          <div className="chat-body">
            {/* Chat interface goes here */}
            <p>Chat interface placeholder</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
