import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const MyCart = () => {

    const cartdata = useLoaderData()
    console.log(cartdata);


    const [carts, setCarts] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => setCarts(data))

    }, [])




    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                cartdata.map(cart => <Cart key={cart._id} carts={carts} cartId={cart}></Cart>)
            }
        </div>
    );
};

export default MyCart;