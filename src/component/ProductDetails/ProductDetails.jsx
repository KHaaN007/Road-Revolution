import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";


const ProductDetails = () => {

    const details = useLoaderData();


    const { user } = useContext(AuthContext)

    const handleAddCart = () => {

        const email = user.email

        const { id, name, image, brandName, type, price, shortDescription, rating } = details;


        console.log(id, name, image, brandName, type, price, shortDescription, rating, email);

        const productDetails = {
            id,
            name,
            image,
            brandName,
            type,
            price,
            shortDescription,
            rating,
            email,
        }



        fetch('https://brand-shop-server-lkkube07x-md-amanat-khans-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Product Added Cart',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                }
            })

    }





    return (
        <div>



<NavBar></NavBar>
            <div style={{ backgroundImage: `url(${details.image})` }} className="w-full  rounded-3xl flex lg:flex-co justify-center ">

                <div className=" sm:mx-auto">
                    <div className=" border-gray-100  h-screen w-full bg-black bg-opacity-50 border sm:rounded-3xl p-8 flex space-x-8">
                        <div className="w-full h-screen overflow-visible ">
                            <img className="rounded-3xl shadow-lg" src={details.image} alt="" />
                        </div>
                        <div className="flex text-white flex-col w-1/2 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-5xl font-mono  font-bold">{details.name}</h2>
                                <div className="absolute right-5 bg-yellow-400 font-bold rounded-xl p-2">{details.rating}</div>
                            </div>
                            <div>
                                <div className="text-4xl my-3 font-semibold ">{details.brandName}</div>
                                <div className="text-3xl">{details.type}</div>
                            </div>
                            <p className=" text-gray-400 text-xl overflow-y-hidden">{details.shortDescription}</p>
                            <div className="flex font-serif text-3xl font-bold text-a">{details.price} USD</div>


                            <button onClick={handleAddCart} className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute rounded-lg before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                <span relative="relative z-10">ADD Cart</span>
                            </button>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;