import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "経験豊富なスタイリスト",
    description: "平均経験年数10年以上のスタイリストが在籍。",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 4 L18 4 L20 20 L4 20 Z" />
        <path d="M9 9 L15 9" />
      </svg>
    ),
  },
  {
    title: "オーガニック製品",
    description: "髪と頭皮にやさしい厳選された製品を使用。",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 C8 6 6 10 12 22 C18 10 16 6 12 2 Z" />
      </svg>
    ),
  },
  {
    title: "完全個室空間",
    description: "他のお客様を気にせずゆったり過ごせる空間。",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" />
        <path d="M12 4 L12 20" />
      </svg>
    ),
  },
];

export function Concept() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="Salon Lumière が選ばれる理由" sub="Concept" />
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 text-center">
              <div className="text-brand-primary mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-serif text-xl text-brand-primary mb-2">{item.title}</h3>
              <p className="text-sm text-ink-sub">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
