import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { LeftSidebar } from "../components/sidebar/LeftSidebar";
import { RightSidebar } from "../components/sidebar/RightSidebar";
import Post from "../components/Post";
import { mockPosts } from "../mocks/posts";
import { mockCurrentUser, mockProfiles } from "../mocks/user";

const ProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();

  // プロフィール情報を取得（モックデータから）
  const profile = mockProfiles.find((p) => p.id === userId) || mockCurrentUser;
  const isOwner = profile.id === mockCurrentUser.id;

  // ユーザーの投稿をフィルタリング
  const userPosts = mockPosts.filter((post) => post.user.id === userId);

  return (
    <div className="flex min-h-screen justify-center bg-black">
      <div className="flex w-full max-w-7xl">
        {/* レフトサイドバー */}
        <div className="w-[68px] flex-shrink-0 lg:w-[275px]">
          <LeftSidebar />
        </div>

        {/* メインコンテンツ */}
        <div className="min-h-screen w-full max-w-[600px] border-x border-gray-800">
          {/* プロフィールヘッダー */}
          <div className="sticky top-0 z-10 flex items-center border-b border-gray-800 bg-black/80 p-2 backdrop-blur-md">
            <Link to="/" className="mr-4 rounded-full p-2 hover:bg-gray-800">
              <ArrowLeft className="h-5 w-5 text-white" />
            </Link>
            <div>
              <p className="text-xl font-bold text-white">{profile.name}</p>
              <p className="text-sm text-gray-500">
                {userPosts.length}件のポスト
              </p>
            </div>
          </div>

          {/* プロフィールカバー画像 */}
          <div className="relative h-48 bg-gray-800">
            {/* プロフィール画像 */}
            <div className="absolute -bottom-16 left-4">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-black bg-gray-700">
                {profile.icon ? (
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl text-gray-400">
                    {profile.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* プロフィール情報 */}
          <div className="border-b border-gray-800 px-4 pt-20 pb-4">
            {/* プロフィール編集ボタン */}
            <div className="mb-4 flex justify-end">
              {isOwner ? (
                <button className="rounded-full border border-gray-500 px-4 py-1.5 font-bold text-white hover:bg-gray-900">
                  プロフィールを編集
                </button>
              ) : (
                <button className="rounded-full bg-white px-4 py-1.5 font-bold text-black hover:bg-gray-200">
                  フォローする
                </button>
              )}
            </div>

            <div>
              <p className="text-xl font-bold text-white">{profile.name}</p>
              <p className="mt-3 text-white">{profile.bio}</p>

              {/* 登録日 */}
              <p className="mt-2 flex items-center text-gray-500">
                <CalendarDays className="mr-1 h-4 w-4" />
                2024年1月から利用しています
              </p>

              {/* フォロー・フォロワー */}
              <div className="mt-3 flex items-center space-x-4">
                <p>
                  <span className="font-bold text-white">123</span>{" "}
                  <span className="text-gray-500">フォロー中</span>
                </p>
                <p>
                  <span className="font-bold text-white">456</span>{" "}
                  <span className="text-gray-500">フォロワー</span>
                </p>
              </div>
            </div>
          </div>

          {/* タブメニュー */}
          <div className="flex border-b border-gray-800">
            <button className="flex-1 border-b-4 border-sky-500 py-4 font-bold text-white">
              ポスト
            </button>
            <button className="flex-1 py-4 text-gray-500 hover:bg-gray-900">
              返信
            </button>
            <button className="flex-1 py-4 text-gray-500 hover:bg-gray-900">
              メディア
            </button>
            <button className="flex-1 py-4 text-gray-500 hover:bg-gray-900">
              いいね
            </button>
          </div>

          {/* ポスト一覧 */}
          {userPosts.length > 0 ? (
            <Post posts={userPosts} />
          ) : (
            <div className="p-8 text-center text-gray-500">
              まだ投稿がありません
            </div>
          )}
        </div>

        {/* ライトサイドバー */}
        <div className="hidden w-[350px] flex-shrink-0 lg:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
