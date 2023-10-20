import { useLoaderData } from "react-router-dom";
import BrandCard from "../component/BrandCard/BrandCard";
import CarouselIndicatorsInside from "../component/CarouselIndicatorsInside/CarouselIndicatorsInside";
import Banner from "../component/Banner/Banner";



const Home = () => {

    const brands = useLoaderData()



    return (
        <div className="text-center">
            <Banner></Banner>
            <CarouselIndicatorsInside></CarouselIndicatorsInside>
            <BrandCard brands={brands}></BrandCard>
        </div>
    );
};

export default Home;