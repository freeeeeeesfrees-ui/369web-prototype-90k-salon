import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "サロン情報 | Salon Lumière Kawagoe",
  description: "Salon Lumière Kawagoe の店舗情報とアクセス",
};

const info = [
  { label: "店名", value: "Salon Lumière Kawagoe" },
  { label: "住所", value: "〒350-XXXX 埼玉県川越市新富町X-X-X" },
  { label: "電話番号", value: "049-XXX-XXXX" },
  { label: "営業時間", value: "平日 10:00-20:00 / 土日祝 9:00-19:00" },
  { label: "定休日", value: "毎週火曜日・第3水曜日" },
  { label: "席数", value: "完全個室6席" },
  { label: "設備", value: "WiFi完備 / 電源あり / 全席禁煙" },
];

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionHeading title="サロン情報" sub="About / Access" />

        <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/about/about-hero.png"
            alt="Salon Lumière Kawagoe 外観"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-brand-primary mb-4">Salon Lumière のはじまり</h2>
          <p className="text-ink-main leading-relaxed whitespace-pre-line">
            {`川越の閑静な住宅街にひっそりと佇むサロンとして、髪と頭皮、そして心まで整えるトータルビューティーをご提供しています。

経験豊富なスタイリストが、お客様一人ひとりのライフスタイルに合わせたスタイルをご提案。完全個室の落ち着いた空間で、特別な時間をお過ごしください。`}
          </p>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
            <Image
              src="/images/about/about-interior-1.png"
              alt="完全個室の施術スペース"
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
            <Image
              src="/images/about/about-interior-2.png"
              alt="受付・待合スペース"
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-brand-primary mb-6">店舗情報</h2>
          <table className="w-full text-sm">
            <tbody>
              {info.map((row) => (
                <tr key={row.label} className="border-b border-surface-border">
                  <th className="text-left py-3 pr-4 text-ink-sub font-normal w-32">{row.label}</th>
                  <td className="py-3">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-brand-primary mb-4">アクセス</h2>
          <p className="text-sm text-ink-main mb-4">
            西武新宿線 本川越駅から徒歩5分 / JR・東武川越駅から徒歩12分
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-surface-border">
            <iframe
              title="Salon Lumière Kawagoe の地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.0!2d139.485!3d35.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5beD6LaK5biC!5e0!3m2!1sja!2sjp!4v1700000000000"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
