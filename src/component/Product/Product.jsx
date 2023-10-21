import { Link } from "react-router-dom";

const Product = ({ product }) => {


    console.log(product);

    return (
        <div className="">


            {
                product ?
                    <div className="w-full h-full relative cursor-pointer mb-5">
                        <div className="z-30 relative items-center rounded-2xl justify-center w-full h-full overflow-auto">
                            <div className="inset-0  h-screen bg-cover bg-center"
                                style={{ backgroundImage: `url(${product.image})` }}>
                            </div>

                            <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
                            <div className="absolute transform  hover:scale-75 transition duration-300 inset-0  z-30  flex flex-col items-center justify-center">
                                <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                >

                                    <div className="grid grid-cols-12 gap-1">
                                        <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                                            <div className="font-mono border-l-4 border-gray-400 py-20 text-center mx-2 absolute left-0">
                                                <p className="italic bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 text-xl md:text-4xl lg:text-5xl uppercase text-center   font-mono font-bold">
                                                    {product.name}
                                                </p>
                                            </div>
                                            <div className="text-white font-semibold text-xl mb-4">{product.brandName}</div>
                                            <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                                            <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                                                <div className="p-8">

                                                    <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                                                        {product.shortDescription}
                                                    </p>

                                                    <div className="bottom-0 flex absolute p-2 right-0">
                                                        <Link to={`/updateProduct/${product._id}`}>

                                                            <button className="relative mr-10 flex h-[50px] w-32 items-center justify-center overflow-hidden bg-gray-800 text-white rounded-lg shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                                                                <span className="relative z-10">Update</span>
                                                            </button>
                                                        </Link>



                                                        <Link to={`/productdetails/${product._id}`}>
                                                         


                                                            <button className="before:ease relative h-12 w-32 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute rounded-lg before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                                                <span relative="relative z-10">Details</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    :
                    <h2 className="text-center">No Available Product</h2>
            }


        </div>
    );
};

export default Product;