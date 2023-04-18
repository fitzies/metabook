type UserType = {
  id: number;
  username: string;
  address: string;
};

type PostType = {
  authorId: number;
  content?: string;
  id: number;
  published: boolean;
  createdAt: string;
};

export { UserType, PostType };
