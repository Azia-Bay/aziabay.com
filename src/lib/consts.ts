import { Social } from "@/lib/types"

export const SITE_NAME = "AZIABAY"

export const DEFAULT_TAB = "games"

export const LINK_TO_LINKEDIN = "https://www.linkedin.com/in/aziabay/"
export const LINK_TO_GITHUB = "https://github.com/Azia-Bay"
export const LINK_TO_ITCHIO = "https://aziabay.itch.io/"

export const LINK_TO_SITE_SOURCE = "https://github.com/Azia-Bay/aziabay.com"

export const SOCIALS: Social[] = [
  {
    href: LINK_TO_LINKEDIN,
    src: "socials/button_icon_linkedin.png",
    alt: "A 1-bit (black & white) pixel art icon of the LinkedIn logo, with a shadow underneath adding three-dimensionality.",
  },
  {
    href: LINK_TO_GITHUB,
    src: "socials/button_icon_github.png",
    alt: "A 1-bit (black & white) pixel art icon of the GitHub logo, with a shadow underneath adding three-dimensionality.",
  },
  {
    href: LINK_TO_ITCHIO,
    src: "socials/button_icon_itchio.png",
    alt: "A 1-bit (black & white) pixel art icon of the itch.io logo, with a shadow underneath adding three-dimensionality.",
  },
];
