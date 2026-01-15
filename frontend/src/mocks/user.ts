export type MockUser = {
  id: string;
  name: string;
  bio?: string;
  icon: string | null;
};

export const mockCurrentUser: MockUser = {
  id: "user1",
  name: "テストユーザー",
  icon: "/user.png",
  bio: "React と TypeScript で開発しています。",
};

export const mockProfiles: MockUser[] = [
  {
    id: "user1",
    name: "テストユーザー",
    icon: "/user.png",
    bio: "React と TypeScript で開発しています。",
  },
  {
    id: "user2",
    name: "サンプルユーザー",
    icon: null,
    bio: "Web開発が好きです。日々勉強中！",
  },
  {
    id: "user3",
    name: "プログラマー初心者",
    icon: null,
    bio: "プログラミングを始めたばかりです。よろしくお願いします。",
  },
];
