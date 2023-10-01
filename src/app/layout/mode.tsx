"use client";
import React from "react";
import { BsCircleFill, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/themeContext";

function Mode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      onClick={toggleTheme}
      className="h-10 w-24 dark:bg-white bg-dark rounded-full flex flex-row items-center justify-between px-4"
    >
      <span className="dark:text-dark text-2xl">
        <BsCircleFill />
      </span>
      <span className="dark:text-dark text-2xl">
        <BsMoon />
      </span>
    </div>
  );
}

export default Mode;
