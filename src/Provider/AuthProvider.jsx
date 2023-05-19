import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContest = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState("jm");
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const provider =new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth,provider);
    }
    const logout = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,(loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        }))
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        logout,
        signIn,
        loading,
        createUser,
        googleSignIn
    }
    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;