import React from 'react';
import banner_1 from "../../assets/banner_1.jpg"
import banner_2 from "../../assets/banner_2.jpg"
import banner_3 from "../../assets/banner_3.jpg"
import banner_4 from "../../assets/banner_4.jpg"
const Banner = () => {
    return (
        <div className="carousel h-screen w-full my-5 rounded-xl banner_bg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner_1} className="w-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>  
        </div>
    );
};

export default Banner;