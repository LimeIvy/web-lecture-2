export type PostType = {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    icon: string | null;
  };
};
