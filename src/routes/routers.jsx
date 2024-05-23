import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Article from "../pages/Article";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashbaordLayouts from "../layouts/DashbaordLayouts";
import PrivateRouter from "./PrivateRouter";



const router=createBrowserRouter([
    {
        path: "/",
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"blog",
                element:<Blog></Blog>
            },
            {
                path:"article",
                element:<Article></Article>
            },
            {
                path:"products",
                element:<Products></Products>
            },
        
            {
                path:"contact",
                element:<Contact></Contact>
            },


            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },





        ]
      },
      {
        path:"/dashboard",
        element:<PrivateRouter>
            <DashbaordLayouts></DashbaordLayouts>
        </PrivateRouter>,
        errorElement:<ErrorPage></ErrorPage>,

      },
])

export default router;