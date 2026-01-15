import { Bell, Home, Search, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const getNavItems = (userId: string): NavItem[] => [
  { label: "ホーム", path: "/", icon: Home },
  { label: "話題を検索", path: "/explore", icon: Search },
  { label: "通知", path: "/notifications", icon: Bell },
  { label: "プロフィール", path: `/${userId}`, icon: User },
];
