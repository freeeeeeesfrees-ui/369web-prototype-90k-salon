import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatFab } from "@/components/chatbot/ChatFab";
import "./globals.css";

const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-jp",
  preload: true,
});

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: true,
});

export const metadata: Metadata = {
  title: "Salon Lumière Kawagoe（デモ）",
  description: "369WEB 9万円プラン プロトタイプサイト",
  robots: { index: false, follow: false },
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSerifJp.variable} ${notoSansJp.variable}`}>
      <body className="font-sans bg-surface text-ink-main antialiased">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
        <ChatFab />
      </body>
    </html>
  );
}
