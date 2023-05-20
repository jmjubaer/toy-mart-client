import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
const Gallery = () => {
    const [images,setImages] = useState([]);
    useEffect(()=> {
        fetch('https://toy-mart-server-rho.vercel.app/gallery')
        .then(res => res.json())
        .then(data => {
            setImages(data)
        })
    },[])
    useEffect(() =>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        })
    },[])
    return (
        <div className='my-14'>
            <div className="text-center relative mb-10">
                <h2 className="text-5xl font-bold">Our Products Gallery</h2>
                <p className="text-lg w-3/5 mx-auto mt-3">Discover a world of collectible toys and Toy dolls for enthusiasts</p>
                <div className="w-28 h-1 bg-[#ff6898d2] absolute -bottom-3 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    images.map(image => <img 
                        className='w-full h-60 object-contain border border-[#ff6899] p-5 rounded-tl-3xl rounded-br-3xl shadow-lg'
                        key={image?._id} 
                        data-aos="zoom-in"    
                        src={image?.image} />)
                }
            </div>
        </div>
    );
};

export default Gallery;