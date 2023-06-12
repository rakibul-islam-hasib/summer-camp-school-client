import React from 'react';
import CountUp from 'react-countup';

const Map = () => {
    return (
        <div className='md:h-[300px] h-full my-11 bg-secondary' style={{ backgroundImage: `url('https://validthemes.live/themeforest/edukat/assets/img/map.svg')` }}>
            <div className="md:h-[300px] text-white bg-black flex justify-center items-center bg-opacity-40">
                <div className="flex md:flex-row flex-col py-7 gap-16">
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={35} />M+</h1>
                        <p className='font-bold text-lg'>Visitor</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={3} end={5} />M+</h1>
                        <p className='font-bold text-lg'>Subscriber</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={950} />k+</h1>
                        <p className='font-bold text-lg'>Students</p>
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