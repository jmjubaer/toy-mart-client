import React, { useContext, useState } from 'react';
import logo from '../../assets/google.png'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContest } from '../../Provider/AuthProvider';


const SocialLogin = ({from}) => {
    const {googleSignIn} = useContext(AuthContest)
    const navigate = useNavigate();
    const handlegoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User Created successful', 
              })
            navigate(from)
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`
              })
        })
    }
    return (
        <div>
            <button onClick={handlegoogleSignIn} className="border text-white rounded-3xl w-full bg-[#FF6899] flex items-center">
                <div className="p-2 rounded-full bg-white"> <img src={logo} className="w-8 h-8 rounded-full inline-block" alt="" /> </div>
                <span className="flex-grow">Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;