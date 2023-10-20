import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = () => {

    const cartdata = useLoaderData()



        console.log(cartdata);







 



    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
             <Cart   cartId={cartdata}></Cart>
            
            
        </div>
    );
};

export default MyCart;