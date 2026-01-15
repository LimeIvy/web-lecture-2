import type { PostType } from "../types/post";

export const mockPosts: PostType[] = [
  {
    id: "1",
    content:
      "React + TypeScriptでXクローンを作成中！\nTailwind CSSでスタイリングするのが楽しい 🎨",
    created_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5分前
    user: {
      id: "user1",
      name: "テストユーザー",
      icon: null,
    },
  },
  {
    id: "2",
    content: "今日も元気にコーディング💻\n新しい機能を実装できて嬉しい！",
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30分前
    user: {
      id: "user2",
      name: "サンプルユーザー",
      icon: null,
    },
  },
  {
    id: "3",
    content:
      "Web開発の勉強中です。フロントエンドもバックエンドも奥が深い...\n毎日少しずつ成長していきたい。",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2時間前
    user: {
      id: "user3",
      name: "プログラマー初心者",
      icon: null,
    },
  },
  {
    id: "4",
    content: "コーヒー飲みながらプログラミング☕\n最高の組み合わせ",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5時間前
    user: {
      id: "user1",
      name: "テストユーザー",
      icon: null,
    },
  },
  {
    id: "5",
    content:
      "Vite + React の開発体験が素晴らしい！\nホットリロードが速くて開発効率が上がる 🚀",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1日前
    user: {
      id: "user2",
      name: "サンプルユーザー",
      icon: null,
    },
  },
];
