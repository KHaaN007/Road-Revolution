import { useEffect, useState } from "react";

const ProductCard = ({ brandDetail }) => {

    // const [products, setProducts] = useState([])



    // fetch('http://localhost:5000/product', {})
    //     .then(response => response.json())
    //     .then(data => setProducts(data))

        // console.log(products);

    //    useEffect(({
        
    //    }),[])

    return (
        <div>
            <h2 className="text-6xl">{brandDetail.name}</h2>

        </div>
    );
};

export default ProductCard;