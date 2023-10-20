import Swal from "sweetalert2";

const ShowCart = ({ showCart, carts, setCarts }) => {

    console.log(carts);



    const addCart = carts.filter(cart => cart._id == showCart.id)


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
                // console.log(result);
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

                    })
                const remainig = carts.filter(cart => cart._id !== _id)
                setCarts(remainig)


            }
        })

    }



    return (

        <div>
            {
                addCart && addCart.map(shoWaddCart => (<div key={shoWaddCart._id}>

                    <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                        <figure className="relative">
                            <img src={shoWaddCart.image} alt="card image" className="aspect-video w-full" />
                            <figcaption className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-slate-900">
                                <h3 className="text-2xl font-medium ">{shoWaddCart.brandName}</h3>
                                <p className="my-2 opacity-75">{shoWaddCart.name}</p>
                                <button
                                    onClick={() => handleDelete(showCart._id)}
                                    className="btn border-0 inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">Delete Product
                                </button>
                            </figcaption>
                        </figure>
                    </div>
                </div>))
            }
        </div>

    );
};

export default ShowCart;