"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { signup } from "@/lib/auth";

export function SignupForm() {
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
    const passwordConfirm = String(fd.get("password_confirm") ?? "");
    const displayName = String(fd.get("display_name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim() || undefined;

    if (password !== passwordConfirm) {
      setError("パスワードが一致しません");
      setSubmitting(false);
      return;
    }

    const result = signup(email, password, displayName, phone);
    if ("error" in result) {
      setError(result.error);
      setSubmitting(false);
      return;
    }
    router.push("/mypage");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-surface-border rounded-lg p-6 md:p-8">
      <Input label="メールアドレス" name="email" type="email" required />
      <Input label="パスワード" name="password" type="password" required minLength={8} />
      <Input label="パスワード（確認）" name="password_confirm" type="password" required minLength={8} />
      <Input label="お名前" name="display_name" type="text" required maxLength={50} />
      <Input label="電話番号" name="phone" type="tel" />

      <label className="flex items-start gap-2 mt-2 mb-4 text-sm">
        <input type="checkbox" required className="mt-1" />
        <span>
          利用規約・プライバシーポリシーに同意する <span className="text-red-500">*</span>
        </span>
      </label>

      {error && (
        <p className="text-red-500 text-sm mb-4" role="alert">
          {error}
        </p>
      )}

      <div className="text-center">
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? "登録中..." : "登録する"}
        </Button>
      </div>
    </form>
  );
}
