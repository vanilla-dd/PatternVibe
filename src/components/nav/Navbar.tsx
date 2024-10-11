import React from "react";
import { Button } from "../ui/button";
import MagneticButton from "../animated/MagneticButton";
import MobileNav from "./MobileNav";
import { validateRequest } from "@/lib/helpers/validate-request";
import ProfileDropdown from "../ProfileDropdown";
import Link from "next/link";

const Navbar = async () => {
  const { user } = await validateRequest();
  return (
    <nav className="sticky top-0 z-10 flex h-full items-center justify-between bg-currentbg px-4 py-2 transition-colors duration-700 lg:py-4">
      <p className="font-champ text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
        PatternVibe.
      </p>
      {user ? (
        <ProfileDropdown username={user.username} email={user.email} />
      ) : (
        <>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Button variant={"ghost"}>Resources</Button>
            <Button variant={"link"} asChild>
              <Link href="/price">Pricing</Link>
            </Button>
            <Button variant={"link"} asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <MagneticButton distance={0.5}>
              <Button asChild>
                <Link href="/demo">Request a demo</Link>
              </Button>
            </MagneticButton>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
