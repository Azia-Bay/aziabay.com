"use client"

import { useState } from "react";

type ContentTabProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function ContentTab({ children, onClick }: ContentTabProps) {
  const [isHovered, setIsHovered] = useState(false);

  function onClickHelper() {
    setIsHovered(false);
    onClick?.();
  }

  return (
    <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClickHelper} className="group relative overflow-hidden cursor-pointer max-sm:px-1.5 sm:px-4 max-sm:py-px sm:py-1 rounded-lg rounded-b-none border-4 border-b-0 border-dark border-double bg-light">
      <span className={`absolute inset-0 ${isHovered ? "translate-y-3/4" : "translate-y-full"} transition-transform duration-200 ease-out pixelated bg-size-[1px_1px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,var(--light)_25%_50%)]`} />

      {children &&
        <span className="relative z-10">
          <span className="text-dark max-sm:text-xs sm:text-lg font-bold uppercase">
            {children}
          </span>

          <span className={`absolute left-0 bottom-0 w-full h-px bg-dark ${isHovered ? "scale-x-100" : "scale-x-0"} transition-transform duration-150 ease-out`} />
        </span>
      }
    </button>
  );
}
