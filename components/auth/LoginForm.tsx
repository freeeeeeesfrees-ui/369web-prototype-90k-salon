"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { login, loginAsDemo } from "@/lib/auth";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");

    const result = login(email, password);
    if ("error" in result) {
      setError(result.error);
      setSubmitting(false);
      return;
    }
    router.push("/mypage");
  };

  const handleDemoLogin = () => {
    setError(null);
    const result = loginAsDemo();
    if ("error" in result) {
      setError(result.error);
      return;
    }
    router.push("/mypage");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white border border-surface-border rounded-lg p-6 md:p-8">
        <Input label="メールアドレス" name="email" type="email" required />
        <Input label="パスワード" name="password" type="password" required />

        {error && (
          <p className="text-red-500 text-sm mb-4" role="alert">
            {error}
          </p>
        )}

        <div className="text-center mb-4">
          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? "ログイン中..." : "ログイン"}
          </Button>
        </div>
      </form>

      <div className="mt-6 bg-brand-accent/10 border border-brand-accent rounded-lg p-4 text-center">
        <p className="text-sm text-ink-main mb-3">
          営業デモ用：ワンクリックでログインできます
        </p>
        <Button variant="accent" onClick={handleDemoLogin}>
          デモアカウントでログイン
        </Button>
      </div>
    </div>
  );
}
