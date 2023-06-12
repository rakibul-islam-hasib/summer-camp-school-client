import React from 'react';
// import girlImg from '../../../assets/home/girl.jpg';
import { BsBook } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import CountUp from 'react-countup';
const Facilities = () => {
    return (
        <div data-aos="fade-left" className='lg:w-[90%] w-[95%] mx-auto my-20'>
            <div className=" grid md:grid-cols-2 gap-5">
                <div data-aos="fade-right" className="h-[450px] md:h-full">
                    <img className='h-[450px] md:h-full w-full' src='https://i.ibb.co/gzBwv35/thomas-dubet-9-Urcc-JJi-PVQ-unsplash-1128x1267.jpg' alt="" />
                </div>
                <div className="px-7 dark:text-white py-6 shadow-xl">
                    <h1 className='text-xl ml-5 text-secondary font-bold'>TOP FACILITIES</h1>
                    <h1 className='inline-flex items-center dark:text-white gap-2 text-4xl ml-5 font-bold my-4'>Our Facilities <AiOutlineMinus /></h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img className='w-[150px] h-[150px] rounded-full' src="https://i.ibb.co/fNfpqJJ/grant-Uhp-YKnq-Zw-E8-unsplash.jpg" alt="" />
                            <div className='text-3xl absolute -bottom-6 left-11  px-3 py-3 bg-secondary w-fit rounded-full text-white'><BsBook className='' /></div>
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-xl font-bold'>Cool Room</h1>
                            <p>We have awesome room . Improved property reserved disposal do offering me for teaching.</p>
                        </div>
                    </div>
                    <div className="flex mt-12 items-center gap-4">
                        <div className="relative">
                            <img className='w-[150px] h-[150px] rounded-full' src="https://i.ibb.co/k8ghSm5/jacek-dylag-h-UHzai-AHu-Uc-unsplash.jpg" alt="" />
                            <div className='text-3xl absolute -bottom-6 left-11  px-3 py-3 bg-secondary w-fit rounded-full text-white'><BsBook className='' /></div>
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-xl font-bold'>Experience Teacher</h1>
                            <p>We have experienced teacher. Improved property reserved disposal do offering me for teaching.</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h1 className='text-secondary text-5xl text-center font-bold'>Our Achievements</h1>
                    </div>
                    <div className="mt-8 grid justify-items-center grid-cols-2">
                        <div className="text-center">
                            <h1 className='text-5xl font-bold'><CountUp duration={2} end={1800} />+</h1>
                            <p className='text-xl font-bold text-secondary mt-2'>Students</p>
                        </div>
                        <div className="">
                            <h1 className='text-5xl font-bold'><CountUp duration={5} end={450} />+</h1>
                            <p className='text-xl font-bold text-secondary mt-2'>Instructors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;