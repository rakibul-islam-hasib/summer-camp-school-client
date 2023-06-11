import React from 'react';
import NavBar from '../components/headers/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import Scroll from '../hooks/useScroll';
import AOS from 'aos';
import { useAuth } from '../hooks/useAuth';
import { HashLoader } from 'react-spinners';
const MainLayout = () => {
    const { loader } = useAuth();
    if (loader) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader
                color="#FF1949"
                size={50}
            />
        </div>
    }
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