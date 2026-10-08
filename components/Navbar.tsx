"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "./Brand";
const links = [
  { label: "Platform", href: "/platform" },
  { label: "Safety", href: "/safety" },
  { label: "Integrations", href: "/integrations" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement">
        <span className="announcement-tag">IN DEVELOPMENT</span>
        <span>
          Meet ShieldMSP. A considered approach to security automation.
        </span>
        <Link href="/platform">
          Explore the platform <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <Link
            href="/"
            className="brand-link"
            aria-label="Tristarnex home"
            onClick={() => setOpen(false)}
          >
            <Brand />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                href={l.href}
                aria-current={path === l.href ? "page" : undefined}
                key={l.href}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link className="button nav-cta" href="/contact">
            Talk to our team
          </Link>
          <button
            className="mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open ? (
          <nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {[...links, { label: "Talk to our team", href: "/contact" }].map(
              (l) => (
                <Link
                  href={l.href}
                  aria-current={path === l.href ? "page" : undefined}
                  key={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>
        ) : null}
      </header>
    </>
  );
}
