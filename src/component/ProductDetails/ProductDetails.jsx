import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const details = useLoaderData();
    // console.log(details);

    return (
        <div>
           <img src={details.image} alt="" />
        </div>
    );
};

export default ProductDetails;