import { Hono } from "hono";
import db from "../db/initial";

const posts = new Hono()
  // テスト用: 投稿一覧取得
  .get("/", (c) => {
    const posts = db.prepare("SELECT * FROM posts ORDER BY created_at DESC").all();
    return c.json(posts);
  })

export default posts;
