import  { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselIndicatorsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      gap: 24,
      classNames: {
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
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators inside --> */}
      <div className="glide-02 relative w-full lg:mx-auto mx-auto">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://i.ibb.co/nkLK4SP/zan-1-BWBi-UUT-AA-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/w4xyxLr/tyler-clemmensen-Zs-L-pls-Zzg-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/VQV1scf/slade-lapusnak-z-3l-Zf-Fdsj0-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/DDRR5VD/andre-tan-l-Rr-Nccxr-Tf-Q-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/SsR9g11/c-joyful-MPCKq5-Amr9w-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/XpbHQ49/fernando-marques-dz-ZV4-Pp-Q-NI-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/7kP2YQL/mintosko-Ad203-Ky-Jk-AU-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co/MDt59MK/haidong-liang-5-Eno-Mx-Kb2-W4-unsplash.jpg"
                className="m-auto rounded-2xl h-full max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        
      </div>
      {/*<!-- End Carousel with indicators inside --> */}
    </>
  )
}
