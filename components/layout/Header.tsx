"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = [
  { label: "ホーム", href: "/" },
  { label: "メニュー", href: "/menu" },
  { label: "スタイリスト", href: "/stylists" },
  { label: "サロン情報", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-lg md:text-xl text-brand-primary">
            Salon Lumière
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-main hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="text-sm text-brand-primary px-3 py-2 hover:bg-surface-alt rounded"
            >
              ログイン
            </Link>
            <Link
              href="/contact"
              className="text-sm bg-brand-accent text-brand-primary px-4 py-2 rounded font-medium hover:bg-brand-accent-dark"
            >
              ご予約
            </Link>
          </div>

          <button
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navItems={NAV_ITEMS} />
    </>
  );
}
