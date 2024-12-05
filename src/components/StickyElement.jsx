import { ReactLenis } from "lenis/react";
export default function StickyElement() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              The End is the Beginning <br /> and The Beginning is the end
            </h1>
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              What we know is a drop <br /> What we dont know is an ocean.
            </h1>
          </section>
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              There are moments when we must understand that the decisions we
              make influence more than just our own fate.
              <br />
            </h1>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <div className="grid grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                The Question isn't Where <br /> The Question is when.
              </h1>
            </div>
            <div className="grid gap-2">
              <figure className="grid place-content-center -skew-x-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17UcRhvewPjfTPU6W7hvUlSPMzCPVnRyV6g&s"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-12">
                <img
                  src="https://i.pinimg.com/736x/7e/4b/a9/7e4ba9e514c018518ba70f604289ed2b.jpg"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center -skew-x-12">
                <img
                  src="https://rukminim2.flixcart.com/image/850/1000/kxxl9jk0/poster/j/o/s/medium-dark-series-netflix-poster-premium-laminated-multicolour-original-imagaaa4fajbknvp.jpeg?q=90&crop=false"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-12">
                <img
                  src="https://i.pinimg.com/736x/a8/61/f4/a861f4ab3f5bb6f151a48befc3e18c49.jpg"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
            </div>
          </div>
        </section>
        <section className="text-white   w-full bg-slate-950  ">
          <div className="grid grid-cols-2 px-8">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://i.pinimg.com/736x/c6/81/af/c681af7a1d3a717efef88ae621869524.jpg"
                  alt=""
                  className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://i.insider.com/5d16a6f721a861059d74f3c3?width=600&format=jpeg&auto=webp"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://i.pinimg.com/236x/d5/81/7f/d5817fe22b73623313d488130ae11b92.jpg"
                  alt=""
                  className="transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://i.insider.com/5a28285a3339b04c028b45a8?width=600&format=jpeg&auto=webp"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
                The Thus the world was created
              </h1>
            </div>
          </div>
        </section>
        <footer className="group bg-slate-950 pb-40">
          <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            Sic Mundus Creatus Est
          </h1>
        </footer>
      </main>
    </ReactLenis>
  );
}
