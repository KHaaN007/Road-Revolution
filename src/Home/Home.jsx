import { useLoaderData } from "react-router-dom";
import BrandCard from "../component/BrandCard/BrandCard";

const Home = () => {

    const brands = useLoaderData()
    console.log(brands);


    return (
        <div className="text-center">
            <h1 className="text-4xl text-blue-500 py-10 my-10">This is Home Component Form Initial setup</h1>
            <BrandCard brands={brands}></BrandCard>
        </div>
    );
};

export default Home;