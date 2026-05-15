// 369WEB 9万円プラン デモサイト - 認証ヘルパー
// Phase 5: 会員ページ機能
//
// ⚠️ DEMO ONLY: 本実装はデモ用です。
// 本番では bcrypt 等の適切なパスワードハッシュ化、
// サーバーサイド認証、HTTPS-only Cookie 等を必須としてください。

import type { User, Session, ReservationHistory, FavoriteStylist } from "@/lib/types";
import { STORAGE_KEYS } from "@/lib/types";
import { getStorage, setStorage, removeStorage } from "@/lib/storage";
import { generateInitialReservations, INITIAL_POINTS } from "@/lib/seed";

// ============================================
// 内部ヘルパー
// ============================================

function generateId(): string {
  // 簡易ID生成（uuid ライブラリを避けるため）
  return `u_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function hashPassword(password: string): string {
  if (typeof window === "undefined") return "";
  // ⚠️ デモ用: 本番では bcrypt 等を必須
  return btoa(unescape(encodeURIComponent(password)));
}

function getUsers(): User[] {
  return getStorage<User[]>(STORAGE_KEYS.USERS) ?? [];
}

function saveUsers(users: User[]): void {
  setStorage(STORAGE_KEYS.USERS, users);
}

function getReservations(): ReservationHistory[] {
  return getStorage<ReservationHistory[]>(STORAGE_KEYS.RESERVATIONS) ?? [];
}

function saveReservations(list: ReservationHistory[]): void {
  setStorage(STORAGE_KEYS.RESERVATIONS, list);
}

function getFavoritesAll(): FavoriteStylist[] {
  return getStorage<FavoriteStylist[]>(STORAGE_KEYS.FAVORITES) ?? [];
}

function saveFavoritesAll(list: FavoriteStylist[]): void {
  setStorage(STORAGE_KEYS.FAVORITES, list);
}

// ============================================
// 公開 API
// ============================================

export function signup(
  email: string,
  password: string,
  displayName: string,
  phone?: string
): User | { error: string } {
  if (typeof window === "undefined") return { error: "ブラウザ環境が必要です" };

  // バリデーション
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "メールアドレスの形式が正しくありません" };
  }
  if (!password || password.length < 8) {
    return { error: "パスワードは8文字以上で入力してください" };
  }
  if (!displayName || displayName.length === 0) {
    return { error: "お名前を入力してください" };
  }

  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    return { error: "このメールアドレスは既に登録されています" };
  }

  const newUser: User = {
    id: generateId(),
    email,
    password_hash: hashPassword(password),
    display_name: displayName,
    phone,
    points: INITIAL_POINTS,
    created_at: new Date().toISOString(),
  };

  saveUsers([...users, newUser]);

  // 初期シード履歴
  const reservations = getReservations();
  const newReservations = generateInitialReservations(newUser.id);
  saveReservations([...reservations, ...newReservations]);

  // セッション
  setStorage<Session>(STORAGE_KEYS.SESSION, { user_id: newUser.id });

  return newUser;
}

export function login(email: string, password: string): User | { error: string } {
  if (typeof window === "undefined") return { error: "ブラウザ環境が必要です" };

  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (!user || user.password_hash !== hashPassword(password)) {
    return { error: "メールアドレスまたはパスワードが正しくありません" };
  }

  setStorage<Session>(STORAGE_KEYS.SESSION, { user_id: user.id });
  return user;
}

export function logout(): void {
  removeStorage(STORAGE_KEYS.SESSION);
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  const session = getStorage<Session>(STORAGE_KEYS.SESSION);
  if (!session) return null;
  const users = getUsers();
  return users.find((u) => u.id === session.user_id) ?? null;
}

export function updateUser(updates: Partial<Pick<User, "display_name" | "phone">>): User | { error: string } {
  const current = getCurrentUser();
  if (!current) return { error: "ログインが必要です" };

  const users = getUsers();
  const idx = users.findIndex((u) => u.id === current.id);
  if (idx === -1) return { error: "ユーザーが見つかりません" };

  const updated: User = {
    ...users[idx],
    ...(updates.display_name !== undefined ? { display_name: updates.display_name } : {}),
    ...(updates.phone !== undefined ? { phone: updates.phone } : {}),
  };
  users[idx] = updated;
  saveUsers(users);
  return updated;
}

export function initDemoUser(): void {
  if (typeof window === "undefined") return;
  const users = getUsers();
  if (users.some((u) => u.email === "demo@example.com")) return;

  const demoUser: User = {
    id: "u_demo",
    email: "demo@example.com",
    password_hash: hashPassword("demo1234"),
    display_name: "デモ太郎",
    phone: "049-XXX-XXXX",
    points: INITIAL_POINTS,
    created_at: new Date().toISOString(),
  };
  saveUsers([...users, demoUser]);

  const reservations = getReservations();
  // demo ユーザー用の履歴は固定 ID にしておく
  const demoReservations = generateInitialReservations(demoUser.id);
  saveReservations([...reservations, ...demoReservations]);
}

export function loginAsDemo(): User | { error: string } {
  initDemoUser();
  return login("demo@example.com", "demo1234");
}

// ============================================
// お気に入り
// ============================================

export function getUserReservations(userId: string): ReservationHistory[] {
  return getReservations().filter((r) => r.user_id === userId);
}

export function getFavorites(): string[] {
  const current = getCurrentUser();
  if (!current) return [];
  return getFavoritesAll()
    .filter((f) => f.user_id === current.id)
    .map((f) => f.stylist_id);
}

export function toggleFavorite(stylistId: string): boolean {
  const current = getCurrentUser();
  if (!current) return false;

  const all = getFavoritesAll();
  const exists = all.some(
    (f) => f.user_id === current.id && f.stylist_id === stylistId
  );

  if (exists) {
    saveFavoritesAll(
      all.filter((f) => !(f.user_id === current.id && f.stylist_id === stylistId))
    );
    return false;
  } else {
    saveFavoritesAll([...all, { user_id: current.id, stylist_id: stylistId }]);
    return true;
  }
}
