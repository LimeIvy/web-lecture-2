import { LeftSidebar } from "./components/sidebar/LeftSidebar";
import { RightSidebar } from "./components/sidebar/RightSidebar";
import { Header } from "./components/Header";
import { PostForm } from "./components/PostForm";
import Post from "./components/Post";
import { mockPosts } from "./mocks/posts";

function App() {
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
          <Post posts={mockPosts} />
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
