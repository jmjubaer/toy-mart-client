import React, { useEffect } from 'react';
import Banner from './Banner';
import ShopeBYCategory from './Catagory/ShopeBYCategory';
import Gallery from './Gallery';
import Achievement from './Achievement';
import Opinion from './Opinion';

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
            <Opinion></Opinion>
        </div>
    );
};

export default Home;