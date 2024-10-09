import React from "react";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center gap-16 pt-16">
      <p className="text-center font-champ text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        Join the Revolution
      </p>

      <div className="grid gap-10 text-center">
        <div>
          <span className="block font-champ text-8xl font-extrabold leading-none md:text-[200px]">
            1000
            <span className="text-2xl md:text-8xl">s</span>
          </span>
          <span className="block font-dmMono text-lg md:text-2xl">
            Designs Created Daily
          </span>
        </div>

        <div>
          <span className="block font-champ text-8xl font-extrabold leading-none md:text-[200px]">
            10
            <span className="text-2xl md:text-8xl">hrs</span>
          </span>
          <span className="block font-dmMono text-lg md:text-2xl">
            Saved Every Week
          </span>
        </div>

        <div>
          <span className="block font-champ text-8xl font-extrabold leading-none md:text-[200px]">
            5 <span className="text-2xl md:text-8xl">min</span>
          </span>
          <span className="block font-dmMono text-lg md:text-2xl">
            To Get Set Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
