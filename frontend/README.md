# X Clone Frontend

Xクローンアプリケーションのフロントエンドです。React + TypeScript + Viteで構築されています。

## 技術スタック

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:5173` で起動します（Viteのデフォルトポート）。

### 3. ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## プロジェクト構造

```
frontend/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.tsx       # ヘッダーコンポーネント
│   │   ├── Post.tsx         # 投稿表示コンポーネント
│   │   ├── PostForm.tsx     # 投稿フォームコンポーネント
│   │   └── sidebar/         # サイドバーコンポーネント
│   │       ├── LeftSidebar.tsx   # 左サイドバー
│   │       └── RightSidebar.tsx  # 右サイドバー
│   ├── constants/           # 定数定義
│   │   └── navigation.ts    # ナビゲーション設定
│   ├── mocks/               # モックデータ
│   │   ├── posts.ts         # 投稿のモックデータ
│   │   └── user.ts          # ユーザーのモックデータ
│   ├── types/               # TypeScript型定義
│   │   └── post.ts          # 投稿の型定義
│   ├── utils/               # ユーティリティ関数
│   │   └── formatTimeAgo.ts # 時間表示フォーマット
│   ├── App.tsx              # メインアプリケーションコンポーネント
│   ├── Router.tsx           # ルーティング設定
│   ├── main.tsx             # エントリーポイント
│   └── index.css            # グローバルスタイル
├── public/                  # 静的ファイル
├── package.json
├── tsconfig.json
├── vite.config.ts          # Vite設定
└── tailwind.config.js     # Tailwind CSS設定
```

## 主要機能

- **投稿一覧表示**: タイムライン形式で投稿を表示
- **投稿フォーム**: 新しい投稿を作成（UI実装済み）
- **サイドバー**: 左サイドバー（ナビゲーション）、右サイドバー（トレンド等）


### APIエンドポイント

- `GET http://localhost:8080/posts` - 投稿一覧取得
- `GET http://localhost:8080/profiles/me` - 自分のプロフィール取得