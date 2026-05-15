// 369WEB 9万円プラン デモサイト - メニューマスタ
// Phase 3: データ設計

import type { MenuItem } from "@/lib/types";

export const MENUS: MenuItem[] = [
  // Cut
  { category: "Cut", name: "カット（女性）", price: 5500, duration_minutes: 60 },
  { category: "Cut", name: "カット（男性）", price: 4400, duration_minutes: 45 },
  { category: "Cut", name: "前髪カット", price: 1100, duration_minutes: 15 },
  // Color
  { category: "Color", name: "フルカラー", price: 7700, duration_minutes: 120 },
  { category: "Color", name: "リタッチカラー", price: 5500, duration_minutes: 90 },
  { category: "Color", name: "ハイライト", price: 9900, duration_minutes: 150 },
  // Treatment
  { category: "Treatment", name: "ベーシックトリートメント", price: 3300, duration_minutes: 30 },
  { category: "Treatment", name: "プレミアムトリートメント", price: 6600, duration_minutes: 60 },
  { category: "Treatment", name: "ヘッドスパ", price: 4400, duration_minutes: 45 },
];

export function getMenusByCategory(category: "Cut" | "Color" | "Treatment"): MenuItem[] {
  return MENUS.filter((m) => m.category === category);
}
