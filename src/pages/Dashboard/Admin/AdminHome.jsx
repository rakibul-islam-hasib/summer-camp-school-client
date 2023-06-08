import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import AdminStats from './AdminStats';

const AdminHome = () => {
    const { user } = useAuth(); 

    return (
        <div>
            <h1 className='text-4xl font-bold my-7'>Welcome Back, <span className='text-secondary'>{user?.displayName}</span></h1>
            <AdminStats />
        </div>
    );
};

export default AdminHome;