/* eslint-disable react/prop-types */
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
const projects = [
  {
    title: "Alia Bhatt",
    description:
      "Alia Bhatt (born 15 March 1993) is a British actress of Indian descent who predominantly works in Hindi films. Known for her portrayals of women in challenging circumstances, including a National Film Award and six Filmfare Awards. She is one of India's highest-paid actresses. Time awarded her with the Time100 Impact Award in 2022 and named her one of the 100 most influential people in the world in 2024. Born into the Bhatt family, she is a daughter of filmmaker Mahesh Bhatt and actress Soni Razdan. She played her first leading role in Karan Johar's teen film Student of the Year (2012). She won the Filmfare Critics Award for Best Actress for playing a kidnapping victim in the road drama Highway (2014).",
    src: "alia.jpg",
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFO8zGywOf-kKfD8kQZ0zmkDhU-p799EoZnRkE2buu37QeCEbUlZf1-O_xd6_uA1IgtEM1k9iRm3JPL3GZkECQLw",
    color: "#5196fd",
  },
  {
    title: "Yami Gautam",
    description:
      "Yami Gautam Dhar (born 28 November 1988) is an Indian actress known predominantly for her work in Hindi films.A daughter of Punjabi film director Mukesh Gautam, she began her career as a model,[5][6] and starred in television soap operas such as Chand Ke Paar Chalo (2008–2009) and Yeh Pyar Na Hoga Kam (2009–2010). In 2012, she had her first Hindi film release in the comedy-drama Vicky Donor, which won her the Zee Cine Award for Best Female Debut",
    src: "yami.jpg",
    link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxwM9XYHRR-aDZH48a-ZwxKZGCMq_lV8eyJknsJREy5eMX3hWRbUkJOfpEM6p8cIaFGbK_zufbiqVhFq-WS7PLWA",
    color: "#8f89ff",
  },
  {
    title: "Kiara Advani",
    description:
      "Alia Advani (born 31 July 1991), known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu films. After making her acting debut in the comedy film Fugly (2014), she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story (2016). She gained appreciation for playing a sexually unsatisfied wife in the Netflix anthology film Lust Stories (2018) and played the leading lady in the political thriller Bharat Ane Nenu (2018).",
    src: "kiara.jpg",
    link: "https://static.toiimg.com/thumb/115166695/115166695.jpg?height=746&width=420&resizemode=76&imgsize=62258",
    color: "#13006c",
  },
  {
    title: "Mrunal Thakur",
    description:
      "Mrunal Thakur (born 1 August 1992) is an Indian actress who predominantly works in Hindi and Telugu films.She began her acting career in television, starring in the soap operas Mujhse Kuchh Kehti...Yeh Khamoshiyaan (2012) and Kumkum Bhagya (2014–2016), which earned her the ITA Award for Best Actress in a Supporting Role.",
    src: "mrunal.jpg",
    link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtLrkYDA8exctOyxGmTPc0bZZkhhXDkwXvzAKK9v5sFOr-BpZNOeJ63tdBeF5GlDrW5i4hIRVky7a5sGN06Hg36g",
    color: "#ed649e",
  },
  {
    title: "Rashmika Mandana",
    description:
      "Rashmika Mandanna ( born 5 April 1996) is an Indian actress who works in Telugu, Kannada, Hindi and Tamil films. She has received four SIIMA Awards and a Filmfare Award. One of South India's highest-paid actresses, she was featured in Forbes India's 2024 list of '30 Under 30'.",
    src: "rashmika.jpg",
    link: "https://assets.telegraphindia.com/telegraph/2024/Sep/1725942940_rashmika-mandanna.jpg",
    color: "#fd521a",
  },
];
export default function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <>
          <section className="text-white  h-[70vh]  w-full bg-slate-950  grid place-content-center ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Our Top Known Clients
            </h1>
          </section>
        </>

        <section className="text-white   w-full bg-slate-950  ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        <footer className="group bg-slate-950 pb-80">
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            that believe in us.
          </h1>
        </footer>
      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className="text-sm">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={"#"}
                target="_blank"
                className="underline cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={url} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
