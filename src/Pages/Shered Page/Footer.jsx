import React from "react";
import logo from "../../assets/favicon.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt,FaRegEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer_bg py-5 text-[#1c1c1c]">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 jm_container ">
                <div className="sm:col-span-2 self-center">
                    <div className='text-4xl lg:col-span-2 flex gap-2'>
                        <img className="w-12 h-12 object-cover" src={logo} alt="" />
                        <Link to="/"><span className='font-serif text-5xl text-[#C3345F] '>J</span>m <span className='font-serif text-5xl text-[#C3345F]'>T</span>oy <span className='font-serif text-5xl text-[#C3345F]'>M</span>art</Link>
                    </div>
                    <p className="text-lg mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui eaque corporis tempora autem iste asperiores? Numquam ea cupiditate possimus dolorem, provident, modi ratione quaerat earum tempora labore nostrum ullam.
                    </p>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                    <div className="flex gap-3 items-center">
                        <div className="p-3 rounded-full bg-[#ff6899] w-fit">
                            <FaMapMarkerAlt className="text-2xl text-white"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Location:</h3>
                            <p>4005, Silver business point Savar</p>
                        </div>  
                    </div>
                    <div className="flex gap-3 mt-3 items-center">
                        <div className="p-3 rounded-full bg-[#ff6899] w-fit">
                            <FaPhoneAlt className="text-2xl text-white"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Contact Us:</h3>
                            <p>+1234567890</p>
                        </div>  
                    </div>
                    <div className="flex gap-3 mt-3 items-center">
                        <div className="p-3 rounded-full bg-[#ff6899] w-fit">
                            <FaRegEnvelope className="text-2xl text-white"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Email:</h3>
                            <p>info@example.com</p>
                        </div>  
                    </div>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="hover:text-amber-600 block my-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className="hover:text-amber-600 block my-2"
                            >
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="divider text-white after:bg-[#C3345F] before:bg-[#C3345F]">
                <ul className="flex gap-2">
                    <li><a href="#" className=" text-xl p-2 inline-block rounded-full bg-blue-800"><FaFacebookF/></a></li>
                    <li><a href="#" className=" text-xl p-2 inline-block rounded-full bg-blue-400"><FaTwitter/></a></li>
                    <li><a href="#" className=" text-xl p-2 inline-block rounded-full bg-[#C131A6]"><FaInstagram/></a></li>
                    <li><a href="#" className=" text-xl p-2 inline-block rounded-full bg-[#0077B5]"><FaLinkedin/></a></li>
                </ul>
            </div>
            <p className="text-center my-5">
                © 2023. Jm Toy Mart . All rights reserved.{" "}
            </p>
            
        </div>
    );
};

export default Footer;
