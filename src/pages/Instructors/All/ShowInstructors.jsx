import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../hooks/useAxiosFetch';

const ShowInstructors = () => {
    const axiosInstance = useAxiosFetch();
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axiosInstance.get('/users')
            .then(res => setInstructors(res.data))
    }, [axiosInstance])
    return (
        <div className='my-16 w-[80%] mx-auto'>
            <div className="grid grid-cols-3 gap-8 mt-28">
                {
                    instructors.map(instructor =><div key={instructor._id} className="max-w-xs">
                            <div className="bg-white border hover:-translate-y-1 cursor-pointer duration-200 rounded-lg py-3">
                                <div className="photo-wrapper p-2">
                                    <img className="w-32 h-32 rounded-full mx-auto" src={instructor.photoUrl} alt="John Doe" />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{instructor.name}</h3>
                                    <div className="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table className="text-xs my-3">
                                        <tbody><tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td className="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td className="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div className="text-center my-3">
                                        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ShowInstructors;