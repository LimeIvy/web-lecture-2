import { useState, useEffect } from "react";
import { LeftSidebar } from "./components/sidebar/LeftSidebar";
import { RightSidebar } from "./components/sidebar/RightSidebar";
import { Header } from "./components/Header";
import { PostForm } from "./components/PostForm";
import Post from "./components/Post";
import type { PostType } from "./types/post";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex min-h-screen justify-center bg-black">
      {/* コンテンツラッパー */}
      <div className="flex w-full max-w-7xl">
        {/* レフトサイドバー */}
        <div className="w-[68px] flex-shrink-0 lg:w-[275px]">
          <LeftSidebar />
        </div>

        {/* メインコンテンツ */}
        <div className="min-h-screen w-full max-w-[600px] border-x border-gray-800">
          <Header title="おすすめ" />
          {/* 投稿フォーム */}
          <PostForm />
          {/* 投稿一覧 */}
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <div className="text-gray-500">読み込み中...</div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center p-8">
              <div className="text-red-500">エラー: {error}</div>
            </div>
          ) : (
            <Post posts={posts} />
          )}
        </div>

        {/* ライトサイドバー - 大画面のみ表示 */}
        <div className="hidden w-[350px] flex-shrink-0 lg:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
