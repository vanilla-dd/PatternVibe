/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-12 overflow-hidden px-3 py-20">
      {/* <div className="relative">
        <img
          src={"/waiting.png"}
          alt="image"
          className="aspect-video h-full w-full max-w-2xl"
        />
        <FloatingImages />
      </div> */}

      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-champ text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Create. Sell. We Handle the Rest.
        </p>
        <p className="max-w-3xl font-dmSans text-base sm:text-lg md:text-xl lg:text-2xl">
          Empower your creativity. Sell unique, custom-fit garments directly
          through your store, while we handle everything from production to
          delivery.
        </p>
      </div>
      <div>
        <Button className="bg-yellow-400 p-8 font-dmSans text-xl font-bold text-black">
          Start Now
        </Button>
      </div>
      <div className="aspect-video w-full max-w-6xl bg-red-900 text-white">
        Demo video showcasing top features and ease of use.
      </div>
    </div>
  );
};

export default Hero;
