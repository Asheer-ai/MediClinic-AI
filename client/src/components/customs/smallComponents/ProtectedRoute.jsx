import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return userInfo ? children : <Navigate to="/auth/signup" />
    

}

export default ProtectedRoute;