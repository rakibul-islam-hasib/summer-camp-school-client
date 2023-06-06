import React from 'react';
import NavBar from '../components/headers/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
        </main>
    );
};

export default MainLayout;