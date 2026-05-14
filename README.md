# 369web-prototype-90k-salon

369WEB 9万円プラン プロトタイプサイト（架空ヘアサロン「Salon Lumière Kawagoe」のデモ）

## 概要
- 営業用プロトタイプサイト
- 本サイトは369WEBのデモサイトです
- 全ての情報（住所・電話番号・メール・SNSアカウント）はダミーです

## 技術スタック
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- pnpm
- Node 20.x

## ローカル起動

```bash
pnpm install
pnpm dev
```

`http://localhost:3000` で表示確認

## ビルド

```bash
pnpm build
```

## デプロイ（Vercel）
1. GitHub にリポジトリを push
2. Vercel ダッシュボードで Import Project
3. デフォルト設定で Deploy
4. 発行された vercel.app サブドメインで公開

## 進捗状況
- [x] Phase 1: 基盤構築
- [ ] Phase 2: セキュリティ設計
- [ ] Phase 3: データ設計
- [ ] Phase 4: 基本5ページ実装
- [ ] Phase 5: 会員ページ機能
- [ ] Phase 6: AIチャットボット
- [ ] Phase 7: 運用ドキュメント
- [ ] Phase 8: テスト・リリース
