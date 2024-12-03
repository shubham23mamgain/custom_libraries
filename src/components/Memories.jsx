import { imagesSection } from "../data/imagesSection";
import { infoCards } from "../data/infoCards";
import { memories } from "../data/memoriesImages";
import Marquee from "./Marquee";

const Memories = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold flex items-center justify-center">
        {" "}
        Memories
      </h1>

      <div className="flex flex-row gap-6 ">
        <div className="relative flex h-full w-96 mx-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
          <div className="flex flex-row gap-4 [perspective:300px]">
            <Marquee
              className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
              vertical
              style={{
                transform:
                  "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
              }}
            >
              {memories.map((data, idx) => (
                <img
                  key={idx}
                  src={data.img}
                  alt={data.name}
                  className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
                />
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>

        <div className="relative flex h-full w-96 mx-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
          <div className="flex flex-row gap-4 [perspective:300px]">
            <Marquee
              className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
              vertical
              style={{
                transform:
                  "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
              }}
            >
              {infoCards.map((data, idx) => (
                <img
                  key={idx}
                  src={data.url}
                  alt={data.title}
                  className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
                />
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>

        <div className="relative flex h-full w-96 mx-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
          <div className="flex flex-row gap-4 [perspective:300px]">
            <Marquee
              className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
              vertical
              style={{
                transform:
                  "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
              }}
            >
              {imagesSection.map((data, idx) => (
                <img
                  key={idx}
                  src={data.url}
                  alt={data.id}
                  className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
                />
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Memories;
