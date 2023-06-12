import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaCog } from 'react-icons/fa';
import bgimg from '../../../assets/dashboard/jaconda-14.png'
const StudentCP = () => {
    return (
        <div className='h-screen'>
            <img className='h-full w-fit' src={bgimg} alt="" />
        </div>
    );
};

export default StudentCP;