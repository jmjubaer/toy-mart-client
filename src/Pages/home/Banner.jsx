import React from "react";
import banner_1 from "../../assets/banner_1.jpg";
import banner_2 from "../../assets/banner_2.jpg";
import banner_3 from "../../assets/banner_3.jpg";
import banner_4 from "../../assets/banner_4.jpg";
const Banner = () => {
    return( 
    <div className="my-5 relative">
        <div className="carousel h-screen w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full justify-start">
                <img src={banner_1} className="w-full object-cover rounded-s-3xl" />
                <div className="p-8 absolute text-center text-white bg-[#ff6899] bg-opacity-50 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                        <h1 className='text-5xl font-bold'>Discover endless fun with our incredible collection of toys!</h1>
                        <p className='my-8 text-lg'>Welcome to our online toy wonderland! Dive into a treasure trove of toys that will spark imagination and bring endless joy to kids of all ages. Discover the latest trends, classic favorites, and everything in between as you embark on a journey of play and exploration</p>
                        <button className='btn bg-[#ff6899] px-10'>Shope now</button>
                    </div>
                </div>
                <div className="absolute control_btn_Left flex justify-between transform translate-y-1/2 left-5  right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899]">❮</a> 
                <a href="#slide2" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899]">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full justify-start">
                <img src={banner_2} className="w-full object-cover rounded-s-3xl" />
                <div className="p-8 absolute text-center text-white bg-[#ff6899] bg-opacity-80 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                        <h1 className='text-5xl font-bold'>Unleash the joy of playtime with our diverse range of toys for kids of all ages.</h1>
                        <p className='my-8 text-lg'>At our toy emporium, we believe in the power of play to inspire and educate. Browse our carefully curated selection of toys that encourage creativity, problem-solving, and development. From interactive games to educational puzzles, we have the perfect playtime companions for every child's unique interests.</p>
                        <button className='btn bg-[#ff6899] px-10'>Shope now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899] ">❮</a> 
                <a href="#slide3" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899] ">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full justify-start">
                <img src={banner_3} className="w-full object-cover rounded-s-3xl" />
                <div className="p-8 absolute text-center text-white bg-[#ff6899] bg-opacity-50 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                        <h1 className='text-5xl font-bold'>Explore a world of excitement and adventure through our captivating toy assortment</h1>
                        <p className='my-8 text-lg'>Step into a world of enchantment and delight with our enchanting toy collection. Immerse yourself in a magical realm where plush unicorns, brave action figures, and charming dolls come to life. Unleash your child's imagination and let the adventures begin</p>
                        <button className='btn bg-[#ff6899] px-10'>Shope now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899]">❮</a> 
                <a href="#slide4" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899]">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full justify-start">
                <img src={banner_4} className="w-full object-cover rounded-s-3xl" />
                <div className="p-8 absolute text-center text-white bg-[#ff6899] bg-opacity-50 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                        <h1 className='text-5xl font-bold'>Immerse yourself in a world of imagination and play with our fantastic toy selection</h1>
                        <p className='my-8 text-lg'>We understand that toys are not just objects but cherished companions that create cherished memories. That's why we offer a wide range of high-quality toys that are built to withstand the test of time and inspire countless hours of fun. From sturdy wooden toys to innovative electronic gadgets, we have something for every little adventurer.</p>
                        <button className='btn bg-[#ff6899] px-10'>Shope now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899]">❮</a> 
                <a href="#slide1" className="btn btn-circle transform hover:rotate-[360deg] hover:bg-[#ff6899]">❯</a>
                </div>
            </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 z-50 text-white absolute bottom-2">
            <a href="#slide1" className="btn btn-sm hover:bg-[#ff6899]">1</a> 
            <a href="#slide2" className="btn btn-sm hover:bg-[#ff6899]">2</a> 
            <a href="#slide3" className="btn btn-sm hover:bg-[#ff6899]">3</a> 
            <a href="#slide4" className="btn btn-sm hover:bg-[#ff6899]">4</a>
        </div> 
    </div>
    );
};

export default Banner;
