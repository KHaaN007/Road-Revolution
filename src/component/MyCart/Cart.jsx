const Cart = ({ cartId, carts }) => {
    console.log(cartId.id);



    const addCart = carts.filter(cart => cart._id == cartId.id)
    console.log(addCart);




    return (
        <div>
            {
                addCart.map(shoWaddCart => (<div key={shoWaddCart._id}>

                    <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                        <figure className="relative">
                            <img src={shoWaddCart.image} alt="card image" className="aspect-video w-full" />
                            <figcaption className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-slate-900">
                                <h3 className="text-lg font-medium ">{shoWaddCart.brandName}</h3>
                                <p className="text-sm opacity-75">{shoWaddCart.name}</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>))
            }
        </div>
    );
};

export default Cart;