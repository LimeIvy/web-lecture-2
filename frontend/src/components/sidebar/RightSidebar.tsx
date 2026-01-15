import { Search } from "lucide-react";

export const RightSidebar = () => {
  return (
    <div className="sticky top-0 h-screen overflow-y-auto">
      {/* 検索バー */}
      <div className="sticky top-0 z-10 bg-black pt-2 pb-4">
        <div className="mx-4 flex items-center rounded-full bg-gray-900 p-3">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="検索"
            className="w-full border-none bg-transparent text-white outline-none"
          />
        </div>
      </div>
    </div>
  );
};
