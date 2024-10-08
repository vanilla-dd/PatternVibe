import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-12 px-3 py-20">
      <div className="flex aspect-video w-full max-w-2xl bg-red-900">
        Tbh image
      </div>
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
        <Button className="p-8 text-2xl">Start Now</Button>
      </div>
    </div>
  );
};

export default Hero;
