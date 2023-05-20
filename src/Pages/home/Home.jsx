import React, { useEffect } from 'react';
import Banner from './Banner';
import ShopeBYCategory from './Catagory/ShopeBYCategory';
import Gallery from './Gallery';
import Achievement from './Achievement';

const Home = () => {
    useEffect(()=> {
        document.title = "Jm Toy Mart"
    },[])
    return (
        <div>
            <Banner></Banner>
            <ShopeBYCategory></ShopeBYCategory>
            <Gallery></Gallery>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;