import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { FcElectricalSensor } from 'react-icons/fc';
import Swal from 'sweetalert2'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const navLinks = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Our Menu',
        route: '/menu'
    },
    {
        name: 'Register',
        route: '/register'
    }
];

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [navBg, setNavBg] = useState('bg-[#15151580]');

    useEffect(() => {
        setIsLogin(location.pathname === '/');
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 0) {
            if (isLogin) {
                setNavBg('bg-white text-black');
            } 
            else {
                setNavBg('bg-white text-black');
            }
        } else {
            setNavBg('bg-transparent text-secondary');
        }
    }, [scrollPosition]);
  
    
    return (
        <motion.nav
            className={`${navBg}  fixed top-0 transition-colors duration-500 ease-in-out  w-full z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="flex px-4 items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 pl-7 md:p-0 flex items-center">
                        <div className="">
                            <h1 className='text-2xl font-Cinzel text-black inline-flex gap-3  items-center font-bold'>Sound Safari <FcElectricalSensor className='text-4xl' /></h1>
                            <p className='font-bold text-[13px] text-black tracking-[8px]'>Learn Music</p>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <FaBars className="h-6  hover:text-primary w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden  text-black md:block">
                        <div className="flex">
                            <ul className="ml-10 flex items-center space-x-4 pr-4">
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-primary' : 'text-black'} hover:text-primary duration-300`}
                                            to={link.route}

                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                             

                            </ul>

                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-2 w-full bg-black"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {
                                navLinks.map((link) => (
                                    <NavLink
                                        key={link.route}
                                        className={({ isActive }) => `block ${isActive ? 'text-primary' : 'text-white'} px-4 py-2  hover:text-primary duration-300`}
                                        to={link.route}
                                        onClick={toggleMobileMenu}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))

                            }

                            {/* Add more mobile menu links as needed */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default NavBar;
