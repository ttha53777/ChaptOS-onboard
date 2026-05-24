"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the window has scrolled past `threshold` pixels.
 * Used by the marketing nav to toggle its frosted-glass background.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > threshold);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
