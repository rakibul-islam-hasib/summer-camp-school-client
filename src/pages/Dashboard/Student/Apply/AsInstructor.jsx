import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUser, FiMail, FiPhone, FiBriefcase, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
const AsInstructor = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="max-w-md mx-auto py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <div className="flex items-center mt-1">
                        <FiUser className="text-gray-500" />
                        <input
                            className="ml-2 border-b border-gray-300 focus:border-indigo-500 outline-none"
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <div className="flex items-center mt-1">
                        <FiMail className="text-gray-500" />
                        <input
                            className="ml-2 border-b border-gray-300 focus:border-indigo-500 outline-none"
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700" htmlFor="phone">
                        Phone
                    </label>
                    <div className="flex items-center mt-1">
                        <FiPhone className="text-gray-500" />
                        <input
                            className="ml-2 border-b border-gray-300 focus:border-indigo-500 outline-none"
                            type="tel"
                            id="phone"
                            {...register('phone', { required: true })}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700" htmlFor="experience">
                        Experience
                    </label>
                    <div className="flex items-center mt-1">
                        <FiBriefcase className="text-gray-500" />
                        <textarea
                            className="ml-2 border border-gray-300 focus:border-indigo-500 outline-none resize-none"
                            id="experience"
                            {...register('experience')}
                        />
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md focus:outline-none"
                >
                    <FiSend className="mr-2" />
                    Submit
                </motion.button>
            </form>
        </div>
    );
};

export default AsInstructor;