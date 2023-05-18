import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';
import { AuthContest } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user} =  useContext(AuthContest)
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center my-5'>
                <h1 className='text-4xl lg:col-span-2 jm-shadow'><Link to="/"><span className='font-serif text-5xl text-blue-e '>J</span>m <span className='font-serif text-5xl text-blue-e'>J</span>ob <span className='font-serif text-5xl text-blue-e'>P</span>ortal</Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/applied">Applied Jobs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/blogs">Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF6899]" : "" } to="/login">Login</NavLink></li>
                    </ul>
                    <div className="">
                        {
                            user ? <Link to="/">
                                <img title={user?.displayName} className="w-12 h-12 rounded-full object-cover border" src={user?.photoURL} alt="" />
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
