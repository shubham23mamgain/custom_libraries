import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqTabs } from "../data/faqTabs";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const [activeItem, setActiveItem] = useState(faqTabs[0]);

  console.log(activeItem, "activeItem");

  const handleClick = async (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = faqTabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };
  return (
    <>
      <div className="container mx-auto pb-10 pt-2 px-20">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
          {faqTabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== faqTabs.length - 1 ? "border-b" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? "rotate-45" : "rotate-0 "
                  } transition-transform ease-in-out w-5 h-5  dark:text-gray-200 text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
