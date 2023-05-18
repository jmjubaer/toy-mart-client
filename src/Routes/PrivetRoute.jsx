import React, { useContext } from 'react';
import { AuthContest } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContest)
    if(user){
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;