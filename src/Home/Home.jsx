import { useLoaderData } from "react-router-dom";
import BrandCard from "../component/BrandCard/BrandCard";
import CarouselIndicatorsInside from "../component/CarouselIndicatorsInside/CarouselIndicatorsInside";
import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";
import BrandLogo from "../component/BrandLogo/BrandLogo";
// import CarouselLogo from "../component/CarouselLogo/CarouselLogo";




const Home = () => {

    const brands = useLoaderData()



    return (
        <div className="text-center">
            <Banner></Banner>
            <CarouselIndicatorsInside></CarouselIndicatorsInside>
          
                {/* <CarouselLogo></CarouselLogo> */}
       
            <BrandCard brands={brands}></BrandCard>
            <BrandLogo></BrandLogo>
            <Footer></Footer>
        </div>
    );
};

export default Home;