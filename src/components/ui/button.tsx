"use client";

import Image from "next/image";

import HoveredDither from "@/components/vfx/hovered_dither";
import HoveredUnderline from "@/components/vfx/hovered_underline";

type ButtonProps = {
  onClick?: () => void;
  href?: string;
  target?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  eager?: boolean;
};

export default function Button({ onClick, href, target, src, alt, children, eager }: ButtonProps) {
  const px = (src && alt && children && "px-2") || "px-1";
  const pr = (src && alt && children && "pr-4") || "";
  
  const icon_size = (children && 48) || 32;
  
  const ele = (
    <button
      onClick={onClick}
      className={`cursor-pointer group relative overflow-hidden w-auto py-1 ${px} ${pr} rounded-lg border-4 border-dark border-double flex flex-row items-center gap-3 bg-light`}>
      <HoveredDither />

      {src && alt &&
        <Image
          src={src}
          alt={alt}
          className="z-10 pixelated"
          width={icon_size}
          height={icon_size}
          unoptimized
          loading={eager ? "eager" : undefined} />
      }

      {children &&
        <span
          className="relative z-10 mx-auto text-dark text-lg font-bold uppercase">
          {children}
          
          <HoveredUnderline />
        </span>
      }
    </button>
  );

  if (!href) {
    return ele;
  }

  return (
    <a
      href={href}
      target={target}>
      {ele}
    </a>
  );
}
