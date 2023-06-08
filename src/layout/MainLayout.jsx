import React from 'react';
import NavBar from '../components/headers/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import Scroll from '../hooks/useScroll';
import AOS from 'aos';
const MainLayout = () => {
    AOS.init();
    return (
        <main className='dark:bg-black'>
            <Scroll />
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </main>
    );
};

export default MainLayout;