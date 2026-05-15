import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-lg mb-3">店舗情報</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>Salon Lumière Kawagoe</li>
            <li>〒350-XXXX 埼玉県川越市新富町X-X-X</li>
            <li>TEL: 049-XXX-XXXX</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-3">営業時間</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>平日 10:00-20:00（最終受付 19:00）</li>
            <li>土日祝 9:00-19:00（最終受付 18:00）</li>
            <li>定休日: 毎週火曜日・第3水曜日</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-3">SNS</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>
              <Link href="https://instagram.com/example" className="hover:text-brand-accent">
                Instagram: @example_salon_lumiere
              </Link>
            </li>
            <li>
              <Link href="https://line.me/" className="hover:text-brand-accent">
                LINE: @example-salon
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 pt-6 border-t border-white/20 text-center text-xs text-white/60">
        <p>本サイトは369WEBのデモサイトです</p>
        <p className="mt-1">© 2026 Salon Lumière Kawagoe (Demo)</p>
      </div>
    </footer>
  );
}
