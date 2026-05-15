import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const previewItems = [
  { name: "カット", price: "¥5,500〜", image: "/images/menu/menu-cut.png" },
  { name: "カラー", price: "¥7,700〜", image: "/images/menu/menu-color.png" },
  { name: "トリートメント", price: "¥3,300〜", image: "/images/menu/menu-treatment.png" },
];

export function MenuPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="人気メニュー" sub="Popular Menu" />
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {previewItems.map((item) => (
            <div
              key={item.name}
              className="border border-surface-border rounded-lg overflow-hidden hover:border-brand-accent transition-colors bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl text-brand-primary mb-2">{item.name}</h3>
                <p className="text-brand-accent-dark text-xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" href="/menu">全メニューを見る</Button>
        </div>
      </div>
    </section>
  );
}
