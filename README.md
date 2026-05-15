# 369web-prototype-90k-salon

**369WEB 9万円プラン プロトタイプサイト**
架空ヘアサロン「Salon Lumière Kawagoe」のデモサイトです。

🔗 **Live Demo**: https://369web-prototype-90k-salon.vercel.app

---

## 概要

本サイトは合同会社free's（369WEB事業）の営業用プロトタイプです。
顧客に「9万円プランで何ができるか」を実際に体験していただくためのデモサイトです。

> ⚠️ 本サイトの店舗情報・スタイリスト情報・住所・電話番号・SNSアカウント等はすべて**ダミー**です。

### 主要機能
- **公開ページ5種**: トップ / メニュー / スタイリスト / サロン情報 / お問い合わせ
- **会員ページ**: 新規登録 / ログイン / マイページ（ポイント・履歴・お気に入り・アカウント情報）
- **AIチャットボット**: 全ページ右下フローティング、15QA対応のルールベース実装
- **レスポンシブ対応**: モバイル / タブレット / デスクトップ

### 技術スタック
- Framework: Next.js 14 (App Router)
- 言語: TypeScript (strict mode)
- スタイリング: Tailwind CSS
- パッケージマネージャ: pnpm
- Node: 20.x
- デプロイ: Vercel
- 外部API: なし（チャットボットも完全クライアントサイド）
- データ保存: localStorage（デモ用）

---

## ローカル起動

### 前提
- Node.js 20.x（`.nvmrc` 参照）
- pnpm インストール済み（未インストールの場合: `npm install -g pnpm`）

### 手順

```bash
# 依存インストール
pnpm install

# 開発サーバー起動
pnpm dev
```

→ `http://localhost:3000` でアクセス

### その他のコマンド

```bash
pnpm build       # 本番ビルド
pnpm start       # ビルド済みサーバー起動
pnpm typecheck   # TypeScript型チェック
pnpm lint        # ESLint実行
```

---

## デモアカウント

営業時に即座にマイページ機能を見せるための固定アカウントです。

| 項目 | 値 |
|---|---|
| Email | `demo@example.com` |
| Password | `demo1234` |
| 表示名 | デモ太郎 |
| 初期ポイント | 500pt |

`/login` ページの「**デモアカウントでログイン**」ボタンをクリックするとワンクリックでログインできます。

> ⚠️ このアカウント情報はデモ用です。同じパスワードを他のサービスで使用しないでください。

---

