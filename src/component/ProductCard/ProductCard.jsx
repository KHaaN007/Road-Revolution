import { useEffect, useState } from "react";
import Product from "../Product/Product";

const ProductCard = ({ brandDetail }) => {

    const { name } = brandDetail

    const [products, setProducts] = useState([])


    useEffect(() => {

        fetch('https://brand-shop-server-lkkube07x-md-amanat-khans-projects.vercel.app/product')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [])


    const filterProduct = products.filter(product => product.brandName === name)

    return (
        <div>
            <h1 className="text-5xl text-center my-24 font-serif font-semibold">Get Your <span className="items-center text-6xl text-indigo-900 font-serif">Road Revolution</span></h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2">
                {
                    filterProduct && filterProduct.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductCard;