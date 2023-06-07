import React from 'react';
import CountUp from 'react-countup';

const Map = () => {
    return (
        <div className='h-[300px] bg-secondary' style={{ backgroundImage: `url('https://validthemes.live/themeforest/edukat/assets/img/map.svg')` }}>
            <div className="h-[300px] text-white bg-black flex justify-center items-center bg-opacity-40">
                <div className="flex gap-16">
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={35} />M+</h1>
                        <p className='font-bold text-lg'>Learners & counting</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={35} />M+</h1>
                        <p className='font-bold text-lg'>Learners & counting</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={35} />M+</h1>
                        <p className='font-bold text-lg'>Learners & counting</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={90} />%</h1>
                        <p className='font-bold text-lg'>Success stories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;