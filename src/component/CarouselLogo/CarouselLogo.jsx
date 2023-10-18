import Glide from "@glidejs/glide"
import { useEffect } from "react"

export default function CarouselLogo() {
    useEffect(() => {
        const slider = new Glide(".glide-09", {
            type: "carousel",
            autoplay: 1,
            animationDuration: 5000,
            animationTimingFunc: "linear",
            perView: 3,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                    gap: 36,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <div className="border glide-09 relative ">
            {/*<!-- Component: Testimonial carousel --> */}
            <div className=" border">
                {/* <!-- Slides --> */}
                <div data-glide-el="track">
                    <ul className=" whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li className="flex items-center text-2xl">
                            <img
                                src="https://i.ibb.co/8znvrc2/bmw-logo-1997-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.ibb.co/09LvC94/tesla-logo-2004-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                       
                        <li>
                            <img
                                src="https://i.ibb.co/RY0RT6h/jaguar-logo-2012-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.ibb.co/1fXzRD0/hyundai-logo-2011-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.ibb.co/vcxP4Fd/porsche-logo-2014-full-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.ibb.co/bBHbpCP/toyota-logo-2005-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.ibb.co/S7q8VVB/audi-logo-1995-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.ibb.co/RSngsv3/honda-logo-2000-full-download.webp"
                                className="mx-auto h-20 max-h-full w-auto max-w-full"
                            />
                        </li>
                       
                    </ul>
                </div>
            </div>
            {/*<!-- End Testimonial carousel --> */}
        </div>
    )
}