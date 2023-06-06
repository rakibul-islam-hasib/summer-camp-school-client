import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export const router  = createBrowserRouter([
    {
        path: "/",
        element : <Home />, 
        children : [
            {
                index : true,
                element : <Home />
            }
        ]
    }
])