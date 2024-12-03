import { ReactLenis } from "lenis/react";
import ContactForm from "./ContactModal";
import { useState } from "react";
import { FramerModal, ModalContent } from "./modal";
export default function GetInTouch() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="text-white  h-screen  w-full bg-cyan-600  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Have ideas but dont know how to move forward with them
            </h1>
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Dont worry we are there to help you.
            </h1>
          </section>
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Get In Touch With Us
            </h1>

            {/* <ContactForm /> */}

            <button
              onClick={() => setModalOpen(true)}
              className="i h-12  rounded-md border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Enter
            </button>

            <FramerModal open={modalOpen} setOpen={setModalOpen}>
              <ModalContent>
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                  <h2 className="text-lg font-semibold leading-none tracking-tight">
                    Contact Details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your email and message here, we will get back to you
                    shortly.
                  </p>
                </div>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-sm font-medium leading-none text-right">
                      Name
                    </label>
                    <input
                      className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
                      id="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-sm font-medium leading-none text-right">
                      Username
                    </label>
                    <input
                      className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
                      id="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-md"
                    type="button"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </ModalContent>
            </FramerModal>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
