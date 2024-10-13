"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    from: "Robert Peterson, CEO XYZ",
    description:
      "So easy to use! Honestly, it’s changed the way we do business.",
  },
  { from: "", description: "" },
  { from: "", description: "" },
  { from: "", description: "" },
  { from: "", description: "" },
];

const TestimonialCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs overflow-hidden sm:max-w-lg sm:overflow-visible md:max-w-2xl lg:max-w-7xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center gap-8 p-6">
                  <span className="font-dmSans text-2xl font-semibold md:text-3xl lg:text-4xl">
                    “{testimonial.description}”
                  </span>
                  <span className="self-end text-xs font-semibold md:text-sm lg:text-base">
                    - {testimonial.from}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default TestimonialCarousel;
