// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "./ui/carousel";
// import { mobileAppsPortfolio } from "@/static/static";
// import { Item } from "@radix-ui/react-dropdown-menu";

// export default function CarouselSection() {
//   return (
//     <section className="h-screen max-w-[80%]  container">
//       <div className="flex">
//         <div>
//           {mobileAppsPortfolio.map((Item, index) => (
//             <Carousel key={index}>
//               <CarouselPrevious>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-10 w-10 text-primary"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//               </CarouselPrevious>
//               <CarouselNext>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-10 w-10 text-primary"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </CarouselNext>
//               <CarouselContent>
//                 {Item.items.map((item, index) => (
//                   <CarouselItem key={index}>
//                     <a href={item.link}>
//                       <img src={item.images[0]} alt="" />
//                     </a>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//             </Carousel>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { portfolio } from "@/static/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      className="min-h-fit  max-w-5xl mx-auto px-8   "
      id="portfolio"
      // add animation to the section when user scrolls to it
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full w-full py-10 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        viewport={{ amount: "some", once: true }}
      >
        <h1 className="text-3xl md:text-6xl font-semibold md:font-bold text-center py-5">
          Services
        </h1>
        <HoverEffect items={portfolio} />
      </motion.div>
    </motion.div>
  );
}
