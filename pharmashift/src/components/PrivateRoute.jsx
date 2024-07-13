// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ element, allowedRoles, ...rest }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && allowedRoles.indexOf(user.role) === -1) {
        return <Navigate to="/" />; 
     }

    return <Route {...rest} element={element} />;
};

export default PrivateRoute;
