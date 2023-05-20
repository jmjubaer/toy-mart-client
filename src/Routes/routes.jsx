import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Resgister from "../Pages/Login/Resgister";
import Profiles from "../Pages/Login/Profiles";
import NotFound from "../Pages/Shered Page/NotFound";
import Home from "../Pages/home/Home";
import AddToy from "../Pages/AddToy";
import PrivetRoute from "./PrivetRoute";
import AllToy from "../Pages/All Toy/AllToy";
import MyToy from "../Pages/My Toy/MyToy";
import UpdateToy from "../Pages/My Toy/UpdateToy";
import SingleToy from "../Pages/Shered Page/SingleToy";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Resgister></Resgister>,
            },
            {
                path: "/profiles",
                element: <Profiles />,
            },
            {
                path: "/addToys",
                element: (
                    <PrivetRoute>
                        <AddToy />
                    </PrivetRoute>
                ),
            },
            {
                path: "/allToys",
                element: <AllToy />,
                loader: () =>
                    fetch("https://toy-mart-server-rho.vercel.app/allToy"),
            },
            {
                path: "/myToy",
                element: (
                    <PrivetRoute>
                        <MyToy />
                    </PrivetRoute>
                ),
            },
            {
                path: "/singleToy/:id",
                element: (
                    <PrivetRoute>
                        <SingleToy />
                    </PrivetRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `http://toy-mart-server-rho.vercel.app/toy/${params.id}`
                    ),
            },
            {
                path: "/updateToy/:id",
                element: (
                    <PrivetRoute>
                        <UpdateToy />
                    </PrivetRoute>
                ),
                loader: ({ params }) => fetch(`http://toy-mart-server-rho.vercel.app/toy/${params.id}`),
            },
        ],
    },
]);
export default route;
