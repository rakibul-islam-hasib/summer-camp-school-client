import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { Transition } from '@headlessui/react';

const Classes = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleHover = (index) => {
        setHoveredCard(index);
    };

    const [classes, setClasses] = useState([]);
    const axiosFetch = useAxiosFetch();

    useEffect(() => {
        axiosFetch.get('/classes')
            .then(res => setClasses(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Classes</h1>

            <div className="my-16 w-[90%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
                {classes.map((cls, index) => (
                    <div
                        key={index}
                        className="relative w-64 h-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        <div className="relative h-48">
                            <div
                                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-60' : ''
                                    }`}
                            />
                            <img
                                src={cls.image}
                                alt="Course Image"
                                className="object-cover w-full h-full"
                            />
                            <Transition
                                show={hoveredCard === index}
                                enter="transition-opacity duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                                        Select
                                    </button>
                                </div>
                            </Transition>
                        </div>
                        <div className="px-6 py-4">
                            <h3 className="text-xl font-semibold">Course Name</h3>
                            <p className="text-gray-500">Instructor Name</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-600">Available Seats: 10</span>
                                <span className="text-green-500 font-semibold">$99</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
