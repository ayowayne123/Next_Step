"use client";

import { useSearchParams } from "next/navigation";

const Post = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("slug");

  return (
    <article>
      <h1>{search}</h1>
    </article>
  );
};

export default Post;
