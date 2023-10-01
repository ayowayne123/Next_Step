"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
  };

  const handleCancel = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
  };
  return (
    <div className="text-2xl">
      <button onClick={handleClick}>
        <AiOutlineMenu />
      </button>
      {open && (
        <div className="fixed inset-0 h-screen  bg-black text-white">
          <div className="h-full flex flex-col items-center justify-center gap-14 relative">
            <div className="text-lg  font-semibold">NextStep</div>
            <div className="flex flex-col items-center justify-center gap-9 text-lg font-normal">
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
              <div>DARK MODE</div>
            </div>
            <div>
              <button onClick={handleCancel}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