## ディレクトリ構成

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 全ページ共通レイアウト（Header/Footer/ChatFab 統合）
│   ├── page.tsx                  # トップ /
│   ├── globals.css               # グローバルスタイル
│   ├── favicon.ico               # ファビコン（App Router 慣習で app/ 配下）
│   ├── menu/page.tsx             # /menu
│   ├── stylists/page.tsx         # /stylists
│   ├── about/page.tsx            # /about
│   ├── contact/page.tsx          # /contact
│   ├── signup/page.tsx           # /signup
│   ├── login/page.tsx            # /login
│   └── mypage/
│       ├── layout.tsx            # 認証ガード
│       └── page.tsx              # /mypage
├── components/
│   ├── ui/                       # 汎用UI（Button, Input, Card, SectionHeading）
│   ├── layout/                   # Header, Footer, MobileMenu
│   ├── home/                     # トップページ各セクション
│   ├── stylists/                 # スタイリストカード
│   ├── contact/                  # お問い合わせフォーム
│   ├── auth/                     # ログイン・新規登録フォーム
│   ├── mypage/                   # マイページ各セクション
│   └── chatbot/                  # チャットボット（FAB / Window / Bubble）
├── lib/
│   ├── types.ts                  # 全エンティティ型定義
│   ├── storage.ts                # localStorage 汎用ヘルパー
│   ├── seed.ts                   # 新規ユーザー初期シード
│   ├── auth.ts                   # 認証ヘルパー（signup/login/logout 等）
│   ├── data/
│   │   ├── stylists.ts           # スタイリストマスタ（3名）
│   │   └── menus.ts              # メニューマスタ（9種）
│   └── chatbot/
│       ├── qa.ts                 # QAデータ（15件）
│       └── matcher.ts            # キーワードマッチング
├── public/                       # 静的アセット（現状は空・画像は後日配置予定）
├── README.md                     # このファイル
├── SECURITY.md                   # セキュリティ設計
├── DATA_SPEC.md                  # データ設計
├── RUNBOOK.md                    # 運用手順書
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── package.json
├── pnpm-lock.yaml
└── .nvmrc
```

---

## デプロイ（Vercel）

### 初回セットアップ
1. GitHub にリポジトリを push 済みであること
2. Vercel ダッシュボード → New Project → リポジトリ Import
3. Framework: Next.js（自動検出）
4. Node Version: 20.x を確認
5. Deploy

### 通常デプロイ
- `main` ブランチへの push で自動デプロイ
- プレビューデプロイは Pull Request 単位で自動生成

### ロールバック
- Vercel ダッシュボード → Deployments → 過去デプロイの「Promote to Production」

詳細は [RUNBOOK.md](./RUNBOOK.md) を参照。

---

## 関連ドキュメント

| ドキュメント | 内容 |
|---|---|
| [SECURITY.md](./SECURITY.md) | セキュリティ設計方針・本番化チェックリスト |
| [DATA_SPEC.md](./DATA_SPEC.md) | データ構造・エンティティ定義・localStorage キー |
| [RUNBOOK.md](./RUNBOOK.md) | コンテンツ更新・障害対応・ロールバック手順 |

---

## 進捗状況

- [x] **Phase 1**: 基盤構築（Next.js + Tailwind + Vercel）
- [x] **Phase 2**: セキュリティ設計（SECURITY.md / noindex）
- [x] **Phase 3**: データ設計（型定義 / マスタ / storage / seed）
- [x] **Phase 4**: 基本5ページ実装（公開ページ + 共通レイアウト）
- [x] **Phase 5**: 会員ページ機能（/signup / /login / /mypage）
- [x] **Phase 6**: AIチャットボット（ルールベース15QA）
- [x] **Phase 7**: 運用ドキュメント整備（README / RUNBOOK）
- [ ] **Phase 8**: テスト・リリース（テスト計画 / リリースチェックリスト）

---

## 制約と注意事項

### 本実装はデモです
- 認証は localStorage 簡易実装（本番非推奨）
- パスワードは btoa() による簡易エンコード（本番非推奨）
- データは同一ブラウザ・同一オリジン内のみで保持

### 本番運用への切り替え時
- [SECURITY.md](./SECURITY.md) 末尾の「本番化時の必須対応チェックリスト」を参照
- localStorage → Supabase / Firebase / PostgreSQL 等へ移行
- パスワード → bcrypt / Argon2 等でハッシュ化
- noindex 解除 / sitemap.xml 公開

### 制約事項
- localStorage 容量制限: 5MB（想定使用量は 10KB 以下なので問題なし）
- ブラウザ間でデータ同期不可（営業デモでは1ブラウザでの利用を前提）
- AIチャットボットはルールベース（LLM API 未使用）

---

## 営業活用例

### 商談時のデモシナリオ
1. トップページから世界観を見せる
2. メニュー・スタイリストページで情報量の充実をアピール
3. お問い合わせフォームのバリデーション動作を見せる
4. **チャットFABから「営業時間」「予約」等を質問** → AI即答デモ
5. **「デモアカウントでログイン」ボタンでマイページ表示** → ポイント・履歴・お気に入り機能を見せる
6. 「これが9万円で手に入ります」と提示

### サブスク3,000円/月の内訳説明
- サーバー代（Vercel 無料枠 / 商用なら $20/月程度）
- ドメイン代（年間1,500円程度）
- 管理費用（定期更新・障害対応）

---

## 連絡先

合同会社free's（369WEB事業）
- 所在地: 埼玉県川越市広栄町17-7
- 代表社員: 岩井祥來
- Email: freeeeeees.frees@gmail.com

---

## License
本コードは合同会社free's の営業ツールとして使用されます。
無断転用・複製を禁じます。
