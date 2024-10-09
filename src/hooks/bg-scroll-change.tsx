"use client";

import { useEffect } from "react";

import React from "react";

export default function ScrollBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const threshold = 100;
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const baseBg = getComputedStyle(root).getPropertyValue("--base-bg");
    const baseBgInvert =
      getComputedStyle(root).getPropertyValue("--base-bg-invert");

    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      root.style.setProperty(
        "--current-bg",
        isScrolled ? baseBgInvert : baseBg
      );
    };

    // Initial background check and scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return <>{children}</>;
}
