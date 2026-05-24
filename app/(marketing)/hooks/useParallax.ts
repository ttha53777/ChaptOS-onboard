"use client";

import { useEffect, useRef } from "react";

type Options = {
  /** Scroll speed multiplier — 0.3 means element moves 30% of scroll distance. */
  speed?: number;
  /** If true, parallax disables on touch / small viewports. */
  disableOnMobile?: boolean;
};

/**
 * Attach to an element to apply a vertical parallax offset on scroll.
 * The hook updates a CSS variable `--parallax-y` on the element; the
 * element's CSS is responsible for consuming it (see .mk-parallax / .mk-hero-orb).
 *
 * Uses a single rAF loop so multiple elements stay cheap.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(options: Options = {}) {
  const { speed = 0.3, disableOnMobile = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (disableOnMobile && window.matchMedia("(max-width: 768px)").matches) return;

    let ticking = false;
    let frame = 0;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Only animate when within ~1 viewport of being visible
      if (rect.bottom < -viewportH || rect.top > viewportH * 2) return;

      // Center-based offset: the element's center vs. the viewport center
      const elCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportH / 2;
      const offset = (elCenter - viewportCenter) * speed * -1;

      el.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed, disableOnMobile]);

  return ref;
}
