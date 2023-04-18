import { PostType } from "@/types";
import { useEffect } from "react";

const URL = "http://localhost:3000";

async function useConnectWallet(callback: Function) {
  async function createUser(account: string) {
    const res = await fetch(`${URL}/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: account }),
    });

    return res.json();
  }

  useEffect(() => {
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        callback(accounts[0]);
        createUser(accounts[0]).then((res) => console.log(res));
      })
      .catch((error: any) => {
        alert(`Something went wrong: ${error}`);
      });
  }, []);
}

async function useGetUser(id: string, callback: Function) {
  async function getUser() {
    const res = await fetch(`${URL}/api/users/id/${id}`);
    return res.json();
  }

  useEffect(() => {
    getUser().then((res) => {
      callback(res);
    });
  }, []);
}

async function useGetPosts(callback: Function) {
  async function getPosts() {
    const res = await fetch(`${URL}/api/posts/`);
    return res.json();
  }

  useEffect(() => {
    getPosts().then((res) => {
      callback(res);
    });
  }, []);
}

async function createPost(post: { content: string; authorId: string }) {
  await fetch(`${URL}/api/posts/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: post.content,
      authorId: post.authorId,
    }),
  });
}

export { useConnectWallet, useGetUser, useGetPosts, createPost };
