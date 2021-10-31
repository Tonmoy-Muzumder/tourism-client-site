import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Plans from '../../Plans/Plans';
import Banner from '../Banner/Banner';
import Blogs from '../../Blogs/Blogs';


const Home = () => {
    return (
        <div id="home">      
            <Banner></Banner>  
            <Plans></Plans>
            <Blogs></Blogs>
            <AboutUs></AboutUs>      
        </div>
    );
};

export default Home;
