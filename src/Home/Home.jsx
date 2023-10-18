import { useLoaderData } from "react-router-dom";
import BrandCard from "../component/BrandCard/BrandCard";

import CarouselLogo from "../component/CarouselLogo/CarouselLogo";
import NavBar from "../component/NavBar/NavBar";
import CarouselIndicatorsInside from "../component/CarouselIndicatorsInside/CarouselIndicatorsInside";
// import FunctionalNavBar from "../component/FunctionalNavbar/FunctionalNavBar";
// import { StickyNavbar } from "../component/StickyNavbar/StickyNavbar";


const Home = () => {

    const brands = useLoaderData()
    console.log(brands);


    return (
        <div className="text-center">
            {/* <FunctionalNavBar></FunctionalNavBar> */}
            {/* <NavBar></NavBar> */}
            {/* <StickyNavbar></StickyNavbar> */}
            <h1 className="text-4xl text-blue-500 py-10 my-10">This is Home Component Form Initial setup</h1>
            {/* <CarouselLogo></CarouselLogo> */}
            <CarouselIndicatorsInside></CarouselIndicatorsInside>
            <BrandCard brands={brands}></BrandCard>
        </div>
    );
};

export default Home;