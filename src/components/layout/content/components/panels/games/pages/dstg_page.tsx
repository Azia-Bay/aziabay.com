"use client";

import Image from "next/image";

import { SITE_AUTHOR } from "@/lib/consts";
import { useModal } from "@/lib/modal_context";

import HoveredDither from "@/components/vfx/hovered_dither";
import HoveredUnderline from "@/components/vfx/hovered_underline";

const TITLE = "Don't Start the Game";

const LINK = "https://theitsybitsyspider.itch.io/dont-start-the-game";

const DESCRIPTION = "Break the company mold, one rule at a time. A short and humorous interactive experience about annoying your co-workers and breaking company rules for the love of the game.";

const GENRES = ["adventure", "comedy"];

const STATUS = "Released";
const DATE = "March 28, 2024";

class Screenshot {
  public src: string;
  public alt: string;

  constructor(src: string, alt: string) {
    this.src = src;
    this.alt = alt;
  }
};

const SCREENSHOTS = [
  new Screenshot(
    "content/panels/games/pages/dstg/gameplay_1.png",
    "A screenshot of Don't Start the Game gameplay. The game's art style consists of 16-bit top-down pixel art. A cartoonish man in a white button-up stands in the middle of an office building floor. Inside the room are two potted plants; a safe; two office desks—complete with file cabinet, computer, and chair; a bulletin board; two office workers standing and speaking to one another; two office workers sitting at the two office desks; three interactable pieces of paper on the floor; and an interactable silver key on the floor. The top-left corner of the screen reads: 'RULES LIST. 1. Don't make Paper Airplanes during work hours. 2. Don't fly Paper Airplanes in your office. 3. Don't fly Paper Airplanes at your co-workers. 4. Don't open the safe.' The top-center of the screen hosts four empty inventory slots. The bottom-left corner of the screen reads: 'Stuck? Click to reset level.'"
  ),
  new Screenshot(
    "content/panels/games/pages/dstg/gameplay_2.png",
    "A screenshot of Don't Start the Game gameplay. An elevator loading screen that reads: A blue Leggo brick has made it into the elevator. Despite its normal appearance, it can send even the strongest person through all seven levels of purgatorial pain with a single step. You shudder."
  )
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
    "Really polished game!",
    "Tryston Minsquero, Grimhook programmer"
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
    <div
      className="scrollbar scroll-smooth overflow-y-auto min-h-0 pr-4 flex flex-col gap-6">
      <div
        id="teaser"
        className="self-center rounded-lg border-4 border-foreground border-double">
        <video
          controls
          preload="metadata"
          className="w-full h-auto max-w-200 rounded-lg">
          <source
            src="content/panels/games/pages/dstg/teaser.mp4"
            type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>

      <a
        id="play-button"
        href={LINK}
        target="_blank"
        className="cursor-pointer self-center relative group overflow-hidden shrink-0 px-8 py-2 rounded-lg border-4 border-background border-double bg-foreground flex items-center">
        <HoveredDither />

        <div
          className="relative z-10 text-background text-center text-2xl font-bold uppercase">
          Play free on itch.io

          <HoveredUnderline
            bottom="bottom-0.5"
            h="h-0.5"
            bgColor="bg-background" />
        </div>
      </a>

      <div
        className="max-xl:flex max-xl:flex-col max-xl:items-center gap-4 xl:grid xl:grid-cols-2 xl:gap-4">
        <div
          id="description"
          className="max-xl:w-fit mb-auto p-12 pt-8 border-4 border-dark bg-light text-dark flex flex-col gap-6">
          <div
            className="self-center w-6 h-6 mb-6 bg-dark rounded-full" />

          <a
            href="#description"
            className="cursor-pointer group self-center">
            <h1
              className="relative text-2xl font-bold">
              {TITLE}

              <HoveredUnderline bottom="bottom-0" h="h-0.5" />
            </h1>
          </a>

          <p
            className="text-xl text-justify">
            {DESCRIPTION}
          </p>

          <i>
            {STATUS} {DATE}
          </i>

          <div
            className="flex flex-row gap-1.5">
            {GENRES.map((genre, index) => (
              <div
                key={index}
                className="px-3 py-1 rounded-sm bg-dark text-light text-sm lowercase">
                {genre}
              </div>
            ))}
          </div>
        </div>

        <div
          id="reviews"
          className="mb-auto flex flex-col max-xl:items-center gap-2 xl:gap-4">
          {REVIEWS.map((review, index) => {
            return <div
              key={index}
              className="max-xl:w-fit px-8 py-6 pt-6 border-4 border-dark bg-light text-dark flex flex-col gap-1">
              <div
                className="self-center w-6 h-6 mb-3 bg-dark rounded-full" />

              <div
                className="text-xl text-justify">
                {review.quote}
              </div>
              
              <div
                className="ml-4 text-sm">
                  &mdash; <i>{review.author}</i>
              </div>
            </div>
          })}
        </div>
      </div>

      <div
        id="screenshots"
        className="mx-4 max-xl:flex max-xl:flex-col max-xl:items-center gap-4 xl:grid xl:grid-cols-2 xl:gap-6">
        {SCREENSHOTS.map((screenshot, index) => {
          return <button
            key={index}
            onClick={
              () => openModal(
                `${TITLE} screenshot ${index + 1}`,
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="object-contain pixelated"
                  fill
                  unoptimized />
              )
            }
            className="cursor-pointer group">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              className="w-auto h-auto group-hover:scale-105 transition-transform duration-300 ease-out pixelated"
              width={0}
              height={0}
              unoptimized />
          </button>
        })}
      </div>

      <div
        className="max-xl:flex max-xl:flex-col max-xl:items-center gap-2 xl:grid xl:grid-cols-2 xl:gap-4">
        <div
          id="credits"
          className="max-xl:w-fit mb-auto p-12 pt-8 border-4 border-dark bg-light text-dark flex flex-col gap-6">
          <div
            className="self-center w-6 h-6 mb-6 bg-dark rounded-full" />

          <a
            href="#credits"
            className="cursor-pointer group self-center">
            <h1
              className="relative text-2xl font-bold">
              Credits

              <HoveredUnderline bottom="bottom-0" h="h-0.5" />
            </h1>
          </a>

          <div
            className="flex flex-col gap-4 sm:gap-2">
            {CREDITS.map((credit, index) => {
              return <div
                key={index}
                className="max-sm:flex max-sm:flex-col items-center gap-2 sm:grid sm:grid-cols-2 sm:gap-8">
                <h3
                  className="text-center sm:text-end text-xl">
                  {credit.category}
                </h3>

                <div
                  className="flex flex-col max-sm:items-center">
                  {credit.names.map((credit, jndex) => {
                    return <div
                      key={jndex}>
                      <div
                        className={credit === SITE_AUTHOR ? "italic" : ""}>
                        {credit}
                      </div>
                    </div>
                  })}
                </div>
              </div>
            })}
          </div>
        </div>

        <div
          id="tech-stack"
          className="max-xl:w-fit mb-auto p-12 pt-8 border-4 border-dark bg-light text-dark flex flex-col gap-6">
          <div
            className="self-center w-6 h-6 mb-6 bg-dark rounded-full" />

          <span>
            Made with&nbsp;
            <a
              href="https://godotengine.org/"
              target="_blank"
              className="cursor-pointer underline underline-offset-3">
              Godot 4.2
            </a>
            .
          </span>

          <span>
            <a
              href="https://github.com/Azia-Bay/DSTG"
              target="_blank"
              className="cursor-pointer underline underline-offset-3">
              View source.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
