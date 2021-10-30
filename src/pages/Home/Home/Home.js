import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Plans from '../../Plans/Plans';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div id="home">      
            <Banner></Banner>  
            <Plans></Plans>
            <AboutUs></AboutUs>      
        </div>
    );
};

export default Home;
