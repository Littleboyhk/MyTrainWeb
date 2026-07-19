"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wordmark } from "@/components/wordmark";
import { ThemeToggle } from "@/components/theme-toggle";
import { clsx } from "@/lib/clsx";

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={clsx(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 pl-4 transition-all duration-300 sm:px-4",
          scrolled
            ? "glass glass-rim shadow-card"
            : "border border-transparent",
        )}
      >
        <a href="#top" className="flex items-center" aria-label="My Train home">
          <Wordmark className="text-lg" glyphSize={26} />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-[color:var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#waitlist"
            className="btn-gradient hidden rounded-full px-5 py-2.5 text-sm font-bold sm:inline-flex"
          >
            Notify me
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
