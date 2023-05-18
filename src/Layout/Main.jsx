import React from 'react';
import Navbar from '../Pages/Shered Page/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='jm_container'> 
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
