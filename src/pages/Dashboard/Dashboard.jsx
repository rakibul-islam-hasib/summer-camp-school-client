import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { useUser } from '../../hooks/useUser';
import DashboardNavigate from '../../routes/DashboardNavigate';
const Dashboard = () => {

    useTitle("Dashboard | Sound Safari");

    const { currentUser, isLoading } = useUser();

    const role = currentUser?.role;


    if (isLoading) {
        return <div>Loading...</div>
    }
    return <DashboardNavigate />;
};

export default Dashboard;