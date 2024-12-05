"use client";
import { ReactLenis } from "lenis/react";
export default function StickyGallery() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        {/* <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Create Gallery In a Better Way
              <br />
              Using CSS sticky properties <br />
              Scroll down! 👇
            </h1>
          </section>
        </div> */}

        <section className="text-white   w-full bg-slate-950  ">
          <div className="grid grid-cols-12 gap-2">
            <div className="grid gap-2 col-span-4">
              <figure className=" w-full">
                <img
                  src="https://pbs.twimg.com/media/EbzDYUpXsAEDO31.jpg:large"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className=" w-full">
                <img
                  src="https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ5u0jrMtwydz7w3iVJ2VKqZoEJVRnhz_OTp9N8OUDEEsXZGDgJ_CAfZB65fA-zxFtrFlmhrYgAZmyaiqg8O6XJ_mgj2V8ZU2FfEDaKK_YXbXCwcfydZ4Gc82Q.jpg?r=c2e"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className=" w-full">
                <img
                  src="https://assets3.thrillist.com/v1/image/2877594/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://i.insider.com/5ef409263f737040af0496a4?width=600&format=jpeg&auto=webp"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://www.tiempoderecreo.com/wp-content/uploads/2023/12/claudia-tiedemann-de-dark.webp"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>

            <div className="sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3">
              <figure className="w-full h-full ">
                <img
                  src="https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU-R53ZJdjfp-IH7vyaSo_y6DL9MXpJbtWJxZDMuL_kTDdJhp6_pAoiL0GNgVV_SLEGzDjWl8-ZcIJxLY9KqwqVH-p0WTezIfxxY__JQcicQsfb345lQH3x8nQ.jpg?r=2ba"
                  alt=""
                  className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full h-full ">
                <img
                  src="https://www.arri.com/resource/blob/45670/14d9a319662f989157dbd13ea8cf6d6c/bild2-bildschirmfoto-2018-07-11-um-10-52-38-data.png"
                  alt=""
                  className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full h-full ">
                <img
                  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Mark-Waschke-and-Max-Schimmelpfennig-play-Noah-on-Netflix-Dark.jpg"
                  alt=""
                  className="transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>

            <div className="grid gap-2 col-span-4">
              <figure className="w-full">
                <img
                  src="https://preview.redd.it/lvmvyv6m5vg01.jpg?width=640&crop=smart&auto=webp&s=2cf52522cd0b70fd5e571362b5404c8cdee3b1b6"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://sm.mashable.com/mashable_in/photo/default/dark-season-3-ending-explained-1_x1h1.jpg"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://decider.com/wp-content/uploads/2019/06/dark-205-recap.jpg?quality=75&strip=all"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6Z1BGbWCJkxCtbGcM-NGWE-OG9oxaIMTuD_Y5ZeRhm3J-IXoUYh2yppz_zwL6wi4_iU49QpuI8oUxBV9MTeCsmyTV1Tzri0vtxlSTx8tFKp8J4dsy1djLMquXeTHOBynzgGGvP2pmYNpTvvGM2TZA4aEdTuzQyXJnr_WUY9FHNvNiQcF5ntXvZOhpMzTN/s546/Screenshot%202023-09-13%20143637.png"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://i.redd.it/y5z279sqxc731.jpg"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className="group bg-slate-950 pb-40">
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            Gallery
          </h1>
          {/* <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div> */}
        </footer>
      </main>
    </ReactLenis>
  );
}
