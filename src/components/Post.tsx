import { calcTimeDiff, shortenAddress } from "@/lib/helper";
import { useGetUser } from "@/lib/hooks";
import { PostType, UserType } from "@/types";
import { useState } from "react";

const Post = (props: { post: PostType }) => {
  const { post } = props;

  const [author, setAuthor] = useState<UserType>();

  useGetUser(post.authorId.toString(), (e: UserType) => {
    setAuthor(() => e);
  });

  if (!author) {
    return (
      <div className="inline-block w-full p-8 border-b border-alt">
        <div className="flex gap-3 justify-start items-center">
          <div className="w-14 aspect-square rounded-[50%] bg-alt animate-pulse"></div>
          <div className="bg-alt text-transparent animate-pulse">
            Lorem ipsum dolor
          </div>
          <div className="bg-alt text-transparent animate-pulse">
            0x75
            <span> • </span>
            0m
          </div>
        </div>
        <div className="my-3 bg-alt text-transparent animate-pulse">
          {post.content}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-8 border-b border-alt">
      <div className="flex gap-3 justify-start items-center">
        <div className="w-14 aspect-square rounded-[50%]">
          <img
            src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${author.address}`}
            alt=""
            className="w-full rounded-[50%]"
          />
        </div>
        <h1 className="text-white hover:underline duration-100 cursor-pointer font-interbold">
          @{author.username}
        </h1>
        <p>
          {shortenAddress(author.address)}
          <span> • </span>
          {calcTimeDiff(post.createdAt)}
        </p>
      </div>
      <p className="my-3 text-white">{post.content}</p>
    </div>
  );
};

export default Post;
