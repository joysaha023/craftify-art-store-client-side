import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllartandCraft from "../Pages/AllartandCraft/AllartandCraft";
import AddartandCraft from "../Pages/AddartandCraft/AddartandCraft";
import MyartandCraft from "../Pages/MyartandCraft/MyartandCraft";
import SignUp from "../Pages/SignUp/SignUp"
import LogIn from "../Pages/LogIn/LogIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/allartandcraft",
            element: <AllartandCraft></AllartandCraft>
        },
        {
            path: "/addartandcraft",
            element: <AddartandCraft></AddartandCraft>
        },
        {
            path: "/myartandcraft",
            element: <MyartandCraft></MyartandCraft>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        }
    ]
  },
]);

export default router;