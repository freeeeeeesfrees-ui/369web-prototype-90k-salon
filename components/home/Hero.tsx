import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-brand-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#FFC857" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
          あなたの輝きを
          <br />
          引き出すサロン。
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-10">
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
