"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileSeprator from "./mobile-seprator";
import Link from "next/link";

const links = {
  auth: [
    { title: "Log in", url: "/login" },
    { title: "Request a demo", url: "/demo" },
  ],
  main: [
    { title: "Pricing", url: "/pricing" },
    { title: "Help Center", url: "/help" },
  ],
  footer: [
    { title: "Terms & Condition", url: "/t&c" },
    { title: "Privacy Policy", url: "/privacy" },
  ],
};

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const [firstInteraction, setFirstInteraction] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleToggle = () => {
    setFirstInteraction(true);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="focus:outline-none"
        aria-label="Toggle navigation"
      >
        {<Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 top-px z-[99] bg-white transition-all duration-500 ease-in-out",
          firstInteraction && open
            ? "animate-openNav"
            : firstInteraction
              ? "animate-closeNav"
              : ""
        )}
        style={{
          clipPath: open ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)",
        }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <p className="font-champ text-xl font-extrabold">PatternVibe.</p>
          <button
            onClick={() => setOpen(false)}
            className="focus:outline-none"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <main className="flex flex-col gap-8 px-2 py-6">
          {Object.entries(links).map(([key, items]) => (
            <div key={key} className="space-y-6">
              <div className="flex flex-col space-y-3">
                {items.map((link) => (
                  <Link
                    href={link.url}
                    key={link.title}
                    className="self-start font-dmMono"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              {key !== "footer" && <MobileSeprator />}
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default MobileNav;
