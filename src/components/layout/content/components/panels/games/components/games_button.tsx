"use client";

import { GameState } from "@/lib/types";
import { useModal } from "@/lib/modal_context";

import HoveredDither from "@/components/vfx/hovered_dither";
import HoveredUnderline from "@/components/vfx/hovered_underline";

import Image from "next/image";

type GamesButtonProps = {
  onClick: () => void;
  state: GameState,
  date?: Date;
  title: string;
  tagline: string;
  genres: string[];
  src: string;
  alt: string;
  imgW: number;
  imgH: number;
};

export default function GamesButton({ onClick, state, date, title, tagline, genres, src, alt, imgW, imgH }: GamesButtonProps) {
  const { openModal } = useModal()!;

  const year = date?.getFullYear();
  const month = String((date?.getMonth() || 0) + 1).padStart(2, "0");
  const day = String(date?.getDate()).padStart(2, "0");

  return (
    <div
      className="relative overflow-hidden shrink-0 h-fit min-h-44 flex flex-row">
      <button
        onClick={onClick}
        className="cursor-pointer group relative overflow-hidden w-50 min-w-1/2 px-4 py-2 rounded-lg rounded-r-none border-4 border-r-0 border-dark border-double bg-light text-dark flex flex-col items-start gap-2">
        <HoveredDither />
        
        <div
          className="z-10 flex flex-row items-center gap-1 text-sm">
          <Image
            src="/content/panels/blog/button_icon_calendar.png"
            alt="A 1-bit (black & white) pixel art calendar icon."
            className="w-auto h-[1em]"
            width={0}
            height={0}
            unoptimized />
          
          <div
            className="capitalize">
            {state}
          </div>
          
          {date &&
            <div>
              {year}/{month}/{day}
            </div>
          }
        </div>

        <div
          className="relative z-10">
          <div
            className="text-start text-lg font-bold uppercase">
            {title}
          </div>

          <HoveredUnderline
            origin="origin-left"
            bottom="bottom-0.5"
            h="h-0.5" />
        </div>

        <div
          className="z-10 text-start">
          {tagline}
        </div>

        <div
          className="z-10 mt-auto text-sm flex flex-row gap-1">
          {genres.map((genre, index) => (
            <div
              key={genre}
              className="flex flex-row gap-1">
              {genre}
              
              {(index !== (genres.length - 1)) &&
                <div>
                  //
                </div>
              }
            </div>
          ))}
        </div>
      </button>
      
      <button
        onClick={() => openModal(
          `${title} thumbnail`,
          <Image
            src={src}
            alt={alt}
            className="object-contain pixelated"
            fill
            unoptimized />
          )}
        className="cursor-pointer group relative flex-1 overflow-hidden rounded-lg rounded-l-none border-4 border-l-0 border-dark border-double">
        <HoveredDither
          className="z-10"
          fromBottom={false} />

        <Image
          src={src}
          alt={alt}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none max-h-none group-hover:scale-150 transition-transform duration-300 ease-out pixelated"
          width={imgW}
          height={imgH}
          unoptimized
          loading="eager" />
      </button>
    </div>
  );
}
