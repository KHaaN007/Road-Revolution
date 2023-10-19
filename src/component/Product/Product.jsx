import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const update = e => {
        e.preventDefault()
        console.log('cliked');
    }


    console.log(product);
    return (
        <div className="">


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
                                    <div className="text-gray-400 font-semibold text-xl mb-4">07</div>
                                    <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                                </div>
                                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                                    <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                                        <div className="p-8">

                                            <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                                                {product.shortDescription}
                                            </p>

                                            <div className="bottom-0 flex absolute p-2 right-0">
                                                <Link>
                                                    <button onClick={update} className="btn inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md btn-sm bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">Update</button>
                                                </Link>
                                                <Link to={`/productdetails/${product._id}`}>
                                                    <button className="opacity-50 bg-gray-100 hover:bg-sky-200 hover:text-white text-sm font-bold pl-2 rounded inline-flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="btn font-bold">Details</span>
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


        </div>
    );
};

export default Product;