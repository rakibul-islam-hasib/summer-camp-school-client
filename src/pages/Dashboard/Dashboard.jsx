import React from 'react';
import AdminHome from './Admin/AdminHome';
import { useTitle } from '../../hooks/useTitle';
const Dashboard = () => {
 
    useTitle("Dashboard | Sound Safari");
    return (
        <div>
            <AdminHome />
        </div>
    );
};

export default Dashboard;