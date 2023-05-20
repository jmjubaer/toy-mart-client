import React from 'react';
import { FaStar, FaTrophy, FaUser } from 'react-icons/fa';

const Achievement = () => {
    return (
        <div className='my-14'>
            <div className="text-center relative mb-14">
                <h2 className="text-5xl font-bold">The Achievements We Get</h2>
                <p className="text-lg w-3/5 mx-auto mt-3">We always try harder every day to give our customers the best experience.</p>
                <div className="w-28 h-1 bg-[#ff6898d2] absolute -bottom-3 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-8">
                    <div className="border-2 rounded-full border-[#ff6899] w-fit p-5 text-[#ff6899]">
                        <FaTrophy className='text-6xl'/>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>Sales</h3>
                        <p className='text-5xl font-bold'>3600+</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="border-2 rounded-full border-[#ff6899] w-fit p-5 text-[#ff6899]">
                        <FaUser className='text-6xl'/>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>Customers</h3>
                        <p className='text-5xl font-bold'>1200+</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="border-2 rounded-full border-[#ff6899] w-fit p-5 text-[#ff6899]">
                        <FaStar className='text-6xl'/>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>Reviews</h3>
                        <p className='text-5xl font-bold'>1100+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;