
const ShowCart = ({ showCart, carts }) => {


    // console.log(carts._id);
    // console.log(showCart.id);



    const addCart = carts.filter(cart => cart._id == showCart.id)
    console.log(addCart);






    return (
        <div>
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
        </div>
    );
};

export default ShowCart;