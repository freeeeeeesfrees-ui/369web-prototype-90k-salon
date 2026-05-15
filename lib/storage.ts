// 369WEB 9万円プラン デモサイト - localStorage 汎用ヘルパー
// Phase 3: データ設計
//
// ⚠️ DEMO ONLY: 本実装はデモ用です。
// 本番ではサーバーサイドDB（Supabase / Firebase / PostgreSQL 等）を使用してください。
// localStorage は XSS に対して脆弱です。

/**
 * localStorage から値を取得
 * SSR 環境（typeof window === 'undefined'）では null を返す
 */
export function getStorage<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * localStorage に値を保存
 */
export function setStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // QuotaExceededError 等
    console.error("Storage write failed:", e);
  }
}

/**
 * localStorage から値を削除
 */
export function removeStorage(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.error("Storage remove failed:", e);
  }
}
