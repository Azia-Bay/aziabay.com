"use client";

import { useModal } from "@/lib/modal_context";

import Image from "next/image";

const TITLE = "Don't Start the Game";

const DESCRIPTION = "Break the company mold, one rule at a time. A short and humorous interactive experience about annoying your co-workers and breaking company rules for the love of the game.";

const GENRES = ["adventure", "comedy"];

class Screenshot {
  public src: string;
  public alt: string;

  constructor(src: string, alt: string) {
    this.src = src;
    this.alt = alt;
  }
};

const SCREENSHOTS = [
  new Screenshot("content/panels/games/pages/dstg/gameplay_1.png", ""),
  new Screenshot("content/panels/games/pages/dstg/gameplay_2.png", "")
];

class Review {
  public quote: string;
  public author: string;

  constructor(quote: string, author: string) {
    this.quote = quote;
    this.author = author;
  }
};

const REVIEWS = [
  new Review(
    "Reminds me of the old AdultSwim games from back in the day. Dedicated scream button is an A+ design choice.",
    "Tyler Reed, High On Life 2 artist"
  ),
  new Review(
    "It's just so cute and it made me happy I love it ;-;",
    "boxcat, itch.io fan"
  )
];

class Credit {
  public category: string;
  public names: string[];

  constructor(category: string, names: string[]) {
    this.category = category;
    this.names = names;
  }
};

const CREDITS = [
  new Credit("Lead Programming", ["Azia Bay-Asen", "Kael Madar"]),
  new Credit("Lead Art", ["Azia Bay-Asen"]),
  new Credit("Art", ["Kael Madar", "Sterling Hudgens"]),
  new Credit("Lead Music", ["Ethan Norrid"]),
  new Credit("Lead Writing", ["Aurum"])
];

export default function DSTGPage() {
  const { openModal } = useModal()!;

  return (
    <div className="scrollbar scroll-smooth overflow-y-auto h-full min-h-0 pr-4 flex flex-col gap-12">
      <a id="title" href="#title" className="cursor-pointer group px-4 py-2 bg-foreground text-background flex items-center justify-center">
        <h1 className="relative inline text-3xl font-bold">
          {TITLE}

          <span className="absolute left-0 bottom-0 w-full h-0.75 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
        </h1>
      </a>

      <div className="flex flex-row gap-4">
        <div className="flex-1 flex flex-col gap-6">
          <a id="description" href="#description" className="cursor-pointer group px-4 py-2 bg-foreground text-background flex items-center justify-center">
            <h1 className="relative inline text-2xl font-bold">
              Description

              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
            </h1>
          </a>

          <div className="text-xl">{DESCRIPTION}</div>

          <div className="flex flex-row gap-1.5">
            {GENRES.map((genre, index) => (
              <div key={index} className="px-3 py-1 rounded-sm bg-foreground text-background text-sm lowercase">
                {genre}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <a id="reviews" href="#reviews" className="cursor-pointer group px-4 py-2 bg-foreground text-background flex items-center justify-center">
            <h1 className="relative inline text-2xl font-bold">
              Reviews

              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
            </h1>
          </a>

          <div className="ml-4 flex flex-col gap-4">
            {REVIEWS.map((review, index) => {
              return <div key={index} className="flex flex-col gap-1">
                <div className="text-xl">{review.quote}</div>
                <div className="ml-4 text-sm">&mdash; <i>{review.author}</i></div>
              </div>
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <a id="screenshots" href="#screenshots" className="cursor-pointer group px-4 py-2 bg-foreground text-background flex items-center justify-center">
          <h1 className="relative inline text-2xl font-bold">
            Screenshots

            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
          </h1>
        </a>

        <div className="grid grid-cols-2 gap-4 mx-4">
          {SCREENSHOTS.map((screenshot, index) => {
            return <button key={index} onClick={() => openModal(`${TITLE} screenshot ${index + 1}`, <Image className="object-contain pixelated" src={screenshot.src} alt={screenshot.alt} fill unoptimized />)} className="cursor-pointer group">
              <Image className="w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-out pixelated" src={screenshot.src} alt={screenshot.alt} width={0} height={0} unoptimized />
            </button>
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <a id="credits" href="#credits" className="cursor-pointer group px-4 py-2 bg-foreground text-background flex items-center justify-center">
          <h1 className="relative inline text-2xl font-bold">
            Credits

            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
          </h1>
        </a>

        <div className="flex flex-col gap-4">
          {CREDITS.map((credit, index) => {
            return <div key={index} className="grid grid-cols-2 items-center gap-12">
              <h3 className="text-end text-xl">{credit.category}</h3>

              <div className="flex flex-col">
                {credit.names.map((credit, jndex) => {
                  return <div key={jndex}>{credit}</div>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
