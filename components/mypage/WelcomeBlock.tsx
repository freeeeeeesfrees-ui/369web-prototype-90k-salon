"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import type { User } from "@/lib/types";

export function WelcomeBlock({ user }: { user: User }) {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <section className="flex items-center justify-between bg-white border border-surface-border rounded-lg p-6">
      <div>
        <h1 className="font-serif text-2xl text-brand-primary">
          ようこそ、{user.display_name}さん
        </h1>
        <p className="text-xs text-ink-sub mt-1">{user.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm text-brand-primary border border-brand-primary px-4 py-2 rounded hover:bg-brand-primary hover:text-white transition-colors"
      >
        ログアウト
      </button>
    </section>
  );
}
