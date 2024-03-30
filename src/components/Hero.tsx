import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ScrollDownAnimation from "./ScrollDownAnimation";

export default function Hero() {
  return (
    // #TODO: fix responsive style vh issue on mobile

    <section className="flex flex-col items-center justify-center h-[calc(100vh-70px)] ">
      <div className="flex flex-col container">
        <div className="flex flex-col items-start justify-center max-w-[70vw]">
          <h1 className="text-6xl font-bold ">
            {/* Welcome to <span className="text-[#f39c12]">Next.js</span> */}
            {/* // add Welcome to text but gradient */}
            <span className="text-transparent bg-gradient-to-r from-primary to-[#f1c40f] bg-clip-text">
              Unlock Boundless Creativity with Our Innovative Solutions
            </span>{" "}
          </h1>
          <p className="text-sm mt-5">
            Crafting Immersive Experiences Across Web, Games, AR, VR, and Mobile
            Platforms
          </p>
        </div>
      </div>

      <div>
        <ScrollDownAnimation />
      </div>
    </section>
  );
}
