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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/brand/:id',
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('/data.json'),

            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/updateProduct',
                element:<UpdateProduct></UpdateProduct>
            }
        ]
    },
]);

export default router 