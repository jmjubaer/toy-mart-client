import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContest = createContext(null);
// const auth = getAut(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState("jm");
    const authInfo = {
        user,
    }
    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;