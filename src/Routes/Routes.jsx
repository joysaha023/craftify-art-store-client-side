import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllartandCraft from "../Pages/AllartandCraft/AllartandCraft";
import AddartandCraft from "../Pages/AddartandCraft/AddartandCraft";
import MyartandCraft from "../Pages/MyartandCraft/MyartandCraft";
import SignUp from "../Pages/SignUp/SignUp"
import LogIn from "../Pages/LogIn/LogIn";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import ArtandCraftCategory from "../Pages/ArtandCraftCategory/ArtandCraftCategory";
import PrivateRoutes from "./PrivateRoutes";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/craftitems')
        },
        {
            path: "/allartandcraft",
            element: <AllartandCraft></AllartandCraft>,
            loader: () => fetch('http://localhost:5000/craftitems')
        },
        {
            path: "/addartandcraft",
            element: <PrivateRoutes><AddartandCraft></AddartandCraft></PrivateRoutes>
        },
        {
            path: "/myartandcraft",
            element: <PrivateRoutes><MyartandCraft></MyartandCraft>,</PrivateRoutes>
            
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
            path: "/details/:id",
            element: <PrivateRoutes><DetailsPage></DetailsPage></PrivateRoutes>
        },
        {
            path: "/artandcraftCategory",
            element: <ArtandCraftCategory></ArtandCraftCategory>,
        }
    ]
  },
]);

export default router;