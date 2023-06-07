import React from 'react';
import NavBar from '../components/headers/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default MainLayout;