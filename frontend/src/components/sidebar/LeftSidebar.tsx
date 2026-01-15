import { Link } from "react-router-dom";
import { Bird } from "lucide-react";
import { getNavItems } from "../../constants/navigation";
import { mockCurrentUser } from "../../mocks/user";

export const LeftSidebar = () => {
  const { id: userId, name: userName, icon: userIcon } = mockCurrentUser;
  const navItems = getNavItems(userId);

  return (
    <div className="sticky top-0 h-screen text-white">
      <div className="flex h-full w-full flex-col justify-between border-r border-gray-800 bg-black">
        <div className="flex flex-col gap-2">
          {/* ロゴ */}
          <Link to="/" className="h-12 w-full p-4">
            <Bird className="h-8 w-8" />
          </Link>

          {/* ナビゲーションリンク */}
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex rounded-full px-2 ${index === 0 ? "mt-10" : ""}`}
              >
                <div className="flex items-center rounded-full px-4 py-3 hover:bg-gray-900">
                  <Icon />
                  <p className="ml-3 hidden lg:block">{item.label}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* アカウント表示 */}
        <div className="mb-3 px-3">
          <button className="flex w-full items-center rounded-full p-3 hover:bg-gray-900">
            <div className="mr-4">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
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
            <div className="hidden text-left lg:block">
              <p className="text-sm font-bold">{userName}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
