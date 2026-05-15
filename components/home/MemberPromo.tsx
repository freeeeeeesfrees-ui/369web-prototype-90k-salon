import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function MemberPromo() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      <Image
        src="/images/promo/member-promo-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-brand-primary/80 -z-10" />

      <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          会員登録で、さらにお得に。
        </h2>
        <p className="text-white/85 mb-8">
          次回予約のスマート化、ポイント還元、誕生日特典など。
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Button variant="accent" href="/signup">新規会員登録</Button>
          <Button variant="outline" href="/login" className="text-white border-white hover:bg-white hover:text-brand-primary">
            ログイン
          </Button>
        </div>
      </div>
    </section>
  );
}
