export type Tab =
    "games"
  | "blog"
  | "resume"
  | "contact"
  | "games_page_bruit"
  | "games_page_dstg"
  | "blog_page_aziabay";

export type GameState = "in-development" | "released"

export type Social = {
  href: string;
  src: string;
  alt: string;
};
