// 投稿の型定義
export type Post = {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
};

// ユーザープロフィールの型定義
export type Profile = {
  id: string;
  name: string;
  bio: string;
  icon: string | null;
  createdAt: string;
};

// 投稿作成リクエスト
export type CreatePost = {
  content: string;
  userId: string;
};

// プロフィール更新リクエスト
export type UpdateProfile = {
  name?: string;
  bio?: string;
  icon?: string | null;
};
