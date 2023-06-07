import React from 'react';
import NavBar from '../components/headers/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </main>
    );
};

export default MainLayout;