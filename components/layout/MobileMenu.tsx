"use client";

import Link from "next/link";

type NavItem = { label: string; href: string };
type Props = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export function MobileMenu({ open, onClose, navItems }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-primary text-white flex flex-col">
      <div className="h-16 flex items-center justify-between px-4">
        <span className="font-serif text-lg">Salon Lumière</span>
        <button aria-label="メニューを閉じる" onClick={onClose} className="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-lg">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="hover:text-brand-accent">
            {item.label}
          </Link>
        ))}
        <div className="mt-6 flex flex-col gap-3 w-48">
          <Link
            href="/login"
            onClick={onClose}
            className="text-center border border-white py-3 rounded"
          >
            ログイン
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-center bg-brand-accent text-brand-primary py-3 rounded font-medium"
          >
            ご予約
          </Link>
        </div>
      </nav>
    </div>
  );
}
