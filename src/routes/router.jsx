import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Instructors from "../pages/Instructors/Instructors";

export const router  = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />, 
        children : [
            {
                index : true,
                element : <Home />
            }, 
            { 
                path : "register",
                element : <Register />
            }, 
            {
                path : "login",
                element : <Login />
            },
            {
                path : "instructors",
                element : <Instructors />
            }
        ]
    }
])