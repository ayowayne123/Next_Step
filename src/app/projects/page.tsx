import React from "react";
import Image from "next/image";
import { getPosts } from "../utils/sanity-utils";

export default async function Page() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          {/* <p>Published At: {post.publishedAt}</p> */}
          <p>Slug: {post.slug}</p>
          {/* <p>Author: {post.author._ref}</p> */}
          <p>
            Image:{" "}
            <Image
              src={post.mainImage}
              alt="main Image"
              width={300}
              height={300}
            />
          </p>
          <p>URL: {post.url}</p>
          {/* <ul>{post.body}</ul> */}
        </div>
      ))}
    </div>
  );
}
