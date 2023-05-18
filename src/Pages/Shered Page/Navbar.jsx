import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';
import { AuthContest } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user} =  useContext(AuthContest)
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-[#FF6899] rounded-full px-5 py-2 my-5 text-white">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center'>
                <h1 className='text-4xl lg:col-span-2 jm-shadow'>
                    <Link to="/"><span className='font-serif text-5xl text-[#C3345F] '>J</span>m <span className='font-serif text-5xl text-[#C3345F]'>T</span>oy <span className='font-serif text-5xl text-[#C3345F]'>W</span>orld</Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/statistics">All Toys</NavLink></li>
                        {
                            user && <>
                                <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/applied">My Toys</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/blogs">Add A Toy</NavLink></li>
                            </>
                            
                        }
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/blogs">Blog</NavLink></li>
                    </ul>
                    <div className="">
                        {
                            user ? <Link to="/profiles">
                                <img title={user?.displayName} className="w-12 h-12 rounded-full object-cover border bg-white" src={user?.photoURL} alt="" />
                            </Link> : <Link>Login</Link>
                        }
                    </div>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
