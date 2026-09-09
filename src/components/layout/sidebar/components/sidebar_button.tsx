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
    <button onClick={onClick} className="cursor-pointer w-full px-2 py-1 ${pr} rounded-lg border-4 border-black border-double flex flex-row items-center gap-3 bg-white text-black text-lg font-bold uppercase">
      {src && alt && <Image src={src} alt={alt} className="pixelated" width={ICON_SIZE} height={ICON_SIZE} unoptimized loading="eager" />}

      <div className="mx-auto">
        {children}
      </div>
    </button>
  )
}
