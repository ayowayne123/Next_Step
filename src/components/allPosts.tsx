import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  design: "bg-categoryRedBg text-categoryRedText",
  marketing: "bg-categoryBlueBg text-categoryBlueText",
  development: "bg-categoryGreenBg text-categoryGreenText",
  content: "bg-categoryYellowBg text-categoryYellowText",
  technology: "bg-categoryOrangeBg text-categoryOrangeText",
  photography: "bg-categoryCyanBg text-categoryCyanText",
};

function AllPosts({ AllPosts }: { AllPosts: any[] }) {
  const formatDate = (date: Date | number): string => {
    if (date instanceof Date) {
      if (!isNaN(date.getTime())) {
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
    } else if (typeof date === "number") {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };

      const dateObj = new Date(date);
      if (!isNaN(dateObj.getTime())) {
        return dateObj.toLocaleDateString("en-US", options);
      } else {
        return "Invalid Timestamp";
      }
    }
    return "Invalid Input";
  };

  console.log(AllPosts[0].body);
  return (
    <section className="text-black dark:text-white container lg:py-[30px]  py-8  ">
      <div className="text-2xl mb-4 md:mb-6 lg:mb-8">All Blog Posts</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-8 mt-auto items-stretch ">
        {AllPosts.map(
          (
            post: {
              mainImage: string | StaticImport;
              title: string;
              author: {
                name: string;
                image: Object;
              };
              slug: string;
              publishedAt: Date;
              description: string;
              categories: any[];
            },
            index: React.Key | null | undefined
          ) => (
            <Link key={index} href={`/blog/${post.slug}`} className="">
              <div className="flex flex-col h-full justify-between gap-6 ">
                <div className="relative h-[200px] w-full ">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col flex-auto  items-stretch justify-between">
                  <div className="text-darkPurple text-sm font-semibold mb-3">
                    {post.author.name} .{" "}
                    {formatDate(new Date(post.publishedAt))}
                  </div>
                  <div className="text-lg font-semibold mb-1">{post.title}</div>
                  <div className="h">
                    <p className=" line-clamp-3">{post.description}</p>
                  </div>
                  <div className="mt-6 flex flex-row md:gap-3 gap-1 text-sm font-medium">
                    {post.categories.map(
                      (
                        category: string,
                        index: React.Key | null | undefined
                      ) => (
                        <span
                          key={index}
                          className={`rounded-full px-2 py-1 truncate ${
                            categoryColors[category.toLowerCase()] ||
                            "bg-lightGrey text-white"
                          }`}
                        >
                          {category}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}

export default AllPosts;
