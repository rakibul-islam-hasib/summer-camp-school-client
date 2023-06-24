import React, { useEffect, useState } from 'react';
import { FiUser, FiMail, FiBriefcase, FiSend } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../../../../hooks/useUser';
import useAxiosFetch from '../../../../hooks/useAxiosFetch';
import { ScaleLoader } from 'react-spinners';
const AsInstructor = () => {
    const { currentUser } = useUser();
    const [submittedData, setSubmittedData] = useState({});
    const [loading, setLoading] = useState(true); // [1
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
        axiosFetch.post('/as-instructor', data).then((res) => {
            console.log(res.data);
        });
    };

    useEffect(() => {
        axiosFetch.get(`/applied-instructors/${currentUser?.email}`).then((res) => {
            console.log(res.data);
            setSubmittedData(res.data);
            setLoading(false);
        });
    }, []);
    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };
    if (loading) { // [2
        return <div className='h-full w-full flex justify-center items-center'><ScaleLoader color="#FF1949" /></div>;
    }

    return (
        <>
            <AnimatePresence>
                {!submittedData?.name && (
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
                )}
            </AnimatePresence>

            <div className="h-full w-full flex justify-center items-center">
                <AnimatePresence>
                    {submittedData?.name && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center justify-center"
                        >
                            <h1 className="text-2xl font-bold">
                                Your <span className="text-secondary">application is</span> submitted
                            </h1>
                            <p className="text-lg font-semibold">Name: {submittedData?.name}</p>
                            <p className="text-lg font-semibold">Email: {submittedData?.email}</p>
                            <p className="text-lg font-semibold">Experience: {submittedData?.experience}</p>
                            <p>Now you need to wait for a few moments for admin approval</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {
                submittedData?.reject && <div className="">
                    <p>You are not able to join with Instructor</p>
                    <p className='font-bold'>Reason :</p>
                    <div className="w-1/2">
                        {submittedData?.reject}
                    </div>
                    <p className="mt-10">If you think it is a mistake then you can contact with Our admin <span><a href="mailto:admin@rakibul.tech"></a></span></p>
                </div>
            }
        </>
    );
};

export default AsInstructor;
