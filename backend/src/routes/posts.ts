import { Hono } from "hono";
import db from "../db/initial";
import type { CreatePost } from "../types";

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
  // 投稿作成
  .post("/", async (c) => {
    try {
      const body = await c.req.json<CreatePost>();
      
      if (!body.content || !body.content.trim()) {
        return c.json({ error: "投稿内容を入力してください" }, 400);
      }
      
      if (!body.userId) {
        return c.json({ error: "ユーザーIDが必要です" }, 400);
      }
      
      const insertPost = db.prepare(
        "INSERT INTO posts (content, user_id, created_at) VALUES (?, ?, ?)"
      );
      
      const createdAt = new Date().toISOString();
      const result = insertPost.run(body.content.trim(), body.userId, createdAt);
      
      // idを取得
      const postId = result.lastInsertRowid;
      
      const newPost = db.prepare(`
        SELECT 
          posts.id,
          posts.content,
          posts.created_at,
          posts.user_id,
          users.name,
          users.icon
        FROM posts 
        LEFT JOIN users ON posts.user_id = users.id 
        WHERE posts.id = ?
      `).get(postId) as {
        id: number;
        content: string;
        created_at: string;
        user_id: string;
        name: string;
        icon: string | null;
      };
      
      return c.json({
        id: newPost.id,
        content: newPost.content,
        created_at: newPost.created_at,
        user: {
          id: newPost.user_id,
          name: newPost.name || "",
          icon: newPost.icon || null,
        }
      }, 201);
    } catch (error) {
      console.error("Error creating post:", error);
      return c.json({ error: "投稿の作成に失敗しました" }, 500);
    }
  });

export default posts;
