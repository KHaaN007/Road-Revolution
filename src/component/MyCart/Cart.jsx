// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import ShowCart from "./ShowCart";

// const Cart = ({ cartId }) => {
//     const { user } = useContext(AuthContext);




//     const emailFilter = cartId.filter(cartEmail => cartEmail.email == user.email);



//     const [carts, setCarts] = useState([])


//     useEffect(() => {

//         fetch('https://brand-shop-server-lkkube07x-md-amanat-khans-projects.vercel.app/product')
//             .then(response => response.json())
//             .then(data => setCarts(data))

//     }, [])

    







//     return (
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
//             {
//                 emailFilter && emailFilter && emailFilter.map(showCart => <ShowCart key={showCart._id} setCarts={setCarts} showCart={showCart} carts={carts}></ShowCart>)
//             }
//         </div>
//     );
// };

// export default Cart;