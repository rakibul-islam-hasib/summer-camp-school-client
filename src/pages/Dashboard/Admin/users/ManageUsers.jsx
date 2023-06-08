import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';
import { GrUpdate } from 'react-icons/gr'
import { FcDeleteDatabase } from 'react-icons/fc';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
const ManageUsers = () => {
    const navigate = useNavigate();
    const axiosFetch = useAxiosFetch();
    const axiosSecure  = useAxiosSecure();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axiosFetch.get('/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-user/${id}`)
                .then(res => { 
                    console.log(res.data)
                    
                })
                .catch(err => console.log(err))


            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-7'>Manage <span className='text-secondary'>Users</span></h1>

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
                                            <th scope="col" className="px-6 py-4">NAME</th>
                                            <th scope="col" className="px-6 py-4">ROLE</th>
                                            <th scope="col" className="px-6 py-4">UPDATE</th>
                                            <th scope="col" className="px-6 py-4">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, idx) => <tr
                                                key={user._id}
                                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{idx + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <img src={user.photoUrl} className='h-[35px] w-[35px]' alt="" />
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span onClick={()=>navigate(`/dashboard/update-user/${user._id}`)} className='inline-flex items-center gap-2 cursor-pointer bg-green-500 py-1 rounded-md px-2 text-white'>Update <GrUpdate className='text-white' /></span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span onClick={() => handleDelete(user._id)} className='inline-flex items-center gap-2 cursor-pointer bg-red-600 py-1 rounded-md px-2 text-white'>Delete <FcDeleteDatabase /></span>
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

export default ManageUsers;