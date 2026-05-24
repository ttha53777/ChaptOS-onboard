"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#ai", label: "AI" },
  { href: "#roles", label: "Roles" },
  { href: "#how-it-works", label: "How It Works" },
];

export function MarketingNav() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`mk-nav ${scrolled ? "scrolled" : ""}`} aria-label="Main">
        <div className="mk-container mk-nav-inner">
          <Link href="/" className="mk-logo" onClick={close}>
            Chapt<span className="mk-logo-accent">OS</span>
          </Link>

          <ul className="mk-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#access" className="mk-btn mk-btn-primary mk-nav-cta">
            Request Access
          </a>

          <button
            type="button"
            className="mk-nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div className={`mk-nav-mobile ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a
          href="#access"
          className="mk-btn mk-btn-primary mobile-cta"
          onClick={close}
          style={{ marginTop: "0.5rem", width: "100%" }}
        >
          Request Access
        </a>
      </div>
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
