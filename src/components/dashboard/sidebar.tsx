"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarToggle } from "./sidebar-toggle";
import { Menu } from "./menu";

export function Sidebar() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, setIsHover } = sidebar;
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0",
        !getOpenState() ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative flex h-full flex-col overflow-hidden px-3 py-4 shadow-md dark:shadow-zinc-800"
      >
        <Button
          className={cn(
            "mb-1 transition-transform duration-300 ease-in-out",
            !getOpenState() ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <p
              className={cn(
                "font-champ font-extrabold",
                !getOpenState() ? "" : "hidden"
              )}
            >
              PV.
            </p>
            <h1
              className={cn(
                "whitespace-nowrap font-champ text-lg font-extrabold transition-[transform,opacity,display] duration-300 ease-in-out",
                !getOpenState()
                  ? "hidden -translate-x-96 opacity-0"
                  : "translate-x-0 opacity-100"
              )}
            >
              PatterVibe.
            </h1>
          </Link>
        </Button>
        <Menu isOpen={getOpenState()} />
      </div>
    </aside>
  );
}
