import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ProductDetails = () => {

    const details = useLoaderData();


    const { user } = useContext(AuthContext)

    const handleAddCart = _id => {
        console.log(_id);
        console.log();
        const email = user.email
        const id = _id




        const productId = {
            id,
            email
        }



        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }





    return (
        <div>
            {/* <img src={details.image} alt="" /> */}



            <div style={{ backgroundImage: `url(${details.image})` }} className="w-full  rounded-3xl flex lg:flex-co justify-center ">

                <div className=" sm:mx-auto">
                    <div className=" border-gray-100  h-screen w-full bg-black bg-opacity-50 border sm:rounded-3xl p-8 flex space-x-8">
                        <div className="w-full h-screen overflow-visible ">
                            <img className="rounded-3xl shadow-lg" src={details.image} alt="" />
                        </div>
                        <div className="flex text-white flex-col w-1/2 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-5xl font-mono  font-bold">{details.name}</h2>
                                <div className="bg-yellow-400 font-bold rounded-xl p-2">{details.rating}</div>
                            </div>
                            <div>
                                <div className="text-4xl my-3 font-semibold ">{details.brandName}</div>
                                <div className="text-3xl">{details.type}</div>
                            </div>
                            <p className=" text-gray-400 text-xl overflow-y-hidden">{details.shortDescription}</p>
                            <div className="flex font-serif text-3xl font-bold text-a">{details.price} USD</div>

                            <button onClick={() => handleAddCart(details._id)} className="btn">Add Cart</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;