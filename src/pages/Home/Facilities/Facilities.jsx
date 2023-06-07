import React from 'react';
import girlImg from '../../../assets/home/girl.jpg';
import { BsBook } from 'react-icons/bs';
const Facilities = () => {
    return (
        <div className='lg:w-[90%] mx-auto my-20'>
            <div className="flex gap-5">
                <div className="">
                    <img src={girlImg} alt="" />
                </div>
                <div className="px-5 py-6 shadow-xl">
                    <h1>TOP FACILITIES</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img className='w-[150px] h-[150px] rounded-full' src="https://validthemes.live/themeforest/edukat/assets/img/thumb/1.jpg" alt="" />
                            <div className='text-3xl absolute -bottom-6 left-11  px-3 py-3 bg-secondary w-fit rounded-full text-white'><BsBook className='' /></div>
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-xl font-bold'>Books & Library</h1>
                            <p>Outweigh desirous sex overcame. Improved property reserved disposal do offering me for teaching.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;