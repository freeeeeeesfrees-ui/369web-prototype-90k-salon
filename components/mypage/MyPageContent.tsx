"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import type { User } from "@/lib/types";
import { WelcomeBlock } from "./WelcomeBlock";
import { PointCard } from "./PointCard";
import { ReservationHistoryBlock } from "./ReservationHistory";
import { FavoriteStylistList } from "./FavoriteStylistList";
import { AccountInfo } from "./AccountInfo";

export function MyPageContent() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setUser(u);
  }, [router]);

  const refresh = () => {
    const u = getCurrentUser();
    setUser(u);
  };

  if (!user) {
    return <p className="text-center text-ink-sub">読み込み中...</p>;
  }

  return (
    <div className="space-y-8">
      <WelcomeBlock user={user} />
      <PointCard points={user.points} />
      <ReservationHistoryBlock userId={user.id} />
      <FavoriteStylistList />
      <AccountInfo user={user} onUpdated={refresh} />
    </div>
  );
}
