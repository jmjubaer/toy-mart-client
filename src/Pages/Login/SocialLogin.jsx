import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import logo from '../../assets/google.png'
import Swal from 'sweetalert2';

const auth = getAuth(app);

const SocialLogin = () => {
    const [err,setErr] = useState("");
    const Provider = new GoogleAuthProvider();
    const handlegoogleSignIn = () => {
        setErr("")
        signInWithPopup(auth,Provider)
        .then(result => {
            const user = result.user;
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User Created successful', 
              })
            // navigate(from)
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`
              })
            setErr(error.message)
        })
    }
    return (
        <div>
            <span className='text-red-500 my-3 block'>{err}</span>
            <button onClick={handlegoogleSignIn} className="border text-white rounded-3xl w-full bg-[#FF6899] flex items-center">
                <div className="p-2 rounded-full bg-white"> <img src={logo} className="w-8 h-8 rounded-full inline-block" alt="" /> </div>
                <span className="flex-grow">Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;