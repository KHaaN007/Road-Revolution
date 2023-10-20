import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import Home from "../Home/Home";
import SignUp from "../Authentication/SignUp/SignUp";
import SignIn from "../Authentication/SignIn/SignIn";
import AddProduct from "../DataBase/AddProduct/AddProduct";
import ErrorPage from "../component/ErrorPage/ErrorPage";

import BrandDetails from "../component/BrandDetails/BrandDetails";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import UpdateProduct from "../DataBase/UpdateProduct/UpdateProduct";
import MyCart from "../component/MyCart/MyCart";
import PrivateRouter from "./PrivateRouter";
import ShowCart from "../component/MyCart/ShowCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/addProduct',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: '/brand/:id',
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('/data.json'),

            },
            {
                path: '/productDetails/:id',
                element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: `/mycart`,
                element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
                loader: () =>fetch ('http://localhost:5000/cart')

            },
           
        ]
    },
]);

export default router 