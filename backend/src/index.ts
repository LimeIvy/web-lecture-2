import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import posts from "./routes/posts";
import profiles from "./routes/profiles";

const app = new Hono();

// CORS設定
app.use(
  "*",
  cors({
    origin: "*",
  })
);

// ルート
app.get("/", (c) => c.json({ message: "Hello!" }));

// APIルート
const routes = app
  .route("/posts", posts)
  .route("/profiles", profiles);

export type AppType = typeof routes;

// サーバー起動
const port = 8080;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
