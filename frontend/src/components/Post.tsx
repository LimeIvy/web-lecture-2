import { Link } from "react-router-dom";
import { Heart, MessageCircle, Repeat } from "lucide-react";
import type { PostType } from "../types/post";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type PostProps = {
  posts: PostType[];
};

const Post = ({ posts }: PostProps) => {
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex border-b border-gray-800 p-4 transition-colors hover:bg-gray-900/30"
        >
          {/* プロフィールアイコン */}
          <Link to={`/${post.user.id}`} className="mr-4 flex-shrink-0">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-700">
              {post.user.icon ? (
                <img
                  src={post.user.icon}
                  alt={post.user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  {post.user.name.charAt(0)}
                </div>
              )}
            </div>
          </Link>

          {/* 投稿コンテンツ */}
          <Link
            to={`/${post.user.id}/${post.id}`}
            className="block w-full cursor-pointer"
          >
            <div className="w-full">
              <div className="flex items-center">
                <span className="mr-2 font-bold text-white">
                  {post.user.name}
                </span>
                <span className="text-gray-500">
                  {formatTimeAgo(post.createdAt)}
                </span>
              </div>

              <p className="mt-1 whitespace-pre-wrap text-white">
                {post.content}
              </p>

              {/* アクションボタン */}
              <div className="mt-3 flex w-full max-w-sm items-center gap-4 text-gray-500 sm:gap-12">
                <button
                  className="flex items-center transition-colors hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Comment clicked", post.id);
                  }}
                >
                  <MessageCircle size={18} />
                  <span className="ml-1 text-sm">0</span>
                </button>

                <button
                  className="flex items-center transition-colors hover:text-green-500"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Retweet clicked", post.id);
                  }}
                >
                  <Repeat size={18} />
                  <span className="ml-1 text-sm">0</span>
                </button>

                <button
                  className="flex items-center transition-colors hover:text-pink-500"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Like clicked", post.id);
                  }}
                >
                  <Heart size={18} />
                  <span className="ml-1 text-sm">0</span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
