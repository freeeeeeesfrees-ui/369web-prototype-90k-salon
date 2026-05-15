import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const previewItems = [
  { name: "カット", price: "¥5,500〜" },
  { name: "カラー", price: "¥7,700〜" },
  { name: "トリートメント", price: "¥3,300〜" },
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
              className="border border-surface-border rounded-lg p-8 text-center hover:border-brand-accent transition-colors"
            >
              <h3 className="font-serif text-2xl text-brand-primary mb-2">{item.name}</h3>
              <p className="text-brand-accent-dark text-xl">{item.price}</p>
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
