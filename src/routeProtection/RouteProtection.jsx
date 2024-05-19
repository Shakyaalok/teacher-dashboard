// ProtectedRoute.js
import React from 'react';
import {  useNavigate,Navigate } from 'react-router-dom';
import {auth} from '../middlewares/auth';

const RouteProtection = ({ element: Component, ...rest }) => {
    return auth() ? Component : <Navigate to="/login" />;
};

export default RouteProtection;
