import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUser, FiMail, FiPhone, FiBriefcase, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useUser } from '../../../../hooks/useUser';
const AsInstructor = () => {
    const { register, handleSubmit } = useForm();
    const { currentUser } = useUser();
    const onSubmit = (data) => {
        console.log(data);
    };


    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="py-4 min-h-screen flex items-center w-[60%]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full">
                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                        className="mb-4 w-full"
                    >
                        <label className="text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <div className="flex items-center mt-1">
                            <FiUser className="text-gray-500" />
                            <input
                                defaultValue={currentUser.name}
                                disabled
                                readOnly
                                className="ml-2 w-full border-b border-gray-300 focus:border-secondary outline-none"
                                type="text"
                                id="name"
                                {...register('name', { required: true })}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 w-full"
                    >
                        <label className="text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <div className="flex items-center mt-1">
                            <FiMail className="text-gray-500" />
                            <input
                                defaultValue={currentUser.email}
                                disabled
                                readOnly
                                className="ml-2 w-full border-b border-gray-300 focus:border-secondary outline-none"
                                type="email"
                                id="email"
                                {...register('email', { required: true })}
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-4 w-full"
                >
                    <label className="text-gray-700" htmlFor="experience">
                        Experience
                    </label>
                    <div className="flex items-center mt-1">
                        <FiBriefcase className="text-gray-500" />
                        <textarea
                            placeholder='Tell us about your experience...'
                            className="ml-2 rounded-lg px-2 placeholder:text-sm py-1 w-full border border-gray-300 focus:border-secondary outline-none resize-none"
                            id="experience"
                            {...register('experience')}
                        />
                    </div>
                </motion.div>

                <div className="text-center flex justify-center ">
                    <motion.button
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="flex items-center px-4 py-2 bg-secondary text-white rounded-md focus:outline-none"
                    >
                        <FiSend className="mr-2" />
                        Submit
                    </motion.button>
                </div>
            </form>
        </div>
    );
};

export default AsInstructor;