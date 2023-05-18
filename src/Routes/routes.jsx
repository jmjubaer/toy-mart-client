import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Resgister from "../Pages/Login/Resgister";
import Profiles from "../Pages/Login/Profiles";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Resgister></Resgister>
            },
            {
                path: "/profiles",
                element: <Profiles/>
            }
        ]
    }
])
export default route;