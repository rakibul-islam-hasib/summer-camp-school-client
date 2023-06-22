import React from 'react';
import { FiUser, FiMail, FiBriefcase, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useUser } from '../../../../hooks/useUser';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';

const AsInstructor = () => {
    const { currentUser } = useUser();
    const axiosFetch = useAxiosFetch();
    const onSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const experience = e.target.experience.value;

        const data = {
            name,
            email,
            experience,
        };
        axiosFetch.post('/as-instructor', data)
        .then(res => { 
            console.log(res.data);
        })
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
            <form onSubmit={onSubmit}>
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
                                name="name"
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
                                name="email"
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
                            placeholder="Tell us about your experience..."
                            className="ml-2 rounded-lg px-2 placeholder:text-sm py-1 w-full border border-gray-300 focus:border-secondary outline-none resize-none"
                            id="experience"
                            name="experience"
                        ></textarea>
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
