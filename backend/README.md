# X Clone Backend API

XクローンアプリケーションのバックエンドAPIサーバーです。

## 技術スタック

- **Runtime**: Node.js
- **Framework**: Hono
- **Database**: SQLite (better-sqlite3)
- **Language**: TypeScript
- **Build Tool**: tsx

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

サーバーは `http://localhost:8080` で起動します。

### 3. ビルド（本番用）

```bash
npm run build
npm start
```

## API エンドポイント

### ルート

- `GET /` - サーバー動作確認
  - レスポンス: `{ "message": "Hello!" }`

### 投稿関連

- `GET /posts` - 投稿一覧取得
  - レスポンス: 投稿データの配列

### プロフィール関連

- `GET /profiles/me` - 自分のプロフィール取得
  - レスポンス: プロフィール情報
  - 注意: 現在は `user1` を返します（認証機能実装後に変更予定）

## データベース

- **データベースファイル**: `x_clone.db` (SQLite)
- **テーブル**:
  - `users`: ユーザー情報（id, name, bio, icon）
  - `posts`: 投稿情報（id, content, created_at, user_id）

データベースは初回起動時に自動的に初期化され、サンプルデータが挿入されます。

## プロジェクト構造

```
backend/
├── src/
│   ├── db/
│   │   └── initial.ts      # データベース初期化
│   ├── routes/
│   │   ├── posts.ts        # 投稿関連ルート
│   │   └── profiles.ts      # プロフィール関連ルート
│   ├── types.ts            # 型定義
│   └── index.ts            # エントリーポイント
├── x_clone.db              # SQLiteデータベースファイル
├── package.json
└── tsconfig.json
```