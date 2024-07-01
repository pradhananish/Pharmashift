import React, { useState } from 'react';
import './DiseasesData.css';

const Medicine = {
  'Heart Attack': {
    details: 'A heart attack occurs when the flow of blood to the heart is blocked.',
    precautions: 'Avoid smoking and manage your blood pressure.',
    medicines: ['Aspirin', 'Atorvastatin']
  },
  'Arthritis': {
    details: 'Arthritis is the swelling and tenderness of one or more joints.',
    precautions: 'Maintain a healthy weight and stay active.',
    medicines: ['Ibuprofen', 'Paracetamol']
  },
  'Fever': {
    details: 'A temporary increase in body temperature, often due to an illness.',
    precautions: 'Stay hydrated and rest.',
    medicines: ['Paracetamol', 'Ibuprofen']
  },
  'Diabetes': {
    details: 'A disease that occurs when your blood glucose is too high.',
    precautions: 'Monitor your blood sugar levels regularly.',
    medicines: ['Metformin']
  }
};

const DiseasesData = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = Object.keys(Medicine).filter(disease =>
      disease.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleDiseaseClick = (disease) => {
    // Handle click action based on disease name
    console.log(`Clicked on ${disease}`);
    // Example: Navigate to a details page using React Router
    // history.push(`/details/${encodeURIComponent(disease)}`);
  };

  return (
    <div className="Medicine">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search disease..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <ul className="results-list">
        {results.map((disease, index) => (
          <li
            key={index}
            className="result-item"
            onClick={() => handleDiseaseClick(disease)}
          >
            {disease}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseasesData;
