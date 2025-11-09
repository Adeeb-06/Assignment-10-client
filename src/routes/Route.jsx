import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            }
        ]
    }
])