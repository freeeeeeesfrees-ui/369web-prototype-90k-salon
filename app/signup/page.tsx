import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignupForm } from "@/components/auth/SignupForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "新規会員登録 | Salon Lumière Kawagoe",
};

export default function SignupPage() {
  return (
    <main className="py-20">
      <div className="max-w-md mx-auto px-4 md:px-8">
        <SectionHeading title="新規会員登録" sub="Sign Up" />
        <SignupForm />
        <p className="text-center text-sm text-ink-sub mt-6">
          すでにアカウントをお持ちの方は{" "}
          <Link href="/login" className="text-brand-primary underline">
            ログイン
          </Link>
        </p>
      </div>
    </main>
  );
}
