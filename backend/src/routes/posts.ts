import { Hono } from "hono";
import db from "../db/initial";

const posts = new Hono()
  // テスト用: 投稿一覧取得(ユーザ情報付き)
  .get("/", (c) => {
    const posts = db.prepare(`
      SELECT 
        posts.id,
        posts.content,
        posts.created_at,
        posts.user_id,
        users.name,
        users.icon
      FROM posts 
      LEFT JOIN users ON posts.user_id = users.id 
      ORDER BY posts.created_at DESC
    `).all();

    return c.json(posts.map((post: any) => ({
      id: post.id,
      content: post.content,
      created_at: post.created_at,
      user: {
        id: post.user_id,
        name: post.name || "",
        icon: post.icon || null,
      }
    })));
  })

export default posts;
