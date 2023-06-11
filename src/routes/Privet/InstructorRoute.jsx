import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Navigate} from 'react-router-dom';

const InstructorRoute = ({ children }) => {
    const { currentUser } = useUser();
   
    if (!currentUser ||  currentUser.role !== 'instructor') {
        return <Navigate to="/dashboard" />
    }


    return children;
};

export default InstructorRoute;