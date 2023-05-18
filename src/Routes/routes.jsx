import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Resgister from "../Pages/Login/Resgister";
import Profiles from "../Pages/Login/Profiles";
import NotFound from "../Pages/Shered Page/NotFound";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound/>,
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