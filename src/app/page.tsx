"use client";

import Loading from "@/components/Loading";
import Posts from "@/components/Posts";
import { useConnectWallet } from "@/lib/hooks";
import { useState } from "react";

const Page = () => {
  const [user, setUser] = useState();

  useConnectWallet((e: any) => {
    setUser(() => e);
    localStorage.setItem("address", e);
  });

  if (!user || user === undefined) {
    return <Loading />;
  }

  return (
    <div>
      <Posts />
    </div>
  );
};

export default Page;
