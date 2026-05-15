# RUNBOOK - 運用手順書

本ドキュメントは 369web-prototype-90k-salon の運用手順を記載する。

> ⚠️ 本サイトは営業用デモです。本番LP（369WEB.jp 等）への適用前に必ず [SECURITY.md](./SECURITY.md) を確認してください。

---

## 目次
1. コンテンツ更新手順
2. チャットボットQA追加・編集
3. 障害対応
4. ロールバック手順
5. localStorage クリア手順
6. デモアカウント再初期化
7. デプロイ運用
8. 連絡先

---

## 1. コンテンツ更新手順

### 1-1. メニュー（料金・所要時間）の更新

**ファイル**: `lib/data/menus.ts`

```ts
export const MENUS: MenuItem[] = [
  { category: "Cut", name: "カット（女性）", price: 5500, duration_minutes: 60 },
  // ... 編集対象
];
```

**反映先**:
- `/menu` ページ
- トップページ「人気メニュー」セクション（preview）
- チャットボット「料金」応答

**手順**:
1. ファイル編集
2. `pnpm typecheck` で型エラー確認
3. `pnpm build` でビルド確認
4. `git add lib/data/menus.ts && git commit -m "メニュー更新: <変更内容>"`
5. `git push` → Vercel 自動デプロイ

---

### 1-2. スタイリスト情報の更新

**ファイル**: `lib/data/stylists.ts`

```ts
export const STYLISTS: Stylist[] = [
  {
    id: "s001",
    name: "佐藤 美咲",
    role: "オーナー / トップスタイリスト",
    experience_years: 15,
    specialty: "ショート・ボブ・カラーリング",
    bio: "..."
  },
  // ...
];
```

**注意点**:
- `id` の変更は禁止（既存ユーザーの「お気に入り」データと紐付いているため）
- 画像ファイル名と id を一致させる（例: `stylist-s001.webp`）

**反映先**:
- `/stylists` ページ
- トップページ「スタイリスト」プレビュー
- マイページ「お気に入りスタイリスト」
- チャットボット「スタイリスト」応答

---

### 1-3. サロン情報（住所・電話・営業時間）の更新

**ファイル**: 
- `components/layout/Footer.tsx`（フッター3カラム）
- `app/about/page.tsx`（店舗情報テーブル）
- `lib/chatbot/qa.ts`（チャットボット応答）

**注意点**:
- 営業時間を変更した場合、上記3ファイル全てで一致させる必要あり
- 将来的に外部化したい場合は `lib/data/salon-info.ts` を新設（YAGNI 原則のため現状は直書き）

---

## 2. チャットボットQA追加・編集

**ファイル**: `lib/chatbot/qa.ts`

### 既存QAの編集
- 該当エントリの `keywords` または `answer` を編集

### 新規QA追加

```ts
export const QA_ENTRIES: ChatQA[] = [
  // 既存エントリ...
  {
    keywords: ["新しいキーワード1", "キーワード2"],
    answer: "新しい応答内容",
  },
];
```

**動作確認手順**:
1. `pnpm dev` でローカル起動
2. 任意のページのチャットFABを開く
3. 追加したキーワードを入力 → 応答確認
4. 既存QAとキーワードが競合していないか確認（同じキーワードが複数エントリにある場合、`matcher.ts` のロジックでマッチ数が多い方が優先）

### マッチングロジック仕様
- 入力を `trim().toLowerCase()` で正規化
- 各エントリのキーワード配列を順にチェック
- 入力に1つでもキーワードが含まれていればマッチ判定
- 最もマッチ数が多いエントリを優先（同数なら先勝ち）
- マッチ0件 → フォールバック応答

詳細は `lib/chatbot/matcher.ts` を参照。

---

## 3. 障害対応

### 3-1. ビルド失敗

**症状**: GitHub push 後、Vercel デプロイが失敗

**手順**:
1. Vercel ダッシュボード → Deployments → 失敗したデプロイをクリック
2. Build Logs を確認
3. エラー内容を特定:
   - TypeScript エラー → ローカルで `pnpm typecheck`
   - 依存エラー → `pnpm install` で再インストール
   - Node バージョン不一致 → Project Settings で 20.x 確認
4. ローカルで修正 → `pnpm build` で成功確認 → push

---

### 3-2. ページ表示崩れ

**症状**: 特定ページのレイアウトが崩れている

