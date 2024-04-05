"use client";

import { motion } from "framer-motion";

const ScrollDownAnimation = () => {
  // when button is clicked, scroll down to the next section of the page smoothly
  const handleClick = () => {
    const portfolioElement = document.getElementById("portfolio");
    if (portfolioElement) {
      window.scrollTo({
        // top: portfolioElement.offsetTop,

        top: portfolioElement.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* #TODO: add functionality to scroll down to the next section */}
      <motion.button
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={handleClick}
      >
        <div className="absolute bottom-0">
          <motion.span
            className="block mx-auto relative border-2 dark:border-white border-black rounded-full h-12 w-6"
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="absolute top-2 left-1/2 bg-black dark:bg-white rounded-full h-3 w-3 transform -translate-x-1/2"></span>
          </motion.span>
        </div>
      </motion.button>
    </>
  );
};

export default ScrollDownAnimation;
