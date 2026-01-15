import { useState } from "react";
import { mockCurrentUser } from "../mocks/user";

export const PostForm = () => {
  const [content, setContent] = useState("");
  const { icon: userIcon } = mockCurrentUser;

  const handleSubmit = () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      alert("投稿内容を入力してください。");
      return;
    }

    console.log("投稿内容:", trimmedContent);
    setContent("");
    alert("投稿しました！");
  };

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-700">
            <img
              src={userIcon}
              alt="user icon"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        <div className="mt-1.5 flex-1">
          <textarea
            placeholder="いまどうしてる？"
            className="w-full resize-none bg-transparent text-xl text-white outline-none"
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <button
              className="cursor-pointer rounded-full bg-white px-4 py-1.5 font-bold text-black transition-colors enabled:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-default"
              onClick={handleSubmit}
              disabled={!content.trim()}
            >
              ポストする
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
