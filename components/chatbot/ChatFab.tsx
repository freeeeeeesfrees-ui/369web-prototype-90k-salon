"use client";

import { useState, useEffect } from "react";
import { ChatWindow } from "./ChatWindow";

export function ChatFab() {
  const [open, setOpen] = useState(false);

  // ESCキーで閉じる
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handler);
    }
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="チャットを開く"
        className={`fixed bottom-6 right-6 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-accent text-brand-primary shadow-lg hover:bg-brand-accent-dark transition-all hover:scale-110 flex items-center justify-center ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>

      <ChatWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
}
