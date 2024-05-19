// AuthRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './isAuthenticated';

const AuthRoute = ({ element: Component, ...rest }) => {
    return isAuthenticated() ? < Navigate to = "/dashboard" /> : Component;
};

export default AuthRoute;