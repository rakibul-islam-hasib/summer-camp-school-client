import React, { useState } from 'react';
import { useUser } from '../../../hooks/useUser';

const AddClass = () => {
    const { currentUser, isLoading } = useUser();
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Perform form submission logic here
        // You can access the form data in the state variables (e.g., className, classImage, etc.)
    };
    return (
        <div className="">
            <div className="my-10">
                <h1 className='text-center text-3xl font-bold'>Add Your Class</h1>
            </div>


            <form className=" mx-auto p-6 bg-white rounded shadow">
                <div className="grid grid-cols-2 w-full gap-3">
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Class name
                        </label>
                        <input
                            className=" w-full px-4 py-2  border border-secondary rounded-md focus:outline-none focus:ring-blue-500"
                            type="text"
                            placeholder='Your Class Name'
                            name='name'
                        />
                    </div>
                    <div className="mb-6">
                        <label for="file-input" className="font-bold">Thumbnail Photo</label>
                        <input
                            type="file"
                            name="image"
                            className="block mt-[5px] w-full border border-secondary shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:border-0 file:bg-secondary file:text-white file:mr-4 file:py-3 file:px-4 " />
                    </div>
                </div>
                <div className="grid gap-3 grid-cols-2">
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="instructorName">
                            Instructor name
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500"
                            type="text"
                            value={currentUser?.name}
                            readOnly
                            disabled
                            placeholder='Instructor Name'
                            name='instructorName'
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="instructorEmail">
                            Instructor email
                        </label>
                        <input
                            title='You can not update your email'
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500"
                            type="email"
                            value={currentUser?.email}
                            disabled
                            readOnly
                            name='instructorEmail'
                        />
                    </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="availableSeats">
                            Available seats
                        </label>
                        <input
                            className="w-full border-secondary px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            type="number"
                            placeholder='How many seats are available?'
                            name='availableSeats'
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="w-full border-secondary px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            type="number"
                            placeholder='How much does it cost?'
                            name='price'
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                        Youtube Link
                    </label>
                    <input
                        
                        className="w-full border-secondary px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                        type="text"
                        placeholder='Your course intro video link'
                        name='price'
                    />
                    <p className='text-[12px] ml-2 mt-2 text-secondary'>Only youtube videos are support</p>
                </div>
                <div className="text-center w-full">
                    <button
                        className="bg-secondary w-full hover:bg-red-400 duration-200 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;