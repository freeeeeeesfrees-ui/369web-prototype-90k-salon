"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import type { User } from "@/lib/types";

type Ctx = { user: User } | { state: "loading" } | { state: "no-user" };

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ctx, setCtx] = useState<Ctx>({ state: "loading" });

  useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      router.replace("/login");
      setCtx({ state: "no-user" });
      return;
    }
    setCtx({ user: u });
  }, [router]);

  if ("state" in ctx) {
    return (
      <main className="py-20">
        <div className="max-w-md mx-auto px-4 text-center text-ink-sub">
          {ctx.state === "loading" ? "読み込み中..." : "ログインページへ移動中..."}
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
