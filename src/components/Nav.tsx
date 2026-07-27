"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/cart-store";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/ritual", label: "The Ritual" },
  { href: "/journal", label: "Journal" },
  { href: "/drops", label: "Limited Drops" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const openCart = useCartStore((s) => s.open);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b"
      style={{
        borderColor: "#1e1e1e",
        transition: "padding 400ms ease-out",
        paddingTop: scrolled ? "14px" : "24px",
        paddingBottom: scrolled ? "14px" : "24px",
      }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <button
          className="md:hidden text-text label"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden md:flex gap-8">
          {links.slice(0, 3).map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-serif-nocturne text-xl tracking-[0.2em] font-light absolute left-1/2 -translate-x-1/2"
        >
          NOCTURNE
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            {links.slice(3).map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={openCart}
            className="label text-text relative"
            aria-label="Cart"
            data-cursor-hover
          >
            Cart{count > 0 ? ` (${count})` : ""}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pt-8 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label text-text"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
