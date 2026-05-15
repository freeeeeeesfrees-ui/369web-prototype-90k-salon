"use client";

import { FormEvent, useState } from "react";
import { updateUser } from "@/lib/auth";
import type { User } from "@/lib/types";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type Props = {
  user: User;
  onUpdated: () => void;
};

export function AccountInfo({ user, onUpdated }: Props) {
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const displayName = String(fd.get("display_name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim() || undefined;

    const result = updateUser({ display_name: displayName, phone });
    if ("error" in result) {
      setError(result.error);
      return;
    }
    setEditing(false);
    setError(null);
    onUpdated();
  };

  return (
    <section className="bg-white border border-surface-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl text-brand-primary">アカウント情報</h2>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="text-sm text-brand-primary underline"
          >
            編集
          </button>
        )}
      </div>

      {!editing ? (
        <dl className="text-sm grid grid-cols-[100px_1fr] gap-y-2">
          <dt className="text-ink-sub">お名前</dt>
          <dd>{user.display_name}</dd>
          <dt className="text-ink-sub">メール</dt>
          <dd>{user.email}</dd>
          <dt className="text-ink-sub">電話番号</dt>
          <dd>{user.phone ?? "未設定"}</dd>
          <dt className="text-ink-sub">登録日</dt>
          <dd>{user.created_at.slice(0, 10)}</dd>
        </dl>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="お名前" name="display_name" type="text" defaultValue={user.display_name} required maxLength={50} />
          <Input label="電話番号" name="phone" type="tel" defaultValue={user.phone ?? ""} />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex gap-3">
            <Button type="submit" variant="primary">保存</Button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setError(null);
              }}
              className="text-sm text-ink-sub px-4 py-2"
            >
              キャンセル
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
