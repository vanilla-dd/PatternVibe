import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const footerSections = {
  explore: {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Design", href: "/design" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
    ],
  },
  helpSupport: {
    title: "Help & Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Request a Demo", href: "/demo" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/policy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie" },
    ],
  },
  social: {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "X (Twitter)", href: "https://twitter.com" },
      { name: "Instagram", href: "https://instagram.com" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="flex w-full flex-wrap justify-between gap-y-6 bg-white px-4 pb-10 pt-12 md:px-6 lg:px-8">
      {Object.entries(footerSections).map(([key, section]) => (
        <div key={key}>
          <p className="mb-4 font-champ text-base sm:text-lg md:text-xl">
            {section.title}
          </p>
          <div className="flex flex-col items-start font-dmMono text-sm sm:text-base">
            {section.links.map((link, index) => (
              <Button key={index} variant="link" asChild>
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      ))}
      <div className="self-center">
        © 2024{" "}
        <span className="font-champ text-base font-extrabold">PatterVibe.</span>{" "}
        | Your Gateway to Endless Fashion Possibilities.
      </div>
    </footer>
  );
};

export default Footer;
