import React from 'react';
import animation from "../../assets/animation.json"
import Lottie from "lottie-react";
import { FaHeadset } from 'react-icons/fa';
const Opinion = () => {
    return (
        <div className='my-14'>
            <div className="text-center mb-10 relative">
                <h2 className="text-3xl sm:text-5xl font-bold">Why Choose Us</h2>
                <p className="text-lg w-11/12 sm:w-3/5 mx-auto mt-3">Join our vibrant community and experience the joy of shopping with us today</p>
                <div className="w-28 h-1 bg-[#ff6898d2] absolute -bottom-3 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="grid lg:grid-cols-2 items-center gap-5">
                <div className="">
                    <Lottie animationData={animation} loop={true} />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-1">
                    <div className="grid sm:grid-cols-12 text-center sm:text-left justify-center gap-5 items-center sm:justify-start">
                        <div className="sm:col-span-2 mx-auto">
                            <FaHeadset className='text-5xl text-[#ff6899]'/>
                        </div>
                        <div className="sm:col-span-9">
                            <h3 className='text-xl sm:text-2xl font-bold mb-2'>24/7 Customer support</h3>
                            <p>We are always try to give best support for gain honorable customer</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-12 text-center sm:text-left justify-center gap-5 items-center sm:justify-start my-10">
                        <div className="mx-auto sm:col-span-2">
                            <FaHeadset className='text-5xl text-[#ff6899]'/>
                        </div>
                        <div className="sm:col-span-9">
                            <h3 className='text-xl sm:text-2xl font-bold mb-2'>Quality and Safety</h3>
                            <p>All our products undergo rigorous quality checks and adhere to the highest safety standards, ensuring you can shop with confidence</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-12 text-center sm:text-left justify-center gap-5 items-center sm:justify-start my-10">
                        <div className="mx-auto sm:col-span-2">
                            <FaHeadset className='text-5xl text-[#ff6899]'/>
                        </div>
                        <div className="sm:col-span-9">
                            <h3 className='text-xl sm:text-2xl font-bold mb-2'>Customer Satisfaction</h3>
                            <p>Your satisfaction is our top priority. We value your feedback and continually strive to improve our services</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-12 text-center sm:text-left justify-center gap-5 items-center sm:justify-start">
                        <div className="mx-auto sm:col-span-2">
                            <FaHeadset className='text-5xl text-[#ff6899]'/>
                        </div>
                        <div className="sm:col-span-9">
                            <h3 className='text-xl sm:text-2xl font-bold mb-2'>Competitive Pricing</h3>
                            <p>we offer competitive pricing and regular discounts, making our toys affordable for families of all budgets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opinion;