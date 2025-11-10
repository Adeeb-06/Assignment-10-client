import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext)

    const location = useLocation()

    if (user) {
        return children
    }

    return <Navigate state={location.pathname}  to="/auth/login" />;

}

export default PrivateRoute