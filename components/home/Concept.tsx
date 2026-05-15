import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "経験豊富なスタイリスト",
    description: "平均経験年数10年以上のスタイリストが在籍。",
    image: "/images/concept/concept-experience.png",
  },
  {
    title: "オーガニック製品",
    description: "髪と頭皮にやさしい厳選された製品を使用。",
    image: "/images/concept/concept-organic.png",
  },
  {
    title: "完全個室空間",
    description: "他のお客様を気にせずゆったり過ごせる空間。",
    image: "/images/concept/concept-private.png",
  },
];

export function Concept() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="Salon Lumière が選ばれる理由" sub="Concept" />
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-lg p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl text-brand-primary mb-2">{item.title}</h3>
              <p className="text-sm text-ink-sub">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
