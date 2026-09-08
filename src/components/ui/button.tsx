"use client";

import Image from "next/image";

const ICON_SIZE = 48

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
};

export default function Button({ children, className, onClick, src, alt }: ButtonProps) {
  var pr = (src && alt && "pr-4") || ""
  
  return (
    <button onClick={onClick} className={`cursor-pointer w-full px-2 py-1 ${pr} rounded-lg border-4 border-black border-double flex flex-row items-center gap-2 bg-white text-black text-lg font-bold uppercase ${className}`}>
      {src && alt && <Image src={src} alt={alt} className="pixelated" width={ICON_SIZE} height={ICON_SIZE} unoptimized />}

      <div className="mx-auto">
        {children}
      </div>
    </button>
  )
}
