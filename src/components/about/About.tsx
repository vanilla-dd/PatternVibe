import React from "react";
import RotationCard from "./rotation-card";

const About = () => {
  return (
    <div className="px-6">
      <p className="pb-16 text-center font-champ text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
        The joyful way
        <br />
        to design
      </p>
      <div className="grid grid-flow-row place-items-center gap-6 md:grid-flow-col md:grid-rows-2 lg:grid-rows-1 lg:gap-3">
        <RotationCard />
      </div>
    </div>
  );
};

export default About;
