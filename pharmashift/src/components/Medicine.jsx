import React, { useState } from 'react';
import './Medicine.css';

const MedicineData = {
  Aspirin: 'Aspirin is used to reduce pain, fever, or inflammation.',
  Ibuprofen: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID).',
  Paracetamol: 'Paracetamol is used to treat pain and fever.',
  Metformin: 'Metformin is used to control blood sugar levels.',
  Lisinopril: 'Lisinopril is an ACE inhibitor used to treat high blood pressure.',
  Atorvastatin: 'Atorvastatin is used to lower cholesterol and triglyceride levels.',
};

const DiseasesData = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Filter medicine data based on the query
    const filteredResults = Object.keys(MedicineData).filter(medicine =>
      medicine.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleMedicineClick = (medicine) => {
    // Handle click action based on medicine name
    console.log(`Clicked on ${medicine}`);
    // Implement navigation or other actions based on the medicine clicked
  };

  return (
    <div className="Medicine">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search medicine..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <ul className="results-list">
        {results.map((medicine, index) => (
          <li
            key={index}
            className="result-item"
            onClick={() => handleMedicineClick(medicine)}
          >
            {medicine}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseasesData;
