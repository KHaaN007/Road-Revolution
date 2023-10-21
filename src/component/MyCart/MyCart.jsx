
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const MyCart = () => {
    /**Ger user Id form Observer**/
    const { user } = useContext(AuthContext)
    const userEmail = user.email;

    /**Cart All User Data**/
    const cartData = useLoaderData()

    /****/
    const [users, setUsers] = useState(cartData)

    /**Filter Cart Data for Single User**/
    const userCart = users.filter(cart => cart.email === userEmail)

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-lkkube07x-md-amanat-khans-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                                )
                            }
                            const remainigCart = users.filter(cart => cart._id != _id)
                            setUsers(remainigCart)

                    })

               

            }
        })






    }





    return (
        <div>

            <div className="grid grid-cols-3 gap-10">
                {
                    userCart && userCart.map(cart => (<div key={cart._id}>

                        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                            <figure className="relative">
                                <img src={cart.image} alt="card image" className="aspect-video w-full" />
                                <figcaption className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-slate-900">
                                    <h3 className="text-2xl font-medium ">{cart.brandName}</h3>
                                    <p className="my-2 opacity-75">{cart.name}</p>
                                    <button
                                        onClick={() => handleDelete(cart._id)}
                                        className="btn border-0 inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">Delete Product
                                    </button>
                                </figcaption>
                            </figure>
                        </div>
                    </div>))
                }
            </div>
        </div>



    )
};

export default MyCart;