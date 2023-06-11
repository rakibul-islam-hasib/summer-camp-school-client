import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ name, image, availableSeats, price, totalEnrolled }) => {
    return (
        <motion.div
            className=" bg-white shadow-lg rounded-lg p-3 border border-secondary overflow-hidden m-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                className="h-48 w-full object-cover"
                src={image}
                alt={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="p-4">
                <motion.h2
                    className="text-xl font-semibold mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {name}
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Available Seats: {availableSeats}
                </motion.p>
                <motion.p
                    className="text-gray-600 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Price: {price}
                </motion.p>
                <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    Total Students: {totalEnrolled}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Card;
