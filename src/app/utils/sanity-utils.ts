import { createClient, groq } from "next-sanity";
import { Post } from "@/app/types/post";
import clientConfig from "@/app/client";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      
      _id,
  publishedAt,
  title,
  "slug": slug.current,
  "categories":categories[]->title,
  body,
 description,
  "author":author->{name,image},
  "mainImage": mainImage.asset->url,
    }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        "categories":categories[]->title,
        body,
       description,
        "author":author->{name,image},
        "mainImage": mainImage.asset->url,
    }`,
    { slug }
  );
}
