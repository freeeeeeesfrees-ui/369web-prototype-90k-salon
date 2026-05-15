// 369WEB 9万円プラン デモサイト - 新規ユーザー初期シード
// Phase 3: データ設計

import type { ReservationHistory } from "@/lib/types";

/**
 * 新規ユーザー登録時に付与する履歴シード（デモ用に2件固定）
 */
export function generateInitialReservations(userId: string): ReservationHistory[] {
  return [
    {
      id: `r_${userId}_001`,
      user_id: userId,
      date: "2025-11-15",
      menu: "カット + カラー",
      stylist: "佐藤 美咲",
      price: 13200,
      status: "完了",
    },
    {
      id: `r_${userId}_002`,
      user_id: userId,
      date: "2025-09-20",
      menu: "カット + トリートメント",
      stylist: "佐藤 美咲",
      price: 12100,
      status: "完了",
    },
  ];
}

/**
 * 新規ユーザー登録時の初期ポイント
 */
export const INITIAL_POINTS = 500;
