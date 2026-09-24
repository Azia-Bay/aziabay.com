"use client";

import Image from "next/image";

import { useModal } from "@/lib/modal_context";

export class Shield {
  public category: string;
  public value: string;

  constructor(category: string, value: any) {
    this.category = category;
    this.value = value as string;
  }
};

type BlogBannerProps = {
  src: string;
  alt: string;
  title: string;
  shields: Shield[]
}

export default function BlogBanner({ src, alt, title, shields }: BlogBannerProps) {
  const { openModal } = useModal()!;

  return (
    <button
      id="banner"
      onClick={
        () => openModal(
          `${title} banner`,
          <Image
            src={src}
            alt={alt}
            className="object-contain pixelated"
            fill
            unoptimized />
        )
      }
      className="cursor-pointer relative group overflow-hidden min-w-full max-w-full min-h-1/2 bg-dark flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        className="absolute w-fit h-full max-w-none max-h-none group-hover:scale-125 transition-transform duration-300 ease-out pixelated"
        width={0}
        height={0}
        unoptimized />

      <div
        className="absolute left-0 top-0 m-4 flex flex-col gap-1.5">
        {shields.map((shield) => {
          return (
            <div
              key={shield.category}
              className="w-fit rounded-sm border-2 border-light text-sm flex flex-row">
              <div
                className="px-4 py-1 rounded-sm rounded-r-none border-2 border-r-0 border-dark bg-dark text-light">
                {shield.category}
              </div>

              <div
                className="px-4 py-1 rounded-sm rounded-l-none border-2 border-l-0 border-dark bg-light text-dark">
                {shield.value}
              </div>
            </div>
          );
        })}
      </div>
    </button>
  );
}
