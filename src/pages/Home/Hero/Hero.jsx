import React from 'react';
import bgImg from '../../../assets/home/banner-1.jpg';
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{backgroundImage : `url(${bgImg})`}}>
            <h1 className=''>Hero section is starting from here</h1>
        </div>
    );
};

export default Hero;