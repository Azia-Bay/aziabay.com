"use client";

import { GameState } from "@/lib/types"
import { useModal } from "@/lib/modal_context";

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
};

export default function GamesButton({ onClick, state, date, title, genres, tagline, src, alt }: GamesButtonProps) {
  const { openModal } = useModal()!;

  const year = date?.getFullYear();
  const month = String((date?.getMonth() || 0) + 1).padStart(2, "0");
  const day = String(date?.getDate()).padStart(2, "0");

  return (
    <div className="relative overflow-hidden shrink-0 min-h-44 flex flex-row">
      <button onClick={onClick} className="cursor-pointer group relative overflow-hidden w-125 px-4 py-2 rounded-lg rounded-r-none border-4 border-r-0 border-background border-double bg-foreground text-background flex flex-col items-start">
        <span className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--background)_0%_25%,var(--foreground)_25%_50%)]" />
        
        <div className="z-10 flex flex-row items-center gap-1 text-sm">
          <Image className="w-auto h-[1em]" src="/content/panels/blog/button_icon_calendar.png" alt="" width={0} height={0} unoptimized />
          <div className="capitalize">{state}</div>
          {date && <div>{year}/{month}/{day}</div>}
        </div>

        <div className="relative z-10">
          <div className="text-lg font-bold uppercase">{title}</div>

          <span className="absolute origin-left left-0 bottom-0.5 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
        </div>

        <div className="z-10 text-start">{tagline}</div>

        <div className="z-10 mt-auto text-sm flex flex-row gap-1">
          {genres.map((genre, index) => (
            <div key={genre} className="flex flex-row gap-1">
              {genre}
              
              {(index !== (genres.length - 1)) && <div>//</div>}
            </div>
          ))}
        </div>
      </button>
      
      <button onClick={() => openModal("Bruit thumbnail", <Image className="max-w-full max-h-full w-auto h-auto pixelated" src={src} alt={alt} width={0} height={0} unoptimized />)} className="cursor-pointer group relative flex-1 overflow-hidden rounded-lg rounded-l-none border-4 border-l-0 border-background border-double">
        <span className="z-10 absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--background)_0%_25%,transparent_25%_50%)]" />

        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-none group-hover:scale-150 transition-transform duration-300 ease-out pixelated" src={src} alt={alt} width={0} height={0} unoptimized loading="eager" />
      </button>
    </div>
  );
}
