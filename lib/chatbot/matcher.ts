// 369WEB 9万円プラン デモサイト - チャットボット マッチング
// Phase 6: AIチャットボット

import { QA_ENTRIES, FALLBACK_RESPONSE } from "@/lib/chatbot/qa";

/**
 * ユーザー入力にマッチするQA回答を返す
 * - 入力を正規化（trim + lowercase）
 * - 各エントリの keywords を含むかチェック
 * - 最もマッチ数が多いエントリを優先（同数なら先勝ち）
 * - マッチ0件 → FALLBACK_RESPONSE
 */
export function matchQA(userInput: string): string {
  const normalized = userInput.trim().toLowerCase();
  if (!normalized) return FALLBACK_RESPONSE;

  let bestMatch: { answer: string; count: number } | null = null;

  for (const entry of QA_ENTRIES) {
    const matchCount = entry.keywords.reduce((acc, kw) => {
      return normalized.includes(kw.toLowerCase()) ? acc + 1 : acc;
    }, 0);

    if (matchCount === 0) continue;

    if (!bestMatch || matchCount > bestMatch.count) {
      bestMatch = { answer: entry.answer, count: matchCount };
    }
  }

  return bestMatch ? bestMatch.answer : FALLBACK_RESPONSE;
}
