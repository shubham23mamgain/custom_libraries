import { ReactLenis } from "lenis/react";
export default function WhyChooseUs() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Why Choose Us
            </h1>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <div className="flex justify-between px-16">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-72 w-[30rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Expertise and Experience
                  </h1>
                  <p>
                    Years of experience delivering innovative software solutions
                    across various industries. Proven track record of successful
                    projects for diverse clients.
                  </p>
                  <a
                    href="/"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-400 h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Tailored Solutions</h1>
                  <p>
                    Customized software development to meet your unique business
                    needs. Scalable solutions that grow with your business.
                  </p>
                  <a
                    href="/"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-orange-400 h-72 w-[30rem] p-4 rounded-lg -rotate-6 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Cutting-Edge Technology
                  </h1>
                  <p>
                    Expertise in the latest technologies, frameworks, and tools.
                    Staying ahead of industry trends to ensure future-ready
                    solutions.
                  </p>
                  <a
                    href="/"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-blue-400 h-72 w-[30rem] p-4 rounded-lg grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Dedicated Team</h1>
                  <p>
                    Highly skilled professionals with deep technical knowledge.
                    A collaborative and client-focused approach to every
                    project.
                  </p>
                  <a
                    href="/"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
                Used by Over 10000+ clients around the world
              </h1>
            </div>
          </div>
        </section>

        <footer className="group bg-slate-950 pb-40">
          <h1 className="text-[4vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            Our solutions have helped businesses across industries achieve their
            goals and drive innovation.
          </h1>
        </footer>
      </main>
    </ReactLenis>
  );
}
