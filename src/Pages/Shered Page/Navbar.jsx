import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/favicon.png'
import { FaBars,FaTimes } from 'react-icons/fa';
import { AuthContest } from "../../Provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const {user} =  useContext(AuthContest)
    const [control, setControl] = useState(false);
    return (
        <div className="bg-[#FF6899] rounded-full px-5 py-3 my-5 text-white">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center'>
            <div className='text-4xl lg:col-span-2 flex gap-2'>
                        <img className="w-12 h-12 object-cover rounded-xl" src={logo} alt="" />
                        <Link to="/"><span className='font-serif text-5xl text-[#C3345F] '>J</span>m <span className='font-serif text-5xl text-[#C3345F]'>T</span>oy <span className='font-serif text-5xl text-[#C3345F]'>M</span>art</Link>
                    </div>

                <div className={`jm_nav ${control ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#C3345F]" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#C3345F]" : "" } to="/allToys">All Toys</NavLink></li>
                        {
                            
                          user && <>
                                <li><NavLink className={({ isActive }) => isActive ? "text-[#C3345F]" : "" } to="/myToy">My Toys</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-[#C3345F]" : "" } to="/addToys">Add A Toy</NavLink></li>
                            </>
                            
                        }
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#C3345F]" : "" } to="/blogs">Blog</NavLink></li>
                    </ul>
                    <div className="">
                    <Tooltip id='my-tooltip' />
                        {
                            user ? <Link
                             data-tooltip-id="my-tooltip" 
                            data-tooltip-content={user?.displayName} 
                            data-tooltip-place="top" to="/profiles">
                                <img data-tooltip-id="my-tooltip" className="w-12 h-12 rounded-full object-cover border bg-white" src={user?.photoURL} alt="" />
                            </Link> : <Link className="btn btn-outline text-white rounded-full" to="/login">Login</Link>
                        }
                    </div>
                </div>
                <button onClick={() => setControl(!control)} className='block lg:hidden'>{control ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
