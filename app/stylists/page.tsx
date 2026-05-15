import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StylistCard } from "@/components/stylists/StylistCard";
import { STYLISTS } from "@/lib/data/stylists";

export const metadata: Metadata = {
  title: "スタイリスト | Salon Lumière Kawagoe",
  description: "Salon Lumière Kawagoe のスタイリスト紹介",
};

export default function StylistsPage() {
  return (
    <main className="py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeading title="スタイリスト" sub="Stylists" />
        <div className="space-y-8">
          {STYLISTS.map((s) => (
            <StylistCard key={s.id} stylist={s} />
          ))}
        </div>
      </div>
    </main>
  );
}
