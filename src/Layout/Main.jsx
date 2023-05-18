import React from "react";
import Navbar from "../Pages/Shered Page/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered Page/Footer";

const Main = () => {
    return (
        <>
            <div className="jm_container">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-200px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;
