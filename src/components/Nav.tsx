"use client";

import Link from "next/link";
import {
  FaHome,
  FaHashtag,
  FaUserCircle,
  FaCog,
  FaPlusSquare,
} from "react-icons/fa";
import { useState } from "react";
import Create from "./Create";

const Nav = () => {
  const navs = [
    ["Home", <FaHome className="w-5 h-5" />],
    ["Explore", <FaHashtag className="w-5 h-5" />],
    ["Profile", <FaUserCircle className="w-5 h-5" />],
    ["Create", <FaPlusSquare className="w-5 h-5" />],
    ["Settings", <FaCog className="w-5 h-5" />],
  ];

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const openCreate = (item: string) => {
    if (item === "create") {
      setIsCreating(() => true);
    }
  };

  return (
    <>
      {isCreating ? (
        <Create onClose={() => setIsCreating(() => false)} />
      ) : null}
      <div className="w-1/4 h-screen border-r border-alt flex flex-col py-8 items-center gap-8 [&>*:nth-child(4)]:mt-auto fixed">
        {navs.map((item) => {
          const lowercase = item[0].toString().toLowerCase();

          return (
            <div
              key={lowercase}
              className="w-2/5 flex justify-left items-center hover:bg-secondary duration-150 p-3 rounded-2xl cursor-pointer gap-4 relative"
              onClick={() => openCreate(lowercase)}
            >
              {item[1]}
              <h1 className="font-interbold text-lg">{item[0]}</h1>
              {lowercase != "create" ? (
                <Link
                  className="absolute w-full h-full rounded-2xl"
                  href={`${lowercase != "home" ? lowercase : "/"}`}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Nav;
