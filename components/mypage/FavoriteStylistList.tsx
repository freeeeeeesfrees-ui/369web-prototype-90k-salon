"use client";

import { useEffect, useState } from "react";
import { STYLISTS } from "@/lib/data/stylists";
import { getFavorites, toggleFavorite } from "@/lib/auth";

export function FavoriteStylistList() {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    setFavs(getFavorites());
  }, []);

  const handleToggle = (stylistId: string) => {
    toggleFavorite(stylistId);
    setFavs(getFavorites());
  };

  return (
    <section className="bg-white border border-surface-border rounded-lg p-6">
      <h2 className="font-serif text-xl text-brand-primary mb-4">お気に入りスタイリスト</h2>
      <ul className="space-y-3">
        {STYLISTS.map((s) => {
          const liked = favs.includes(s.id);
          return (
            <li key={s.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-ink-main">{s.name}</p>
                <p className="text-xs text-ink-sub">{s.role}</p>
              </div>
              <button
                aria-label={liked ? "お気に入りから外す" : "お気に入りに追加"}
                onClick={() => handleToggle(s.id)}
                className="text-2xl transition-transform hover:scale-110"
              >
                <span className={liked ? "text-red-500" : "text-surface-border"}>
                  {liked ? "♥" : "♡"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
