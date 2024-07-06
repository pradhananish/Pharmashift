import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import './Nearme.css'; 

const Nearme = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [map, setMap] = useState(null);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC8UCbPapNOUKei_-ykUUT-K6RQBgzkdh4`;
        script.async = true;
        script.onload = () => setGoogleMapsLoaded(true);
        document.body.appendChild(script);
      } else {
        setGoogleMapsLoaded(true);
      }
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (googleMapsLoaded) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      setMap(map);
    }
  }, [googleMapsLoaded]);

  const handleSearch = () => {
   
    const locations = [
      { name: 'Hospital A', address: '123 Main St', lat: -34.397, lng: 150.644 },
      { name: 'Clinic B', address: '456 Oak Ave', lat: -34.407, lng: 150.654 },
      { name: 'Pharmacy C', address: '789 Elm Blvd', lat: -34.417, lng: 150.664 },
    ];

    
    const filteredResults = locations.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);

    if (map) {
      markers.forEach(marker => marker.setMap(null));

    
      const markers = filteredResults.map(location => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
        });
        return marker;
      });
    }
  };

  const handleLocationClick = (location) => {
    
    console.log('Clicked on:', location);
    
    if (map) {
      map.panTo({ lat: location.lat, lng: location.lng });
    }
  };

  return (
    <div className="nearme-page">
      <Navbar />
      <div className="Medicine">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search location..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div id="map" className="map"></div>
        <ul className="results-list">
          {results.map((location, index) => (
            <li
              key={index}
              className="result-item"
              onClick={() => handleLocationClick(location)}
            >
              <div className="location-name">{location.name}</div>
              <div className="location-address">{location.address}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nearme;
