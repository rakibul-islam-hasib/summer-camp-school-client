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
import Classes from "../pages/classes/Classes";
import ErrorPage from "../pages/error/ErrorPage";
import AddClass from "../pages/Dashboard/Instructors/AddClass";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import InstructorCP from "../pages/Dashboard/Instructors/InstructorCP";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import StudentCP from "../pages/Dashboard/Student/StudentCP";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import MyPaymentHistory from "../pages/Dashboard/Student/Payment/History/MyPaymentHistory";
import AsInstructor from "../pages/Dashboard/Student/Apply/AsInstructor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: "classes",
                element: <Classes />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: 'admin-home',
                element: <AdminHome />
            },
            {
                path: 'manage-class',
                element: <ManageClasses />
            },
            // * INSTRUCTOR ROUTES
            {
                path: 'instructor-cp',
                element: <InstructorCP />
            },
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'my-classes',
                element: <MyClasses />
            },
            // * STUDENT ROUTES
            {
                path: 'student-cp',
                element: <StudentCP />
            },
            {
                path: 'my-selected',
                element: <SelectedClass />
            },
            {
                path: 'user/payment',
                element: <Payment />
            },
            {
                path: 'my-payments',
                element: <MyPaymentHistory />
            }, 
            {
                path: 'apply-instructor',
                element: <AsInstructor />
            }
        ]
    }
])