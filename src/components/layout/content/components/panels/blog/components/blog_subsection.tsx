"use client";

import HoveredUnderline from "@/components/vfx/hovered_underline";

type BlogSubsectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

export default function BlogSubsection({ id, title, children }: BlogSubsectionProps) {
  function scrollTo(id: string) {
    const content = document.getElementById(id);
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id={id}>
      <button
        onClick={() => scrollTo(id)}
        className="cursor-pointer">
        <h3
          className="relative group w-fit text-xl font-bold py-2">
          {title}

          <HoveredUnderline
            bottom="bottom-2.5"
            h="h-0.5" />
        </h3>
      </button>

      {children}
    </div>
  );
}
