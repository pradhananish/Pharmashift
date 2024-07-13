import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Search from './pages/search';
import NearMe from './pages/Nearme';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import MedicalStoreDashboard from './pages/MedicalStoreDashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/near-me" element={<NearMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/user" element={<PrivateRoute element={<UserProfile />} allowedRoles={['user', 'admin']} />} />
                        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} allowedRoles={['admin']} />} />
                        <Route path="/doctor" element={<PrivateRoute element={<DoctorDashboard />} allowedRoles={['doctor']} />} />
                        <Route path="/medical-store" element={<PrivateRoute element={<MedicalStoreDashboard />} allowedRoles={['medicalStore']} />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
