"use client";

import { FormEvent } from "react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("デモサイトのため実際には送信されません。お問い合わせありがとうございます。");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-surface-border rounded-lg p-6 md:p-8">
      <Input label="お名前" name="name" type="text" required maxLength={50} />
      <Input label="メールアドレス" name="email" type="email" required />
      <Input label="電話番号" name="phone" type="tel" />
      <Select label="ご希望メニュー" name="menu">
        <option value="">選択してください</option>
        <option>カット</option>
        <option>カラー</option>
        <option>トリートメント</option>
        <option>ヘッドスパ</option>
        <option>その他</option>
      </Select>
      <Input label="ご希望日時" name="datetime" type="text" placeholder="例: 11月20日 14:00頃" />
      <Textarea label="メッセージ" name="message" rows={6} required maxLength={1000} />
      <label className="flex items-start gap-2 mt-4 text-sm">
        <input type="checkbox" required className="mt-1" />
        <span>
          プライバシーポリシーに同意する <span className="text-red-500">*</span>
        </span>
      </label>
      <div className="mt-6 text-center">
        <Button type="submit" variant="primary">送信する</Button>
      </div>
    </form>
  );
}
