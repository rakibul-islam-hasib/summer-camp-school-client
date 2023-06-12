import React from 'react';
const Hero2 = () => {
    return (
        <div className='min-h-screen  bg-cover' style={{ backgroundImage: `url('https://i.ibb.co/kqS8H63/pexels-boris-pavlikovsky-7714321.jpg')` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='text-4xl'>WE PROVIDES</h3>
                        <h1 className='md:text-7xl text-5xl font-bold '>Super Creative Support</h1>
                        <div className="w-1/2">
                            <p className=''>We offered Super creative support. Such on help ye some door if in. Laughter proposal laughing any son law consider.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>discover more</button>
                            <button className='px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase'>discover more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;