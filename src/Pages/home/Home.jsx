import React from 'react';
import Banner from './Banner';
import ShopeBYCategory from './Catagory/ShopeBYCategory';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopeBYCategory></ShopeBYCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;