import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | Salon Lumière Kawagoe",
  description: "Salon Lumière Kawagoe へのお問い合わせ",
};

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <SectionHeading title="お問い合わせ" sub="Contact" />
        <p className="text-sm text-ink-sub mb-8 text-center">
          ご予約・お問い合わせは下記フォームからお気軽にどうぞ。
        </p>
        <ContactForm />

        <div className="mt-16 text-center">
          <h2 className="font-serif text-xl text-brand-primary mb-4">その他のご連絡方法</h2>
          <ul className="text-sm text-ink-main space-y-1">
            <li>お電話: 049-XXX-XXXX（営業時間内）</li>
            <li>メール: info@example-salon.jp</li>
            <li>Instagram DM: @example_salon_lumiere</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
