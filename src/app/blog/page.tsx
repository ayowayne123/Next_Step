import React from "react";
import { getPosts } from "../utils/sanity-utils";
import AllPosts from "@/components/allPosts";

async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <AllPosts AllPosts={posts} />
    </div>
  );
}

export default Page;
