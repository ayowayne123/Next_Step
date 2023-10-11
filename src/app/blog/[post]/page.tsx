import React from "react";
import { PortableText } from "@portabletext/react";
import { getPost } from "@/app/utils/sanity-utils";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

type Props = {
  params: { post: string };
  value: string;
  isInline: boolean;
};

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const builder = urlBuilder({
    projectId: "mdslvvw4",
    dataset: "production",
  });

  return (
    <Image
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || "image "}
      loading="lazy"
      width={isInline ? 100 : width}
      height={isInline ? 100 : height}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
  },
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);
  console.log(post.body);

  const formatDate = (date: Date) => {
    if (date instanceof Date) {
      if (date instanceof Date && !isNaN(date)) {
        const options: Intl.DateTimeFormatOptions = {
          weekday: "long", // "Friday"
          day: "numeric", // "1"
          month: "short", // "Jan"
          year: "numeric", // "2023"
        };
        return date.toLocaleDateString("en-US", options);
      } else {
        return "Invalid Date";
      }
    }
  };

  return (
    <article className="dark:text-darkGrey  text-black container ">
      <div key={post._id} className="lg:w-3/4 flex flex-col gap-8">
        <div className="text-sm text-darkPurple font-semibold">
          {" "}
          {formatDate(new Date(post.publishedAt))}
        </div>
        <h2 className="text-4xl font-bold  dark:text-white  text-black ">
          {post.title}
        </h2>
        <div className="relative w-full h-[425px]">
          <Image
            src={post.mainImage}
            alt="main Image"
            className="object-cover"
            fill
          />
        </div>
        <div className="portable py-4">
          <PortableText value={post.body} components={components} />
        </div>
      </div>
    </article>
  );
}
