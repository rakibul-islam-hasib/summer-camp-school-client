import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { FcDeleteDatabase } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageClasses = () => {
    const navigate = useNavigate();
    const axiosFetch = useAxiosFetch();
    const axiosSecure = useAxiosSecure();
    const [classes, setClasses] = useState([])
    useEffect(() => {
        axiosFetch.get('/classes')
            .then(res => setClasses(res.data))
            .catch(err => console.log(err))
    }, [])


    const handleApprove = (id) => {
        axiosSecure.put(`/change-status/${id}`, { status: 'approved' })
            .then(res => {
                console.log(res.data)
                setClasses(classes.map(cls => cls._id == id ? { ...cls, status: 'approved' } : cls))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className='text-4xl text-secondary font-bold text-center my-10'>Manage <span className='text-black'>Classes</span></h1>


            <div className="">

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#</th>
                                            <th scope="col" className="px-6 py-4">PHOTO</th>
                                            <th scope="col" className="px-6 py-4">COURSE NAME</th>
                                            <th scope="col" className="px-6 py-4">INSTRUCTOR NAME</th>
                                            <th scope="col" className="px-6 py-4">STATUS</th>
                                            <th scope="col" className="px-6 py-4">DETAILS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            classes.length == 0 ? <tr><td colSpan='6' className='text-center text-2xl font-bold'>No Classes Found</td></tr> :
                                                classes.map((cls, idx) => <tr
                                                    key={cls._id}
                                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{idx + 1}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <img src={cls.image} className='h-[35px] w-[35px]' alt="" />
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">{cls.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{cls.instructorName}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <span className={`font-bold ${cls.status === 'pending' ? 'bg-orange-400' : cls.status === 'checking' ? 'bg-yellow-500' : cls.status === 'approved' ? 'bg-green-600' : 'bg-red-600'} px-2 py-1 uppercase text-white rounded-xl`}>{cls.status}</span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="flex gap-2">
                                                            {
                                                                cls.status === 'pending' && <span
                                                                    onClick={() => handleApprove(cls._id)}
                                                                    className='  cursor-pointer bg-green-500 py-1 rounded-md px-2 text-white'>
                                                                    Approve
                                                                </span>
                                                            }
                                                            <span
                                                                className=' cursor-pointer bg-red-600 py-1 rounded-md px-2 text-white'>
                                                                Reject
                                                            </span>
                                                        </div>
                                                    </td>

                                                </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;