/* eslint-disable @next/next/no-img-element */
import React from "react";

const FloatingImages = () => {
  return (
    <div>
      <img
        src="/image.png"
        className="absolute top-0 h-12 w-12 -translate-x-48 -rotate-12 subpixel-antialiased"
        alt="idk"
      />
      <img
        src="/image.png"
        className="absolute right-0 top-0 h-12 w-12 translate-x-28 translate-y-24 rotate-45"
        alt="idk"
      />
      <img
        src="/image.png"
        className="absolute h-12 w-12 -translate-x-12 -rotate-[35deg]"
        alt="idk"
      />
      <img
        src="/image.png"
        className="absolute top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 -rotate-12"
        alt="idk"
      />
      <img
        src="/image.png"
        className="absolute -left-1/2 bottom-6 h-12 w-12 -translate-y-1/2 translate-x-1/2 -rotate-12"
        alt="idk"
      />{" "}
      <img
        src="/image.png"
        className="absolute left-1/3 top-0 h-12 w-12 -translate-y-1/2 translate-x-1/2 -rotate-12"
        alt="idk"
      />{" "}
      <img
        src="/image.png"
        className="absolute right-1/4 top-0 h-12 w-12 -translate-y-1/2 translate-x-1/2 -rotate-12"
        alt="idk"
      />
    </div>
  );
};

export default FloatingImages;
