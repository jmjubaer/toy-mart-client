import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Blogs = () => {
    const [direction,setDirection] = useState(false);
    return (
        <div className="my-14">
            <div className="text-center relative mb-14  ">
                <h2 className="text-3xl md:text-5xl font-bold pb-3">Our Blogs</h2>
                <div className="w-28 h-1 bg-[#ff6898d2] absolute -bottom-3 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="collapse border-b-0 border-2 border-[#ff6899]">
                <input onClick={() => setDirection(!direction)} type="checkbox" />
                <div  className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <span className="text-3xl">{direction ? <FaAngleUp/> :<FaAngleDown/>} </span>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse border-b-0 border-2 border-[#ff6899]">
                <input onClick={() => setDirection(!direction)} type="checkbox" />
                <div  className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">Compare SQL and NoSQL databases?</h2>
                    <span className="text-3xl">{direction ? <FaAngleUp/> :<FaAngleDown/>} </span>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse border-b-0 border-2 border-[#ff6899]">
                <input onClick={() => setDirection(!direction)} type="checkbox" />
                <div  className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">What is express js? What is Nest JS?</h2>
                    <span className="text-3xl">{direction ? <FaAngleUp/> :<FaAngleDown/>} </span>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse border-2 border-[#ff6899]">
                <input onClick={() => setDirection(!direction)} type="checkbox" />
                <div  className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">What is MongoDB aggregate and how does it work?</h2>
                    <span className="text-3xl">{direction ? <FaAngleUp/> :<FaAngleDown/>} </span>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
