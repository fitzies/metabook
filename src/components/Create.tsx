"use client";

import { useCreatePost } from "@/lib/hooks";
import Button from "./Button";
import { useState } from "react";

const Create = (props: { onClose: Function }) => {
  const onSubmit = () => {
    const res = fetch(
      `${URL}/api/users/${localStorage.getItem("address")}`
    ).then((res) => {
      console.log(res);
      useCreatePost({ content: text, authorId: res.address });
      props.onClose();
    });
  };

  const [text, setText] = useState<string>("");

  return (
    <div className="w-screen h-screen bg-black bg-opacity-50 fixed z-50 flex justify-center items-center">
      <div className="w-2/5 h-3/5 bg-primary rounded-xl p-2 flex flex-col relative">
        <div
          className="absolute top-4 left-4 cursor-pointer"
          onClick={() => props.onClose()}
        >
          ✖
        </div>
        <textarea
          onChange={(e) => setText(() => e.target.value)}
          className="w-full h-[80%] bg-transparent px-3 outline-none resize-none font-inter pt-12"
        ></textarea>
        <div className="w-full h-[15%] mt-auto flex justify-end items-center px-4">
          <Button text="Create" type="solid" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Create;
