import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENUS } from "@/lib/data/menus";

export const metadata: Metadata = {
  title: "メニュー | Salon Lumière Kawagoe",
  description: "Salon Lumière Kawagoe のメニュー一覧",
};

const categories: Array<{ key: "Cut" | "Color" | "Treatment"; label: string }> = [
  { key: "Cut", label: "Cut" },
  { key: "Color", label: "Color" },
  { key: "Treatment", label: "Treatment" },
];

export default function MenuPage() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionHeading title="メニュー" sub="Menu" />
        {categories.map((cat) => (
          <div key={cat.key} className="mb-12">
            <h3 className="font-serif text-2xl text-brand-primary mb-6 border-b border-brand-accent pb-2">
              {cat.label}
            </h3>
            <ul className="divide-y divide-surface-border">
              {MENUS.filter((m) => m.category === cat.key).map((m) => (
                <li key={m.name} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-ink-main">{m.name}</p>
                    <p className="text-xs text-ink-sub">{m.duration_minutes}分</p>
                  </div>
                  <p className="text-brand-accent-dark font-medium">¥{m.price.toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-xs text-ink-sub mt-8">
          ※価格はすべて税込です。ロングヘアの場合は追加料金が発生する場合があります。
        </p>
      </div>
    </main>
  );
}
