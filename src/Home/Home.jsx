import { useLoaderData } from "react-router-dom";
import BrandCard from "../component/BrandCard/BrandCard";
import CarouselIndicatorsInside from "../component/CarouselIndicatorsInside/CarouselIndicatorsInside";
import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";
import BrandLogo from "../component/BrandLogo/BrandLogo";
import { useState } from "react";
import NavBar from "../component/NavBar/NavBar";
// import DarkToggle from "../component/DarkToggle/DarkToggle";
// import CarouselLogo from "../component/CarouselLogo/CarouselLogo";




const Home = () => {



    const brands = useLoaderData()


    const [currentTheme, setCurrentTheme] = useState('light'); // Initial theme is 'light'

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };






    return (
        <div>
            <div className={`bg-${currentTheme === 'dark' ? 'black' : 'white'} text-${currentTheme === 'dark' ? 'white' : 'black'} min-h-screen transition-all duration-300`}>
                <header>
                    <div className="flex justify-between items-center">
                        <button
                            className={`absolute top-8 left-[850px]  bg-${currentTheme === 'dark' ? 'black-700' : 'gray-100'} w-10 text-sm rounded-md border-2  border-purple-400 hover:bg-${currentTheme === 'dark' ? 'black' : 'gray-300'}`}
                            onClick={toggleTheme}
                        >
                            {currentTheme === 'dark' ? 'Dark' : 'Light'}
                        </button>
                    </div>
                </header>

                <main>
                    <NavBar></NavBar>
                    <Banner></Banner>
                    <CarouselIndicatorsInside></CarouselIndicatorsInside>
                    <BrandCard brands={brands}></BrandCard>
                    <BrandLogo></BrandLogo>
                </main>

                <footer>

                    <Footer></Footer>
                </footer>
            </div>








        </div>
    );
};

export default Home;