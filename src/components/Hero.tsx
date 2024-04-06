"use client";

import React from "react";
import ScrollDownAnimation from "./ScrollDownAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // #TODO: fix responsive style vh issue on mobile

    // <section className="flex flex-col items-center justify-around h-full md:min-h-[calc(100vh-100px)] relative">
    //   <BackgroundBeams />
    //   <div className="flex flex-col container py-5">
    //     <div className="flex flex-col items-start justify-center ">
    //       <h1 className="text-4xl md:text-6xl font-bold">
    //         {/* Welcome to <span className="text-[#f39c12]">Next.js</span> */}
    //         {/* // add Welcome to text but gradient */}
    //         <span className="text-transparent bg-gradient-to-r from-primary to-[#ddb411] dark:to-[#d1aa0d] bg-clip-text">
    //           {/* <span className="text-transparent bg-gradient-to-r from-primary to-accent-foreground bg-clip-text"> */}
    //           Unlock Boundless Creativity with Our Innovative Solutions
    //         </span>{" "}
    //       </h1>
    //       <p className="text-md  mt-5">
    //         Crafting Immersive Experiences Across Web, Games, AR, VR, and Mobile
    //         Platforms
    //       </p>
    //     </div>

    //     <div className="flex justify-center relative h-[100px] lg:h-[200px]">
    //       <ScrollDownAnimation />
    //     </div>
    //   </div>
    // </section>

    <section className="w-[100%] relative">
      {/* <BackgroundBeams /> */}
      <div className="mx-auto max-w-screen-xl px-4 py-10 md:py-32 lg:flex md:min-h-[calc(100vh-70px)] lg:items-center relative ">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          viewport={{ amount: "some", once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1> */}
          <h1>
            {/* Welcome to <span className="text-[#f39c12]">Next.js</span> */}
            {/* // add Welcome to text but gradient */}
            <span className="bg-gradient-to-r from-primary to-[#ddb411] dark:to-[#d1aa0d]  bg-clip-text text-3xl sm:text-5xl font-extrabold text-transparent md:text-6xl">
              {/* <span className="text-transparent bg-gradient-to-r from-primary to-accent-foreground bg-clip-text"> */}
              Unlock Boundless Creativity with Our Innovative Solutions
            </span>{" "}
          </h1>

          {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p> */}
          <p className="mt-4 max-w-xl sm:text-xl/relaxed">
            Crafting Immersive Experiences Across Web, Games, AR, VR, and Mobile
            Platforms
          </p>

          <div className="mt-40 relative  flex flex-wrap justify-center gap-4">
            <ScrollDownAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
