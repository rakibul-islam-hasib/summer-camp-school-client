import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/user/Register";

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
            }
        ]
    }
])