**手順**:
1. ブラウザキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）
2. DevTools → Network → Disable cache にチェック → 再読み込み
3. それでも改善しない場合は再デプロイ:
   - Vercel ダッシュボード → Deployments → 最新デプロイの「Redeploy」

---

### 3-3. チャットボットが応答しない

**症状**: チャットウィンドウは開くが、送信ボタンを押しても応答が返らない

**確認ポイント**:
1. ブラウザ DevTools → Console でエラー確認
2. `lib/chatbot/matcher.ts` の import パスが正しいか確認
3. `lib/chatbot/qa.ts` の QA_ENTRIES が空配列になっていないか確認

---

### 3-4. マイページが表示されず /login に飛ぶ

**症状**: ログインしているのにマイページにアクセスすると `/login` にリダイレクトされる

**確認ポイント**:
1. DevTools → Application → Local Storage で確認:
   - `salon_session` に `user_id` が存在するか
   - `salon_users` に該当 user_id のレコードがあるか
2. セッションが消えている場合は再ログイン
3. それでも改善しない場合は localStorage を全クリア（後述）

---

## 4. ロールバック手順

### 4-1. Vercel ダッシュボードからの即時ロールバック

1. Vercel ダッシュボード → Deployments
2. 戻したい過去デプロイをクリック
3. 右上「⋯」メニュー → **Promote to Production**
4. 確認ダイアログで承認 → 数秒で本番反映

### 4-2. Git revert によるロールバック

```bash
# 直前のコミットを取り消す
git revert HEAD
git push

# 特定のコミットを取り消す
git log --oneline           # 戻したいコミットの hash を確認
git revert <commit-hash>
git push
```

---

## 5. localStorage クリア手順

### 5-1. ブラウザでの手動クリア

1. DevTools を開く（F12 / Cmd+Opt+I）
2. **Application** タブ → **Local Storage** → 該当ドメイン選択
3. 削除したいキーを右クリック → Delete
   - 全削除: ドメイン右クリック → Clear

### 5-2. localStorage キー一覧

| キー | 内容 |
|---|---|
| `salon_users` | 登録ユーザー全員 |
| `salon_session` | 現在ログイン中のユーザー（`{ user_id }`） |
| `salon_reservations` | 全予約履歴 |
| `salon_favorites` | お気に入りスタイリスト |

### 5-3. JS コンソールでの一括クリア

```js
// 全データ削除（営業デモ環境のリセット）
['salon_users', 'salon_session', 'salon_reservations', 'salon_favorites']
  .forEach(k => localStorage.removeItem(k));
location.reload();
```

---

## 6. デモアカウント再初期化

**ユースケース**: 営業デモ前にデモアカウントを初期状態に戻したい

### 手順
1. ブラウザで本番サイトを開く
2. DevTools → Console を開く
3. 以下を実行:

```js
// 全データ削除
['salon_users', 'salon_session', 'salon_reservations', 'salon_favorites']
  .forEach(k => localStorage.removeItem(k));
location.href = '/login';
```

4. `/login` ページの「デモアカウントでログイン」ボタンをクリック
5. デモアカウント（ポイント500pt・履歴2件）が初期化された状態でログイン

---

## 7. デプロイ運用

### 7-1. 本番デプロイ
- `main` ブランチへの push で自動デプロイ
- 反映時間: 通常 1〜2分

### 7-2. プレビューデプロイ
- Pull Request 作成で自動生成
- URL 例: `https://369web-prototype-90k-salon-git-feat-xxx.vercel.app`
- レビュー用に営業先と共有可能

### 7-3. 環境変数
- 現在: 使用なし（外部API不使用のため）
- 将来 Stripe / LINE 等を統合する場合: Vercel Project Settings → Environment Variables で設定

### 7-4. ドメイン
- 現在: vercel.app サブドメイン
- 独自ドメイン適用時: Vercel Project Settings → Domains で追加

---

## 8. 連絡先

合同会社free's（369WEB事業）
- 所在地: 埼玉県川越市広栄町17-7
- 代表社員: 岩井祥來
- Email: freeeeeees.frees@gmail.com

### 障害時のエスカレーション
1. 一次対応: 開発者がローカル再現 → 修正 → デプロイ
2. デプロイ起因の障害: Vercel ロールバック（数秒で完了）
3. localStorage 起因の障害: 上記「5. localStorage クリア」を案内
4. 不明な障害: GitHub Issues に起票（リポジトリオーナーに通知）

---

## 更新履歴
- 2026-05-15: Phase 7 完了時に初版作成
