export type PostType = {
  id: string;
  content: string;
  created_at: string;
  user: {
    id: string;
    name: string;
    icon: string | null;
  };
};
