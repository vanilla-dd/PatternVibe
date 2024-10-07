import React from "react";
import { Button } from "./ui/button";
import MagneticButton from "./animated/MagneticButton";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2 py-2 sm:px-4">
      <p className="font-champ text-lg font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        PatternVibe
      </p>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <Button variant={"ghost"}>Resources</Button>
        <a href="/price">
          <Button variant={"link"}>Pricing</Button>
        </a>
        <a href="/login">
          <Button variant={"link"}>Login</Button>
        </a>
        <MagneticButton distance={0.5}>
          <a href="/demo">
            <Button>Request a demo</Button>
          </a>
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Navbar;
