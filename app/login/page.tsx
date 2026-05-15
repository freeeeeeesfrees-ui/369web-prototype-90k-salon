import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ログイン | Salon Lumière Kawagoe",
};

export default function LoginPage() {
  return (
    <main className="py-20">
      <div className="max-w-md mx-auto px-4 md:px-8">
        <SectionHeading title="ログイン" sub="Login" />
        <LoginForm />
        <p className="text-center text-sm text-ink-sub mt-6">
          アカウントをお持ちでない方は{" "}
          <Link href="/signup" className="text-brand-primary underline">
            新規会員登録
          </Link>
        </p>
      </div>
    </main>
  );
}
