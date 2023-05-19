import React, { useContext } from 'react';
import { AuthContest } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Pages/Shered Page/LoadingSpinner';

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContest)
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivetRoute;