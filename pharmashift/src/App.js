import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Search from './pages/search';
import NearMe from './pages/Nearme';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    return (
        <Router>
            <div className="App">
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/near-me" element={<NearMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
