import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ShowCart from "./ShowCart";

const Cart = ({ cartId }) => {
    const { user } = useContext(AuthContext);




    const emailFilter = cartId.filter(cartEmail => cartEmail.email == user.email);

 

        const [carts, setCarts] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => setCarts(data))

    }, [])

    console.log(carts);







    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                emailFilter.map(showCart => <ShowCart key={showCart._id} showCart={showCart} carts={carts}></ShowCart>)
            }
        </div>
    );
};

export default Cart;