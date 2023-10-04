import React from "react";

function pageTitle({ title }: { title: string }) {
  return (
    <div className="">
      <div className="w-full border-b border-[#00000034] dark:border-white lg:container"></div>
      <div className="md:container dark:text-white text-black font-bold uppercase lg:text-[218px] md:text-[120px] text-[64px] text-center leading-snug ">
        {title}
      </div>
      <div className="w-full border-t border-[#00000034] dark:border-white lg:container"></div>
    </div>
  );
}

export default pageTitle;
