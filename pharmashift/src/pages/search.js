import React from 'react';
import Navbar from '../components/navbar'; // Ensure the correct path and filename casing
import DiseasesData from '../components/DiseasesData';
import Medicine from '../components/Medicine';
import './searchpage.css';

const Search = () => {
  return (
    <div className='search-page'>
      <Navbar />
      <div className="columns">
        <div className="left-column">
          <DiseasesData />
        </div>
        <div className="right-column">
          <Medicine />
        </div>
      </div>
    </div>
  );
};

export default Search;
