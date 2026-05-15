import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { STYLISTS } from "@/lib/data/stylists";

export function StylistsPreview() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="スタイリスト" sub="Stylists" />
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {STYLISTS.map((s) => (
            <div key={s.id} className="text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={`/images/stylists/stylist-${s.id}.png`}
                  alt={s.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-brand-primary">{s.name}</h3>
              <p className="text-sm text-ink-sub">{s.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" href="/stylists">全スタイリストを見る</Button>
        </div>
      </div>
    </section>
  );
}
