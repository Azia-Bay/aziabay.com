"use client";

import HoveredUnderline from "@/components/vfx/hovered_underline";

type BlogSectionProps = {
  id: string;
  title: string;
  maxW?: string;
  children?: React.ReactNode;
}

export default function BlogSection({ id, title, maxW = "", children }: BlogSectionProps) {
  function scrollTo(id: string) {
    const content = document.getElementById(id);
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id={id}
      className={`w-full ${maxW} flex flex-col`}>
      <button
        onClick={() => scrollTo(id)}
        className="cursor-pointer group my-5 py-2 bg-dark">
        <h2
          className="relative w-fit mx-auto text-light text-2xl text-center">
          {title}

          <HoveredUnderline
            bottom="bottom-0.5"
            h="h-0.5"
            bgColor="bg-light" />
        </h2>
      </button>

      {children}
    </div>
  );
}
