// ProtectedRoute.js
import React from 'react';
import {  Navigate } from 'react-router-dom';
import {isAuthenticated} from '../middlewares/isAuthenticated';

const RouteProtection = ({ element: Component, ...rest }) => {
    return isAuthenticated() ? Component : <Navigate to="/login" />;
  };

export default RouteProtection;
