"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Services", "Approach", "Intelligence", "About", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(item.toLowerCase());
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16 transition-all duration-300 ${
          scrolled ? "bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="font-display text-[22px] font-extrabold tracking-widest uppercase text-brand-text">
          Tristar<span className="text-brand-cyan">nex</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-9 list-none items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <li key={item} className="relative">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-mono text-xs font-normal tracking-[0.12em] uppercase transition-colors pb-1 ${
                    isActive ? "text-brand-cyan" : "text-brand-text-muted hover:text-brand-cyan"
                  }`}
                >
                  {item}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-cyan"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:block font-mono text-xs font-medium tracking-wide uppercase text-brand-bg bg-brand-cyan px-5 py-2 rounded-sm hover:opacity-85 transition-opacity"
          >
            Get a Briefing
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-brand-text-muted hover:text-brand-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border px-8 py-6 flex flex-col gap-5 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm tracking-[0.12em] uppercase transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-brand-cyan"
                    : "text-brand-text-muted hover:text-brand-cyan"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 font-mono text-xs font-medium tracking-wide uppercase text-brand-bg bg-brand-cyan px-5 py-2.5 rounded-sm text-center"
            >
              Get a Briefing
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
