"use client";

import { GameState } from "@/lib/types"
import { useModal } from "@/lib/modal_context";

import Image from "next/image";

type BlogButtonProps = {
  onClick: () => void;
  date: Date;
  title: string;
  tagline: string;
  wordCount: number;
  src: string;
  alt: string;
  imgW: number;
  imgH: number;
};

export default function BlogButton({onClick, date, title, tagline, wordCount, src, alt, imgW, imgH}: BlogButtonProps) {
  const { openModal } = useModal()!;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const AVG_NONFICTION_WORDS_PER_MIN = 238;
  
  var min = Math.ceil(wordCount / AVG_NONFICTION_WORDS_PER_MIN);

  return (
    <div className="relative overflow-hidden cursor-pointer shrink-0 h-fit min-h-31.25 flex flex-row">
      <button onClick={onClick} className="cursor-pointer group relative overflow-hidden w-50 min-w-1/2 px-4 py-2 rounded-lg rounded-r-none border-4 border-r-0 border-dark border-double bg-light text-dark flex flex-col items-start">
        <span className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,var(--light)_25%_50%)]" />

        <div className="z-10 flex flex-row items-center gap-1 text-sm">
          <Image className="w-auto h-[1em]" src="/content/panels/blog/button_icon_calendar.png" alt="" width={0} height={0} unoptimized />

          <div>{year}/{month}/{day}</div>
        </div>

        <div className="relative z-10">
          <div className="text-start text-lg font-bold uppercase">{title}</div>

          <span className="absolute origin-left left-0 bottom-0.5 w-full h-0.5 bg-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
        </div>

        <div className="z-10 text-start">{tagline}</div>

        <div className="z-10 mt-auto text-sm flex flex-row gap-1">
          <div>{min} min. read</div>
          <div>//</div>
          <div>{wordCount} words</div>
        </div>
      </button>

      <button onClick={() => openModal(`${title} thumbnail`, <Image className="object-contain pixelated" src={src} alt={alt} fill unoptimized />)} className="cursor-pointer group relative flex-1 overflow-hidden rounded-lg rounded-l-none border-4 border-l-0 border-dark border-double">
        <span className="z-10 absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,transparent_25%_50%)]" />

        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none group-hover:scale-150 transition-transform duration-300 ease-out pixelated" src={src} alt={alt} width={imgW} height={imgH} unoptimized />
      </button>
    </div>
  );
}
