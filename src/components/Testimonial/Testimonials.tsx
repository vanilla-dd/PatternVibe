import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <p className="text-center font-champ text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        Every design tells a story
      </p>
      <TestimonialCarousel />
    </div>
  );
};

export default Testimonial;
