import { useLoaderData } from "react-router-dom";
import BrandCard from "../component/BrandCard/BrandCard";
import CarouselIndicatorsInside from "../component/CarouselIndicatorsInside/CarouselIndicatorsInside";
import Banner from "../component/Banner/Banner";



const Home = () => {

    const brands = useLoaderData()



    return (
        <div className="text-center">
            <Banner></Banner>
            <h1 className="text-4xl text-blue-500 py-10 my-10">This is Home Component Form Initial setup</h1>
            <CarouselIndicatorsInside></CarouselIndicatorsInside>
            <BrandCard brands={brands}></BrandCard>
        </div>
    );
};

export default Home;