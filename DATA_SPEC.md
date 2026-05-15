# Data Specification

本ドキュメントは 369web-prototype-90k-salon のデータ設計を記載する。

> ⚠️ 本実装はデモ用です。本番では SECURITY.md 末尾のチェックリストを参照のうえDB化してください。

---

## 1. エンティティ一覧

| エンティティ | 種別 | 保存先 | 編集 |
|---|---|---|---|
| User | 動的 | localStorage | Phase 5 で実装 |
| ReservationHistory | 動的 | localStorage | Phase 5 で実装（読み取りのみ） |
| FavoriteStylist | 動的 | localStorage | Phase 5 で実装 |
| Stylist | 静的マスタ | lib/data/stylists.ts | 開発者がコード編集 |
| Menu | 静的マスタ | lib/data/menus.ts | 開発者がコード編集 |
| ChatQA | 静的マスタ | lib/chatbot/qa.ts | Phase 6 で作成 |

---

## 2. localStorage キー命名

| キー | 値の型 | 内容 |
|---|---|---|
| `salon_users` | `User[]` | 全登録ユーザー |
| `salon_session` | `{ user_id: string } \| null` | 現在ログイン中のユーザー |
| `salon_reservations` | `ReservationHistory[]` | 全予約履歴（全ユーザー分） |
| `salon_favorites` | `FavoriteStylist[]` | お気に入りスタイリスト |

定数は `lib/types.ts` の `STORAGE_KEYS` に定義済み。

---

## 3. User エンティティ

| フィールド | 型 | 必須 | 制約 |
|---|---|---|---|
| id | string | ○ | uuid v4 |
| email | string | ○ | unique（重複チェック必須） |
| password_hash | string | ○ | btoa(password) ※デモ用 |
| display_name | string | ○ | 1〜50文字 |
| phone | string | - | 任意 |
| points | number | ○ | 新規登録時 500 |
| created_at | string | ○ | ISO 8601 |

---

## 4. ReservationHistory エンティティ

| フィールド | 型 | 必須 | 制約 |
|---|---|---|---|
| id | string | ○ | `r_<user_id>_<連番>` |
| user_id | string | ○ | User.id 参照 |
| date | string | ○ | YYYY-MM-DD |
| menu | string | ○ | メニュー名（自由記述） |
| stylist | string | ○ | スタイリスト名（自由記述） |
| price | number | ○ | 円・税込 |
| status | "完了" \| "予約中" \| "キャンセル" | ○ | enum |

---

## 5. FavoriteStylist エンティティ

| フィールド | 型 | 必須 | 制約 |
|---|---|---|---|
| user_id | string | ○ | User.id |
| stylist_id | string | ○ | Stylist.id（s001 等） |

複合ユニーク（user_id + stylist_id）。

---

## 6. Stylist マスタ（静的）

| ID | 名前 | 役職 | 経験 |
|---|---|---|---|
| s001 | 佐藤 美咲 | オーナー / トップスタイリスト | 15年 |
| s002 | 鈴木 健太 | シニアスタイリスト | 12年 |
| s003 | 田中 さくら | スタイリスト | 6年 |

画像は `public/images/stylists/stylist-s001.webp` 等の命名で配置（Phase 4 で参照）。

---

## 7. Menu マスタ（静的）

### Cut
- カット（女性）: ¥5,500 / 60分
- カット（男性）: ¥4,400 / 45分
- 前髪カット: ¥1,100 / 15分

### Color
- フルカラー: ¥7,700 / 120分
- リタッチカラー: ¥5,500 / 90分
- ハイライト: ¥9,900 / 150分

### Treatment
- ベーシックトリートメント: ¥3,300 / 30分
- プレミアムトリートメント: ¥6,600 / 60分
- ヘッドスパ: ¥4,400 / 45分

---

## 8. 新規ユーザー登録時の初期シード

新規 User 作成時、以下のデータを自動付与:
- `points`: 500
- `ReservationHistory`: 2件（2025-11-15 / 2025-09-20 の架空履歴）

実装は `lib/seed.ts` を参照。

---

## 9. データ容量見積もり

- 1 User あたり: 約 200 bytes
- 1 ReservationHistory あたり: 約 150 bytes
- 想定ユーザー数: 1〜10名（デモ用）
- 想定容量: 10KB 以下 → localStorage 5MB 制限の 0.2% 以内

---

## 10. データ操作ヘルパー

`lib/storage.ts` に汎用ヘルパー関数を実装:
- `getStorage<T>(key)`: 値取得
- `setStorage<T>(key, value)`: 値保存
- `removeStorage(key)`: 値削除

SSR 安全（typeof window === "undefined" で null 返却）。

認証ロジック（signup / login 等）は Phase 5 で `lib/auth.ts` に実装する。
