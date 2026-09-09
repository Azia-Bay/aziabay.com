"use client";

import Image from "next/image";

const ICON_SIZE = 48

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  src?: string;
  alt?: string;
};

export default function SidebarButton({ children, onClick, src, alt }: ButtonProps) {
  var pr = (src && alt && "pr-4") || ""
  
  return (
    <button onClick={onClick} className={`group relative overflow-hidden cursor-pointer w-full px-2 py-1 ${pr} rounded-lg border-4 border-black border-double flex flex-row items-center gap-3 bg-white text-black text-lg font-bold uppercase`}>
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(black_0%_25%,white_25%_50%)]" />

      {src && alt && <Image src={src} alt={alt} className="z-10 pixelated" width={ICON_SIZE} height={ICON_SIZE} unoptimized loading="eager" />}

      <div className="z-10 mx-auto group-hover:underline underline-offset-3">
        {children}
      </div>
    </button>
  )
}
