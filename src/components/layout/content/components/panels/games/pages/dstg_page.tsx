"use client";

import { useModal } from "@/lib/modal_context";

import Image from "next/image";

const TITLE = "Don't Start the Game";

const CREDITS = [];

const SCREENSHOTS = [
  [ "content/panels/games/pages/dstg/gameplay_1.png", "" ],
  [ "content/panels/games/pages/dstg/gameplay_2.png", "" ]
];

export default function DSTGPage() {
  const { openModal } = useModal()!;

  return (
    <div className="scrollbar scroll-smooth overflow-y-auto w-fit h-full min-h-0 flex flex-col gap-12">
      <h1 className="text-3xl font-bold">{TITLE}</h1>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Screenshots</h2>

        <div className="ml-8 flex flex-col gap-4">
          { SCREENSHOTS.map((screenshot, index) => {
            return <button key={index} onClick={() => openModal(`${TITLE} screenshot ${index + 1}`, <Image className="object-contain pixelated" src={screenshot[0]} alt={screenshot[1]} fill unoptimized />)} className="cursor-pointer group w-3/5">
              <Image className="w-auto h-auto group-hover:scale-105 transition-transform duration-300 ease-out pixelated" src={screenshot[0]} alt={screenshot[1]} width={0} height={0} unoptimized />
            </button>
          })}
        </div>
      </div>
    </div>
  );
}
