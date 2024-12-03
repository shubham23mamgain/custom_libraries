/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const InfoCards = ({ items, setIndex, index }) => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold text-pink-500 flex justify-center items-center">
        Info Cards
      </h1>
      <div className="w-fit mx-auto gap-1 flex pb-20 pt-10 ">
        {items.slice(0, 10).map((item, i) => {
          return (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl relative ${
                index === i ? "w-[450px] " : "w-[50px]"
              } h-[400px] flex-shrink-0  transition-[width] ease-in-linear duration-500 origin-center  bg-pink-500`}
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              onMouseEnter={() => {
                setIndex(i);
              }}
            >
              <motion.img
                src={item?.url}
                className={`${
                  index === i ? "cursor-default" : "cursor-pointer"
                } w-full rounded-xl  h-full object-cover `}
              />
              <AnimatePresence mode="wait">
                {index === i && (
                  <motion.article
                    variants={article}
                    initial="hidden"
                    animate="show"
                    className="absolute flex rounded-xl  flex-col justify-end h-full w-full top-0 p-3 space-y-2 overflow-hidden bg-gradient-to-t dark:from-gray-900/60 from-gray-100/60  from-20% to-transparent to-80% "
                  >
                    <motion.h1
                      variants={article}
                      className="text-2xl font-semibold"
                    >
                      {item?.title}
                    </motion.h1>
                    <motion.p variants={article} className="leading-[120%]">
                      {item?.description}
                    </motion.p>
                  </motion.article>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCards;
