import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";

export const router  = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />, 
        children : [
            {
                index : true,
                element : <Home />
            }
        ]
    }
])