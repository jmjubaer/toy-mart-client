import React from "react";
import Navbar from "../Pages/Shered Page/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Shered Page/Footer";
import LoadingSpinner from "../Pages/Shered Page/LoadingSpinner";

const Main = () => {
    const navigation = useNavigation();
    console.log(navigation);
    if(navigation.state === "loading") {
        return <LoadingSpinner></LoadingSpinner>
    }
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
