"use client";

import { useParallax } from "../hooks/useParallax";

export function Hero() {
  const orbRef = useParallax<HTMLDivElement>({ speed: 0.3 });

  return (
    <section className="mk-hero" id="top">
      {/* Animated gradient mesh layers */}
      <div className="mk-hero-mesh" aria-hidden="true" />
      <div className="mk-hero-mesh-b" aria-hidden="true" />

      {/* Dot-grid texture overlay */}
      <div className="mk-hero-grid" aria-hidden="true" />

      {/* Parallax gold orb behind the headline */}
      <div ref={orbRef} className="mk-hero-orb" aria-hidden="true" />

      <div className="mk-container mk-hero-content">
        <span className="mk-eyebrow fade-up">
          Built for Greek &amp; Student Organizations
        </span>

        <h1 className="mk-hero-headline fade-up delay-200">
          Run your <span className="mk-gold">org</span>.
          <br />
          Not spreadsheets.
        </h1>

        <p className="mk-hero-sub fade-up delay-400">
          ChaptOS is the all-in-one operations platform for Greek and student
          organizations — manage members, attendance, dues, treasury, events,
          and more in one place.
        </p>

        <p className="mk-hero-subtext fade-up delay-500">
          Built for ΛΦΕ. Designed for every chapter.
        </p>

        <div className="mk-hero-ctas fade-up delay-600">
          <a href="#access" className="mk-btn mk-btn-primary">
            Request Access
          </a>
          <a href="#ai" className="mk-btn mk-btn-ghost">
            See it in action
          </a>
        </div>
      </div>

      <div className="mk-scroll-indicator fade-in delay-700" aria-hidden="true">
        <span>Scroll</span>
        <ChevronDown />
      </div>
    </section>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
