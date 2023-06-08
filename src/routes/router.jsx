import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Instructors from "../pages/Instructors/Instructors";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/users/ManageUsers";
import UpdateUser from "../pages/Dashboard/Admin/users/UpdateUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "instructors",
                element: <Instructors />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            {
                path: 'update-user/:id',
                element: <UpdateUser />,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
            }
        ]
    }
])