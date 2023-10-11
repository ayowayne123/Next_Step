import { Image, PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  publishedAt: Date;
  title: string;
  slug: string;
  desription: string;
  body: PortableTextBlock[];
  author: string;
  mainImage: string;
  url: string;
};
