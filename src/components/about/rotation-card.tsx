import React from "react";

const ZigzagPattern = ({ className = "" }) => (
  <svg width="100%" height="10" className={className}>
    <defs>
      <pattern
        id="zigzag"
        patternUnits="userSpaceOnUse"
        width="17.6"
        height="10"
      >
        <path d="M17.6 10L17.6 0L8.80001 10H17.6Z" fill="white" />
        <path d="M8.80001 10H0V0L8.80001 10Z" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#zigzag)" />
  </svg>
);

const features = [
  {
    number: "01",
    title: "Design with Ease",
    description:
      "Easily craft custom garments using our 3D design tools, no prior experience needed.",
    rotationClasses:
      "rotate-[2.5deg] md:-rotate-[9deg] md:translate-y-[67px] lg:translate-y-[88px] md:z-[3]",
  },
  {
    number: "02",
    title: "Custom Experience",
    description:
      "Get a personalized design experience with advanced customization options.",
    rotationClasses:
      "-rotate-[2.5deg] md:rotate-[5deg] md:translate-y-0 lg:translate-x-[8px] lg:translate-y-[21px] md:z-[2]",
  },
  {
    number: "03",
    title: "Perfect Fit",
    description:
      "Our advanced sizing technology ensures your garments fit perfectly every time.",
    rotationClasses:
      "rotate-[2.5deg] md:-rotate-[2deg] md:translate-y-[100px] lg:-translate-x-[8px] lg:translate-y-[64px] md:z-[1]",
  },
  {
    number: "04",
    title: "Quick Delivery",
    description:
      "From design to doorstep, experience rapid delivery of your custom creations.",
    rotationClasses:
      "-rotate-[2.5deg] md:rotate-[7deg] md:translate-y-[71px] lg:translate-y-[33px]",
  },
];

const FeatureCard = ({
  number,
  title,
  description,
  rotationClasses,
}: {
  number: string;
  title: string;
  description: string;
  rotationClasses: string;
}) => (
  <div className={`max-w-72 ${rotationClasses}`}>
    <ZigzagPattern />
    <div className="grid min-h-[429px] grid-rows-3 gap-4 bg-white p-5 text-center font-dmMono">
      <div>
        <p className="text-xs text-gray-500 sm:text-sm md:text-base">
          {number}
        </p>
      </div>
      <div className="font-champ text-2xl font-semibold sm:text-3xl">
        <p>{title}</p>
      </div>
      <p className="text-base text-gray-700">{description}</p>
    </div>
    <ZigzagPattern className="rotate-180" />
  </div>
);

const RotationCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.number} {...feature} />
      ))}
    </div>
  );
};

export default RotationCard;
