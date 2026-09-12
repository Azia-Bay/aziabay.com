import {
  LINK_TO_GITHUB,
  LINK_TO_LINKEDIN,
  LINK_TO_ITCHIO
} from "@/lib/consts";

import Button from "@/components/layout/sidebar/components/sidebar_button"

export default function Socials() {
  return (
    <div className="w-auto h-auto px-14 pb-10 flex flex-row justify-end gap-1">
      <Button href={LINK_TO_LINKEDIN} target="_blank" src="socials/button_icon_linkedin.png" alt="A 1-bit (black & white) pixel art icon of the LinkedIn logo, with a shadow underneath adding three-dimensionality." />

      <Button href={LINK_TO_GITHUB} target="_blank" src="socials/button_icon_github.png" alt="A 1-bit (black & white) pixel art icon of the GitHub logo, with a shadow underneath adding three-dimensionality." />

      <Button href={LINK_TO_ITCHIO} target="_blank" src="socials/button_icon_itchio.png" alt="A 1-bit (black & white) pixel art icon of the itch.io logo, with a shadow underneath adding three-dimensionality." />
    </div>
  );
}
