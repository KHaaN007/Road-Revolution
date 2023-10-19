import CarouselIndicatorsInside from "../CarouselIndicatorsInside/CarouselIndicatorsInside";



const Banner = () => {
    // const videoRef = useRef(null);

    // useEffect(() => {
    //     videoRef.current.play();
    // }, [])

    // const videoStyles = {
    //     width: '100%',
    //     height: '100vh',
    //     objectFit: 'cover',
    // };

    const containerStyles = {
        position: 'relative',
    };



    const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha (last) value for opacity
    };



    return (
        <div>





            <div style={containerStyles}>
                
                <video
                    className="w-auto"
                    // style={videoStyles}
                    autoPlay
                    loop
                    muted
                >
                    <source className="" src="/public/bannerVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={overlayStyles}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white lg:text-8xl font-mono font-bold">

                    <div className="font-extrabold text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in <span class="text-indigo-500 inline-flex flex-col">
                        <ul className="block text-left leading-tight [&_li]:block">
                            <li>Road </li>
                                <hr />
                                <li>Revolution</li>
                        </ul>
                    </span></div>

                </div>
            </div>


        </div>
    );
};

export default Banner;