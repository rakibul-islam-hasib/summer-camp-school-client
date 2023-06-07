import React from 'react';
import bgImg from '../../../assets/home/banner-1.jpg';
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='text-4xl'>WE PROVIDES</h3>
                        <h1 className='text-7xl font-bold '>Best Music Experience</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;