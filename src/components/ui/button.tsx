"use client";

import Image from "next/image";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
};

export default function Button({ children, href, target, onClick, src, alt }: ButtonProps) {
  var px = (src && alt && children && "px-2") || "px-1"
  var pr = (src && alt && children && "pr-4") || ""
  
  var icon_size = (children && 48) || 32
  
  var ele = (
    <button onClick={onClick} className={`group relative overflow-hidden cursor-pointer w-auto py-1 ${px} ${pr} rounded-lg border-4 border-background border-double flex flex-row items-center gap-3 bg-foreground text-background text-lg font-bold uppercase`}>
      <span className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--background)_0%_25%,var(--foreground)_25%_50%)]" />

      {src && alt &&
        <Image src={src} alt={alt} className="z-10 pixelated" width={icon_size} height={icon_size} unoptimized loading="eager" />
      }

      {children &&
        <span className="relative z-10 mx-auto">
          {children}

          <span className="absolute left-0 bottom-1 w-full h-px bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
        </span>
      }
    </button>
  );

  if (!href) return ele;

  return (
    <a href={href} target={target}>
      {ele}
    </a>
  );
}
