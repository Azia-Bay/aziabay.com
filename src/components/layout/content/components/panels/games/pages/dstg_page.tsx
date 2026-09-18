"use client";

import { useModal } from "@/lib/modal_context";

import Image from "next/image";

const TITLE = "Don't Start the Game";

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
    <div className="scrollbar scroll-smooth overflow-y-auto h-full min-h-0 flex flex-col gap-12">
      <a href="#title" className="cursor-pointer self-start">
        <h1 id="title" className="text-3xl font-bold underline underline-offset-4">{TITLE}</h1>
      </a>

      <div className="flex flex-col gap-6">
        <a href="#screenshots" className="cursor-pointer self-start">
          <h2 id="screenshots" className="text-2xl underline underline-offset-4">Screenshots</h2>
        </a>

        <div className="ml-8 flex flex-col gap-4">
          {SCREENSHOTS.map((screenshot, index) => {
            return <button key={index} onClick={() => openModal(`${TITLE} screenshot ${index + 1}`, <Image className="object-contain pixelated" src={screenshot.src} alt={screenshot.alt} fill unoptimized />)} className="cursor-pointer group w-3/5">
              <Image className="w-auto h-auto group-hover:scale-105 transition-transform duration-300 ease-out pixelated" src={screenshot.src} alt={screenshot.alt} width={0} height={0} unoptimized />
            </button>
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <a href="#reviews" className="cursor-pointer self-start">
          <h2 id="reviews" className="text-2xl underline underline-offset-4">Reviews</h2>
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

      <div className="flex flex-col gap-6">
        <a href="#credits" className="cursor-pointer self-start">
          <h2 id="credits" className="text-2xl underline underline-offset-4">Credits</h2>
        </a>

        <div className="flex flex-col gap-4">
          {CREDITS.map((credit, index) => {
            return <div key={index} className="flex flex-row items-center gap-12">
              <h3 className="min-w-1/4 text-xl">{credit.category}</h3>

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
