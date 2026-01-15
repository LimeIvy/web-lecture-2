import { Hono } from "hono";
import type { Profile } from "../types";
import db from "../db/initial";

const profiles = new Hono()
  // 自分のプロフィール取得
  .get("/me", (c) => {
    // TODO: 認証機能実装後は、認証されたユーザーIDを使用
    const currentUserId = "user1";
    
    const user = db
      .prepare("SELECT id, name, bio, icon, created_at FROM users WHERE id = ?")
      .get(currentUserId) as {
      id: string;
      name: string;
      bio: string;
      icon: string;
      created_at: string;
    } | undefined;

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    const profile: Profile = {
      id: user.id,
      name: user.name,
      bio: user.bio,
      icon: user.icon,
      createdAt: user.created_at,
    };

    return c.json(profile);
  })

export default profiles;
