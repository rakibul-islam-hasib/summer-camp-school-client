import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { FcDeleteDatabase } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const navigate = useNavigate();
    const axiosFetch = useAxiosFetch();
    const axiosSecure = useAxiosSecure();
    const [classes, setClasses] = useState([])
    useEffect(() => {
        axiosFetch.get('/classes-manage')
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
    const handelPending = (id) => {
        axiosSecure.put(`/change-status/${id}`, { status: 'pending' })
            .then(res => {
                console.log(res.data)
                setClasses(classes.map(cls => cls._id == id ? { ...cls, status: 'pending' } : cls))
            })
            .catch(err => console.log(err))
    }
    const handelReject = (id) => {
        Swal.fire({
            title: 'Reason for reject',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reject',
            showLoaderOnConfirm: true,
            preConfirm: async (text) => {
                // console.log(text)
                try {
                    const res = await axiosSecure.put(`/change-status/${id}`, { status: 'rejected', reason: text })
                    console.log(res.data.modifiedCount > 0)
                    if (res.data.modifiedCount > 0) {
                        setClasses(classes.map(cls => cls._id == id ? { ...cls, status: 'rejected' } : cls))
                    }
                    return res.data
                } catch (error) {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Changed..!',
                    'You reject this class.',
                    'success'
                )
            }
        })
    }
    const handelReaccept = (id) => {
        Swal.fire({
            title: 'Reason for reaccept',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reject',
            showLoaderOnConfirm: true,
            preConfirm: async (text) => {
                // console.log(text)
                try {
                    const res = await axiosSecure.put(`/change-status/${id}`, { status: 'pending', reason: text })
                    console.log(res.data.modifiedCount > 0)
                    if (res.data.modifiedCount > 0) {
                        setClasses(classes.map(cls => cls._id == id ? { ...cls, status: 'pending' } : cls))
                    }
                    return res.data
                } catch (error) {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Changed..!',
                    'You reject this class.',
                    'success'
                )
            }
        })
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
                                                                    className='text-[12px]  cursor-pointer bg-green-500 py-1 rounded-md px-2 text-white'>
                                                                    Set  Approve
                                                                </span>
                                                            }
                                                            {
                                                                cls.status === 'approved' && <span
                                                                    onClick={() => handelPending(cls._id)}
                                                                    className='  cursor-pointer text-[12px] bg-green-500 py-1 rounded-md px-2 text-white'>
                                                                    Set Pending
                                                                </span>
                                                            }
                                                            {
                                                                cls.status !== 'rejected' && <span
                                                                    onClick={() => handelReject(cls._id)}
                                                                    className=' cursor-pointer bg-red-600 py-1 rounded-md px-2 text-white'>
                                                                    Reject
                                                                </span>
                                                            }
                                                            {
                                                                cls.status === 'rejected' && <span
                                                                    onClick={() => handelReaccept(cls._id)}
                                                                    className=' cursor-pointer bg-green-500 py-1 rounded-md px-2 text-white'>
                                                                    Accept
                                                                </span>
                                                            }
                                                            {
                                                                cls.status === 'rejected' && <span
                                                                    onClick={() => handelReject(cls._id)}
                                                                    className=' cursor-pointer bg-red-600 py-1 rounded-md px-2 text-white'>
                                                                    Ban User
                                                                </span>
                                                            }
                                                           
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