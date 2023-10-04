import React from "react";
import { RecentBlogPosts } from "../../public/data/recent";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  design: "bg-categoryRedBg text-categoryRedText",
  marketing: "bg-categoryBlueBg text-categoryBlueText",
  development: "bg-categoryGreenBg text-categoryGreenText",
  content: "bg-categoryYellowBg text-categoryYellowText",
  technology: "bg-categoryOrangeBg text-categoryOrangeText",
  photography: "bg-categoryCyanBg text-categoryCyanText",
};

function AllPosts() {
  return (
    <section className="text-black dark:text-white container lg:py-[30px]  py-8  ">
      <div className="text-2xl mb-4 md:mb-6 lg:mb-8">All Blog Posts</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-8 mt-auto items-stretch ">
        {RecentBlogPosts.map((post, index) => (
          <div key={index} className="">
            <div className="flex flex-col h-full justify-between gap-6 ">
              <div className="relative h-[200px] w-full ">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col flex-auto  items-stretch justify-between">
                <div className="text-darkPurple text-sm font-semibold mb-3">
                  {post.author} . {post.publishDate}
                </div>
                <div className="text-lg font-semibold mb-1">{post.title}</div>
                <div className="h">
                  <p className=" line-clamp-3">{post.description}</p>
                </div>
                <div className="mt-6 flex flex-row md:gap-3 gap-1 text-sm font-medium">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`rounded-full px-2 py-1 truncate ${
                        categoryColors[category.toLowerCase()] ||
                        "bg-lightGrey text-white"
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllPosts;
