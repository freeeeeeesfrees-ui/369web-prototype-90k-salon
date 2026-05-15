"use client";

import { useEffect, useState } from "react";
import { getUserReservations } from "@/lib/auth";
import type { ReservationHistory } from "@/lib/types";

export function ReservationHistoryBlock({ userId }: { userId: string }) {
  const [list, setList] = useState<ReservationHistory[]>([]);

  useEffect(() => {
    setList(getUserReservations(userId).sort((a, b) => (a.date < b.date ? 1 : -1)));
  }, [userId]);

  return (
    <section className="bg-white border border-surface-border rounded-lg p-6">
      <h2 className="font-serif text-xl text-brand-primary mb-4">ご利用履歴</h2>
      {list.length === 0 ? (
        <p className="text-sm text-ink-sub">履歴はまだありません。</p>
      ) : (
        <ul className="divide-y divide-surface-border">
          {list.map((r) => (
            <li key={r.id} className="py-3 grid md:grid-cols-[100px_1fr_120px_80px] gap-2 text-sm items-center">
              <span className="text-ink-sub">{r.date}</span>
              <span className="font-medium">{r.menu}</span>
              <span className="text-ink-sub">{r.stylist}</span>
              <span className="text-right">¥{r.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
