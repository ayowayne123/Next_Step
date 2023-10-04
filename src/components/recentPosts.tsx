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

function Recent() {
  return (
    <section className="text-black dark:text-white container lg:py-[30px]  py-8  ">
      <div className="text-2xl mb-4 md:mb-6 lg:mb-8">Recent Blog Posts</div>
      <div className="grid lg:grid-cols-2 gap-8 pt-8">
        <div className="w-full flex flex-col ">
          <div className="relative h-[228px] w-full mb-8">
            <Image
              src={RecentBlogPosts[0].image}
              alt={RecentBlogPosts[0].title}
              className="object-cover"
              fill
            />
          </div>
          <div className="text-darkPurple text-sm font-semibold mb-3">
            {RecentBlogPosts[0].author} . {RecentBlogPosts[0].publishDate}
          </div>
          <div className="md:text-2xl text-lg font-semibold mb-3">
            {RecentBlogPosts[0].title}
          </div>
          <div className="md:h-12 H-16">
            <p className=" md:line-clamp-2 line-clamp-3">
              {RecentBlogPosts[0].description}
            </p>
          </div>
          <div className="mt-4 flex flex-row gap-3 text-sm font-medium">
            {RecentBlogPosts[0].categories.map((category, index) => (
              <span
                key={index}
                className={`rounded-full px-2 py-1 ${
                  categoryColors[category.toLowerCase()] ||
                  "bg-lightGrey text-white"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:justify-between gap-8">
          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="relative h-[200px] w-full ">
              <Image
                src={RecentBlogPosts[1].image}
                alt={RecentBlogPosts[1].title}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col">
              <div className="text-darkPurple text-sm font-semibold mb-3">
                {RecentBlogPosts[1].author} . {RecentBlogPosts[1].publishDate}
              </div>
              <div className="text-lg font-semibold mb-1">
                {RecentBlogPosts[1].title}
              </div>
              <div className="h-16">
                <p className=" line-clamp-3">
                  {RecentBlogPosts[1].description}
                </p>
              </div>
              <div className="mt-6 flex flex-row gap-3 text-sm font-medium">
                {RecentBlogPosts[1].categories.map((category, index) => (
                  <span
                    key={index}
                    className={`rounded-full px-2 py-1 ${
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
          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="relative h-[200px] w-full ">
              <Image
                src={RecentBlogPosts[2].image}
                alt={RecentBlogPosts[2].title}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col">
              <div className="text-darkPurple text-sm font-semibold mb-3">
                {RecentBlogPosts[2].author} . {RecentBlogPosts[2].publishDate}
              </div>
              <div className="text-lg font-semibold mb-1">
                {RecentBlogPosts[2].title}
              </div>
              <div className="h-16">
                <p className=" line-clamp-3">
                  {RecentBlogPosts[2].description}
                </p>
              </div>
              <div className="mt-6 flex flex-row gap-3 text-sm font-medium lowercase">
                {RecentBlogPosts[2].categories.map((category, index) => (
                  <span
                    key={index}
                    className={`rounded-full px-2 py-1 ${
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
        <div className="w-full grid lg:grid-cols-2 lg:col-span-2 gap-8">
          <div className="relative md:h-[250px]  h-[200px]  w-full mb-8">
            <Image
              src={RecentBlogPosts[3].image}
              alt={RecentBlogPosts[3].title}
              className="object-cover object-top"
              fill
            />
          </div>
          <div>
            <div className="text-darkPurple text-sm font-semibold mb-3">
              {RecentBlogPosts[3].author} . {RecentBlogPosts[3].publishDate}
            </div>
            <div className="md:text-2xl text-lg font-semibold mb-3">
              {RecentBlogPosts[3].title}
            </div>
            <div className="lg:h-32 md:28">
              <p className=" md:line-clamp-4  lg:line-clamp-5 line-clamp-3">
                {RecentBlogPosts[3].description}
              </p>
            </div>
            <div className="mt-4 flex flex-row gap-3 text-sm font-medium">
              {RecentBlogPosts[3].categories.map((category, index) => (
                <span
                  key={index}
                  className={`rounded-full px-2 py-1 ${
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
    </section>
  );
}

export default Recent;
