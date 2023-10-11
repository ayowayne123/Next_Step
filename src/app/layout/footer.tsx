import React from "react";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <div className="md:container px-8 md:px-0 md:flex-row flex-col gap-7 flex md:justify-between text-black dark:text-white bg-white dark:bg-dark py-8 items-center">
        <div className="hidden md:flex">© {currentYear}</div>
        <div className="flex-col flex md:flex-row gap-7  items-center">
          <Link className="capitalize" href="https://twitter.com/ayomide_wayne">
            Twitter
          </Link>
          <Link className="capitalize" href="/linkedin">
            LinkedIn
          </Link>
          <Link className="capitalize" href="https://github.com/ayowayne123">
            GitHub
          </Link>
          <Link className="capitalize" href="/newsletter">
            Email
          </Link>
        </div>
        <div className="md:hidden flex">© {currentYear}</div>
      </div>
    </div>
  );
}

export default Footer;
