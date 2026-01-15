import Database from "better-sqlite3";

const db = new Database("x_clone.db");

// 外部キー制約を有効にする
db.pragma("foreign_keys = ON");

// テーブルの初期化
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name VARCHAR(255) NOT NULL DEFAULT "",
    bio VARCHAR(255) NOT NULL DEFAULT "",
    icon VARCHAR(255) NOT NULL DEFAULT "",
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

// 初期データの挿入（データが存在しない場合のみ）
const userCount = db.prepare("SELECT COUNT(*) as count FROM users").get() as { count: number };
if (userCount.count === 0) {
  const insertUser = db.prepare("INSERT INTO users (id, name, bio, icon, created_at) VALUES (?, ?, ?, ?, ?)");
  insertUser.run("user1", "テストユーザー", "こんにちは！テストユーザーです。", "/user.png", new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString()); // 30日前
  insertUser.run("user2", "サンプルユーザー", "サンプルユーザーです。", "", new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString()); // 60日前
  insertUser.run("user3", "プログラマー初心者", "", "", new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString()); // 90日前
}

const postCount = db.prepare("SELECT COUNT(*) as count FROM posts").get() as { count: number };
if (postCount.count === 0) {
  const insertPost = db.prepare("INSERT INTO posts (content, user_id, created_at) VALUES (?, ?, ?)");
  
  // フロントエンドのモックデータに合わせた初期データ
  insertPost.run(
    "React + TypeScriptでXクローンを作成中！\nTailwind CSSでスタイリングするのが楽しい 🎨",
    "user1",
    new Date(Date.now() - 1000 * 60 * 5).toISOString() // 5分前
  );
  insertPost.run(
    "今日も元気にコーディング💻\n新しい機能を実装できて嬉しい！",
    "user2",
    new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30分前
  );
  insertPost.run(
    "Web開発の勉強中です。フロントエンドもバックエンドも奥が深い...\n毎日少しずつ成長していきたい。",
    "user3",
    new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2時間前
  );
  insertPost.run(
    "コーヒー飲みながらプログラミング☕\n最高の組み合わせ",
    "user1",
    new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() // 5時間前
  );
  insertPost.run(
    "Vite + React の開発体験が素晴らしい！\nホットリロードが速くて開発効率が上がる 🚀",
    "user2",
    new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1日前
  );
}

export default db;
