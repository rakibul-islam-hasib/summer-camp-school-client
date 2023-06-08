import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth(); 

    return (
        <div>
            <h1 className='text-4xl font-bold my-7'>Welcome Back, <span className='text-secondary'>{user.displayName}</span></h1>

        </div>
    );
};

export default AdminHome;