// 369WEB 9万円プラン デモサイト - 型定義
// Phase 3: データ設計

// ============================================
// 動的データ（localStorage 保存対象）
// ============================================

export type User = {
  id: string;             // uuid v4
  email: string;          // unique
  password_hash: string;  // btoa(password) — ⚠️ DEMO ONLY
  display_name: string;
  phone?: string;
  points: number;         // 新規登録時 500 付与
  created_at: string;     // ISO 8601
};

export type ReservationHistory = {
  id: string;
  user_id: string;
  date: string;           // ISO 8601 (YYYY-MM-DD)
  menu: string;
  stylist: string;
  price: number;
  status: "完了" | "予約中" | "キャンセル";
};

export type FavoriteStylist = {
  user_id: string;
  stylist_id: string;
};

// ============================================
// 静的マスタ
// ============================================

export type Stylist = {
  id: string;             // s001, s002, s003
  name: string;
  role: string;
  experience_years: number;
  specialty: string;
  bio: string;
};

export type MenuCategory = "Cut" | "Color" | "Treatment";

export type MenuItem = {
  category: MenuCategory;
  name: string;
  price: number;          // 円（税込）
  duration_minutes: number;
};

// ============================================
// チャットボット用（Phase 6 で qa.ts を別途作成）
// ============================================

export type ChatQA = {
  keywords: string[];
  answer: string;
};

// ============================================
// localStorage キー
// ============================================

export const STORAGE_KEYS = {
  USERS: "salon_users",
  SESSION: "salon_session",
  RESERVATIONS: "salon_reservations",
  FAVORITES: "salon_favorites",
} as const;

export type Session = {
  user_id: string;
} | null;
