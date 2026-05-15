// 369WEB 9万円プラン デモサイト - スタイリストマスタ
// Phase 3: データ設計

import type { Stylist } from "@/lib/types";

export const STYLISTS: Stylist[] = [
  {
    id: "s001",
    name: "佐藤 美咲",
    role: "オーナー / トップスタイリスト",
    experience_years: 15,
    specialty: "ショート・ボブ・カラーリング",
    bio: "大手サロンで10年勤務後、独立。お客様一人ひとりのライフスタイルに合わせた提案を心がけています。",
  },
  {
    id: "s002",
    name: "鈴木 健太",
    role: "シニアスタイリスト",
    experience_years: 12,
    specialty: "メンズスタイル・パーマ",
    bio: "メンズスタイル専門。トレンドと骨格を活かしたカットが得意です。",
  },
  {
    id: "s003",
    name: "田中 さくら",
    role: "スタイリスト",
    experience_years: 6,
    specialty: "ロングヘア・ヘアアレンジ",
    bio: "ヘアアレンジが得意。結婚式・パーティーのご相談もお気軽に。",
  },
];

export function getStylistById(id: string): Stylist | undefined {
  return STYLISTS.find((s) => s.id === id);
}
