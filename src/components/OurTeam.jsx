const items = [
  {
    id: "1",
    url: "https://wallpapers.com/images/featured/goku-ultra-instinct-pictures-cgebo5hue38ak78m.jpg",
    title: "Shubham Mamgain",
    description: "COO & Co-Founder",
    tags: ["Frontend", "Backend", "Flutter", "AWS", "React native"],
  },
  {
    id: "2",
    url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/pain-six-paths-from-naruto.jpg",
    title: "Abhishek Bahuguna",
    description: "Lead Frontend Developer",
    tags: [
      "Frontend",
      "React",
      "Redux Toolkit",
      "Nextjs",
      "GSAP/Framer Motion",
    ],
  },
  {
    id: "3",
    url: "https://motionbgs.com/media/2331/mystique-of-gojo-satoru.jpg",
    title: "Shashank Negi",
    description: "Lead Backend Developer",
    tags: [
      "NodeJS",
      "MongoDB",
      "AWS",
      "Pipelining",
      "Advanced SQL Queries",
      "Backend",
    ],
  },
];

const OurTeam = () => {
  return (
    <div className="">
      <h1 className="text-7xl flex justify-center items-center  mb-6 text-green-500">
        {" "}
        Our Team
      </h1>

      <div className="group flex max-md:flex-col justify-center gap-2 w-[80%] mx-auto mb-10 mt-3">
        {items.map((item, i) => {
          return (
            <article
              key={i}
              className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
            >
              <a
                className="absolute inset-0 text-white z-10  p-3 flex flex-col justify-end"
                href="#0"
              >
                <h1 className=" text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {item?.title}
                </h1>
                <span className=" text-3xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {item?.description}
                </span>
              </a>
              <img
                className="object-cover h-72 md:h-[420px]  w-full"
                src={item?.url}
                width="960"
                height="480"
                alt="Image 01"
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
