import { Link } from "react-router-dom";

const Card = ({ brand }) => {
    // console.log(brand);
    return (
        <div>

            {/* Tailwind CSS Animation */}


            <div className="relative inset-0 w-full h-full transform cursor-pointer hover:scale-90 transition duration-500">

                <div className="h-full w-full rounded-lg">


                    {/* <!-- component --> */}

                    <Link to={`/brand/${brand.id}`}>
                        <div className="relative rounded-2xl group w-full h-full overflow-hidden bg-black m-auto mt-36">
                            <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={brand.img} />
                            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                                <div className=" w-full flex place-content-center">
                                    <p className="capitalize font-serif font-bold text-5xl text-center shadow-2xl text-white mt-5 ">{brand.name}</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Card;