import React from "react";
import Link from "next/link";
import Menu from "./hamburger";
import Mode from "./mode";

function Header() {
  return (
    <div className="">
      <div className="md:container px-8 md:px-0 flex-row flex justify-between text-black dark:text-white bg-white dark:bg-dark md-h-20 h-[125px] items-center">
        <div className="text-lg lg:text-xl font-semibold">NextStep</div>
        <div className="md:flex flex-row gap-7 hidden items-center">
          <Link className="capitalize" href="/blog">
            Blog
          </Link>
          <Link className="capitalize" href="/projects">
            projects
          </Link>
          <Link className="capitalize" href="/about">
            about
          </Link>
          <Link className="capitalize" href="/newsletter">
            newsletter
          </Link>
          <div>
            <Mode />
          </div>
        </div>
        <div className="flex md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
