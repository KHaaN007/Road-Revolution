import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = () => {

    const cartdata = useLoaderData()



 



    return (
        <div>
             <Cart   cartId={cartdata}></Cart>
            
            
        </div>
    );
};

export default MyCart;