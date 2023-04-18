"use client";

import { useGetPosts } from "@/lib/hooks";
import { PostType } from "@/types";
import { useState, useEffect } from "react";
import Post from "./Post";
import Loading from "./Loading";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>();

  useGetPosts((e: PostType[]) => {
    setPosts(() => e.reverse());
  });

  if (!posts) {
    return <Loading />;
  }

  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
