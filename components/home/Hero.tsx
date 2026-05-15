import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[560px] md:min-h-[640px] flex items-center">
      <Image
        src="/images/hero/hero-main.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-brand-primary/65 -z-10" />

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
          あなたの輝きを
          <br />
          引き出すサロン。
        </h1>
        <p className="text-base md:text-lg text-white/85 mb-10">
          川越の閑静な場所で、髪と心を整える時間を。
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Button variant="accent" href="/menu">メニューを見る</Button>
          <Button variant="outline" href="/stylists" className="text-white border-white hover:bg-white hover:text-brand-primary">
            スタイリスト紹介
          </Button>
        </div>
      </div>
    </section>
  );
}
