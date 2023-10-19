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
            {/* <video ref={videoRef} width="full" height="full" autoPlay>
                <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/bmw-explained-logo/exl-01-stage-hd9.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/bmw-explained-logo/exl-01-stage-hd9.mp4)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                        <CarouselIndicatorsInside></CarouselIndicatorsInside>
                    </div>
                </div>
            </div> */}

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
                    Road Revolution
                    <br />
                    Find Your Dream Road Master
                </div>
            </div>


        </div>
    );
};

export default Banner;