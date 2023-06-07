import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { FcElectricalSensor } from 'react-icons/fc';
import Swal from 'sweetalert2'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utilities/providers/AuthProvider';
const navLinks = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Instructors',
        route: '/instructors'
    },
];

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navBg, setNavBg] = useState('bg-[#15151580]');
    const [isFixed, setIsFixed] = useState(false);


    

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
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
            if (isHome) {
                setNavBg('bg-white text-black');
            }
            else {
                setNavBg('bg-white text-black');
            }
        } else {
            setNavBg('bg-transparent text-white');
        }
    }, [scrollPosition]);


    return (
        <motion.nav
            className={`${navBg} ${isFixed ? 'static' : 'fixed'} top-0 transition-colors duration-500 ease-in-out  w-full z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="flex px-4 items-center justify-between py-4">
                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex-shrink-0 cursor-pointer pl-7 md:p-0 flex items-center">
                        <div className="">
                            <h1 className='text-2xl font-Cinzel  inline-flex gap-3  items-center font-bold'>Sound Safari <FcElectricalSensor className='text-4xl' /></h1>
                            <p className='font-bold text-[13px]  tracking-[8px]'>Learn Music</p>
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
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : 'text-black'} hover:text-secondary duration-300`}
                                            to={link.route}

                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                                {
                                    user ? null : isLogin ? <li>
                                        <NavLink
                                            to='/register'
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : 'text-black'} hover:text-secondary duration-300`}
                                        >Register</NavLink></li> : <li>
                                        <NavLink
                                            to='/login'
                                            className={({ isActive }) => `font-bold ${isActive ? 'text-secondary' : 'text-black'} hover:text-secondary duration-300`}
                                        >Login</NavLink></li>
                                }

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
