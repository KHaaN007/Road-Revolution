import { useEffect, useState } from "react";
import Product from "../Product/Product";

const ProductCard = ({ brandDetail }) => {

    const { name } = brandDetail

    const [products, setProducts] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [])


    const filterProduct = products.filter(product => product.brandName === name)
 
    return (

        <div className="grid grid-cols-2 gap-2">
            {
                filterProduct.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default ProductCard;