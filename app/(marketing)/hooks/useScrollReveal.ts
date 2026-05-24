"use client";

import { useEffect } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

/**
 * Reveals any element with a [data-reveal] attribute when it enters the
 * viewport by adding a `revealed` class. Pair with the CSS rules in
 * marketing.css that animate the transition.
 */
export function useScrollReveal(options: Options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length === 0) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("revealed");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove("revealed");
          }
        }
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);
}
