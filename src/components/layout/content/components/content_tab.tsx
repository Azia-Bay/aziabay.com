"use client";

import { useState } from "react";

import HoveredDither from "@/components/vfx/hovered_dither";
import HoveredUnderline from "@/components/vfx/hovered_underline";

type ContentTabProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function ContentTab({ onClick, children }: ContentTabProps) {
  const [isHovered, setIsHovered] = useState(false);

  function onClickWrapper() {
    setIsHovered(false);
    onClick?.();
  }

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClickWrapper}
      className="cursor-pointer group relative overflow-hidden px-1.5 sm:px-4 py-px sm:py-1 rounded-lg rounded-b-none border-4 border-b-0 border-dark border-double bg-light">
      <HoveredDither
        isHovered={isHovered} />

      {children &&
        <span
          className="relative z-10">
          <span
            className="text-dark text-xs sm:text-lg font-bold uppercase">
            {children}
          </span>

          <HoveredUnderline
            bottom="bottom-0"
            isHovered={isHovered} />
        </span>
      }
    </button>
  );
}
