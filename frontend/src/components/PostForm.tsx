import { useState } from "react";
import { mockCurrentUser } from "../mocks/user";
import type { PostType } from "../types/post";

type PostFormProps = {
  onPostCreated?: (newPost: PostType) => void;
};

export const PostForm = ({ onPostCreated }: PostFormProps) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { icon: userIcon, id: userId } = mockCurrentUser;

  const handleSubmit = async () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      alert("投稿内容を入力してください。");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: trimmedContent,
          userId: userId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "投稿に失敗しました");
      }

      const newPost = await response.json();
      setContent("");
      
      if (onPostCreated) {
        onPostCreated(newPost);
      }
      
      alert("投稿しました！");
    } catch (error) {
      console.error("Error creating post:", error);
      alert(error instanceof Error ? error.message : "投稿に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-700">
            <img
              src={userIcon || ""}
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
              disabled={!content.trim() || isSubmitting}
            >
              {isSubmitting ? "投稿中..." : "ポストする"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
