import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PropertiesLayout from "../layout/PropertiesLayout";
import PropertiesPage from "../pages/Properties";
import CreateProperty from "../pages/CreateProperty";
import PrivateRoute from "../provider/PrivateRoute";
import MyProperties from "../pages/MyProperties";
import PropertyDetails from "../pages/PropertyDetails";
import UpdateProperty from "../pages/UpdateProperty";
import MyRatings from "../pages/MyRatings";
import RatingsLayout from "../layout/RatingsLayout";

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
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/properties",
        element: <PropertiesLayout/>,
        children: [
            {
                path: "",
                element: <PropertiesPage/>
            },
            {
                path: "create",
                element: <PrivateRoute> <CreateProperty/> </PrivateRoute>
            },
            {
                path: "my-properties",
                element: <PrivateRoute> <MyProperties/> </PrivateRoute>
            },
            {
                path: ":propertyId",
                element: <PrivateRoute> <PropertyDetails/> </PrivateRoute>
            },
            {
                path: "update/:propertyId/",
                element: <PrivateRoute> <UpdateProperty/> </PrivateRoute>
            }
        ]
    },
    {
        path:"/my-ratings",
        element: <RatingsLayout/>,
        children: [
            {
                path: "",
                element:  <PrivateRoute> <MyRatings/> </PrivateRoute>
            }
        ]
    }
])