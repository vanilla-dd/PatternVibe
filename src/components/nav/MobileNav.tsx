"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileSeprator from "./mobile-seprator";

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
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  useEffect(() => {
    if (isDesktop && open) {
      setOpen(false);
    }
  }, [isDesktop, open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        className={cn(
          "h-full w-full bg-white transition-all duration-500 ease-in-out", // Add bg-white or any color
          open ? "animate-openNav" : "animate-closeNav"
        )}
      >
        <SheetHeader>
          <SheetTitle>
            <div className="flex w-full items-center justify-between">
              <p className="font-champ text-xl font-extrabold sm:text-2xl">
                PatternVibe.
              </p>
              <SheetClose asChild>
                <X className="h-6 w-6" />
              </SheetClose>
            </div>
          </SheetTitle>
          <SheetDescription asChild aria-describedby="description">
            <main className="flex flex-col gap-8 py-6">
              {Object.entries(links).map(([key, items]) => (
                <div key={key} className="space-y-6">
                  <div className="flex flex-col">
                    {items.map((link) => (
                      <Button
                        variant={"link"}
                        className="self-start text-base"
                        asChild
                        key={link.title}
                      >
                        <a href={link.url}>{link.title}</a>
                      </Button>
                    ))}
                  </div>
                  {key !== "footer" && <MobileSeprator />}{" "}
                </div>
              ))}
            </main>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
